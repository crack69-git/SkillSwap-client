import { getTaskById } from "@/lib/actions/freelancerProposals";
import { Card, Separator } from "@heroui/react";
import React from "react";

const FreelancerActiveProposal = async ({ proposal }) => {
  return (
    <div>
      <Card
        className="border bg-gray-50 dark:bg-gray-900 shadow-lg rounded-lg p-4 h-full"
        variant="default"
      >
        <Card.Header>
          <Card.Title
            className={`font-semibold w-fit mb-3 px-5 rounded-3xl ${proposal.status === "Open" ? "bg-purple-200 dark:bg-purple-500" : proposal.status === "In Progress" ? "bg-yellow-200 dark:bg-yellow-500" : "bg-green-200 dark:bg-green-500"}`}
          >
            {proposal.status}
          </Card.Title>
          <Card.Title className="text-xl font-semibold">
            {proposal.TaskTitle}
          </Card.Title>
          <Card.Description>{proposal.description}</Card.Description>
          <Separator className="my-3" />
          <Card.Description className="text-sm">
            {proposal.category}
          </Card.Description>
        </Card.Header>
        <Card.Content>
          <p className="text-sm">Client: {proposal.clientName}</p>
          <p className="text-sm">Deadline: {proposal.deadline}</p>
        </Card.Content>
      </Card>
    </div>
  );
};

export default FreelancerActiveProposal;
