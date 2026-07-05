import TaskCardSectionAdmin from "@/Components/Shared/admin/TaskCardSectionAdmin";
import { getTasks } from "@/lib/actions/tasks";
import { auth } from "@/lib/auth";
import { Table } from "@heroui/react";
import { headers } from "next/headers";
import React from "react";

const ManagetasksPage = async () => {
  const token = await auth.api.getToken({
    headers: await headers(), // pass request headers
  });
  console.log("Token:", token);
  const task = await getTasks();
  console.log("All Tasks:", task);
  return (
    <div className="w-11/12 mx-auto my-5">
      <h2 className="text-3xl font-bold">Manage Tasks</h2>
      <div className="mt-5">
        <Table variant="secondary">
          <Table.ScrollContainer>
            <Table.Content aria-label="Team members" className="min-w-[600px]">
              <Table.Header>
                <Table.Column isRowHeader>Titile</Table.Column>
                <Table.Column>Client Name</Table.Column>
                <Table.Column>Description</Table.Column>
                <Table.Column>State</Table.Column>
                <Table.Column>Price</Table.Column>
                <Table.Column>Action</Table.Column>
              </Table.Header>
              <Table.Body>
                {task.map((t, index) => (
                  <TaskCardSectionAdmin key={index} task={t} />
                ))}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </div>
    </div>
  );
};

export default ManagetasksPage;
