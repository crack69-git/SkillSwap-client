"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Separator } from "@heroui/react";

import Link from "next/link";
import React from "react";

const NavbarUser = () => {
  const { data } = authClient.useSession();

  return (
    <div className="border-b py-4">
      <div className="w-11/12 mx-auto flex items-center justify-between ">
        <div className="flex items-center gap-4">
          <Link href="/">
            <p className="text-2xl font-bold text-blue-600">SkillSwap</p>
          </Link>
          <Link href="/browse-tasks">
            <p className="">Browse Tasks</p>
          </Link>
          <Link href="/browse-freelancer">
            <p className="">Browse Freelancers</p>
          </Link>
        </div>

        {data?.user ? (
          <div className="flex items-center gap-4">
            <Button variant="tertiary" className="">
              <Link
                href={`${data?.user?.role === "client" ? "/dashboard/client" : data?.user?.role === "freelancer" ? "/dashboard/freelancer" : "/dashboard/admin"}`}
              >
                Dashboard
              </Link>
            </Button>
            <Separator orientation="vertical" className="min-h-full" />
            <p>Welcome, {data?.user?.name}</p>
            <Link
              href="/login"
              onClick={() => {
                authClient.signOut();
              }}
            >
              <Button>Logout</Button>
            </Link>
          </div>
        ) : (
          <Link href="/login">
            <Button>Login</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavbarUser;
