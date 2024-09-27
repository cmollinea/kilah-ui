import { StyledLink } from "./styled-link";

export const LinksCollectionContainer = () => {
  return (
    <div className="space-x-6 font-medium max-[1050px]:hidden">
      <LinksColection />
    </div>
  );
};

export const LinksColection = ({ linkStyles }: { linkStyles?: string }) => {
  return (
    <>
      <StyledLink className={linkStyles} href="/about">
        About
      </StyledLink>
      <StyledLink className={linkStyles} href="/gratitudes">
        Gratitudes
      </StyledLink>
      <StyledLink
        className={linkStyles}
        target="_blank"
        rel="noopener noreferrer"
        href={"https://countinkly.vercel.app/wfsZpe6X6W?source=KilahUI"}
      >
        Need a website?
      </StyledLink>
    </>
  );
};
