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
      <main className="flex w-full animate-translate-up flex-col items-center opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
        {routeComponents?.components.map((component) => (
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
        ))}
      </main>
    </>
  );
}
export default Category;
