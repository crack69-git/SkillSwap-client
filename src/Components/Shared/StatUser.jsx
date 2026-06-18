import React from "react";

const StatUser = () => {
  return (
    <div className="bg-[#0F172A] text-white  ">
      <div className="w-11/12 mx-auto py-10 flex items-center justify-between gap-10">
        <div>
          <p className="text-3xl font-bold text-[#10B981]">240k+</p>
          <p>Active Tasks</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-[#10B981]">10k+</p>
          <p>Happy Clients</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-[#10B981]">500+</p>
          <p>Expert Freelancers</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-[#10B981]">100k+</p>
          <p>Projects Completed</p>
        </div>
      </div>
    </div>
  );
};

export default StatUser;
