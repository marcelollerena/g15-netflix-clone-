import { NavLink } from "react-router";
import type { LinkItemType } from "./routes/paths";

type Props = LinkItemType;

export function LinkItem(props: Props) {
  const { label, to } = props;

  const defaultLinkStyle =
    "bg-neutral-100/5 flex items-center justify-center font-semibold p-2 rounded-lg";

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `${defaultLinkStyle} bg-white text-neutral-900`
          : defaultLinkStyle
      }
    >
      {label}
    </NavLink>
  );
}
