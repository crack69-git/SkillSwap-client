import MyTaskCardClient from "@/Components/Shared/dashboard/MyTaskCardClient";
import React from "react";
import { getTasks } from "@/lib/actions/tasks";
import { getToken } from "@/lib/actions/tokenGet";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
const MyTaskPage = async () => {
  const token = await getToken(); // extract the token from the response
  const res = await getTasks(token);
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session?.user?.role !== "client") {
    redirect("/unauthorize");
  }
  if (session?.user?.userStatus === "blocked") {
    redirect("/access-blocked");
  }
  return (
    <div className="mt-5 w-11/12 mx-auto">
      <h2 className="text-4xl font-bold">My Tasks</h2>
      {/* <p>This is the page where clients can view their tasks.</p> */}
      <div className="mt-10 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5">
        {res.length > 0 ? (
          res.map((task) => <MyTaskCardClient key={task.id} task={task} />)
        ) : (
          <p className="text-center text-lg font-semibold text-gray-500 col-span-full">
            No tasks found.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyTaskPage;
