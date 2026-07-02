import OpenTask from "@/Components/Shared/freelancer/OpenTask";
import NeedtobeFreelancer from "@/Components/Shared/NeedtobeFreelancer";
import { getOpenTasks } from "@/lib/actions/freelancerProposals";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import React from "react";

const page = async () => {
  const users = await auth.api.getSession({
    headers: await headers(), // headers containing the user's session token
  });
  const Role = users?.user?.role;
  console.log(Role);
  const data = await getOpenTasks();
  console.log(data);
  return (
    <div className="w-11/12 mx-auto my-5 min-h-screen">
      {Role === "freelancer" || Role === "admin" ? (
        <div>
          <h1 className="text-3xl font-bold">Available Tasks</h1>
          <p>
            Explore <span className="font-bold">{data.length}</span> available
            tasks
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
            {data.map((task) => (
              <OpenTask key={task._id} task={task} />
            ))}
          </div>
        </div>
      ) : (
        <NeedtobeFreelancer />
      )}
    </div>
  );
};

export default page;
