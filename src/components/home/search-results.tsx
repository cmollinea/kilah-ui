import { RefObject, useEffect, useState } from "react";
import { SearchResult } from "../../../types";
import { NoResults } from "./no-results";
import { ResultComponentLink } from "./result-component";
import { ResultsCategory } from "./results-category";

type Props = {
  query: string;
  ref: RefObject<HTMLDivElement>;
};

export const SearchResultsBox = ({ ref, query }: Props) => {
  const [results, setResults] = useState<null | SearchResult>(null);
  const [loading, setLoading] = useState(false);
  console.log(query);

  useEffect(() => {
    const searchByQuery = async () => {
      setLoading(true);
      const res = await fetch(
        query && query !== " " ? `/api/search?q=${query}` : "/api/search",
        { cache: "no-store" },
      );
      const data: SearchResult = await res.json();
      console.log(data);

      setResults(data);
      setLoading(false);
    };
    searchByQuery();
  }, [query]);

  return (
    <div
      ref={ref}
      className="absolute right-0 mt-2 h-80 w-80 animate-fade-in overflow-y-auto rounded-md bg-card-background px-4 pb-6 pt-2 opacity-0 ring-1 ring-inset ring-accent/10"
    >
      {loading ? (
        <div className="flex h-full w-full place-content-center items-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-accent/5 border-t-primary"></div>
        </div>
      ) : results && results.totalResults > 0 ? (
        <div className="space-y-4">
          <p className="mb-6 text-center text-xs opacity-50">
            {results.totalResults} component/s founded
          </p>
          {results?.results.map((category) => (
            <ResultsCategory
              key={category.slug}
              category={{ title: category.title, slug: category.slug }}
              totalResults={category.components.length}
            >
              {category.components.map((component) => (
                <ResultComponentLink
                  component={component}
                  categorySlug={category.slug}
                  key={component.fileName}
                />
              ))}
            </ResultsCategory>
          ))}
        </div>
      ) : (
        <NoResults />
      )}
    </div>
  );
};
