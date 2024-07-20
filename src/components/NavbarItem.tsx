" use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { buttonVariants } from "./ui/button";

interface NavbarItemProps {
  label: string;
  href: string;
  onClick?: () => void;
}

const NavbarItem = ({ label, href, onClick }: NavbarItemProps) => {
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
    </div>
  );
};

export default NavbarItem;
