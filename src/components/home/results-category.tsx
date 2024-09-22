import { ResultCategory } from "../../../types";

type Props = {
  category: ResultCategory;
  totalResults: number;
  children: React.ReactNode;
};
export const ResultsCategory = ({
  category,
  totalResults,
  children,
}: Props) => {
  return (
    <div className="animate-fade-in opacity-0">
      <div className="flex items-center justify-between">
        <div className="space-x-1">
          <img
            src={`/components/${category.slug}/icon.png`}
            alt=""
            className="inline-block h-6 w-6"
          />
          <p className="inline-block font-medium opacity-80">
            {category.title}
          </p>
        </div>
        <div>
          <small className="font-medium opacity-60">
            {totalResults} components
          </small>
        </div>
      </div>
      <div className="mt-1 h-[1px] w-full bg-accent/5"></div>
      <div className="mt-2">{children}</div>
    </div>
  );
};
