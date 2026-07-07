import DetailProposalForm from "@/Components/Shared/freelancer/DetailProposalForm";
import { getSingleTask } from "@/lib/actions/freelancerProposals";
import { getToken } from "@/lib/actions/tokenGet";
import { auth } from "@/lib/auth";
import { Separator } from "@heroui/react";
import { headers } from "next/headers";
import React from "react";
import { IoTimer } from "react-icons/io5";
import { LuTimerOff } from "react-icons/lu";
import { MdCategory } from "react-icons/md";

const DetailsPage = async ({ params }) => {
  const { id } = await params;
  const user = await auth.api.getSession({
    headers: await headers(),
  });
  const role = user?.user?.role;

  const data = await getSingleTask(id);

  return (
    <div className="w-11/12 max-sm:grid-cols-1 mx-auto my-5 grid grid-cols-3 gap-4">
      <div className="col-span-2  rounded-lg p-5 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-semibold">{data.TaskTitle}</h2>
          <p>
            Budget: $<span className="font-bold text-xl">{data.budget}</span>
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <p className="flex gap-2 items-center text-lg text-gray-500">
            <MdCategory />
            {data.category}
          </p>
          <p className="flex gap-2 items-center text-lg text-gray-500">
            <IoTimer />
            Posted On: {data.createdAt}
          </p>
        </div>
        <p className="flex gap-2 items-center text-lg text-gray-500">
          <LuTimerOff />
          Deadline: {data.deadline}
        </p>
        <Separator className="my-4" />
        <p className="font-semibold text-xl">Task Description</p>
        <p>{data.description}</p>
        <Separator className="my-4" />
        <p className=" text-gray-500">Posted By: {data.clientName}</p>
      </div>
      <div
        className={`border rounded-lg ${role !== "freelancer" ? "hidden" : "block"}`}
      >
        <div className="bg-[#0F172A] rounded-lg p-4 text-white mb-4">
          <p className="font-bold text-xl">Submit Your Form</p>
          <p>Fill up the form to submit the form.</p>
        </div>
        <div>
          <DetailProposalForm data={data} />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
