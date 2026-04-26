import { create } from "zustand";
import { createOrg, getOrg } from "../api/orgApi";
import { createDept } from "@/api/departmentApi";

export const useOrgStore = create((set) => ({
  org: [],
  dept:[],
  loading: false,
  error: null,
  initialized: false,

  get: async (credentials) => {
    set({ loading: true, error: null });

    try {
      const res = await getOrg(credentials);
      set({
        org: res.data.orgs,
        loading: false,
        initialized: true,
      });
    } catch (err) {
      set({
        error: err.response?.data?.message || "Failed getting Orgs",
        loading: false,
      });
    }
  },
  addOrg: async (credentials) => {
    set({ loading: true, error: null });

    try {
      const res = await createOrg(credentials);

      set((state) => ({
        org: [...state.org, ...res.data.orgs],
        loading: false,
        initialized: true,
      }));

      return res.data; // ✅ IMPORTANT
    } catch (err) {
      const message = err.response?.data?.message || "Failed creating Org";

      set({
        error: message,
        loading: false,
      });

      return { success: false, message }; // ✅ also return on error
    }
  },
  addDept: async (credentials) => {
    set({ loading: true, error: null });

    try {
      const res = await createDept(credentials);

      set((state) => ({
        dept: [...state.dept, ...res.data.orgs],
        loading: false,
      }));

      return res.data; // ✅ IMPORTANT
    } catch (err) {
      const message = err.response?.data?.message || "Failed creating Org";

      set({
        error: message,
        loading: false,
      });

      return { success: false, message }; // ✅ also return on error
    }
  },
}));
