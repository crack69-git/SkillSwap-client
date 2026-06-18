"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// CHOOSE THIS CORRECT IMPORT BLOCK:
import { Button, Input } from "@heroui/react";

// Lucide search icon helper
const SearchIcon = (props) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export default function AppNavbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const linkStyles = (path) =>
    pathname === path
      ? "text-[#6D28D9] font-semibold border-b-2 border-[#6D28D9] pb-1 inline-block"
      : "text-gray-600 hover:text-[#6D28D9] transition-colors pb-1 inline-block";

  return (
    // Instead of <Navbar>, HeroUI exposes a standard HTML <nav> wrapping layout or a direct custom config
    <nav className="sticky top-0 z-40 w-full max-w-full bg-white border-b border-gray-100 py-3 px-6 h-16 flex items-center justify-between">
      {/* Left Core Brand Info */}
      <div className="flex items-center gap-8">
        <div>
          <Link
            href="/"
            className="text-2xl font-bold text-[#6D28D9] tracking-tight"
          >
            SkillSwap
          </Link>
        </div>

        <div className="hidden sm:flex gap-6 items-center">
          <div className="list-none">
            <Link href="/browse-tasks" className={linkStyles("/browse-tasks")}>
              Browse Tasks
            </Link>
          </div>
          <div className="list-none">
            <Link
              href="/browse-freelancers"
              className={linkStyles("/browse-freelancers")}
            >
              Browse Freelancers
            </Link>
          </div>
        </div>
      </div>

      {/* Right Search and Dynamic Actions */}
      <div className="flex items-center gap-4">
        <div className="hidden md:flex min-w-[240px] lg:min-w-[280px] list-none">
          <Input
            classNames={{
              base: "max-w-full h-10",
              mainWrapper: "h-full",
              input: "text-sm placeholder:text-gray-400 pl-1",
              inputWrapper:
                "h-full font-normal text-default-500 bg-[#F1F5F9]/60 hover:bg-[#F1F5F9]/80 border border-gray-200/80 rounded-full px-4",
            }}
            placeholder="Search for skills..."
            size="sm"
            startContent={
              <SearchIcon className="text-gray-400 stroke-[2.5]" size={18} />
            }
            type="search"
          />
        </div>

        <div className="hidden sm:flex list-none">
          <Link
            href="/login"
            className="text-gray-600 hover:text-[#6D28D9] font-medium transition-colors text-sm"
          >
            Login
          </Link>
        </div>

        <div className="list-none">
          <Button
            as={Link}
            href="/register"
            className="bg-[#6D28D9] text-white font-semibold text-sm px-5 py-2 rounded-xl hover:bg-[#5B21B6] transition-all shadow-sm"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
}
