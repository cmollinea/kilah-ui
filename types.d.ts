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

export interface SearchResult {
  totalResults: number;
  results: Result[];
}

export interface ResultCategory {
  title: string;
  slug: string;
}

export interface Result extends ResultCategory {
  components: ResultComponent[];
}

export interface ResultComponent {
  title: string;
  fileName: string;
}
