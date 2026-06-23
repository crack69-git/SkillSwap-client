"use server";
export const getOpenTasks = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/open`, {
    method: "GET",
  });
  return res.json();
};
export const getSingleTask = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/open/${id}`, {
    method: "GET",
  });
  return res.json();
};

export const submitProposal = async (proposalData) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/proposals`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(proposalData),
  });
  return res.json();
};

export const getFreelancerProposals = async (freelancerId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/proposals/${freelancerId}`,
    {
      method: "GET",
    },
  );
  return res.json();
};

export const getProposals = async (mail) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/getprop/${encodeURIComponent(mail)}`,
    {
      method: "GET",
    },
  );
  return res.json();
};
