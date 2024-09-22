import Image from "next/image";
import Link from "next/link";

type Props = {
  slug: string;
  title: string;
  description: string;
  totalComponents: number;
};

export const CategoryCard = ({
  slug,
  title,
  description,
  totalComponents,
}: Props) => {
  return (
    <Link
      className="group w-full max-w-xl rounded-lg bg-card-background px-10 py-4 ring-1 ring-inset ring-accent/10 transition hover:ring-primary md:max-w-md lg:max-w-lg"
      href={`/${slug}`}
      key={slug}
    >
      <div className="flex h-full flex-col space-y-2">
        <div className="w-fit rounded-md bg-accent/5 p-1 ring-1 ring-inset ring-accent/10 transition group-hover:scale-105">
          <Image
            height={50}
            width={50}
            src={`/components/${slug}/icon.png`}
            alt={`${title} icon by icons8.com`}
            className="h-10 w-10"
          />
        </div>
        <h4 className="text-xl font-bold">{title}</h4>

        <p className="text-sm font-medium">{description}</p>
        <div className="flex h-full items-end">
          <p className="text-xs font-medium opacity-50">
            {totalComponents} components
          </p>
        </div>
      </div>
    </Link>
  );
};
