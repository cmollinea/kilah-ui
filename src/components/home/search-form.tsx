"use client";

import { useClickOut } from "@/hooks/use-click-out";
import { useEffect, useRef, useState } from "react";
import { SearchResultsBox } from "./search-results";

export const SearchForm = () => {
  const [showResultsBox, setShowResultsBox] = useState(false);
  const [makeAnimation, setMakeAnimation] = useState(false);
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [query, setQuery] = useState("");
  const containerRef = useRef(null);
  const inputRef = useRef<null | HTMLInputElement>(null);

  const handleInputFocus = () => {
    setShowResultsBox(true);
  };

  const closeBox = () => {
    setMakeAnimation(true);
  };

  useClickOut(containerRef, closeBox);

  useEffect(() => {
    const handleKeyComb = (e: KeyboardEvent) => {
      if (e.altKey && e.key === "k" && inputRef.current) {
        if (showResultsBox) {
          inputRef.current.blur();
          setShowResultsBox(false);
        } else {
          inputRef.current.focus();
          setShowResultsBox(true);
        }
      }
    };

    window.addEventListener("keydown", handleKeyComb);
    return () => window.removeEventListener("keydown", handleKeyComb);
  }, [showResultsBox]);

  useEffect(() => {
    const handleTimeout = setTimeout(() => {
      setQuery(debouncedQuery);
    }, 200);

    return () => {
      clearTimeout(handleTimeout);
    };
  }, [debouncedQuery]);

  useEffect(() => {
    if (makeAnimation) {
      const timeout = setTimeout(() => {
        setShowResultsBox(false);
        setMakeAnimation(false);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [makeAnimation]);

  return (
    <div
      ref={containerRef}
      className="relative border-r border-foreground/50 pr-3"
    >
      <form role="search" className="relative">
        <div className="absolute right-0 flex h-full place-content-center items-center pr-1">
          <div className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-accent/40"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
          </div>
          <div className="hidden items-center gap-0.5 text-[0.6rem] font-bold md:flex md:text-xs">
            <kbd className="block rounded-md bg-card-background p-1 ring-1 ring-inset ring-accent/20">
              alt
            </kbd>
            <span className="block">+</span>
            <kbd className="block rounded-md bg-card-background p-1 ring-1 ring-inset ring-accent/20">
              k
            </kbd>
          </div>
        </div>
        <input
          ref={inputRef}
          role="searchbox"
          onChange={(e) => setDebouncedQuery(e.target.value)}
          onFocus={handleInputFocus}
          placeholder="Search components"
          className="flex items-center rounded-md border-none bg-stone-900 pl-2 pr-10 ring-1 ring-accent/10 transition placeholder:text-accent/40 focus:outline-none focus:ring-primary max-md:max-w-[150px] max-md:text-sm max-md:placeholder:text-xs md:pr-16"
          type="text"
        />
      </form>

      {showResultsBox && (
        <SearchResultsBox makeAnimation={makeAnimation} query={query} />
      )}
    </div>
  );
};
