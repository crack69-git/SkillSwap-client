import PostATask from "@/Components/Shared/dashboard/PostATask";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const PostATaskPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log("Session in PostATaskPage:", session.user.role);
  return (
    <div className="w-11/12 mx-auto mt-5">
      {session.user.role === "client" || session.user.role === "admin" ? (
        <div>
          <h2 className="text-4xl font-bold">Post A Task</h2>
          <p className="mb-10">
            This is the page where clients can post a new task.
          </p>
          <div>
            <PostATask />
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-4xl font-bold">Access Denied</h2>
          <p className="mb-10">
            You do not have permission to access this page. Please contact
            support if you believe this is an error.
          </p>
        </div>
      )}
    </div>
  );
};

export default PostATaskPage;
