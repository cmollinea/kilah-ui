import Link from "next/link";

export const StyledLink = (
  props: React.AnchorHTMLAttributes<HTMLAnchorElement>,
) => {
  return (
    <Link
      className="transition ease-in-out hover:text-primary"
      {...props}
      href={props.href || "#"}
    >
      {props.children}
    </Link>
  );
};
