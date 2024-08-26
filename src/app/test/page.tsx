function Test() {
  return (
    <main className="min-h-screen">
      <aside className="fixed bottom-0 left-0 top-0 z-50 w-[15rem] overflow-y-auto bg-card-background sm:block md:w-[20rem]">
        <div className="max-justify-center mx-auto grid px-6 pt-4">
          <div>
            <a href="#" className="select-none text-2xl font-bold">
              {/* Logo */}
              Kilah<span className="text-primary">UI</span>
            </a>
          </div>
          <div className="mt-5 h-fit py-5">
            <ul className="grid gap-2">
              <li className="rounded-md border-l-4 border-primary bg-accent/5 transition ease-in-out">
                <a
                  href="#"
                  className="flex h-full w-full items-center space-x-1 px-2 py-3"
                >
                  <span className="block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 3a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2zm0 12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-2a2 2 0 0 1 2 -2zm10 -4a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2zm0 -8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-2a2 2 0 0 1 2 -2z" />
                    </svg>
                  </span>
                  <p className="">Overview</p>
                </a>
              </li>
              <li className="h-full w-full rounded-md border border-transparent transition ease-in-out hover:border-accent/10 hover:bg-accent/5">
                <a
                  href="#"
                  className="flex h-full w-full items-center space-x-1 px-2 py-3"
                >
                  <span className="block">
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
                      <path d="M3.5 5.5l1.5 1.5l2.5 -2.5" />
                      <path d="M3.5 11.5l1.5 1.5l2.5 -2.5" />
                      <path d="M3.5 17.5l1.5 1.5l2.5 -2.5" />
                      <path d="M11 6l9 0" />
                      <path d="M11 12l9 0" />
                      <path d="M11 18l9 0" />
                    </svg>
                  </span>
                  <p className="">Tasks</p>
                </a>
              </li>
              <li className="h-full w-full rounded-md border border-transparent transition ease-in-out hover:border-accent/10 hover:bg-accent/5">
                <a
                  href="#"
                  className="flex h-full w-full items-center space-x-1 px-2 py-3"
                >
                  <span className="block">
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
                      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                      <path d="M4 13h3l3 3h4l3 -3h3" />
                    </svg>
                  </span>
                  <p className="">Inbox</p>
                </a>
              </li>
              <li className="h-full w-full rounded-md border border-transparent transition ease-in-out hover:border-accent/10 hover:bg-accent/5">
                <a
                  href="#"
                  className="flex h-full w-full items-center space-x-1 px-2 py-3"
                >
                  <span className="block">
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
                      <path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
                      <path d="M3 10l18 0" />
                      <path d="M7 15l.01 0" />
                      <path d="M11 15l2 0" />
                    </svg>
                  </span>
                  <p className="">Payments</p>
                </a>
              </li>
            </ul>
          </div>
          <div className="h-[1px] w-[90%] place-self-center bg-accent/10"></div>
          <div className="h-fit py-5">
            <ul className="grid gap-2">
              <li className="h-full w-full rounded-md border border-transparent transition ease-in-out hover:border-accent/10 hover:bg-accent/5">
                <a
                  href="#"
                  className="flex h-full w-full items-center space-x-1 px-2 py-3"
                >
                  <span className="block">
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
                      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                  </span>
                  <p className="">Account</p>
                </a>
              </li>

              <li>
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex h-full w-full cursor-pointer items-center justify-between rounded-md border border-transparent px-2 py-3 transition ease-in-out hover:border-accent/10 hover:bg-accent/5">
                    <div className="flex items-center space-x-1">
                      <span>
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
                          <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                          <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                        </svg>
                      </span>
                      <span>Team</span>
                    </div>

                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <ul className="mt-2 animate-fade-in space-y-1 px-4 opacity-0">
                    <li>
                      <a
                        href="#"
                        className="block h-full w-full rounded-md border border-transparent px-4 py-2 text-sm font-medium transition ease-in-out hover:border-accent/10 hover:bg-accent/5"
                      >
                        Members
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="block h-full w-full rounded-md border border-transparent px-4 py-2 text-sm font-medium transition ease-in-out hover:border-accent/10 hover:bg-accent/5"
                      >
                        Jobs
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex h-full w-full cursor-pointer items-center justify-between rounded-md border border-transparent px-2 py-3 transition ease-in-out hover:border-accent/10 hover:bg-accent/5">
                    <div className="flex items-center space-x-1">
                      <span>
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
                          <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                          <path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                          <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                          <path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                        </svg>
                      </span>
                      <span>Projects</span>
                    </div>

                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <ul className="mt-2 animate-fade-in space-y-1 px-4 opacity-0">
                    <li>
                      <a
                        href="#"
                        className="block h-full w-full rounded-md border border-transparent px-4 py-2 text-sm font-medium transition ease-in-out hover:border-accent/10 hover:bg-accent/5"
                      >
                        Project 1
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="block h-full w-full rounded-md border border-transparent px-4 py-2 text-sm font-medium transition ease-in-out hover:border-accent/10 hover:bg-accent/5"
                      >
                        Project 2
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <div className="h-[1px] w-[90%] place-self-center bg-accent/10"></div>
          <div className="h-fit py-5">
            <ul className="grid gap-2">
              <li>
                <button className="flex h-full w-full items-center space-x-1 rounded-md border border-transparent bg-danger/5 px-2 py-3 text-danger transition ease-in-out hover:border hover:border-danger/20 hover:bg-danger/10">
                  <span className="block">
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
                      <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                      <path d="M9 12h12l-3 -3" />
                      <path d="M18 15l3 -3" />
                    </svg>
                  </span>
                  <p>Log Out</p>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      <div className="min-h-screen w-full bg-background pl-[20rem] sm:pl-[5rem]"></div>
    </main>
  );
}
export default Test;
