import { ComponentSkeleton } from "@/components/component-skeleton";

function Test() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-10 px-4 py-40 lg:p-20">
      <ComponentSkeleton container="20rem" />
    </main>
  );
}
export default Test;
