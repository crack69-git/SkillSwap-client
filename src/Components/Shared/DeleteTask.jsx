"use client";
import React from "react";
import { Button, Modal } from "@heroui/react";
import { RiDeleteBin6Line } from "react-icons/ri";
const DeleteTask = ({ tasks }) => {
  const handleDelete = async () => {
    console.log("Delete task logic goes here");
  };
  return (
    <Modal>
      <Button variant="danger">Delete Task</Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[360px]">
            <Modal.CloseTrigger className="size-5" />
            <Modal.Header>
              <Modal.Icon className="bg-default text-foreground">
                <RiDeleteBin6Line />
              </Modal.Icon>
              <Modal.Heading className="text-red-500">
                Delete Task
              </Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <p>
                Are you sure you want to delete this task? This action cannot be
                undone.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleDelete} className="w-full" slot="close">
                Continue
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default DeleteTask;
