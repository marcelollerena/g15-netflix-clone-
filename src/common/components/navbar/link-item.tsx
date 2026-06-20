import { Link } from "react-router";
import type { LinkItemType } from "./routes/paths";

type Props = LinkItemType;

export function LinkItem(props: Props) {
  const { label, to } = props;
  return (
    <Link
      to={to}
      className="bg-neutral-100/5 flex items-center justify-center font-semibold p-2 rounded-lg "
    >
      {label}
    </Link>
  );
}
