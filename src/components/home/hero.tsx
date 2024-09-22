export const Hero = () => {
  return (
    <section className="flex h-[calc(100vh-65px)] flex-col place-content-center items-center space-y-8 px-10 text-center">
      <h1 className="max-w-7xl text-4xl font-bold md:text-6xl">
        Build your websites{" "}
        <span className="relative inline-block text-primary">
          Faster {/* You can remove this to delete doodle */}
          <svg
            className="absolute left-1 top-6 md:top-10"
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
      <p className="max-w-7xl md:text-lg">
        KilahUI is a free and open-source collection of fully customizable
        TailwindCSS components, designed to seamlessly adapt to your unique
        style. Whether you&apos;re crafting a simple webpage or a complex
        application, KilahUI offers flexible, pre-built elements that empower
        your creativity while saving time. Start building smarter, not harder.
      </p>

      <div className="flex pt-6 max-sm:flex-col max-sm:space-y-2 sm:items-center sm:space-x-2">
        <a
          href="#components"
          className="rounded-md bg-primary p-2 px-4 text-primary-foreground max-sm:px-20 md:px-10"
        >
          Get Started
        </a>
        <a
          target="_blank"
          href="https://github.com/cmollinea/kilah-ui"
          rel="noopener noreferrer"
          className="rounded-md border border-primary p-2 px-4 text-primary max-sm:px-20 md:px-10"
        >
          Star Us
        </a>
      </div>
    </section>
  );
};
