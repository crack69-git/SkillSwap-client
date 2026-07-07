import ManageProposalsClient from "@/Components/Shared/dashboard/ManageProposalsClient";
import { getAllProposalById } from "@/lib/actions/tasks";
import { getToken } from "@/lib/actions/tokenGet";
import { auth } from "@/lib/auth";
import { Table } from "@heroui/react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const ManageProposals = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const userId = session?.user?.id;
  const token = await getToken(); // extract the token from the response

  const data = await getAllProposalById(userId, token);
  if (session?.user?.role !== "client") {
    redirect("/unauthorize");
  }
  if (session?.user?.userStatus === "blocked") {
    redirect("/access-blocked");
  }
  return (
    <div className="w-11/12 mx-auto my-5">
      <h1 className="text-3xl font-bold mb-5">Manage Proposals</h1>
      <Table variant="secondary">
        <Table.ScrollContainer>
          <Table.Content aria-label="Team members" className="min-w-[600px]">
            <Table.Header>
              <Table.Column isRowHeader>Task Title</Table.Column>
              <Table.Column>Freelancer Name</Table.Column>
              <Table.Column>Estimate Budget</Table.Column>
              <Table.Column>Completion Date</Table.Column>
              <Table.Column>note</Table.Column>
              <Table.Column>Action</Table.Column>
            </Table.Header>
            <Table.Body>
              {data?.map((proposal) => (
                <ManageProposalsClient key={proposal._id} proposal={proposal} />
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default ManageProposals;
