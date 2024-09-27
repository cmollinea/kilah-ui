import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-4xl font-bold">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-bold">{children}</h2>,
    hr: (props) => <hr {...props} className="bg-primary opacity-5" />,
    ul: ({ children }) => <ul className="grid gap-2">{children}</ul>,
    img: (props) => <img {...props} className="scale-50 rounded-xl" />,
    a: (props) => (
      <a
        target="_blank"
        {...props}
        className="font-bold text-primary underline"
      >
        {props.children}
      </a>
    ),
    ...components,
  };
}
