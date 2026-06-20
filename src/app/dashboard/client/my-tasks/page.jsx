import MyTaskCardClient from "@/Components/Shared/dashboard/MyTaskCardClient";
import React from "react";

const MyTaskPage = () => {
  return (
    <div className="mt-5 w-11/12 mx-auto">
      <h2 className="text-4xl font-bold">My Tasks</h2>
      {/* <p>This is the page where clients can view their tasks.</p> */}
      <div className="mt-10 grid grid-cols-4 gap-5">
        <MyTaskCardClient />
      </div>
    </div>
  );
};

export default MyTaskPage;
