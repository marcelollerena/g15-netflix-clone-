import { useState } from "react";

import bgImage from "@/assets/movies-background.webp";

import { Input } from "@/common/components/input/input";
import { Button } from "@/common/components/button/button";
import { Title } from "@/common/components/text/title/title";
import { useSignIn } from "../hooks/use-sign-in";
import { LoaderCircle } from "lucide-react";

export function SignInPage() {
  const { handleSubmit, loading, error } = useSignIn();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="relative h-screen w-screen">
      <img
        src={bgImage}
        className="absolute w-full h-full object-cover -z-10"
      />
      <div className="flex justify-center items-center w-full h-full p-4 bg-black/70">
        <div className="flex flex-col gap-6 w-full bg-black/70 px-4 py-6">
          <Title weight="bold" className="text-[24px]">
            Sign In
          </Title>
          <form className="flex flex-col gap-4">
            <Input
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="text-red-600/50">{error.message}</p>}

            <Button
              type="button"
              onClick={() => handleSubmit({ username, password })}
              customClass="mt-4"
            >
              {loading && (
                <LoaderCircle className="text-neutral-200 animate-spin mx-auto" />
              )}

              {!loading && "Sign In"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
