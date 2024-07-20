" use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { buttonVariants } from "./ui/button";

interface NavbarItemProps {
  label: string;
  href: string;
}

const NavbarItem = ({ label, href }: NavbarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <div className="relative flex items-center">
      <Link
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "w-full justify-start text-lg text-muted-foreground hover:text-foreground",
          isActive && "text-foreground font-bold"
        )}
        href={href}
      >
        {label}
      </Link>
      {isActive && (
        <div className="absolute -bottom-[2px] left-1/2 hidden h-[2px] w-[80%] -translate-x-1/2 rounded-xl bg-foreground md:block" />
      )}
    </div>
  );
};

export default NavbarItem;
