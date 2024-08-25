type Component = {
  title: string;
  fileName: string;
  tailwindConfig?: Partial<Config>;
};

export type Category = {
  section: string;
  title: string;
  slug: string;
  container: string;
  components: Component[];
};
