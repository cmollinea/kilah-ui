import { categories } from "@/constants/categories-info";
import { NextRequest } from "next/server";

export const fetchCache = "force-no-store";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q");

  console.log(query);

  if (!query) {
    const sanitizedData = categories.map(({ title, slug, components }) => {
      const sanitizedComponents = components.map(({ title, fileName }) => {
        return { title, fileName };
      });

      return { title, slug, components: sanitizedComponents };
    });

    const totalResults = sanitizedData.reduce(
      (count, category) => count + category.components.length,
      0,
    );
    console.log(totalResults);

    const res = {
      totalResults,
      results: sanitizedData,
    };

    return new Response(JSON.stringify(res), {
      status: 200,
      statusText: "Success",
    });
  } else {
    const filteredCategories = categories
      .filter((category) => {
        return category.components.some((component) =>
          component.fileName.includes(query),
        );
      })
      .map((category) => {
        const filteredComponents = category.components
          .filter((component) =>
            component.title.toLocaleLowerCase().includes(query),
          )
          .map(({ title, fileName }) => {
            return { title, fileName };
          });

        const { title, slug } = category;
        return { title, slug, components: filteredComponents };
      });

    const totalResults = filteredCategories.reduce(
      (count, category) => count + category.components.length,
      0,
    );

    const res = {
      totalResults,
      results: filteredCategories,
    };

    const message = filteredCategories.length ? "Success" : "Not Found";
    const status = filteredCategories.length ? 200 : 404;

    return new Response(JSON.stringify(res), {
      status,
      statusText: message,
    });
  }
}
