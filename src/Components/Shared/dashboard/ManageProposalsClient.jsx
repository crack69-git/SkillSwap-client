"use client";
import { patchProposal } from "@/lib/actions/tasks";
import { getToken } from "@/lib/actions/tokenGet";
import { Button, Table } from "@heroui/react";
import React from "react";
const ManageProposalsClient = ({ proposal }) => {
  const handleReject = async (proposalId, status) => {
    const token = await getToken(); // Assuming you have a function to get the token
    const res = await patchProposal(token, proposalId, { status: "rejected" });
  };
  const handleCheckout = async (proposalId) => {
    // // Implementation for handling checkout
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/create-checkout-session`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          proposalId,
        }),
      },
    );
    const data = await res.json();

    window.location.href = data.url;
  };

  return (
    <Table.Row>
      <Table.Cell>{proposal.taskTitle}</Table.Cell>
      <Table.Cell>{proposal.freelancerName}</Table.Cell>
      <Table.Cell>{proposal.bid}</Table.Cell>
      <Table.Cell>{proposal.date}</Table.Cell>
      <Table.Cell>{proposal.note}</Table.Cell>
      <Table.Cell>
        {proposal.status === "rejected" ? (
          <p>Rejected</p>
        ) : proposal.status === "accepted" ? (
          <p>Accepted</p>
        ) : (
          <div className="flex flex-col justify-center items-center gap-2">
            <Button onClick={() => handleCheckout(proposal._id)}>Accept</Button>
            <Button onClick={() => handleReject(proposal._id, proposal.status)}>
              Reject
            </Button>
          </div>
        )}
      </Table.Cell>
    </Table.Row>
  );
};

export default ManageProposalsClient;
