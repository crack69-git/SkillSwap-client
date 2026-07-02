import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import heroimg from "@/assests/hero_img.webp";
const TopFreelancerCard = () => {
  return (
    <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center">
      <div>
        <Image
          src={heroimg}
          alt="Hero"
          width={150}
          height={150}
          className="rounded-2xl"
        />
      </div>

      <p className="text-lg font-bold">Ashutosh Tanchangya</p>
      <div className="flex flex-wrap items-center gap-2 text-sm justify-center mt-5">
        <p className="bg-sky-100 dark:bg-sky-500 py-1 px-6 rounded-4xl">
          React
        </p>
        <p className="bg-sky-100 dark:bg-sky-500 py-1 px-6 rounded-4xl">
          Javascript
        </p>
        <p className="bg-sky-100 dark:bg-sky-500 py-1 px-6 rounded-4xl">
          AI/ML
        </p>
      </div>
      <p className="flex text-lg items-center gap-2 mt-3  justify-center">
        Ratings: 4.9/5
        <FaStar />
      </p>
      <p className="flex text-lg items-center gap-2 mt-3 justify-center">
        Finished Jobs: 4/5
      </p>
    </div>
  );
};

export default TopFreelancerCard;
