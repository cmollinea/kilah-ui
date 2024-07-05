import { ClientPlaygroundContainer } from "@/components/playground-container-client";
import { highlight } from "@/lib/shiki";
import { componentPreviewJsx } from "@/lib/transformer";

export const Component = async ({
  fileName,
  filePath,
  container,
}: {
  fileName: string;
  filePath: string;
  container: string;
}) => {
  const url = `http://localhost:3000//components/${filePath}/${fileName}.html`;
  const res = await fetch(url, {
    cache: "no-cache",
  });

  const code = await res.text();

  const jsx = componentPreviewJsx(code);
  const highligthedHtml = await highlight(code);
  const highlightedJsx = await highlight(jsx);

  return (
    <>
      <div className="flex w-full flex-col items-center space-y-20 px-4 py-28">
        <ClientPlaygroundContainer
          code={code}
          highlightedHtml={highligthedHtml}
          highlightedJsx={highlightedJsx}
          container={container}
        />
      </div>
    </>
  );
};
