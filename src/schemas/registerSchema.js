// schemas/registerSchema.js
import { z } from "zod";

export const registerSchema = z.object({
  role: z.enum(["admin", "student", "staff"]),
  fname: z.string().min(2, "First name required"),
  lname: z.string().min(2, "Last name required"),
  email: z.email("Invalid email"),
  password: z.string().min(8, "Minimum 8 characters"),
});
