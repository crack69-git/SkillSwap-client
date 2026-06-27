import { Card, Separator } from "@heroui/react";
import React from "react";

const FreelancerBrowse = ({ data }) => {
  return (
    <div>
      {" "}
      <Card className="w-full border" variant="default">
        <Card.Header>
          <Card.Title className="text-lg font-bold">{data.name}</Card.Title>
          <Card.Title>{data.email}</Card.Title>
          <Card.Description>this is my bio</Card.Description>
        </Card.Header>
        <Separator orientation="horizontal" className="my-4" />
        <Card.Content>
          <p className="bg-sky-100 px-6 w-fit rounded-3xl">Front-End</p>
        </Card.Content>
      </Card>
    </div>
  );
};

export default FreelancerBrowse;
