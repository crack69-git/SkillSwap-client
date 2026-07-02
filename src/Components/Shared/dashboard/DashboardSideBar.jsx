import React from "react";
import { Button, Drawer } from "@heroui/react";
import { HiBars3BottomLeft } from "react-icons/hi2";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const DashboardSideBar = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  // console.log("DashboardSideBar Session:", session);
  const links = <></>;
  const clientlinks = (
    <>
      <div className="mt-4">
        {session?.user?.role === "client" ? (
          <ul>
            <Link href="/dashboard/client">
              <li className="py-2 px-4 hover:bg-gray-200">Home</li>
            </Link>
            <Link href="/dashboard/client/post-task">
              <li className="py-2 px-4 hover:bg-gray-200">Post a Task</li>
            </Link>
            <Link href="/dashboard/client/my-tasks">
              <li className="py-2 px-4 hover:bg-gray-200">My Tasks</li>
            </Link>
            <Link href="/dashboard/client/manage-proposals">
              <li className="py-2 px-4 hover:bg-gray-200">Manage Proposals</li>
            </Link>
          </ul>
        ) : session?.user?.role === "freelancer" ? (
          <ul>
            <Link href="/dashboard/freelancer">
              <li className="py-2 px-4 hover:bg-gray-200">Home</li>
            </Link>
            <Link href="/dashboard/freelancer/browse-tasks">
              <li className="py-2 px-4 hover:bg-gray-200">Browse Tasks</li>
            </Link>
            <Link href="/dashboard/freelancer/my-proposals">
              <li className="py-2 px-4 hover:bg-gray-200">My Proposals</li>
            </Link>
            <Link href="/dashboard/freelancer/active-projects">
              <li className="py-2 px-4 hover:bg-gray-200">Active Projects </li>
            </Link>
            <Link href="/dashboard/freelancer/my-earnings">
              <li className="py-2 px-4 hover:bg-gray-200">My Earnings </li>
            </Link>
            <Link href="/dashboard/freelancer/edit-profile">
              <li className="py-2 px-4 hover:bg-gray-200">Edit Profile </li>
            </Link>
          </ul>
        ) : (
          <ul>
            <Link href="/dashboard/admin">
              <li className="py-2 px-4 hover:bg-gray-200">Home </li>
            </Link>
            <Link href="/dashboard/admin/manage-users">
              <li className="py-2 px-4 hover:bg-gray-200">Manage Users </li>
            </Link>
            <Link href="/dashboard/admin/manage-tasks">
              <li className="py-2 px-4 hover:bg-gray-200">Manage Tasks </li>
            </Link>
            <Link href="/dashboard/admin/transections-history">
              <li className="py-2 px-4 hover:bg-gray-200">
                Transaction History{" "}
              </li>
            </Link>
          </ul>
        )}
      </div>
    </>
  );
  return (
    <div>
      <aside className="hidden lg:block w-64 h-full bg-gray-100 p-4">
        <h2 className="text-lg font-bold">Dashboard</h2>
        {clientlinks}
      </aside>
      <Drawer className=" ">
        <Button variant="secondary" className="rounded-lg ">
          <HiBars3BottomLeft />
        </Button>
        <Drawer.Backdrop>
          {/* 2. Add placement="left" here instead */}
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />
              <Drawer.Header>
                <Drawer.Heading>Dashboard</Drawer.Heading>
              </Drawer.Header>
              <Drawer.Body>{clientlinks}</Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </div>
  );
};

export default DashboardSideBar;
