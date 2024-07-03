import { categories } from "@/content";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col place-content-center items-center space-y-20 px-4 py-28">
        {categories.map((item) => (
          <Link href={`/${item.slug}`} key={item.slug}>
            {item.title}
          </Link>
        ))}
      </main>
    </>
  );
}
