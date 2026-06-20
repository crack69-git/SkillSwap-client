// import { auth } from "@/lib/auth";
import { Button, Separator } from "@heroui/react";
// import { headers } from "next/headers";
import Link from "next/link";
import React from "react";

const NavbarUser = async () => {
  // const { data: session } =
  //   (await auth.api.getSession({
  //     headers: await headers(), // headers containing the user's session token
  //   })) || {}; // Fallback to null if session is undefined
  // const user = session?.user || null;
  // console.log(user);
  return (
    <div className="border-b py-4">
      <div className="w-11/12 mx-auto flex items-center justify-between ">
        <div className="flex items-center gap-4">
          <p className="text-2xl font-bold text-blue-600">SkillSwap</p>
          <p>Browse Tasks</p>
          <p>Browse Freelancers</p>
        </div>

        {/* {user ? (
          <div className="flex items-center gap-4">
            <Button variant="tertiary" className="">
              <Link href="/post-task">Dashboard</Link>
            </Button>
            <Separator orientation="vertical" className="min-h-full" />
            <p>Welcome, {user.name}</p>
            <Link href="/logout">
              <Button>Logout</Button>
            </Link>
          </div>
        ) : (
          <Link href="/login">
            <Button>Login</Button>
          </Link>
        )} */}
      </div>
    </div>
  );
};

export default NavbarUser;
