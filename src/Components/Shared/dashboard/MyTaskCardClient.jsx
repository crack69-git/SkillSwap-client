import React from "react";
import { Button, Card, CloseButton } from "@heroui/react";
const MyTaskCardClient = () => {
  return (
    <div>
      <Card className="w-full items-stretch md:flex-row border">
        <div className="flex flex-1 flex-col gap-3">
          <Card.Header className="gap-1">
            <p className=" w-fit px-4 rounded-4xl bg-yellow-200">in-progress</p>
            <Card.Title className="pr-8 text-xl font-bold">Title</Card.Title>
            <Card.Description>
              Lorem ipsum dolor sit amet consectetur. Sed arcu donec id aliquam
              dolor sed amet faucibus etiam.
            </Card.Description>
          </Card.Header>
          <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-foreground">
                $<span className="text-xl font-bold">40.00</span>
              </span>
              <span className="text-xs text-muted">
                Submission ends deadline date.
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button variant="outline" size="sm">
                Edit Task
              </Button>
              <Button
                variant="primary"
                size="sm"
                className="ml-2 bg-red-500 hover:bg-red-600"
              >
                Delete Task
              </Button>
            </div>
          </Card.Footer>
        </div>
      </Card>
    </div>
  );
};

export default MyTaskCardClient;
