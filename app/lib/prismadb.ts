import { PrismaClient } from "@prisma/client";

export const db = global.prismadb || new PrismaClient();
if (process.env.NODE_ENV === 'production') global.prismadb = db;
