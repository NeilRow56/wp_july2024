"use client";
import React, { useState } from "react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { useMedia } from "react-use";
import { Logo } from "./Logo";
import NavbarItem from "./NavbarItem";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Loader2, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { usePathname, useRouter } from "next/navigation";

const ExpenseTrackerNavbar = () => {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
    </>
  );
};

const items = [
  {
    href: "/protected/server",
    label: "Dashboard",
  },

  {
    href: "/protected/transactions",
    label: "Transactions",
  },
  {
    href: "/protected/manage",
    label: "Manage",
  },
];

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useMedia("(max-width: 1024px)", false);

  const onClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };
  return (
    <div className="block border-separate bg-background md:hidden">
      <nav className="container flex  items-center justify-between px-8">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger>
            <div className=" rounded-lg border-none bg-white/10 font-normal text-white outline-none transition hover:bg-white/20 hover:text-white focus:bg-white/30 focus-visible:ring-transparent focus-visible:ring-offset-0">
              <Menu className="size-8 text-orange-500 mt-4" />
            </div>
          </SheetTrigger>
          <SheetContent side="left" className="px-2 w-[400px] sm:w-[600px]">
            <div className="flex h-[80px] min-h-[60px] items-center gap-x-4">
              <Logo />

              <div className="flex items-center gap-2">
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
            </div>
            <div className="flex flex-col gap-y-2 pt-4">
              {items.map((item) => (
                <Button
                  key={item.href}
                  variant={item.href === pathname ? "secondary" : "ghost"}
                  onClick={() => onClick(item.href)}
                  className="w-full justify-start"
                >
                  {item.label}
                </Button>
              ))}
            </div>
            <SheetHeader>
              <SheetTitle>
                <VisuallyHidden.Root>
                  mobile menu - required for dialog - but hidden
                </VisuallyHidden.Root>
              </SheetTitle>
              <SheetDescription>
                <VisuallyHidden.Root>
                  mobile menu required for dialog - but hidden
                </VisuallyHidden.Root>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}

function DesktopNavbar() {
  return (
    <div className="hidden border-seperate border-none bg-background md:block">
      <nav className="container flex items-center justify-between px-8">
        <div className="flex h-[70px] min-h-[60px] items-center gap-x-4">
          <Logo />
          <div className="h-full flex">
            {items.map((item) => (
              <NavbarItem
                key={item.label}
                href={item.href}
                label={item.label}
              />
            ))}
          </div>
        </div>
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
    </div>
  );
}

export default ExpenseTrackerNavbar;
