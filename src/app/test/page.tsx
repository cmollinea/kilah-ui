function Test() {
  return (
    <section className="flex min-h-[500vh] flex-col items-end space-y-[600px] bg-background px-6 py-60">
      <div role="menu" className="relative select-none">
        <button className="inline-flex items-center gap-1 rounded-md bg-accent/20 px-4 py-2 text-accent-foreground">
          <span>Nav</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 15l6 -6l6 6" />
          </svg>
        </button>
        <div className="absolute -bottom-0 right-0 top-full z-50 mt-2 flex min-h-fit w-56 bg-background max-[300px]:max-w-[50vw]">
          <ul className="grid w-full overflow-hidden rounded-md">
            <li className="">
              <a
                className="flex w-full border-l-[5px] border-primary bg-accent/40 px-6 py-3 font-medium transition ease-in-out"
                href="#"
              >
                Link
              </a>
            </li>
            <li className="">
              <a
                className="flex w-full border-l-[5px] border-accent/20 bg-accent/10 px-6 py-3 font-medium transition ease-in-out hover:border-primary hover:bg-accent/20"
                href="#"
              >
                Link
              </a>
            </li>
            <li className="">
              <a
                className="flex w-full border-l-[5px] border-accent/20 bg-accent/10 px-6 py-3 font-medium transition ease-in-out hover:border-primary hover:bg-accent/20"
                href="#"
              >
                Link
              </a>
            </li>
            <li className="">
              <a
                className="flex w-full border-l-[5px] border-accent/20 bg-accent/10 px-6 py-3 font-medium transition ease-in-out hover:border-primary hover:bg-accent/20"
                href="#"
              >
                Link
              </a>
            </li>
            <li className="">
              <a
                className="flex w-full border-l-[5px] border-accent/20 bg-accent/10 px-6 py-3 font-medium transition ease-in-out hover:border-primary hover:bg-accent/20"
                href="#"
              >
                Link
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div role="list" className="relative select-none bg-background">
        <button className="inline-flex items-center gap-1 rounded-md bg-accent/10 p-2 text-accent-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
            <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
            <path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727" />
            <path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727" />
          </svg>
        </button>

        <div className="absolute -bottom-0 right-0 top-full z-50 mt-2 flex min-h-fit w-[500px] bg-background max-sm:max-w-[80vw]">
          <ul className="grid w-full divide-y divide-accent/20 overflow-hidden rounded-md">
            <li>
              <a
                href="#"
                className="group flex bg-accent/10 transition ease-in-out hover:bg-accent/20"
              >
                <div className="flex h-full w-full items-center gap-2 px-6 py-4 transition-transform ease-in-out group-active:scale-[0.98]">
                  <div className="rounded-full bg-success/20 p-2 text-success ring-1 ring-inset ring-success/50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 19h-6a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5" />
                      <path d="M3 10h18" />
                      <path d="M7 15h.01" />
                      <path d="M11 15h2" />
                      <path d="M16 19h6" />
                      <path d="M19 16l-3 3l3 3" />
                    </svg>
                  </div>
                  <div className="space-y-0">
                    <p className="text-sm">
                      <span className="font-bold text-success">$100 US</span>{" "}
                      were received
                    </p>
                    <small className="text-xs text-foreground/50">
                      50 minutes ago
                    </small>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group flex bg-accent/10 transition ease-in-out hover:bg-accent/20"
              >
                <div className="flex h-full w-full items-center gap-2 px-6 py-4 transition-transform ease-in-out group-active:scale-[0.98]">
                  <div className="rounded-full bg-danger/20 p-2 text-danger ring-1 ring-inset ring-danger/50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 19h-6a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5" />
                      <path d="M3 10h18" />
                      <path d="M16 19h6" />
                      <path d="M19 16l3 3l-3 3" />
                      <path d="M7.005 15h.005" />
                      <path d="M11 15h2" />
                    </svg>
                  </div>
                  <div className="space-y-0">
                    <p className="text-sm">
                      <span className="font-bold text-danger">$20 US</span> were
                      paid
                    </p>
                    <small className="text-xs text-foreground/50">
                      2 minutes ago
                    </small>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group flex bg-accent/10 transition ease-in-out hover:bg-accent/20"
              >
                <div className="flex h-full w-full items-center gap-2 px-6 py-4 transition-transform ease-in-out group-active:scale-[0.98]">
                  <div className="rounded-full bg-success/20 p-2 text-success ring-1 ring-inset ring-success/50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 19h-6a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5" />
                      <path d="M3 10h18" />
                      <path d="M7 15h.01" />
                      <path d="M11 15h2" />
                      <path d="M16 19h6" />
                      <path d="M19 16l-3 3l3 3" />
                    </svg>
                  </div>
                  <div className="space-y-0">
                    <p className="text-sm">
                      <span className="font-bold text-success">$10 US</span>{" "}
                      were received
                    </p>
                    <small className="text-xs text-foreground/50">
                      2 hours ago
                    </small>
                  </div>
                </div>
              </a>
            </li>{" "}
            <li>
              <a
                href="#"
                className="group flex bg-accent/10 transition ease-in-out hover:bg-accent/20"
              >
                <div className="flex h-full w-full items-center gap-2 px-6 py-4 transition-transform ease-in-out group-active:scale-[0.98]">
                  <div className="rounded-full bg-danger/20 p-2 text-danger ring-1 ring-inset ring-danger/50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 19h-6a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5" />
                      <path d="M3 10h18" />
                      <path d="M16 19h6" />
                      <path d="M19 16l3 3l-3 3" />
                      <path d="M7.005 15h.005" />
                      <path d="M11 15h2" />
                    </svg>
                  </div>
                  <div className="space-y-0">
                    <p className="text-sm">
                      <span className="font-bold text-danger">$20 US</span> were
                      paid
                    </p>
                    <small className="text-xs text-foreground/50">
                      2 minutes ago
                    </small>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                className="flex h-full w-full place-content-center bg-accent/10 px-6 py-4 font-bold hover:bg-accent/20"
                href="#"
              >
                See All
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div role="menu" className="relative select-none">
        <button className="inline-flex items-center gap-1 rounded-full bg-accent/20 p-2 text-accent-foreground ring-1 ring-inset ring-accent/30">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          </svg>
        </button>
        <div className="absolute right-4 top-full z-40 mt-2 h-4 w-4 rotate-45 bg-background">
          <div className="h-full w-full bg-accent/10"></div>
        </div>

        <div className="absolute -bottom-0 right-0 top-full z-50 mt-3 flex min-h-fit w-56 bg-background max-[300px]:max-w-[50vw]">
          <ul className="grid w-full divide-y divide-accent/20 overflow-hidden">
            <li className="">
              <a
                href="#"
                className="group flex bg-accent/10 transition ease-in-out hover:bg-accent/20"
              >
                <div className="flex items-center gap-1 px-4 py-2">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                  </div>
                  <p>Profile</p>
                </div>
              </a>
              <a
                href="#"
                className="group flex bg-accent/10 transition ease-in-out hover:bg-accent/20"
              >
                <div className="flex items-center gap-1 px-4 py-2">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z" />
                      <path d="M10 16h6" />
                      <path d="M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path d="M4 8h3" />
                      <path d="M4 12h3" />
                      <path d="M4 16h3" />
                    </svg>
                  </div>
                  <p>Contacts</p>
                </div>
              </a>
              <a
                href="#"
                className="group flex bg-accent/10 transition ease-in-out hover:bg-accent/20"
              >
                <div className="flex items-center gap-1 px-4 py-2">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9.5 3h5a1.5 1.5 0 0 1 1.5 1.5a3.5 3.5 0 0 1 -3.5 3.5h-1a3.5 3.5 0 0 1 -3.5 -3.5a1.5 1.5 0 0 1 1.5 -1.5z" />
                      <path d="M4 17v-1a8 8 0 1 1 16 0v1a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                    </svg>
                  </div>
                  <p>Balance</p>
                </div>
              </a>
              <a
                href="#"
                className="group flex bg-accent/10 transition ease-in-out hover:bg-accent/20"
              >
                <div className="flex items-center gap-1 px-4 py-2">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                      <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                    </svg>
                  </div>
                  <p>Notifications</p>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group flex bg-accent/10 transition ease-in-out hover:bg-accent/20"
              >
                <div className="flex items-center gap-1 px-4 py-2">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
                      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    </svg>
                  </div>
                  <p>Settings</p>
                </div>
              </a>
              <a
                href="#"
                className="group flex bg-accent/10 text-danger transition ease-in-out hover:bg-danger/20"
              >
                <div className="flex items-center gap-1 px-4 py-2">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                      <path d="M9 12h12l-3 -3" />
                      <path d="M18 15l3 -3" />
                    </svg>
                  </div>
                  <p>Log Out</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Test;
