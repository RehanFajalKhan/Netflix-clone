"use server";
import {RegisterSchema} from '@/schema'
import { State } from '../definition';

export async function createUser(prevState: State, formaData: FormData) {
  const validatedFields = RegisterSchema.safeParse({
    name: formaData.get("name"),
    email: formaData.get("email"),
    password: formaData.get("password"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors
    };
  }
  const { name, email, password } = validatedFields.data;
  console.log(name, email, password);
  return {
    message: "Missing Fields. Failed to Create User."
  };
}
