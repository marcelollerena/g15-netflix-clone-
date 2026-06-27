import React, { type ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
}

export function ButtonStats(props: Props) {
  const { children, ...rest } = props;

  return (
    <button
      className="h-16 w-16 flex flex-col gap-1 text-xs items-center justify-center text-neutral-300"
      {...rest}
    >
      {children}
    </button>
  );
}
