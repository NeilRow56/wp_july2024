import { GetCurrentUserFromMongoDB } from "@/actions/users";
import { currentUser } from "@clerk/nextjs/server";

export default async function Page() {
  const user = await currentUser();
  await GetCurrentUserFromMongoDB();

  return <div className="">Dashboard Page</div>;
}
