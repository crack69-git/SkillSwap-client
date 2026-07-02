"use server";

export const createTask = async (data) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const getTasks = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tasks`, {
    method: "GET",
  });
  return res.json();
};

export const getAllProposalById = async (id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/proposals/client/${id}`,
    {
      method: "GET",
    },
  );
  console.log("Fetched Proposals:", res);
  return res.json();
};

export const patchProposal = async (proposalId, status) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/proposals/${proposalId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(status),
    },
  );
  return res.json();
};

export const getFreelancer = async (name = "", skill = "") => {
  const params = new URLSearchParams();

  if (name) params.append("name", name);
  if (skill) params.append("skill", skill);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/user/freelancer?${params.toString()}`,
    {
      method: "GET",
      cache: "no-store",
    },
  );

  return res.json();
};
