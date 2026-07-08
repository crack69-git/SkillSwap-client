import FreelancerActiveProposal from "@/Components/Shared/freelancer/FreelancerActiveProposal";
import { getAccepterProposals } from "@/lib/actions/payments";
import { getToken } from "@/lib/actions/tokenGet";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session?.user?.role !== "freelancer") {
    redirect("/unauthorize");
  }
  if (session?.user?.userStatus === "blocked") {
    redirect("/access-blocked");
  }
  const freelancerEmail = session?.user?.email;
  const token = await getToken();

  const data = await getAccepterProposals(freelancerEmail, token);

  return (
    <div className="w-11/12 mx-auto my-5">
      <h1 className="text-3xl font-bold">Active Projects Page</h1>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4 h-full">
        {data && data.length > 0 ? (
          data.map((proposal) => (
            <FreelancerActiveProposal key={proposal._id} proposal={proposal} />
          ))
        ) : (
          <p>No active projects found.</p>
        )}
      </div>
    </div>
  );
};

export default page;
