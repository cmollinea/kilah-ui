function Test() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-10 px-4 py-40">
      <div className="rounded-md bg-card-background p-6">
        <img
          height="500"
          width="500"
          src="/product.png"
          alt=""
          className="h-80 w-full drop-shadow-lg"
        />
        <div className="py-4">
          <div className="space-y-1">
            {" "}
            <p className="text-xl font-bold">Nike Air Max</p>
            <span className="block">Unisex</span>
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-lime-400"></div>
              <div className="h-5 w-5 rounded-full bg-white"></div>
              <div className="h-5 w-5 rounded-full bg-black"></div>
              <div className="items-centerd flex place-content-center">
                <a href="#" className="hover:underline">
                  3+
                </a>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <p className="font-bold">USD 90.00</p>
            <button className="underline">Add to cart</button>
          </div>
        </div>
      </div>
      <a
        href="#"
        className="relative rounded-xl bg-card-background p-4 transition ease-in hover:scale-[1.01]"
      >
        <img
          height="500"
          width="500"
          src="/product.png"
          alt=""
          className="h-80 w-full drop-shadow-lg"
        />
        <div className="flex items-center justify-between py-2">
          <div className="space-y-1">
            <p className="text-xl font-bold">Air Max</p>
            <span className="block">Nike</span>
          </div>
          <div className="rounded-full border border-foreground px-4 py-1">
            <p>$99</p>
          </div>
        </div>
      </a>
      <div className="flex w-full max-w-xl space-x-10 bg-card-background p-6 md:items-center">
        <div className="md:flex-1">
          <img
            height="500"
            width="500"
            src="/product.png"
            alt=""
            className="h-28 w-full drop-shadow md:h-60"
          />
        </div>
        <div className="flex-1 py-4">
          <div>
            <a href="#" className="text-xl font-bold underline">
              Nike Air Max
            </a>
            <p className="mt-2 text-pretty opacity-60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              assumenda dolorem commodi quia voluptas.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-lime-400"></div>
              <div className="h-5 w-5 rounded-full bg-white"></div>
              <div className="h-5 w-5 rounded-full bg-black"></div>
              <div className="items-centerd flex place-content-center">
                <a href="#" className="hover:underline">
                  3+
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6 flex max-md:flex-col max-md:items-start md:justify-between">
            <p className="font-bold">USD 90.00</p>
            <button className="underline max-md:mt-6">Add to cart</button>
          </div>
        </div>
      </div>

      <div className="rounded-md border border-accent/20">
        <div className="rounded-t-md bg-accent/20 px-6">
          <img
            height="500"
            width="500"
            src="/product.png"
            alt=""
            className="h-80 w-full drop-shadow-lg"
          />
        </div>
        <div className="p-4">
          <div className="space-y-1">
            <p className="text-xl font-bold">$99</p>
            <p className="block text-lg font-medium">
              Nike Air Max Men&apos;s Shoes
            </p>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2 divide-x divide-accent/50">
              <div className="flex items-center space-x-0.5 rounded-full bg-yellow-400 px-4 py-1 text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" />
                </svg>
                <span className="block">4.3</span>
              </div>
              <div>
                <span className="block px-2 opacity-50">Sold 23</span>
              </div>
            </div>
            <button className="rounded-xl bg-primary px-2 py-1 text-primary-foreground underline">
              <span className="sr-only block">Add to bag</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12.5 21h-3.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.263 1.708" />
                <path d="M16 19h6" />
                <path d="M19 16v6" />
                <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-card-background p-6">
        <img
          height="500"
          width="500"
          src="/product.png"
          alt=""
          className="h-80 w-full drop-shadow-lg"
        />
        <div className="py-4">
          <div className="space-y-1">
            <a href="#" className="text-xl font-bold underline">
              Nike Air Max Men&apos;s Shoes
            </a>
            <p className="text-2xl font-bold text-primary">$89.99</p>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <span className="block opacity-50">
                  <s>$100</s>
                </span>
                <span className="block bg-danger/20 px-2 py-0.5 text-danger">
                  10.01% off
                </span>
              </div>
              <div>
                <p className="text-success">25 in stock</p>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <button className="w-full bg-primary py-2 font-medium uppercase text-primary-foreground">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Test;
