"use client";

import { useClickOut } from "@/hooks/use-click-out";
import { useEffect, useRef, useState } from "react";
import { SearchResultsBox } from "./search-results";

export const SearchForm = () => {
  const [showResultsBox, setShowResultsBox] = useState(false);
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [query, setQuery] = useState("");
  const containerRef = useRef(null);
  const boxRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const handleTimeout = setTimeout(() => {
      setQuery(debouncedQuery);
    }, 200);

    return () => {
      clearTimeout(handleTimeout);
    };
  }, [debouncedQuery]);

  const handleInputFocus = () => {
    setShowResultsBox(true);
  };

  const closeBox = () => {
    if (boxRef.current) {
      boxRef.current.classList.remove("animate-fade-in");
      boxRef.current.classList.add("animate-fade-out");
    }
    setTimeout(() => {
      setShowResultsBox(false);
    }, 400);
  };

  useClickOut(containerRef, closeBox);

  return (
    <div
      ref={containerRef}
      className="relative border-r border-foreground/50 pr-3"
    >
      <form role="search" className="relative">
        <div className="absolute right-0 flex h-full place-content-center items-center pr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="text-accent/40"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
        </div>
        <input
          role="searchbox"
          onChange={(e) => setDebouncedQuery(e.target.value)}
          onFocus={handleInputFocus}
          placeholder="Search components"
          className="flex items-center rounded-md border-none bg-stone-900 pl-2 pr-10 ring-1 ring-accent/10 transition placeholder:text-accent/40 focus:outline-none focus:ring-primary max-md:max-w-[150px] max-md:text-sm max-md:placeholder:text-xs"
          type="text"
        />
      </form>

      {showResultsBox && <SearchResultsBox ref={boxRef} query={query} />}
    </div>
  );
};
