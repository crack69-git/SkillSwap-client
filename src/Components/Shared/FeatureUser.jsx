import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import FeatureCard from "./FeatureCard";

const FeatureUser = () => {
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
      <div className="mt-10 grid grid-cols-4 gap-5">
        <FeatureCard></FeatureCard>
      </div>
    </div>
  );
};

export default FeatureUser;
