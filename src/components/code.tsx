type CodeProps = {
  code: string;
};

export const Code = ({ code }: CodeProps) => {
  return (
    <div
      className="h-full w-full overflow-x-auto pl-10 pt-16 text-sm md:text-lg lg:pl-20"
      dangerouslySetInnerHTML={{ __html: code }}
    />
  );
};
