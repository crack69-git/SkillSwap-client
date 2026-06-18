import { Badge, Separator } from "@heroui/react";
import React from "react";
import { FaStopwatch } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";

const FeatureCard = () => {
  return (
    <div className="border rounded-lg p-5">
      <div className="flex items-center justify-between mb-5">
        <p className="bg-purple-100 w-fit px-4 py-1 rounded-4xl">Design</p>
        <p className="font-semibold">450$</p>
      </div>
      <p className="text-3xl font-semibold">Architechture 3D Rendering</p>
      <p>
        Expert level execution required for a high-priority corporate project.
        Tight deadlines and premium quality standards apply.
      </p>
      <p className="flex items-center gap-3 mt-5">
        <FaUserLarge />
        Ashutosh Tanchangya
      </p>
      <Separator className="my-4"></Separator>
      <div>
        <p className="flex items-center gap-3">
          <FaStopwatch />2 days left
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
