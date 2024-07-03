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
};

type ShowState = "playground" | "codeBlock";
type SelectedLanguaje = "html" | "jsx";
type BreakPoint = "400px" | "684px" | "748px" | "1024px" | "1536px";

export const ClientPlaygroundContainer = ({
  code,
  highlightedHtml,
  highlightedJsx,
}: Props) => {
  const [componentToShow, setComponentToShow] =
    useState<ShowState>("playground");
  const [selectedLang, setSelectedLang] = useState<SelectedLanguaje>("html");
  const [breakPoint, setBreakPoint] = useState<BreakPoint>("1536px");
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
    <div className="flex w-full max-w-screen-2xl flex-col text-gray-950">
      <div className="mb-10 flex w-fit space-x-4 font-medium">
        <button
          className="flex w-24 place-content-center items-center space-x-1 rounded-xl bg-primary px-3 py-2 transition-colors ease-in-out hover:bg-primary/80"
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
        <button
          disabled={componentToShow === "playground"}
          className="flex w-24 place-content-center items-center space-x-1 rounded-xl bg-primary px-3 py-2 transition-colors ease-in-out hover:bg-primary/80 disabled:cursor-not-allowed disabled:bg-primary/70"
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
        <div className="flex items-center space-x-4 max-lg:hidden">
          <button
            disabled={componentToShow === "codeBlock"}
            className={`flex place-content-center items-center rounded-xl border px-3 py-2 transition-colors ease-out disabled:cursor-not-allowed disabled:bg-primary/70 ${componentToShow !== "codeBlock" && breakPoint === "400px" ? "border-primary bg-black text-primary" : "border-transparent bg-primary"}`}
            onClick={() => setBreakPoint("400px")}
          >
            <Phone />
          </button>
          <button
            disabled={componentToShow === "codeBlock"}
            className={`flex place-content-center items-center rounded-xl border px-3 py-2 transition-colors ease-out disabled:cursor-not-allowed disabled:bg-primary/70 ${componentToShow !== "codeBlock" && breakPoint === "684px" ? "border-primary bg-black text-primary" : "border-transparent bg-primary"}`}
            onClick={() => setBreakPoint("684px")}
          >
            <Tablet />
          </button>
          <button
            disabled={componentToShow === "codeBlock"}
            className={`flex place-content-center items-center rounded-xl border px-3 py-2 transition-colors ease-out disabled:cursor-not-allowed disabled:bg-primary/70 ${componentToShow !== "codeBlock" && breakPoint === "748px" ? "border-primary bg-black text-primary" : "border-transparent bg-primary"}`}
            onClick={() => setBreakPoint("748px")}
          >
            <Laptop />
          </button>
          <button
            disabled={componentToShow === "codeBlock"}
            className={`flex place-content-center items-center rounded-xl border px-3 py-2 transition-colors ease-out disabled:cursor-not-allowed disabled:bg-primary/70 ${componentToShow !== "codeBlock" && breakPoint === "1024px" ? "border-primary bg-black text-primary" : "border-transparent bg-primary"}`}
            onClick={() => setBreakPoint("1024px")}
          >
            <Desktop />
          </button>
          <button
            disabled={componentToShow === "codeBlock"}
            className={`flex place-content-center items-center rounded-xl border px-3 py-2 transition-colors ease-out disabled:cursor-not-allowed disabled:bg-primary/70 ${componentToShow !== "codeBlock" && breakPoint === "1536px" ? "border-primary bg-black text-primary" : "border-transparent bg-primary"}`}
            onClick={() => setBreakPoint("1536px")}
          >
            <Full />
          </button>
        </div>
      </div>

      <section
        style={{
          maxWidth: componentToShow === "playground" ? breakPoint : "1536px",
        }}
        className="relative h-[500px] w-full rounded-xl border border-primary/20 transition-all ease-in-out"
      >
        {componentToShow === "playground" ? (
          <iframe className="w-full" srcDoc={htmlToRender} />
        ) : (
          <Code
            code={selectedLang === "html" ? highlightedHtml : highlightedJsx}
          />
        )}
        {componentToShow === "codeBlock" && (
          <Clipboard
            text={
              selectedLang === "html" ? code : componentPreviewJsx(htmlToRender)
            }
          />
        )}
      </section>
    </div>
  );
};
