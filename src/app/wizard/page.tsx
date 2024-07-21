import { GetCurrentUserFromMongoDB } from "@/actions/users";
import { redirect } from "next/navigation";
import React from "react";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { CurrencyComboBox } from "./_components/CurrencyComboBox";

const WizardPage = async () => {
  const user = await GetCurrentUserFromMongoDB();

  if (!user) {
    redirect("/sign-in");
  }
  return (
    <div className="container flex max-w-2xl flex-col items-center justify-between gap-4">
      <div>
        <h1 className="text-center text-3xl">
          Welcome,{" "}
          <span className="ml-2 font-bold">{user.data?.firstName}! 🙋‍♂️</span>
        </h1>
        <h2 className="mt-4 text-center text-base text-muted-foreground">
          Let &apos;s get started by setting up the currency
        </h2>
        <h3 className="mt-2 text-center text-sm text-muted-foreground">
          You can change these settings at any time
        </h3>
      </div>

      <Separator />
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Currency</CardTitle>
          <CardDescription>
            Set your default currency for transactions
          </CardDescription>
          <CardContent>
            <CurrencyComboBox />
          </CardContent>
        </CardHeader>
      </Card>
      <Separator />
      <Button className="w-full" asChild>
        <Link href={"/protected/server"} className="">
          I&apos;m done! Take me to the dashboard
        </Link>
      </Button>
      <div className="mt-8">
        <Logo />
      </div>
    </div>
  );
};

export default WizardPage;
