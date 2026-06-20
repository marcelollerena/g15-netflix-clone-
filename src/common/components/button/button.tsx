import type { ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
  customClass: string;
}

export function Button(props: Props) {
  const { children, customClass } = props;

  return (
    <button
      className={`bg-red-600 h-12 w-full text-center text-neutral-200 rounded-lg ${customClass}`}
      {...props}
    >
      {children}
    </button>
  );
}
