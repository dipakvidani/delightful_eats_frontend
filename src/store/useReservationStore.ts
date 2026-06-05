import { create } from "zustand";
import { api } from "../api/client";

export interface ReservationSetting {
  id: number;
  max_guests_per_slot: number;
  slot_duration_minutes: number;
  opening_hours: string;
}

export interface Reservation {
  id: number;
  guest_name: string;
  guest_email: string;
  guest_phone: string;
  guests_count: number;
  reservation_time: string;
  status: "pending" | "confirmed" | "cancelled" | "seated" | "completed";
  special_requests?: string;
}

interface ReservationState {
  settings: ReservationSetting | null;
  reservations: Reservation[];
  isChecking: boolean;
  isSubmitting: boolean;
  checkAvailability: (time: string, guests: number) => Promise<{ available: boolean; reason?: string }>;
  createReservation: (payload: Omit<Reservation, "id" | "status">) => Promise<Reservation>;
  fetchSettings: () => Promise<void>;
}

export const useReservationStore = create<ReservationState>((set) => ({
  settings: null,
  reservations: [],
  isChecking: false,
  isSubmitting: false,

  fetchSettings: async () => {
    try {
      const { data } = await api.get("/reservations/settings");
      set({ settings: data.data });
    } catch {}
  },

  checkAvailability: async (time, guests) => {
    set({ isChecking: true });
    try {
      const { data } = await api.get("/reservations/availability", {
        params: { time, guests }
      });
      set({ isChecking: false });
      return data.data;
    } catch (err: any) {
      set({ isChecking: false });
      return {
        available: false,
        reason: err.response?.data?.message || "Error validating slot capacity"
      };
    }
  },

  createReservation: async (payload) => {
    set({ isSubmitting: true });
    try {
      const { data } = await api.post("/reservations", payload);
      set({ isSubmitting: false });
      return data.data;
    } catch (err) {
      set({ isSubmitting: false });
      throw err;
    }
  }
}));
