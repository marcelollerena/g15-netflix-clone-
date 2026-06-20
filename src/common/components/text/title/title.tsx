import clsx from "clsx";

type TitleSize = "sm" | "md" | "lg" | "xl";
type TitleWeight = "normal" | "medium" | "semibold" | "bold";

const sizeClasses: Record<TitleSize, string> = {
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
};

const weightClasses: Record<TitleWeight, string> = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

interface Props {
  size?: TitleSize;
  className?: string;
  weight?: TitleWeight;
  children: React.ReactNode;
}

export function Title(props: Props) {
  const { size = "lg", weight = "bold", className, children } = props;

  return (
    <h2
      className={clsx(
        "text-neutral-200 leading-normal",
        sizeClasses[size],
        weightClasses[weight],
        className,
      )}
    >
      {children}
    </h2>
  );
}
