import { getProposals } from "@/lib/actions/freelancerProposals";
import { auth } from "@/lib/auth";
import { Table } from "@heroui/react";
import { headers } from "next/headers";
import React from "react";
import MyProposalTable from "@/Components/Shared/admin/MyProposalTable";
import { getToken } from "@/lib/actions/tokenGet";
import { redirect } from "next/navigation";
const MyProposalPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session?.user?.role !== "freelancer") {
    redirect("/unauthorize");
  }
  if (session?.user?.userStatus === "blocked") {
    redirect("/access-blocked");
  }

  const email = session?.user?.email;

  const token = await getToken();

  const res = await getProposals(email, token);

  return (
    <div className="w-11/12 mx-auto my-5">
      <h1 className="text-3xl font-bold mb-5">My Proposals</h1>
      <Table variant="secondary">
        <Table.ScrollContainer>
          <Table.Content aria-label="Team members" className="min-w-[600px]">
            <Table.Header>
              <Table.Column isRowHeader>Task Title</Table.Column>
              <Table.Column>Budget Bid</Table.Column>
              <Table.Column>Estimate Date</Table.Column>
              <Table.Column>Status</Table.Column>
              <Table.Column>Proposal Sent</Table.Column>
            </Table.Header>
            <Table.Body>
              {res.map((proposal) => (
                <MyProposalTable key={proposal._id} proposal={proposal} />
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default MyProposalPage;
