import { CategoryList } from "@/components/home/categories-list";
import { Features } from "@/components/home/features";
import { Hero } from "@/components/home/hero";

export default async function Home() {
  return (
    <>
      <main className="flex min-h-screen animate-translate-up flex-col place-content-center items-center overflow-x-hidden px-4 pb-28 opacity-0">
        <div className="container flex flex-col place-content-center items-center space-y-20">
          <Hero />
          <Features />
          <CategoryList />
        </div>
      </main>
    </>
  );
}
