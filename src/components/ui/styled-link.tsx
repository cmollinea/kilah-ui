import { cn } from "@/lib/utils";
import Link from "next/link";
import { HTMLAttributeAnchorTarget } from "react";

type Props = {
  className: string;
  href: string;
  children: React.ReactNode;
  target?: HTMLAttributeAnchorTarget;
  rel?: string;
};

export const StyledLink = ({
  className,
  href,
  children,
  target,
  rel,
}: Props) => {
  return (
    <Link
      rel={rel}
      target={target}
      className={cn("transition ease-in-out hover:text-primary", className)}
      href={href || "#"}
    >
      {children}
    </Link>
  );
};
