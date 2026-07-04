import PostATask from "@/Components/Shared/dashboard/PostATask";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import { LuShieldAlert } from "react-icons/lu";

const PostATaskPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log("Session in PostATaskPage:", session.user.role);
  return (
    <div className="w-11/12 mx-auto py-5">
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
        <div className="flex min-h-screen items-center justify-center px-4">
          <div className="w-full max-w-md rounded-2xl bg-white dark:bg-slate-900 p-8 shadow-xl border border-slate-200 dark:border-slate-800 text-center">
            {/* Icon */}
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
              <LuShieldAlert className="h-10 w-10 text-red-600" />
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-3xl font-bold text-slate-900 dark:text-white">
              Access Denied
            </h1>

            {/* Description */}
            <p className="mt-3 text-slate-600 dark:text-slate-400 leading-relaxed">
              You do not have permission to access this page.
              <br />
              Need to be a client or admin to post a task. Please contact
              support if you believe this is an error.
            </p>

            {/* Button */}
            <Link
              href="/"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition-all hover:bg-blue-700 hover:scale-105"
            >
              <FaHome />
              Go Back Home
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostATaskPage;
