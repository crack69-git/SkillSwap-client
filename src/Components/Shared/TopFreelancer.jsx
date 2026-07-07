import React from "react";
import TopFreelancerCard from "./TopFreelancerCard";
import { getToken } from "@/lib/actions/tokenGet";
import { getTopFreelancers } from "@/lib/actions/freelancerProposals";

const TopFreelancer = async () => {
  const data = await getTopFreelancers();

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-10 text-center mb-10">
      <div className="w-11/12 mx-auto">
        <h2 className="text-4xl font-bold mb-5">World-Class Talent</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Our top-rated professionals maintain a 98% satisfaction rating across
          complex high-end deliverables.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((freelancer) => (
            <TopFreelancerCard key={freelancer._id} freelancer={freelancer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopFreelancer;
