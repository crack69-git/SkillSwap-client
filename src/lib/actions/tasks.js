"use server";
export const getFeatureTasks = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/open/feature/open/task`,
    {
      method: "GET",
    },
  );
  return res.json();
};

export const createTask = async (data, token) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const getTasks = async (token) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tasks/get`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return res.json();
};

export const getAllProposalById = async (id, token) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/proposals/client/${id}`,
    {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  if (!res.ok) {
    throw new Error("Failed to fetch proposals");
  }

  return res.json();
};

export const patchProposal = async (token, proposalId, status) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/proposals/reject/${proposalId}`,
    {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,
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
