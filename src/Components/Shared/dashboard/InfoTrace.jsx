import React from "react";
import { FcParallelTasks } from "react-icons/fc";
import { MdOutlinePendingActions } from "react-icons/md";
import { RiProgress6Line } from "react-icons/ri";
import { VscCopilotSuccess } from "react-icons/vsc";
const InfoTrace = () => {
  return (
    <div className="mt-10 grid grid-cols-4 gap-10">
      <div className="border p-4 rounded-2xl">
        <p className="flex items-center gap-2 text-xl font-bold">
          <FcParallelTasks />
          Total Tasks
        </p>
        <p className="text-3xl font-bold">10</p>
      </div>
      <div className="border p-4 rounded-2xl">
        <p className="flex items-center gap-2 text-xl font-bold">
          <MdOutlinePendingActions />
          Pending Tasks
        </p>
        <p className="text-3xl font-bold">5</p>
      </div>
      <div className="border p-4 rounded-2xl">
        <p className="flex items-center gap-2 text-xl font-bold">
          <VscCopilotSuccess />
          Completed Tasks
        </p>
        <p className="text-3xl font-bold">3</p>
      </div>
      <div className="border p-4 rounded-2xl">
        <p className="flex items-center gap-2 text-xl font-bold">
          <RiProgress6Line />
          In Progress
        </p>
        <p className="text-3xl font-bold">2</p>
      </div>
    </div>
  );
};

export default InfoTrace;
