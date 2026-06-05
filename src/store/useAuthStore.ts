import { create } from "zustand";
import { api } from "../api/client";

export interface User {
  id: number;
  name: string;
  email: string;
  role: "super_admin" | "admin" | "manager" | "staff" | "customer";
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: Record<string, string>) => Promise<User>;
  register: (values: Record<string, string>) => Promise<User>;
  logout: () => Promise<void>;
  checkSession: () => Promise<User | null>;
}

const TOKEN_KEY = "delightful_eats_token";
const USER_KEY = "delightful_eats_user";

function readStoredUser(): User | null {
  try {
    const stored = localStorage.getItem(USER_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

export const useAuthStore = create<AuthState>((set) => {
  // Listen for session expiry from axios client
  if (typeof window !== "undefined") {
    window.addEventListener("auth-session-expired", () => {
      set({ user: null, token: null, isAuthenticated: false });
    });
  }

  return {
    user: readStoredUser(),
    token: localStorage.getItem(TOKEN_KEY),
    isAuthenticated: Boolean(localStorage.getItem(TOKEN_KEY)),
    isLoading: false,

    login: async (credentials) => {
      set({ isLoading: true });
      try {
        const { data } = await api.post("/auth/login", credentials);
        const { user, accessToken } = data.data;
        
        localStorage.setItem(TOKEN_KEY, accessToken);
        localStorage.setItem(USER_KEY, JSON.stringify(user));
        
        set({ user, token: accessToken, isAuthenticated: true, isLoading: false });
        return user;
      } catch (err) {
        set({ isLoading: false });
        throw err;
      }
    },

    register: async (values) => {
      set({ isLoading: true });
      try {
        const { data } = await api.post("/auth/register", values);
        const { user, accessToken } = data.data;

        localStorage.setItem(TOKEN_KEY, accessToken);
        localStorage.setItem(USER_KEY, JSON.stringify(user));

        set({ user, token: accessToken, isAuthenticated: true, isLoading: false });
        return user;
      } catch (err) {
        set({ isLoading: false });
        throw err;
      }
    },

    logout: async () => {
      set({ isLoading: true });
      try {
        await api.post("/auth/logout");
      } catch (e) {
        // Continue
      }
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
      set({ user: null, token: null, isAuthenticated: false, isLoading: false });
    },

    checkSession: async () => {
      const token = localStorage.getItem(TOKEN_KEY);
      if (!token) {
        set({ user: null, token: null, isAuthenticated: false });
        return null;
      }

      set({ isLoading: true });
      try {
        const { data } = await api.get("/auth/me");
        const { user } = data.data;
        localStorage.setItem(USER_KEY, JSON.stringify(user));
        set({ user, isAuthenticated: true, isLoading: false });
        return user;
      } catch (err) {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(USER_KEY);
        set({ user: null, token: null, isAuthenticated: false, isLoading: false });
        return null;
      }
    }
  };
});
