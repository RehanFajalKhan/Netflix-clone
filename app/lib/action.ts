"use server";
import { z } from "zod";

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
  };
  message?: string | null;
};

const RegisterSchema = z.object({
  name: z.string({
    invalid_type_error: "Name must be string"
  }).min(1,{
    message: "Name is required"
  }),
  email: z.string().email({
    message: "Invalid email address",
  }),
  password: z.string().trim().min(8, {
    message: "Minimum 8 character required",
  })
});

export async function createUser(prevState: State, formaData: FormData) {
  const validatedFields = RegisterSchema.safeParse({
    name: formaData.get("name"),
    email: formaData.get("userEmail"),
    password: formaData.get("password"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create User."
    };
  }
  const { name, email, password } = validatedFields.data;
  console.log(name, email, password);
}
