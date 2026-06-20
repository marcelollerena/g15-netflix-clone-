import { useState } from "react";
import { signIn } from "../services/sign-in";
import type { UserLoginData } from "../types/types";
import { useUserStore } from "@/common/store/user-store";
import { useNavigate } from "react-router";

export function useSignIn() {
  const navigate = useNavigate();
  const { setToken } = useUserStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const handleSubmit = (props: UserLoginData) => {
    const { username, password } = props;
    setLoading(true);

    signIn({ username, password })
      .then((data) => {
        setToken(data.token);
        navigate("/");
      })
      .catch(setError)
      .finally(() => setLoading(false));
  };

  return {
    error,
    loading,
    handleSubmit,
  };
}
