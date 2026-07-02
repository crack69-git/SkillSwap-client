import { Table } from "@heroui/react";
import React from "react";

const EarningPage = ({ payment }) => {
  return (
    <Table.Row>
      <Table.Cell>{payment.taskTitle}</Table.Cell>
      <Table.Cell>{payment.clientId}</Table.Cell>
      <Table.Cell>{payment.amount_received}</Table.Cell>

      <Table.Cell>{payment.deadline}</Table.Cell>
    </Table.Row>
  );
};

export default EarningPage;
