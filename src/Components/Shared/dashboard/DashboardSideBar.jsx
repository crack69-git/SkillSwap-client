import React from "react";
import { Button, Drawer } from "@heroui/react";
import { HiBars3BottomLeft } from "react-icons/hi2";
import Link from "next/link";

const DashboardSideBar = () => {
  const clientlinks = (
    <>
      <ul className="mt-4">
        <Link href="/dashboard/client">
          <li className="py-2 px-4 hover:bg-gray-200">Home</li>
        </Link>
        <Link href="/dashboard/client/post-task">
          <li className="py-2 px-4 hover:bg-gray-200">Post a Task</li>
        </Link>
        <Link href="/dashboard/client/settings">
          <li className="py-2 px-4 hover:bg-gray-200">Settings</li>
        </Link>
      </ul>
    </>
  );
  return (
    <div>
      <aside className="hidden lg:block w-64 h-full bg-gray-100 p-4">
        <h2 className="text-lg font-bold">Dashboard</h2>
        {clientlinks}
      </aside>
      <Drawer className="">
        <Button variant="secondary" className="rounded-lg">
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
              <Drawer.Footer>
                <Button slot="close" variant="secondary">
                  Cancel
                </Button>
                <Button slot="close">Done</Button>
              </Drawer.Footer>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </div>
  );
};

export default DashboardSideBar;
