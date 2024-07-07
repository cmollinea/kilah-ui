"use client";

import type { ComponentToShow, SelectedLanguaje } from "@/hooks/use-playground";
import { CodeIcon, Html, Jsx, Sparkles, Tailwind } from "../icons";

type Props = {
  componentToShow: ComponentToShow;
  selectedLang: SelectedLanguaje;
  showConfig: boolean;
  handleLang: () => void;
  handleComponent: () => void;
  handleSwitchFile: () => void;
  children: React.ReactNode;
};

export const Switchers = ({
  componentToShow,
  handleSwitchFile,
  showConfig,
  selectedLang,
  handleLang,
  handleComponent,
  children,
}: Props) => {
  return (
    <div className="flex items-center gap-2 max-md:text-sm">
      <button
        disabled={componentToShow === "playground"}
        aria-disabled={componentToShow === "playground"}
        onClick={handleSwitchFile}
        className={`flex w-40 place-content-center items-center space-x-1 rounded-md bg-primary py-1 transition-colors ease-in-out hover:bg-primary/80 disabled:cursor-not-allowed disabled:bg-gray-800 disabled:opacity-50 max-md:w-36`}
      >
        {showConfig ? (
          <div
            key={"config"}
            className="flex animate-fade-in place-content-center items-center space-x-1 opacity-0 duration-300"
          >
            <Tailwind /> <span>tailwind.config</span>
          </div>
        ) : (
          <div
            key="component"
            className="flex animate-fade-in place-content-center items-center space-x-1 opacity-0 duration-300"
          >
            {selectedLang === "html" ? <Html /> : <Jsx />}{" "}
            <span>component.{selectedLang.toLowerCase()}</span>
          </div>
        )}
      </button>

      <button
        aria-disabled={componentToShow === "playground"}
        aria-label={`Set code to show to ${selectedLang}`}
        disabled={componentToShow === "playground"}
        className="flex w-24 place-content-center items-center space-x-1 rounded-md bg-primary px-2 py-1 transition-colors ease-in-out hover:bg-primary/80 disabled:cursor-not-allowed disabled:bg-gray-800 disabled:opacity-50 max-lg:order-[-1] max-md:w-20"
        onClick={handleLang}
      >
        {selectedLang === "html" ? (
          <div
            key="html"
            className="flex animate-fade-in place-content-center items-center space-x-1 opacity-0 duration-300"
          >
            <Html /> <span>HTML</span>
          </div>
        ) : (
          <div
            key={"jsx"}
            className="flex animate-fade-in place-content-center items-center space-x-1 opacity-0 duration-300"
          >
            <Jsx /> <span>JSX</span>
          </div>
        )}
      </button>
      <button
        aria-label={`Set component to show to ${componentToShow}`}
        className="flex w-24 place-content-center items-center space-x-1 rounded-md bg-primary px-2 py-1 transition-colors ease-in-out hover:bg-primary/80 max-lg:order-first max-md:w-20"
        onClick={handleComponent}
      >
        {componentToShow === "playground" ? (
          <div
            key="code"
            className="flex animate-fade-in place-content-center items-center space-x-1 opacity-0 duration-300"
          >
            <CodeIcon /> <span>Code</span>
          </div>
        ) : (
          <div
            key={"demo"}
            className="flex animate-fade-in place-content-center items-center space-x-1 opacity-0 duration-300"
          >
            <Sparkles /> <span>Demo</span>
          </div>
        )}
      </button>
      {children}
    </div>
  );
};
