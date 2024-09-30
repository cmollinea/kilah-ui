import { StyledLink } from "../ui/styled-link";

export const LinksCollectionContainer = () => {
  return (
    <div className="space-x-6 font-medium max-[1100px]:hidden">
      <LinksColection />
    </div>
  );
};

export const LinksColection = ({ linkStyles }: { linkStyles?: string }) => {
  return (
    <>
      <StyledLink
        className={`${linkStyles ? linkStyles : ""} group min-[1100px]:hidden`}
        href="/"
      >
        <span className="block transition-transform ease-in-out group-hover:scale-110 min-[1100px]:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
          </svg>
        </span>
        Home
      </StyledLink>
      <StyledLink
        className={`${linkStyles ? linkStyles : ""} group`}
        href="/about"
      >
        <span className="block transition-transform ease-in-out group-hover:scale-110 min-[1100px]:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19 2a3 3 0 0 1 2.995 2.824l.005 .176v14a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005h14zm-7 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" />
          </svg>
        </span>
        About
      </StyledLink>
      <StyledLink
        className={`${linkStyles ? linkStyles : ""} group`}
        href="/gratitudes"
      >
        <span className="block transition-transform ease-in-out group-hover:scale-110 min-[1100px]:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" />
          </svg>
        </span>
        Gratitudes
      </StyledLink>
      <StyledLink
        className={`${linkStyles ? linkStyles : ""} group`}
        href="/contribute"
      >
        <span className="block transition-transform ease-in-out group-hover:scale-110 min-[1100px]:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M17 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M7 8l0 8" />
            <path d="M9 18h6a2 2 0 0 0 2 -2v-5" />
            <path d="M14 14l3 -3l3 3" />
          </svg>
        </span>
        Contribute
      </StyledLink>
      <StyledLink
        className={`${linkStyles ? linkStyles : ""} group inline-flex`}
        target="_blank"
        rel="noopener noreferrer"
        href={"https://countinkly.vercel.app/wfsZpe6X6W?source=KilahUI"}
      >
        <span className="block transition-transform ease-in-out group-hover:scale-110 min-[1100px]:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
            <path d="M11 13l9 -9" />
            <path d="M15 4h5v5" />
          </svg>
        </span>
        <span className="flex w-full items-center">
          Need a website?
          <span className="hidden min-[1050px]:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M17 7l-10 10" />
              <path d="M8 7l9 0l0 9" />
            </svg>
          </span>
        </span>
      </StyledLink>
    </>
  );
};
