export const Hero = () => {
  return (
    <div className="flex h-[calc(100vh-65px)] flex-col place-content-center items-center space-y-8 px-10 text-center">
      <h1 className="max-w-xl text-3xl font-bold sm:text-5xl">
        Build your websites{" "}
        <span className="relative inline-block text-primary">
          Faster {/* You can remove this to delete doodle */}
          <svg
            className="absolute left-1 top-6"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 800 400"
          >
            <path
              d="M73.99102783203125,154.2600860595703C119.28250630696616,149.47682825724283,246.48728434244794,124.96263122558594,345.7398986816406,125.56053924560547C444.9925130208333,126.158447265625,615.5455780029297,152.46636835734049,669.5067138671875,157.8475341796875"
              fill="none"
              strokeWidth="10"
              stroke="#eb5e28"
              strokeLinecap="round"
            ></path>
            <defs>
              <linearGradient id="SvgjsLinearGradient1004">
                <stop stop-color="hsl(37, 99%, 67%)" offset="0"></stop>
                <stop stop-color="hsl(316, 73%, 52%)" offset="1"></stop>
              </linearGradient>
            </defs>
          </svg>
        </span>{" "}
        than ever
      </h1>
      <p className="max-w-2xl">
        Discover cutting-edge solutions designed to transform your business.
        Experience unparalleled efficiency and creativity as we revolutionize
        the way you work, connect, and grow.
      </p>

      <div className="flex items-center space-x-2 pt-6">
        <button className="rounded-md bg-primary p-2 px-4 text-primary-foreground md:px-10">
          Get Started
        </button>
        <button className="rounded-md border border-primary p-2 px-4 text-primary md:px-10">
          Star Us
        </button>
      </div>
    </div>
  );
};
