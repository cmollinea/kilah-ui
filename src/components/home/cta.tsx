type Props = {
  total: {
    categories: number;
    components: number;
  };
  children: React.ReactNode;
};
export const Cta = ({ total: { categories, components }, children }: Props) => {
  return (
    <div className="flex flex-col items-center space-y-16">
      <div className="flex flex-col items-center">
        {" "}
        <span className="block text-lg font-bold uppercase tracking-wider opacity-50">
          Hey there dev!
        </span>
        <h2 className="mt-2 text-center text-4xl font-bold">
          Currently available{" "}
          <span className="text-primary">
            <b>{categories}</b>
          </span>{" "}
          categories and{" "}
          <span className="text-primary">
            <b>{components}</b>
          </span>{" "}
          components
        </h2>
      </div>
      {children}
      <div className="flex flex-col p-4 md:items-center">
        {" "}
        <p className="mt-4 text-lg font-medium md:text-center">
          Help me grow the collection! Whether you’re a seasoned developer or
          just getting started, your contributions can make a big impact. Let’s
          work together to create a more expansive and versatile toolkit for
          developers worldwide. Submit your components, improve existing ones,
          or share new ideas—we can’t wait to see what you’ll build with
          KilahUI!
        </p>
        <a
          target="_blank"
          href="https://github.com/cmollinea/kilah-ui/issues"
          rel="noopener noreferrer"
          className="mt-10 block w-fit rounded-lg bg-primary px-12 py-3 text-xl font-medium"
        >
          Contribute
        </a>
      </div>
    </div>
  );
};
