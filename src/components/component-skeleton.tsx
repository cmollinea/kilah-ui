type Props = {
  container: string;
};

export const ComponentSkeleton = ({ container }: Props) => {
  return (
    <div className="duration-[2s] w-full max-w-[1280px] animate-pulse">
      <div className="flex justify-between">
        <div className="flex items-center gap-2 max-lg:hidden">
          <div className="h-10 w-10 rounded-md bg-accent/10"></div>
          <div className="h-10 w-10 rounded-md bg-accent/10"></div>
          <div className="h-10 w-10 rounded-md bg-accent/10"></div>
          <div className="h-10 w-10 rounded-md bg-accent/10"></div>
          <div className="h-10 w-10 rounded-md bg-accent/10"></div>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-6 w-16 rounded-md bg-accent/10 md:h-10 md:max-lg:w-28 lg:w-40"></div>
          <div className="h-6 w-16 rounded-md bg-accent/10 md:h-10 md:w-28"></div>
          <div className="h-6 w-28 rounded-md bg-accent/10 md:h-10 md:max-lg:w-40"></div>
        </div>
      </div>
      <div
        style={{ height: container }}
        className="rounde-md mt-4 w-full bg-accent/10"
      ></div>
    </div>
  );
};
