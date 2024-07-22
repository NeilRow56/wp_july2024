"use server";

import db from "@/lib/db";

import { currentUser } from "@clerk/nextjs/server";
import { User } from "@prisma/client";

import * as z from "zod";

import { revalidatePath } from "next/cache";
import { CreateClientSchema, UpdateClientSchema } from "@/schemas/client";

export const createClient = async (
  values: z.infer<typeof CreateClientSchema>
) => {
  const validatedFields = CreateClientSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const user = await currentUser();

  if (!user) {
    return null;
  }

  const { email, name, colorScheme, currency } = validatedFields.data;

  //check if client already exists

  await db.client.create({
    data: {
      userId: user?.id,
      name,
      email,
      colorScheme,
      currency,
    },
  });

  return { success: "Registration successful!" };
};

// export async function updateUser(values: z.infer<typeof UpdateClientSchema>) {
//     const clientId = await getUserId()
//     const validatedFields = UpdateClientSchema.safeParse(values)

//     if (!validatedFields.success) {
//       return { error: 'Invalid fields!' }
//     }

//     const { email, name,  colorScheme, currency } =
//       validatedFields.data

//     try {
//       await db.client.update({

//         where: {
//           id: clientId,
//         },
//         data: {
//           email,
//           name,
//           colorScheme,
//           currency,
//         },
//       })
//       revalidatePath('/protected/server')
//       return { success: 'Updated Client.' }
//     } catch (error) {
//       return { message: 'Database Error: Failed to Update Client.' }
//     }
//   }
