"use client";
import { patchUser } from "@/lib/actions/admin";
import { getToken } from "@/lib/actions/tokenGet";
import { Button, Modal, Table } from "@heroui/react";
import { Rocket } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Bounce, toast } from "react-toastify";

const ManageUsers = ({ user }) => {
  const router = useRouter();
  const handleUserStateChange = async (userId, userState) => {
    const token = await getToken();
    const newState = userState === "unblocked" ? "blocked" : "unblocked";
    const res = await patchUser(userId, { userState: newState }, token);
    if (res.success) {
      toast.success(`User has been ${newState}`, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      router.refresh();
    } else {
      toast.error("Failed to update user state", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  return (
    <Table.Row>
      <Table.Cell>{user.name}</Table.Cell>
      <Table.Cell>{user.role}</Table.Cell>

      <Table.Cell>{user.email}</Table.Cell>
      <Table.Cell>
        {user.role !== "admin" && (
          <Modal>
            <Button variant="secondary">
              {user.userState === "unblocked" ? "Block User" : "Unblock User"}
            </Button>
            <Modal.Backdrop>
              <Modal.Container>
                <Modal.Dialog className="sm:max-w-[360px]">
                  <Modal.CloseTrigger />
                  <Modal.Header>
                    <Modal.Icon className="bg-default text-foreground">
                      <Rocket className="size-5" />
                    </Modal.Icon>
                    <Modal.Heading>
                      {" "}
                      {user.userState === "unblocked"
                        ? "Block"
                        : "Unblock"}{" "}
                      User
                    </Modal.Heading>
                  </Modal.Header>
                  <Modal.Body>
                    <p>
                      Currently, this user is {user.userState}. Are you sure you
                      want to{" "}
                      {user.userState === "unblocked" ? "block" : "unblock"}{" "}
                      this user?
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      size="sm"
                      type="close"
                      onClick={() =>
                        handleUserStateChange(user._id, user.userState)
                      }
                    >
                      {user.userState === "unblocked"
                        ? "Block User"
                        : "Unblock User"}
                    </Button>
                  </Modal.Footer>
                </Modal.Dialog>
              </Modal.Container>
            </Modal.Backdrop>
          </Modal>
        )}
      </Table.Cell>
    </Table.Row>
  );
};

export default ManageUsers;
