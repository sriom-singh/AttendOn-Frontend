// store/useAuthStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { loginUser, registerUser, getMe, logoutUser } from "../api/authApi";

export const useAuthStore = create((set) => ({
  user: null,
  loading: false,
  error: null,
  initialized: false, 
  login: async (credentials) => {
    set({ loading: true, error: null });

    try {
      const res = await loginUser(credentials);
      set({
        user: res.data.user,
        loading: false,
        initialized: true,
      });
    } catch (err) {
      set({
        error: err.response?.data?.message || "Login failed",
        loading: false,
      });
    }
  },

  register: async (data) => {
    set({ loading: true, error: null });

    try {
      await registerUser(data);
      set({ loading: false, initialized: true, });
      return { success: true };
    } catch (err) {
      set({
        error: err.response?.data?.message || "Register failed",
        loading: false,
      });
      return { success: false };
    }
  },

  fetchUser: async () => {
    set({ loading: true });

    try {
      const res = await getMe();
      set({
        user: res.data.user,
        loading: false,
        initialized: true,
      });
    } catch {
      set({
        user: null,
        loading: false,
      });
    }
  },

  logout: async () => {
    await logoutUser();
    set({ user: null });
  },
}));
