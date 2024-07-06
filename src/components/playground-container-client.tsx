"use client";
import { componentPreviewHtml, componentPreviewJsx } from "@/lib/transformer";
import { useState } from "react";
import { Clipboard } from "./clipboard";
import { Code } from "./code";
import {
  CodeIcon,
  Desktop,
  Full,
  Html,
  Jsx,
  Laptop,
  Phone,
  Sparkles,
  Tablet,
} from "./icons";

type Props = {
  code: string;
  highlightedHtml: string;
  highlightedJsx: string;
  container: string;
};

type ShowState = "playground" | "codeBlock";
type SelectedLanguaje = "html" | "jsx";
type BreakPoint = "400px" | "684px" | "748px" | "1024px" | "1280px";

export const ClientPlaygroundContainer = ({
  code,
  highlightedHtml,
  highlightedJsx,
  container,
}: Props) => {
  const [componentToShow, setComponentToShow] =
    useState<ShowState>("playground");
  const [selectedLang, setSelectedLang] = useState<SelectedLanguaje>("html");
  const [breakPoint, setBreakPoint] = useState<BreakPoint>("1280px");
  const htmlToRender = componentPreviewHtml(code);

  const handleComponent = () => {
    if (componentToShow === "codeBlock") {
      setComponentToShow("playground");
    } else {
      setComponentToShow("codeBlock");
    }
  };

  const handleLang = () => {
    if (selectedLang === "html") {
      setSelectedLang("jsx");
    } else {
      setSelectedLang("html");
    }
  };

  return (
    <section className="flex w-full max-w-[1280px] flex-col text-foreground">
      <div className="mb-4 flex w-full justify-between space-x-4 font-medium">
        <div className="flex items-center space-x-4 max-lg:hidden">
          <button
            aria-label={`Set Breakpoint to ${breakPoint}`}
            aria-disabled={componentToShow === "codeBlock"}
            disabled={componentToShow === "codeBlock"}
            className={`flex place-content-center items-center rounded-md border border-foreground/10 px-2 py-1 transition-all ease-out active:scale-[96%] disabled:cursor-not-allowed disabled:bg-gray-800 disabled:opacity-50 ${componentToShow !== "codeBlock" && breakPoint === "400px" ? "bg-primary/60 shadow-inner shadow-black" : "border-transparent bg-primary"}`}
            onClick={() => setBreakPoint("400px")}
          >
            <Phone />
          </button>
          <button
            aria-label={`Set Breakpoint to ${breakPoint}`}
            aria-disabled={componentToShow === "codeBlock"}
            disabled={componentToShow === "codeBlock"}
            className={`flex place-content-center items-center rounded-md border border-foreground/10 px-2 py-1 transition-all ease-out active:scale-[96%] disabled:cursor-not-allowed disabled:bg-gray-800 disabled:opacity-50 ${componentToShow !== "codeBlock" && breakPoint === "684px" ? "bg-primary/60 shadow-inner shadow-black" : "border-transparent bg-primary"}`}
            onClick={() => setBreakPoint("684px")}
          >
            <Tablet />
          </button>
          <button
            aria-label={`Set Breakpoint to ${breakPoint}`}
            aria-disabled={componentToShow === "codeBlock"}
            disabled={componentToShow === "codeBlock"}
            className={`flex place-content-center items-center rounded-md border border-foreground/10 px-2 py-1 transition-all ease-out active:scale-[96%] disabled:cursor-not-allowed disabled:bg-gray-800 disabled:opacity-50 ${componentToShow !== "codeBlock" && breakPoint === "748px" ? "bg-primary/60 shadow-inner shadow-black" : "border-transparent bg-primary"}`}
            onClick={() => setBreakPoint("748px")}
          >
            <Laptop />
          </button>
          <button
            aria-label={`Set Breakpoint to ${breakPoint}`}
            aria-disabled={componentToShow === "codeBlock"}
            disabled={componentToShow === "codeBlock"}
            className={`flex place-content-center items-center rounded-md border border-foreground/10 px-2 py-1 transition-all ease-out active:scale-[96%] disabled:cursor-not-allowed disabled:bg-gray-800 disabled:opacity-50 ${componentToShow !== "codeBlock" && breakPoint === "1024px" ? "bg-primary/60 shadow-inner shadow-black" : "border-transparent bg-primary"}`}
            onClick={() => setBreakPoint("1024px")}
          >
            <Desktop />
          </button>
          <button
            aria-label={`Set Breakpoint to ${breakPoint}`}
            aria-disabled={componentToShow === "codeBlock"}
            disabled={componentToShow === "codeBlock"}
            className={`flex place-content-center items-center rounded-md border border-foreground/10 px-2 py-1 transition-all ease-out active:scale-[96%] disabled:cursor-not-allowed disabled:bg-gray-800 disabled:opacity-50 ${componentToShow !== "codeBlock" && breakPoint === "1280px" ? "bg-primary/60 shadow-inner shadow-black" : "border-transparent bg-primary"}`}
            onClick={() => setBreakPoint("1280px")}
          >
            <Full />
          </button>
        </div>
        <div className="flex items-center space-x-4">
          {componentToShow === "codeBlock" && (
            <Clipboard
              text={
                selectedLang === "html"
                  ? code
                  : componentPreviewJsx(htmlToRender)
              }
            />
          )}
          <button
            aria-disabled={componentToShow === "playground"}
            aria-label={`Set code to show to ${selectedLang}`}
            disabled={componentToShow === "playground"}
            className="flex w-24 place-content-center items-center space-x-1 rounded-md bg-primary px-2 py-1 transition-colors ease-in-out hover:bg-primary/80 disabled:cursor-not-allowed disabled:bg-gray-800 disabled:opacity-50"
            onClick={handleLang}
          >
            {selectedLang === "html" ? (
              <>
                <Html /> <span>HTML</span>
              </>
            ) : (
              <>
                <Jsx /> <span>JSX</span>
              </>
            )}
          </button>
          <button
            aria-label={`Set component to show to ${componentToShow}`}
            className="flex w-24 place-content-center items-center space-x-1 rounded-md bg-primary px-2 py-1 transition-colors ease-in-out hover:bg-primary/80"
            onClick={handleComponent}
          >
            {componentToShow === "playground" ? (
              <>
                <CodeIcon /> <span>Code</span>
              </>
            ) : (
              <>
                <Sparkles /> <span>Demo</span>
              </>
            )}
          </button>
        </div>
      </div>

      {componentToShow === "playground" ? (
        <>
          <section
            style={{
              maxWidth: breakPoint,
              height: container,
            }}
            key={"playground"}
            className="relative h-full w-full overflow-hidden rounded-md border border-foreground/20 transition-all ease-in-out"
          >
            <iframe
              className="h-full w-full overflow-y-auto"
              srcDoc={htmlToRender}
            />
          </section>
        </>
      ) : (
        <>
          <section
            key={"codeblock"}
            className="relative h-[400px] w-full overflow-hidden rounded-md border border-foreground/20 transition-all ease-in-out md:h-[600px]"
          >
            <Code
              code={selectedLang === "html" ? highlightedHtml : highlightedJsx}
            />
          </section>
        </>
      )}
    </section>
  );
};
