import { getTasks } from "@/lib/actions/tasks";
import React from "react";
import { FcParallelTasks } from "react-icons/fc";
import { MdOutlinePendingActions } from "react-icons/md";
import { RiProgress6Line } from "react-icons/ri";
import { VscCopilotSuccess } from "react-icons/vsc";

const InfoTrace = async () => {
  const res = await getTasks();
  console.log(res);
  const client = (
    <>
      <div className="border p-4 rounded-2xl">
        <p className="flex items-center gap-2 text-xl font-bold">
          <FcParallelTasks />
          Total Tasks
        </p>
        <p className="text-3xl font-bold">{res.length}</p>
      </div>
      <div className="border p-4 rounded-2xl">
        <p className="flex items-center gap-2 text-xl font-bold">
          <MdOutlinePendingActions />
          Pending Tasks
        </p>
        <p className="text-3xl font-bold">
          {res.filter((task) => task.status === "Open").length}
        </p>
      </div>
      <div className="border p-4 rounded-2xl">
        <p className="flex items-center gap-2 text-xl font-bold">
          <VscCopilotSuccess />
          Completed Tasks
        </p>
        <p className="text-3xl font-bold">
          {res.filter((task) => task.status === "Completed").length}
        </p>
      </div>
      <div className="border p-4 rounded-2xl">
        <p className="flex items-center gap-2 text-xl font-bold">
          <RiProgress6Line />
          In Progress
        </p>
        <p className="text-3xl font-bold">
          {res.filter((task) => task.status === "In Progress").length}
        </p>
      </div>
    </>
  );
  const freelancer = (
    <>
      <div className="border p-4 rounded-2xl">
        <p className="flex items-center gap-2 text-xl font-bold">
          <FcParallelTasks />
          Total Proposals
        </p>
        <p className="text-3xl font-bold">{res.length}</p>
      </div>
      <div className="border p-4 rounded-2xl">
        <p className="flex items-center gap-2 text-xl font-bold">
          <MdOutlinePendingActions />
          Pending Proposals
        </p>
        <p className="text-3xl font-bold">
          {res.filter((task) => task.status === "Open").length}
        </p>
      </div>
      <div className="border p-4 rounded-2xl">
        <p className="flex items-center gap-2 text-xl font-bold">
          <VscCopilotSuccess />
          Accepted Proposals
        </p>
        <p className="text-3xl font-bold">
          {res.filter((task) => task.status === "Completed").length}
        </p>
      </div>
      <div className="border p-4 rounded-2xl">
        <p className="flex items-center gap-2 text-xl font-bold">
          <RiProgress6Line />
          Total Earnings
        </p>
        <p className="text-3xl font-bold">
          {res.filter((task) => task.status === "In Progress").length}
        </p>
      </div>
    </>
  );
  return <div className="mt-10 grid grid-cols-4 gap-10">{freelancer}</div>;
};

export default InfoTrace;
