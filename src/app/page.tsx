import { Features } from "@/components/home/features";
import { Hero } from "@/components/home/hero";
import { categories } from "@/constants";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <main className="flex min-h-screen animate-translate-up flex-col place-content-center items-center overflow-x-hidden px-4 pb-28 opacity-0">
        <div className="container flex flex-col place-content-center items-center space-y-20">
          <Hero />
          <Features />
          <div id="components" className="grid max-w-5xl gap-6 md:grid-cols-4">
            {categories.map((item) => (
              <Link
                className="h-40 w-full max-w-xs rounded-lg bg-primary text-2xl font-bold opacity-50 hover:opacity-100"
                href={`/${item.slug}`}
                key={item.slug}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
