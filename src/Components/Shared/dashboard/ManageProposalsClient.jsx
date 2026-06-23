"use client";
import { patchProposal } from "@/lib/actions/tasks";
import { Button, Table } from "@heroui/react";
import React from "react";
const ManageProposalsClient = ({ proposal }) => {
  const handleReject = async (proposalId, status) => {
    console.log("button pressed", proposalId, status);
    const res = await patchProposal(proposalId, { status: "rejected" });
    console.log("Proposal rejected:", res);
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
          <p>{proposal.status}</p>
        ) : (
          <div className="flex flex-col gap-2">
            <Button>Accept</Button>
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
