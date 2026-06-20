import { domains } from "@/common/constants/domains/domains";
import type { PromiseResponse, UserLoginData } from "../types/types";

const domain = domains.fakestore;

export const signIn = async (
  props: UserLoginData,
): Promise<PromiseResponse> => {
  const { password, username } = props;

  const credentials = { username, password };

  const response = await fetch(`${domain}/auth/login`, {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error("username or password are incorrect");
  }

  return response.json();
};
