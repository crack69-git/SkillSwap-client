import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import heroimg from "@/assests/hero_img.webp";

const TopFreelancerCard = async ({ freelancer }) => {
  return (
    <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center">
      <div>
        <Image
          src={freelancer.image || heroimg}
          alt={freelancer.name}
          width={150}
          height={150}
          className="rounded-2xl"
        />
      </div>

      <p className="text-lg font-bold">{freelancer.name}</p>
      <div className="flex flex-wrap items-center gap-2 text-sm justify-center mt-5">
        {freelancer.skills.length > 0 ? (
          freelancer.skills.map((skill, index) => (
            <div
              key={index}
              className="bg-sky-100 dark:bg-sky-500 py-1 px-6 rounded-4xl"
            >
              {skill}
            </div>
          ))
        ) : (
          <div className="bg-sky-100 dark:bg-sky-500 py-1 px-6 rounded-4xl">
            No skills listed
          </div>
        )}
      </div>
      <p className="flex text-lg items-center gap-2 mt-3  justify-center">
        Ratings: 0.0 <FaStar className="text-yellow-400" />
      </p>
      <p className="flex text-lg items-center gap-2 mt-3 justify-center">
        Finished Jobs: {freelancer.completedTasks || 0}
      </p>
    </div>
  );
};

export default TopFreelancerCard;
