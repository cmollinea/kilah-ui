function Test() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="flex h-screen w-full flex-col place-content-center items-center bg-background">
        <div className="flex items-center space-x-4">
          <h1 className="text-7xl font-black opacity-50">404</h1>
        </div>
        <p className="mt-4">
          The page you looking for is missing, please go home...
        </p>

        <a
          href="/"
          className="mt-10 flex items-center gap-1 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z" />
          </svg>
          <span className="block">Return Home</span>
        </a>
      </div>
    </main>
  );
}
export default Test;
