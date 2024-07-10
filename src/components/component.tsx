import { ClientPlaygroundContainer } from "@/components/playground/playground-container-client";
import { highlight } from "@/lib/shiki";
import { createIframe, translateToJsx } from "@/lib/utils";

const url = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/`
  : "http://localhost:3000/";

export const Component = async ({
  fileName,
  filePath,
  container,
  tailwindConfig,
}: {
  fileName: string;
  filePath: string;
  container: string;
  tailwindConfig: string;
}) => {
  const url = `http://localhost:3000/components/${filePath}/${fileName}.html`;
  const res = await fetch(url, {
    cache: "no-cache",
  });

  const html = await res.text();

  const jsx = translateToJsx(html);
  const highligthedHtml = await highlight(html, "html");
  const highlightedJsx = await highlight(jsx, "jsx");
  const htmlToRender = createIframe(html, tailwindConfig);

  const highlightedConfig = await highlight(tailwindConfig, "json");

  return (
    <>
      <div className="flex w-full flex-col items-center space-y-20 px-4 py-28">
        <ClientPlaygroundContainer
          html={{ render: htmlToRender, code: html }}
          highlightedHtml={highligthedHtml}
          highlightedJsx={highlightedJsx}
          container={container}
          tailwind={{ code: tailwindConfig, highlighted: highlightedConfig }}
        />
      </div>
    </>
  );
};
