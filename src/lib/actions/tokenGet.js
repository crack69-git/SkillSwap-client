"use server";

import { headers } from "next/headers";
import { auth } from "../auth";

export const getToken = async () => {
  const token = await auth.api.getToken({
    headers: await headers(), // pass request headers
  });
  return token.token; // extract the token from the response
};
