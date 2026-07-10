"use client";
import { patchUser } from "@/lib/actions/admin";
import { getToken } from "@/lib/actions/tokenGet";
import { Button, Modal, Table } from "@heroui/react";
import { Rocket } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { Bounce, toast } from "react-toastify";

const ManageUsers = ({ user }) => {
  const router = useRouter();

  // Guard clause against empty row evaluations
  if (!user) return null;

  const currentStatus = user?.userState || "unblocked";

  const handleUserStateChange = async (userId, userState) => {
    try {
      const token = await getToken();
      const newState = userState === "unblocked" ? "blocked" : "unblocked";
      const res = await patchUser(userId, { userState: newState }, token);

      if (res && res.success) {
        toast.success(`User has been ${newState}`, {
          position: "top-center",
          autoClose: 1000,
          theme: "light",
          transition: Bounce,
        });
        router.refresh();
      } else {
        throw new Error("Action failed");
      }
    } catch (err) {
      toast.error("Failed to update user state", {
        position: "top-center",
        autoClose: 1000,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <Table.Row>
      <Table.Cell>{user?.name || "Unknown Name"}</Table.Cell>
      <Table.Cell>{user?.role || "user"}</Table.Cell>
      <Table.Cell>{user?.email || "No Email Provided"}</Table.Cell>
      <Table.Cell>
        {user?.role !== "admin" && (
          <Modal>
            <Button variant="secondary">
              {currentStatus === "unblocked" ? "Block User" : "Unblock User"}
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
                      {currentStatus === "unblocked" ? "Block" : "Unblock"} User
                    </Modal.Heading>
                  </Modal.Header>
                  <Modal.Body>
                    <p>
                      Currently, this user is {currentStatus}. Are you sure you
                      want to{" "}
                      {currentStatus === "unblocked" ? "block" : "unblock"} this
                      user?
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      size="sm"
                      onClick={() =>
                        handleUserStateChange(user._id, currentStatus)
                      }
                    >
                      {currentStatus === "unblocked"
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
