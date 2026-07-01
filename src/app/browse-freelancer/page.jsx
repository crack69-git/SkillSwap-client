import FreelancerBrowse from "@/Components/Shared/FreelancerBrowse";
import { getFreelancer } from "@/lib/actions/tasks";
import React from "react";

const page = async () => {
  const data = await getFreelancer();
  // console.log(data);
  return (
    <div className="w-11/12 mx-auto my-5">
      <h1 className="text-2xl font-bold">Browse Freelancers</h1>
      {data && data.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 h-full">
          {data.map((freelancer) => (
            <FreelancerBrowse key={freelancer._id} data={freelancer} />
          ))}
        </div>
      ) : (
        <p>No freelancers available</p>
      )}
    </div>
  );
};

export default page;
