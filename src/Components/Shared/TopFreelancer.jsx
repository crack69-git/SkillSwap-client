import React from "react";
import TopFreelancerCard from "./TopFreelancerCard";

const TopFreelancer = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-10 text-center mb-10">
      <div className="w-11/12 mx-auto">
        <h2 className="text-4xl font-bold mb-5">World-Class Talent</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Our top-rated professionals maintain a 98% satisfaction rating across
          complex high-end deliverables.
        </p>
        <div className="mt-10 grid grid-cols-4 gap-6">
          <TopFreelancerCard></TopFreelancerCard>
        </div>
      </div>
    </div>
  );
};

export default TopFreelancer;
