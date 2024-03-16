import { z } from "zod";

export const RegisterSchema = z.object({
    name: z.string({
      invalid_type_error: "Name must be string"
    }).min(1,{
      message: "Name is required"
    }),
    email: z.string().email({
      message: "Invalid email address"
    }),
    password: z.string().trim().min(8, {
      message: "Minimum 8 character required",
    })
  });

  export const loginSchema = z.object({
    email: z.string({
      invalid_type_error:"invalid email"
    }).email({
      message: "Invalid email address",
    }),
    password: z.string().trim().min(1, {
      message: "Password is required",
    })
  });

