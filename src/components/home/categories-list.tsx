import { categories } from "@/constants/categories-info";
import { countComponents } from "@/lib/utils";
import { CategoryCard } from "./category-card";
import { Cta } from "./cta";

const total = {
  categories: categories.length,
  components: countComponents(categories),
};

export const CategoryList = () => {
  return (
    <section id="components" className="pb-32">
      <Cta total={total}>
        <div className="grid w-fit gap-2 pb-20 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.slug}
              slug={category.slug}
              title={category.title}
              description={category.description}
              totalComponents={category.components.length}
            />
          ))}
        </div>
      </Cta>
    </section>
  );
};
