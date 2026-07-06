"use client";
import { deleteTask, patchTask } from "@/lib/actions/admin";
import { Button, Modal, Table } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";

const TaskCardSectionAdmin = ({ task, token }) => {
  const router = useRouter();
  const handleAcceptRequest = async (taskId, currentState) => {
    console.log("Task ID:", taskId);
    console.log("Current State:", currentState);
    const newState = currentState === "pending" ? "accepted" : "pending";
    const res = await patchTask(taskId, { state: newState }, token);
    if (res.success) {
      alert(`Task state updated to ${newState}`);
      router.refresh();
    } else {
      alert("Failed to update task state");
    }
  };
  const handleDeleteRequest = async (taskId) => {
    const res = await deleteTask(taskId, token);
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
        <div className="flex flex-col items-center justify-center gap-2">
          {task.state === "pending" ? (
            <Modal disabled>
              <Button variant="secondary" disabled>
                Accept Request
              </Button>
              <Modal.Backdrop>
                <Modal.Container>
                  <Modal.Dialog className="sm:max-w-[360px]">
                    <Modal.CloseTrigger />
                    <Modal.Header>
                      <Modal.Icon className="bg-default text-foreground"></Modal.Icon>
                      <Modal.Heading>Accept Task</Modal.Heading>
                    </Modal.Header>
                    <Modal.Body>
                      <p>
                        Are you sure you want to accept this task request? This
                        action cannot be undone.
                      </p>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        size="sm"
                        variant="Secondary"
                        disabled={task.state === "accepted"}
                        onClick={() =>
                          handleAcceptRequest(task._id, task.state)
                        }
                      >
                        Accept Request
                      </Button>
                    </Modal.Footer>
                  </Modal.Dialog>
                </Modal.Container>
              </Modal.Backdrop>
            </Modal>
          ) : (
            <p className="text-green-500 w-fit px-4 rounded-4xl py-3 ">
              Accepted
            </p>
          )}
          <Modal>
            <Button variant="danger">Delete Task</Button>
            <Modal.Backdrop>
              <Modal.Container>
                <Modal.Dialog className="sm:max-w-[360px]">
                  <Modal.CloseTrigger />
                  <Modal.Header>
                    <Modal.Heading>Delete Task</Modal.Heading>
                  </Modal.Header>
                  <Modal.Body>
                    <p>
                      Are you sure you want to delete this task? This action
                      cannot be undone.
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => handleDeleteRequest(task._id)}
                    >
                      Delete Post
                    </Button>
                  </Modal.Footer>
                </Modal.Dialog>
              </Modal.Container>
            </Modal.Backdrop>
          </Modal>
        </div>
      </Table.Cell>
    </Table.Row>
  );
};

export default TaskCardSectionAdmin;
