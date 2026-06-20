import type { ComponentPropsWithoutRef } from "react";

export function Input(props: ComponentPropsWithoutRef<"input">) {
  return (
    <input
      {...props}
      className="bg-neutral-800 h-12 w-full rounded-md text-neutral-200 placeholder:text-neutral-500 px-4 caret-neutral-500 focus:outline-0"
    />
  );
}
