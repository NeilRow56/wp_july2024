import Link from "next/link";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Loader2 } from "lucide-react";
import { Logo } from "./Logo";
import { GetCurrentUserFromMongoDB } from "@/actions/users";
import { currentUser } from "@clerk/nextjs/server";

export default async function Header() {
  await GetCurrentUserFromMongoDB();
  const loggedInUser = await currentUser();
  return (
    <header className="py-4">
      <nav className="container flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        {loggedInUser ? (
          <Button
            variant="outline"
            className="border-orange-400 border"
            asChild
          >
            <Link href="/protected/server">Working papers</Link>
          </Button>
        ) : (
          " "
        )}

        <div className="flex items-center justify-between gap-6">
          <ThemeToggle />

          <SignedOut>
            <SignInButton mode="redirect">
              <Button size="sm">Sign in</Button>
            </SignInButton>
          </SignedOut>
          <ClerkLoaded>
            <UserButton />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="size-8 animate-spin text-slate-400" />
          </ClerkLoading>
        </div>
      </nav>
    </header>
  );
}
