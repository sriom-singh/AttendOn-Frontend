import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
import { useAuthStore } from "@/store/useAuthStore";
import { Navigate } from "react-router-dom";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

