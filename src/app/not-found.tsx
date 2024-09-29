const NotFound = () => {
  return (
    <div className="flex min-h-[calc(100vh-75px)] w-full flex-col place-content-center items-center">
      <div className="flex items-center space-x-4">
        <img
          src="/404.svg"
          alt="Not Found, Please go home"
          className="h-full w-full"
        />
      </div>
      <p className="sr-only">
        The page you looking for is missing, please go home
      </p>

      <a
        href="/"
        className="mt-10 rounded-lg bg-primary px-8 py-4 font-medium text-primary-foreground"
      >
        Go Home
      </a>
    </div>
  );
};
export default NotFound;
