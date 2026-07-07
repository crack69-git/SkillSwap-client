import EarningPage from "@/Components/Shared/freelancer/EarningPage";
import { getFreelancerPayments } from "@/lib/actions/payments";
import { getToken } from "@/lib/actions/tokenGet";
import { auth } from "@/lib/auth";
import { Table } from "@heroui/react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session?.user?.role !== "freelancer") {
    redirect("/unauthorize");
  }
  if (session?.user?.userStatus === "blocked") {
    redirect("/access-blocked");
  }
  const mail = session?.user?.email;
  const token = await getToken();
  const data = await getFreelancerPayments(mail, token);

  return (
    <div className="w-11/12 mx-auto my-5">
      <h1 className="text-2xl font-bold mb-5">My Earnings</h1>
      <Table variant="secondary">
        <Table.ScrollContainer>
          <Table.Content aria-label="Team members" className="">
            <Table.Header>
              <Table.Column isRowHeader>Task Title</Table.Column>
              <Table.Column>Client Name</Table.Column>
              <Table.Column>Amount Made</Table.Column>

              <Table.Column>Completion Date</Table.Column>
            </Table.Header>
            <Table.Body>
              {data.payments.map((payment) => (
                <EarningPage key={payment._id} payment={payment} />
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default page;
