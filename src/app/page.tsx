import { Features } from "@/components/home/features";
import { Hero } from "@/components/home/hero";
import { categories } from "@/constants/categories-info";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <main className="flex min-h-screen animate-translate-up flex-col place-content-center items-center overflow-x-hidden px-4 pb-28 opacity-0">
        <div className="container flex flex-col place-content-center items-center space-y-20">
          <Hero />
          <Features />
          <div
            id="components"
            className="grid gap-2 md:grid-cols-2 lg:grid-cols-3"
          >
            {categories.map((item) => (
              <Link
                className="group w-full max-w-xl rounded-lg bg-card-background px-10 py-4 ring-1 ring-inset ring-accent/10 transition hover:ring-primary md:max-w-md lg:max-w-sm"
                href={`/${item.slug}`}
                key={item.slug}
              >
                <div className="space-y-2">
                  <div className="w-fit rounded-md bg-accent/5 p-1 ring-1 ring-inset ring-accent/10 transition group-hover:scale-105">
                    <img
                      src={`/components/${item.slug}/icon.png`}
                      alt=""
                      className="h-10 w-10"
                    />
                  </div>
                  <h4 className="text-xl font-medium">{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
