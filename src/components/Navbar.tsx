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

export default function Navbar() {
  return (
    <header className="py-4">
      <nav className="container flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>

        <ul className="flex gap-10 text-sm font-medium items-center">
          <li></li>
          <li>
            <Link href="/protected/server">Protected (server)</Link>
          </li>
          <li>
            <Link href="/protected/client">Protected (client)</Link>
          </li>
          <li>
            <Link href="/api/me">Who am I?</Link>
          </li>
        </ul>

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
