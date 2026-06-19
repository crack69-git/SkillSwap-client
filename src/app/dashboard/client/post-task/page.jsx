import PostATask from "@/Components/Shared/dashboard/PostATask";
import React from "react";

const PostATaskPage = () => {
  return (
    <div className="w-11/12 mx-auto mt-5">
      <h2 className="text-4xl font-bold">Post A Task</h2>
      <p className="mb-10">
        This is the page where clients can post a new task.
      </p>
      <div>
        <PostATask />
      </div>
    </div>
  );
};

export default PostATaskPage;
