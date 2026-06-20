import MyTaskCardClient from "@/Components/Shared/dashboard/MyTaskCardClient";
import React from "react";
import { getTasks } from "@/lib/actions/tasks";
const MyTaskPage = async () => {
  const res = await getTasks();
  console.log(res);
  return (
    <div className="mt-5 w-11/12 mx-auto">
      <h2 className="text-4xl font-bold">My Tasks</h2>
      {/* <p>This is the page where clients can view their tasks.</p> */}
      <div className="mt-10 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5">
        {res.map((tasks, index) => (
          <MyTaskCardClient key={index} tasks={tasks} />
        ))}
      </div>
    </div>
  );
};

export default MyTaskPage;
