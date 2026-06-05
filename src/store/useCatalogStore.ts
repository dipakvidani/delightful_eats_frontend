import { create } from "zustand";
import { api } from "../api/client";

export interface Category {
  id: number;
  slug: string;
  name: string;
  description?: string;
  image?: string;
}

export interface ProductVariant {
  id: number;
  product_id: number;
  name: string;
  price_adjustment: number;
  stock: number;
}

export interface ProductGallery {
  id: number;
  product_id: number;
  image_url: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  category_id: number;
  category_name?: string;
  description?: string;
  image?: string;
  stock: number;
  is_active: boolean;
  is_featured: boolean;
  is_seasonal: boolean;
  tags?: string;
  status: "draft" | "active" | "archived";
  variants: ProductVariant[];
  gallery: ProductGallery[];
}

interface CatalogState {
  categories: Category[];
  products: Product[];
  currentProduct: Product | null;
  totalProducts: number;
  totalPages: number;
  currentPage: number;
  isLoading: boolean;
  fetchCategories: () => Promise<void>;
  fetchProducts: (params?: {
    categoryId?: number;
    search?: string;
    isFeatured?: boolean;
    isSeasonal?: boolean;
    limit?: number;
    page?: number;
    sortBy?: string;
    sortOrder?: "ASC" | "DESC";
  }) => Promise<void>;
  fetchProductById: (id: number) => Promise<Product | null>;
  createProduct: (payload: any) => Promise<void>;
  updateProduct: (id: number, payload: any) => Promise<void>;
  deleteProduct: (id: number) => Promise<void>;
}

export const useCatalogStore = create<CatalogState>((set) => ({
  categories: [],
  products: [],
  currentProduct: null,
  totalProducts: 0,
  totalPages: 1,
  currentPage: 1,
  isLoading: false,

  fetchCategories: async () => {
    try {
      const { data } = await api.get("/products/categories");
      set({ categories: data.data });
    } catch (err) {}
  },

  fetchProducts: async (params = {}) => {
    set({ isLoading: true });
    try {
      const { data } = await api.get("/products", { params });
      set({
        products: data.data,
        totalProducts: data.meta.total,
        totalPages: data.meta.totalPages,
        currentPage: data.meta.page,
        isLoading: false,
      });
    } catch (err) {
      set({ isLoading: false });
    }
  },

  fetchProductById: async (id) => {
    set({ isLoading: true, currentProduct: null });
    try {
      const { data } = await api.get(`/products/${id}`);
      set({ currentProduct: data.data, isLoading: false });
      return data.data;
    } catch (err) {
      set({ isLoading: false });
      return null;
    }
  },

  createProduct: async (payload) => {
    set({ isLoading: true });
    try {
      await api.post("/products", payload);
      set({ isLoading: false });
    } catch (err) {
      set({ isLoading: false });
      throw err;
    }
  },

  updateProduct: async (id, payload) => {
    set({ isLoading: true });
    try {
      await api.put(`/products/${id}`, payload);
      set({ isLoading: false });
    } catch (err) {
      set({ isLoading: false });
      throw err;
    }
  },

  deleteProduct: async (id) => {
    set({ isLoading: true });
    try {
      await api.delete(`/products/${id}`);
      set({ isLoading: false });
    } catch (err) {
      set({ isLoading: false });
      throw err;
    }
  }
}));
