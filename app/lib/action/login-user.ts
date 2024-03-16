"use server";
import {loginSchema} from '@/schema'
import { State } from '../definition';

export async function loginUser(prevState: State, formaData: FormData) {
  const validatedFields = loginSchema.safeParse({
    email: formaData.get("email"),
    password: formaData.get("password"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors
    };
  }
  const { email, password } = validatedFields.data;
  console.log(email, password);
  return {
    message: "Missing Fields. Failed to Create User."
  };
}
