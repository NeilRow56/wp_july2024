import { GetCurrentUserFromMongoDB } from "@/actions/users";
import db from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const user: any = await GetCurrentUserFromMongoDB();

  console.log(user);

  if (!user) {
    redirect("/sign-in");
  }

  let userSettings = await db.userSettings.findFirst({
    where: {
      userId: user.data?.id,
    },
  });

  if (!userSettings) {
    userSettings = await db.userSettings.create({
      data: {
        userId: user.data?.id,
        currency: "GBP",
      },
    });
  }

  // Revalidate the home page that uses the user currency
  revalidatePath("front-end//dashboard");
  return Response.json(userSettings);
}
