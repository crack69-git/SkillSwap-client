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
