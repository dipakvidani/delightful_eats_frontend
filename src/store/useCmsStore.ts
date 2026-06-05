import { create } from "zustand";
import { api } from "../api/client";

export interface CmsSetting {
  [key: string]: Record<string, string>;
}

export interface Testimonial {
  id: number;
  name: string;
  role?: string;
  company?: string;
  avatar?: string;
  rating: number;
  comment: string;
}

export interface Faq {
  id: number;
  question: string;
  answer: string;
  category?: string;
  sort_order: number;
}

interface CmsState {
  settings: Record<string, Record<string, string>> | null;
  testimonials: Testimonial[];
  faqs: Faq[];
  isLoading: boolean;
  fetchSettings: () => Promise<void>;
  fetchTestimonials: () => Promise<void>;
  fetchFaqs: () => Promise<void>;
  submitContactForm: (values: { name: string; email: string; message: string }) => Promise<void>;
}

export const useCmsStore = create<CmsState>((set) => ({
  settings: null,
  testimonials: [],
  faqs: [],
  isLoading: false,

  fetchSettings: async () => {
    set({ isLoading: true });
    try {
      const { data } = await api.get("/cms/settings");
      set({ settings: data.data, isLoading: false });
    } catch {
      set({ isLoading: false });
    }
  },

  fetchTestimonials: async () => {
    set({ isLoading: true });
    try {
      const { data } = await api.get("/cms/testimonials");
      set({ testimonials: data.data, isLoading: false });
    } catch {
      set({ isLoading: false });
    }
  },

  fetchFaqs: async () => {
    set({ isLoading: true });
    try {
      const { data } = await api.get("/cms/faqs");
      set({ faqs: data.data, isLoading: false });
    } catch {
      set({ isLoading: false });
    }
  },

  submitContactForm: async (values) => {
    await api.post("/contacts", values);
  }
}));
