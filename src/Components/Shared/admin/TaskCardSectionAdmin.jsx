"use client";
import { deleteTask, patchTask } from "@/lib/actions/admin";
import { Button, Table } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";

const TaskCardSectionAdmin = ({ task }) => {
  const router = useRouter();
  const handleAcceptRequest = async (taskId, currentState) => {
    console.log("Task ID:", taskId);
    console.log("Current State:", currentState);
    const newState = currentState === "pending" ? "accepted" : "pending";
    const res = await patchTask(taskId, { state: newState });
    if (res.success) {
      alert(`Task state updated to ${newState}`);
      router.refresh();
    } else {
      alert("Failed to update task state");
    }
  };
  const handleDeleteRequest = async (taskId) => {
    const res = await deleteTask(taskId);
    if (res.success) {
      alert("Task deleted successfully");
      router.refresh();
    } else {
      alert("Failed to delete task");
    }
  };
  return (
    <Table.Row>
      <Table.Cell>{task.TaskTitle}</Table.Cell>
      <Table.Cell>{task.clientName}</Table.Cell>
      <Table.Cell>{task.description}</Table.Cell>
      <Table.Cell>{task.state}</Table.Cell>
      <Table.Cell>${task.budget}</Table.Cell>
      <Table.Cell>
        <Button
          size="sm"
          variant="light"
          onClick={() => handleAcceptRequest(task._id, task.state)}
        >
          {task.state === "pending" ? "Accept Request" : "Request Accepted"}
        </Button>
        <Button
          size="sm"
          variant="light"
          onClick={() => handleDeleteRequest(task._id)}
        >
          Delete Post
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default TaskCardSectionAdmin;
