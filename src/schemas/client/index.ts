import * as z from "zod";

export const ClientSchema = z.object({
  id: z.string(),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  name: z.string().min(1, {
    message: "Please enter your name",
  }),

  colorScheme: z.string().optional(),
  currency: z.string().optional(),
});

export const CreateClientSchema = ClientSchema.omit({ id: true });
export const UpdateClientSchema = ClientSchema;
export const DeleteClientSchema = ClientSchema.pick({ id: true });

export type CreateClientValues = z.infer<typeof CreateClientSchema>;
export type UpdateClientValues = z.infer<typeof UpdateClientSchema>;
export type DeleteClientValues = z.infer<typeof DeleteClientSchema>;
