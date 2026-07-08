import React from "react";
import { Button, Card, CloseButton } from "@heroui/react";

const MyTaskCardClient = async ({ tasks }) => {
  return (
    <Card className="w-full items-stretch md:flex-row border">
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <p
            className={`w-fit px-4 rounded-4xl ${
              tasks.status === "Open"
                ? "bg-purple-200 dark:bg-purple-500"
                : tasks.status === "In Progress"
                  ? "bg-yellow-200 dark:bg-yellow-500"
                  : "bg-green-200 dark:bg-green-500"
            } mb-5`}
          >
            {tasks.status}
          </p>
          <Card.Title className="pr-8 text-xl font-bold">
            {tasks.TaskTitle}
          </Card.Title>
          <Card.Description>{tasks.description}</Card.Description>
        </Card.Header>
        <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">
              $<span className="text-xl font-bold">{tasks.budget}</span>
            </span>
            <span className="text-xs text-muted">
              Deadline {tasks.deadline}.
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
  );
};

export default MyTaskCardClient;
