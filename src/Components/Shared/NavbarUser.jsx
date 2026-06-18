import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const NavbarUser = () => {
  return (
    <div className="border-b py-4">
      <div className="w-11/12 mx-auto flex items-center justify-between ">
        <div className="flex items-center gap-4">
          <p className="text-2xl font-bold text-blue-600">SkillSwap</p>
          <p>Browse Tasks</p>
          <p>Browse Freelancers</p>
        </div>

        <Link href="/login">
          <Button>Login</Button>
        </Link>
      </div>
    </div>
  );
};

export default NavbarUser;
