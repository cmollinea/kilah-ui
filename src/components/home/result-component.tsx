import { ResultComponent } from "../../../types";

type Props = {
  component: ResultComponent;
  categorySlug: string;
};

export const ResultComponentLink = ({ component, categorySlug }: Props) => {
  return (
    <a
      href={`/${categorySlug}#${component.fileName}`}
      className="group flex items-center justify-between rounded-md p-1.5 ring-1 ring-inset ring-transparent transition ease-in hover:bg-accent/5 hover:ring-accent/10"
    >
      <span className="block">{component.title}</span>
      <span className="invisible block -translate-x-2 text-accent/50 transition group-hover:visible group-hover:translate-x-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 6l6 6l-6 6" />
        </svg>
      </span>
    </a>
  );
};
