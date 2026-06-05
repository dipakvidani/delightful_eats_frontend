import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api/v1",
  withCredentials: true // Important for cookies (CSRF and Refresh tokens)
});

// CSRF Utility
function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
  return null;
}

api.interceptors.request.use((config) => {
  // 1. Inject Bearer Access Token
  const token = localStorage.getItem("delightful_eats_token");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // 2. Inject CSRF Token from Cookie
  const csrfToken = getCookie("csrf_token");
  if (csrfToken && config.headers) {
    config.headers["x-csrf-token"] = csrfToken;
  }

  return config;
});

// Interceptor to handle expired access tokens and auto-refresh
let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry && originalRequest.url !== "/auth/login" && originalRequest.url !== "/auth/refresh") {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return api(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const response = await axios.post(
          `${api.defaults.baseURL}/auth/refresh`,
          {},
          { withCredentials: true }
        );

        const { accessToken } = response.data.data;
        localStorage.setItem("delightful_eats_token", accessToken);
        
        api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;

        processQueue(null, accessToken);
        isRefreshing = false;
        
        return api(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        isRefreshing = false;
        
        // Log out user
        localStorage.removeItem("delightful_eats_token");
        window.dispatchEvent(new Event("auth-session-expired"));
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
