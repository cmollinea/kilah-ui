export const NoResults = () => {
  return (
    <div className="flex h-full w-full flex-col place-content-center items-center space-y-2 px-10">
      <div className="text-danger">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="h-16 w-16"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
          <path d="M9 13h.01" />
          <path d="M15 13h.01" />
          <path d="M11 17h2" />
        </svg>
      </div>
      <p className="text-center text-sm font-medium text-danger">
        Damn! There is no component with such name
      </p>
    </div>
  );
};
