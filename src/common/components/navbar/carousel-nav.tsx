import { LinkItem } from "./link-item";
import { links } from "./routes/paths";

export function CarouselNav() {
  return (
    <nav className="flex justify-start gap-4 h-10">
      {links.map((link, index) => (
        <LinkItem {...link} key={index} />
      ))}
    </nav>
  );
}
