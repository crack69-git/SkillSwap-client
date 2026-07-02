"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import { authClient } from "@/lib/auth-client";

import { Button, Drawer, Separator } from "@heroui/react";
import ToogleTheme from "./dashboard/ToogleTheme";
import { IoMenu } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { redirect } from "next/navigation";

const NavbarUser = () => {
  const { data } = authClient.useSession();
  const links = (
    <>
      <Link href="/browse-tasks">
        <p className="hover:border-b-2 hover:border-blue-500">Browse Tasks</p>
      </Link>
      <Link href="/browse-freelancer">
        <p className="hover:border-b-2 hover:border-blue-500">
          Browse Freelancers
        </p>
      </Link>
    </>
  );
  return (
    <div className="border-b py-4">
      <div className="w-11/12 mx-auto max-sm:flex-wrap max-sm:justify-center flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4 ">
            <aside className="lg:hidden">
              {" "}
              <Drawer>
                <Button variant="ghost">
                  <IoMenu />
                </Button>
                <Drawer.Backdrop>
                  <Drawer.Content placement="left">
                    <Drawer.Dialog>
                      <Drawer.Header>
                        <Drawer.Heading>Drawer Title</Drawer.Heading>
                      </Drawer.Header>
                      <Drawer.Body>
                        <div>{links}</div>
                      </Drawer.Body>
                    </Drawer.Dialog>
                  </Drawer.Content>
                </Drawer.Backdrop>
              </Drawer>
            </aside>
            <Link href="/">
              <p className="text-2xl font-bold text-blue-600">SkillSwap</p>
            </Link>
          </div>
          <div className="items-center gap-4 hidden lg:flex">{links}</div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          {/* Theme Switch */}
          <ToogleTheme></ToogleTheme>

          {data?.user ? (
            <div className="flex flex-wrap max-sm:justify-center items-center gap-4">
              <Button variant="flat">
                <Link
                  href={
                    data.user.role === "client"
                      ? "/dashboard/client"
                      : data.user.role === "freelancer"
                        ? "/dashboard/freelancer"
                        : "/dashboard/admin"
                  }
                >
                  Dashboard
                </Link>
              </Button>

              <Separator orientation="vertical" className="h-6" />

              <p>Welcome, {data.user.name}</p>

              <Button
                color="danger"
                onPress={() =>
                  authClient.signOut({
                    fetchOptions: {
                      onSuccess: () => {
                        window.location.href = "/login";
                      },
                    },
                  })
                }
              >
                <FiLogOut />
                Logout
              </Button>
            </div>
          ) : (
            <Link href="/login">
              <Button>Login</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarUser;
