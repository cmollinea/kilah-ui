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

export interface AlertContext {
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  type: string;
  setType: Dispatch<SetStateAction<string>>;
  showAlert: boolean;
  setShowAlert: Dispatch<SetStateAction<boolean>>;
  ref: MutableRefObject<HTMLDivElement | null>;
}
