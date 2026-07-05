import FreelancerActiveProposal from "@/Components/Shared/freelancer/FreelancerActiveProposal";
import { getAccepterProposals } from "@/lib/actions/payments";
import { getToken } from "@/lib/actions/tokenGet";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const freelancerEmail = session?.user?.email;
  const token = await getToken();
  console.log(token);
  const data = await getAccepterProposals(freelancerEmail, token);
  console.log(data);

  return (
    <div className="w-11/12 mx-auto my-5">
      <h1 className="text-3xl font-bold">Active Projects Page</h1>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4">
        {data?.map((proposal) => (
          <FreelancerActiveProposal key={proposal._id} proposal={proposal} />
        ))}
      </div>
    </div>
  );
};

export default page;
