import OpenTask from "@/Components/Shared/freelancer/OpenTask";
import { getOpenTasks } from "@/lib/actions/freelancerProposals";
import React from "react";

const page = async () => {
  const data = await getOpenTasks();
  console.log(data);
  return (
    <div className="w-11/12 mx-auto my-5">
      <h1 className="text-3xl font-bold">Available Tasks</h1>
      <p>
        Explore <span className="font-bold">140</span> available tasks
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {data.map((task) => (
          <OpenTask key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default page;
