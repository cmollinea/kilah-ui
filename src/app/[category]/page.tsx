import { Component } from "@/components/component";
import { defaultConfig } from "@/constants";
import { categories } from "@/content";

type Props = {
  params: {
    category: string;
  };
};

async function Category({ params }: Props) {
  const category = params.category;
  const routeComponents = categories.find((item) => item.slug === category);
  return (
    <>
      <main className="flex w-full animate-translate-up flex-col items-center overflow-x-auto px-4 py-28 opacity-0 transition-opacity duration-300 ease-out">
        <ul className="flex w-full flex-col items-center space-y-10">
          {routeComponents?.components.map((component) => (
            <li
              key={component.fileName}
              id={component.fileName}
              className="flex w-full max-w-[1280px] flex-col space-y-8 border-b border-foreground/20 pb-20"
            >
              <h3 className="w-fit py-2 text-xl font-black md:pr-20 md:text-4xl">
                #{component.title}
              </h3>
              <Component
                fileName={component.fileName}
                filePath={routeComponents.slug}
                key={component.fileName}
                container={routeComponents.container}
                tailwindConfig={
                  component.tailwindConfig
                    ? JSON.stringify(component.tailwindConfig)
                    : defaultConfig
                }
              />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
export default Category;
