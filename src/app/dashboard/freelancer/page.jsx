import InfoTrace from "@/Components/Shared/dashboard/InfoTrace";
import React from "react";

const FreelancerPage = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto mt-5">
        <h3 className="text-3xl font-bold">Freelancer Dashboard</h3>
        {/* <p>Welcome, {session?.user?.name}! This is your freelancer dashboard.</p> */}
        <InfoTrace />
      </div>
    </div>
  );
};

export default FreelancerPage;
