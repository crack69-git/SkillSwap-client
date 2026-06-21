import OpenTask from "@/Components/Shared/freelancer/OpenTask";
import { getOpenTasks } from "@/lib/actions/freelancerProposals";
import React from "react";

const BrowseTasks = async () => {
  const data = await getOpenTasks();
  //   console.log("Open Tasks:", data);
  return (
    <div className="my-5 w-11/12 mx-auto">
      <h2 className="text-4xl font-bold mb-10">Browse Tasks</h2>
      <div className="flex flex-col gap-5">
        {data.length > 0 ? (
          data.map((task) => <OpenTask key={task._id} task={task} />)
        ) : (
          <div className="text-gray-500 text-lg">
            No open tasks available at the moment.
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseTasks;
