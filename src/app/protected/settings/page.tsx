import SettingsForm from "@/components/settings/SettingsForm";
import { currentUser } from "@clerk/nextjs/server";

import { notFound } from "next/navigation";

export default async function SettingsPage() {
  const user = await currentUser();

  if (!user) {
    notFound();
  }

  return (
    <div className="flex flex-col  gap-8">
      <div className="flex items-center px-2">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl text-primary md:text-4xl">Settings</h1>
          <p className="text-lg text-muted-foreground">Your Profile Settings</p>
        </div>
      </div>

      <div className="flex w-full  items-center justify-center gap-4">
        <SettingsForm />
      </div>
    </div>
  );
}
