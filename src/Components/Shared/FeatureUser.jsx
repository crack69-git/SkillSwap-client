import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import FeatureCard from "./FeatureCard";
import { getOpenTasks } from "@/lib/actions/freelancerProposals";
import OpenTask from "./freelancer/OpenTask";

const FeatureUser = async () => {
  const data = await getOpenTasks();
  // console.log(data);
  return (
    <div className="my-10 w-11/12 mx-auto">
      <h3 className="text-4xl font-bold ">Latest Feature Tasks</h3>
      <div className="flex justify-between items-center">
        <p>High-priority projects looking for immediate expert attention.</p>
        <p className="flex items-center gap-2 hover:text-blue-600 font-medium cursor-pointer">
          View All
          <FaArrowRightLong />
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {data.slice(0, 6).map((task) => (
          <OpenTask key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default FeatureUser;
