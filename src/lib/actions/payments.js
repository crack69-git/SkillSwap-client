"use server";

export const createPayment = async (paymentData, token) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/payments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(paymentData),
  });
  return res.json();
};

export const patchTaskStatus = async (token, taskId, statusData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/tasks/status/${taskId}`,
    {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(statusData),
    },
  );
  return res.json();
};

export const getAccepterProposals = async (freelancerEmail, token) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/proposals/freelancer/${encodeURIComponent(
      freelancerEmail,
    )}`,
    {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  return res.json();
};

export const getFreelancerPayments = async (freelancerEmail, token) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/payments/sum/${encodeURIComponent(freelancerEmail)}`,
    {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  return res.json();
};

export const getAllPayments = async (token) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/payments/all`,
    {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  return res.json();
};
