// schemas/registerSchema.js
import { z } from "zod";

export const registerSchema = z.object({
  role: z.enum(["admin", "student", "staff"]),
  fname: z.string().min(2, "First name required"),
  lname: z.string().min(2, "Last name required"),
  email: z.email("Invalid email"),
  password: z.string().min(8, "Minimum 8 characters"),
});

export const orgSchema = z.object({
  name: z.string().min(2, "Org name is required"),
  description: z.string(10, "Min 10 characters required"),
  logo: z.string().optional(),
  contactEmail: z.email("Invalid email"),
  createdBy: z.string("User Id required"),
});

export const departmentSchema = z.object({
  name: z.string().min(2, "Org name is required"),
  description: z.string(10, "Min 10 characters required"),
  code: z.string(4, "Department code is required"),
  organizationId: z.string("Organization Id required"),
  headOfDept: z.string().optional(),
  createdBy: z.string("User Id required"),
});


