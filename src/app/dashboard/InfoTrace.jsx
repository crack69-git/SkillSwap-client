import { getAllUsers } from "@/lib/actions/admin";
import {
  getProposals,
  getSumOfPayments,
} from "@/lib/actions/freelancerProposals";
import { getAllRevenue } from "@/lib/actions/payments";
import { getTasks } from "@/lib/actions/tasks";
import { getToken } from "@/lib/actions/tokenGet";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";
import { FcParallelTasks } from "react-icons/fc";
import { MdOutlinePendingActions } from "react-icons/md";
import { RiProgress6Line } from "react-icons/ri";
import { VscCopilotSuccess } from "react-icons/vsc";

const InfoTrace = async ({ user }) => {
  console.log("user in InfoTrace:", user);
  const userId = user?.id;
  const token = await getToken(); // extract the token from the response
  const users = await getAllUsers(token);
  const res = await getTasks(token);
  const userProposals = await getProposals(user?.email, token);
  const Earning = await getSumOfPayments(user?.email, token);
  const revenue = await getAllRevenue(token);

  const client = (
    <>
      <div className="border p-4 rounded-2xl h-full">
        <p className="flex items-center gap-2 text-xl font-bold">
          <FcParallelTasks />
          Total Tasks
        </p>
        <p className="text-3xl font-bold">{res.length}</p>
      </div>
      <div className="border p-4 rounded-2xl h-full">
        <p className="flex items-center gap-2 text-xl font-bold">
          <MdOutlinePendingActions />
          Pending Tasks
        </p>
        <p className="text-3xl font-bold">
          {res.filter((task) => task.status === "Open").length}
        </p>
      </div>
      <div className="border p-4 rounded-2xl h-full">
        <p className="flex items-center gap-2 text-xl font-bold">
          <VscCopilotSuccess />
          Completed Tasks
        </p>
        <p className="text-3xl font-bold">
          {res.filter((task) => task.status === "Completed").length}
        </p>
      </div>
      <div className="border p-4 rounded-2xl h-full">
        <p className="flex items-center gap-2 text-xl font-bold">
          <RiProgress6Line />
          In Progress
        </p>
        <p className="text-3xl font-bold">
          {res.filter((task) => task.status === "in-progress").length}
        </p>
      </div>
    </>
  );
  const freelancer = (
    <>
      <div className="border p-4 rounded-2xl h-full">
        <p className="flex items-center gap-2 text-xl font-bold">
          <FcParallelTasks />
          Total Proposals
        </p>
        <p className="text-2xl text-center">{userProposals.length}</p>
      </div>
      <div className="border p-4 rounded-2xl h-full">
        <p className="flex items-center gap-2 text-xl font-bold">
          <MdOutlinePendingActions />
          Pending Proposals
        </p>
        <p className="text-2xl text-center">
          {userProposals.filter((task) => task.status === "accepted").length}
        </p>
      </div>
      <div className="border p-4 rounded-2xl h-full">
        <p className="flex items-center gap-2 text-xl font-bold">
          <VscCopilotSuccess />
          Accepted Proposals
        </p>
        <p className="text-2xl text-center">
          {userProposals.filter((task) => task.status === "completed").length}
        </p>
      </div>
      <div className="border p-4 rounded-2xl h-full">
        <p className="flex items-center gap-2 text-xl font-bold">
          <RiProgress6Line />
          Total Earnings
        </p>
        <p className="text-2xl text-center">${Earning?.total ?? 0}</p>
      </div>
    </>
  );
  const admin = (
    <>
      <div className="border p-4 rounded-2xl h-full">
        <p className="flex items-center gap-2 text-xl font-bold">
          <FcParallelTasks />
          Total Users
        </p>
        <p className="text-2xl font-bold text-center">{users.length - 1}</p>
      </div>
      <div className="border p-4 rounded-2xl h-full">
        <p className="flex items-center gap-2 text-xl font-bold">
          <MdOutlinePendingActions />
          Total Tasks
        </p>
        <p className="text-2xl font-bold text-center">{res.length}</p>
      </div>
      <div className="border p-4 rounded-2xl h-full">
        <p className="flex items-center gap-2 text-xl font-bold">
          <VscCopilotSuccess />
          Total Revenue
        </p>
        <p className="text-3xl font-bold text-center">
          ${revenue?.totalEarning ?? 0}
        </p>
      </div>
      <div className="border p-4 rounded-2xl h-full">
        <p className="flex items-center gap-2 text-xl font-bold">
          <RiProgress6Line />
          Active Tasks
        </p>
        <p className="text-3xl font-bold  text-center">
          {res.filter((task) => task.status === "in-progress").length}
        </p>
      </div>
    </>
  );
  return (
    <div className="mt-10 grid grid-cols-4 gap-10 max-sm:grid-cols-1 max-md:grid-cols-2">
      {user?.role === "client"
        ? client
        : user?.role === "freelancer"
          ? freelancer
          : admin}
    </div>
  );
};

export default InfoTrace;
