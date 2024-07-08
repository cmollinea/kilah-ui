"use client";
import { usePlayground } from "@/hooks/use-playground";
import { translateToJsx } from "@/lib/utils";
import { BreakPointsButtons } from "./breakpoint-buttons";
import { Clipboard } from "./clipboard";
import { Code } from "./code";
import { Switchers } from "./switchers";

type Props = {
  html: {
    render: string;
    code: string;
  };
  highlightedHtml: string;
  highlightedJsx: string;
  container: string;
  tailwind: {
    code?: string;
    highlighted?: string;
  };
};

export const ClientPlaygroundContainer = ({
  html,
  highlightedHtml,
  highlightedJsx,
  tailwind,
  container,
}: Props) => {
  const {
    componentToShow,
    selectedLang,
    showConfig,
    breakPoint,
    setBreakPoint,
    handleLang,
    handleComponent,
    handleSwitchFile,
  } = usePlayground();
  return (
    <section className="flex w-full max-w-[1280px] flex-col text-foreground">
      <div className="mb-4 flex w-full justify-between space-x-4 font-medium">
        <BreakPointsButtons
          componentToShow={componentToShow}
          breakPoint={breakPoint}
          setBreakPoint={setBreakPoint}
        />

        <Switchers
          componentToShow={componentToShow}
          handleSwitchFile={handleSwitchFile}
          showConfig={showConfig}
          selectedLang={selectedLang}
          handleLang={handleLang}
          handleComponent={handleComponent}
        >
          {componentToShow === "codeBlock" && (
            <Clipboard
              text={
                showConfig && tailwind.code
                  ? tailwind.code
                  : selectedLang === "html"
                    ? html.code
                    : translateToJsx(html.code)
              }
            />
          )}
        </Switchers>
      </div>

      {componentToShow === "playground" ? (
        <>
          <section
            style={{
              maxWidth: breakPoint,
              height: container,
            }}
            key={"playground"}
            className="duration-00 relative h-full w-full animate-fade-in overflow-hidden rounded-md border border-foreground/20 opacity-0 transition-all ease-in-out"
          >
            <iframe
              className="h-full w-full overflow-y-auto"
              srcDoc={html.render}
            />
          </section>
        </>
      ) : (
        <>
          <section
            key={`codeblock ${showConfig}`}
            className="relative h-[400px] w-full animate-fade-in overflow-hidden rounded-md border border-foreground/20 opacity-0 transition-all duration-500 ease-in-out md:h-[600px]"
          >
            <Code
              code={
                showConfig && tailwind.highlighted
                  ? tailwind.highlighted
                  : selectedLang === "html"
                    ? highlightedHtml
                    : highlightedJsx
              }
            />
          </section>
        </>
      )}
    </section>
  );
};
