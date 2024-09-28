import { FooterContact } from "./footer-contact";

export const Footer = () => {
  return (
    <footer className="flex w-full flex-col rounded-t-xl border-t border-accent/10 bg-card-background py-16">
      <div className="flex px-6 max-lg:flex-col max-lg:space-y-10 max-md:space-y-10 md:justify-between md:px-20 lg:space-x-20 2xl:px-40">
        <div className="space-y-4 sm:max-w-xs lg:max-w-md">
          <a className="select-none space-x-2" href="#">
            <p className="text-2xl">
              Kilah<span className="text-primary">UI</span>
            </p>
          </a>
          <p className="text-xs">
            Icons by{" "}
            <a
              className="text-primary underline"
              href="https://icons8.com/icons"
            >
              icons8
            </a>
          </p>
        </div>
        <div className="grid flex-1 max-xl:gap-20 max-md:gap-10 lg:grid-cols-3 xl:justify-items-center">
          <div className="w-fit">
            <h4 className="text-xl text-primary">Information</h4>
            <nav>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="/about"
                    className="hover:text-primary hover:underline"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="hover:text-primary hover:underline"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/gratitudes"
                    className="hover:text-primary hover:underline"
                  >
                    Gratitudes
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="w-fit">
            <h4 className="gap-20 text-xl text-primary">Helpful Links</h4>
            <nav>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="https://countinkly.vercel.app/wfsZpe6X6W?source=KilahUI"
                    className="hover:text-primary hover:underline"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="https://countinkly.vercel.app/kkWWjxxLXj?source=KilahUI"
                    className="hover:text-primary hover:underline"
                  >
                    Countinkly
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/cmollinea/kilah-ui"
                    className="hover:text-primary hover:underline"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/cmollinea/kilah-ui/issues/new/choose"
                    className="hover:text-primary hover:underline"
                  >
                    Report a Bug
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="w-fit space-y-2">
            <h4 className="text-xl text-primary">Contact</h4>
            <div className="flex flex-col space-y-2">
              <FooterContact />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex w-[90%] self-center border-t border-accent/5 py-10 max-lg:flex-col max-lg:space-y-6 lg:justify-between">
        <div className="flex-1 max-md:hidden"></div>
        <div>
          <ul className="flex flex-1 place-content-center items-center space-x-4">
            <li>
              <a
                className="group p-2"
                target="_blank"
                rel="noopener noreferer"
                aria-label="Link to Github"
                href="https://github.com/cmollinea/"
              >
                <svg
                  className="h-5 w-5 fill-foreground transition group-hover:fill-primary sm:h-6 md:w-6"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </li>

            <li>
              <a
                className="group p-2"
                target="_blank"
                rel="noopener noreferer"
                aria-label="Link to LinkedIn"
                href="https://cu.linkedin.com/in/carlos-yoan-mollinea-43206827b"
              >
                <svg
                  className="h-5 w-5 fill-foreground transition group-hover:fill-primary sm:h-6 md:w-6"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>LinkedIn</title>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </li>

            <li>
              <a
                className="group p-2"
                target="_blank"
                rel="noopener noreferer"
                aria-label="Link to X"
                href="https://twitter.com/proc4stinator"
              >
                <svg
                  className="h-5 w-5 fill-foreground transition group-hover:fill-primary sm:h-6 md:w-6"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>X</title>
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
            </li>

            <li>
              <a
                target="_blank"
                className="group p-2"
                rel="noopener noreferer"
                aria-label="Link to Telegram"
                href="https://t.me/Mouse_Potat0"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-foreground transition group-hover:fill-primary sm:h-6 md:w-6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Telegram</title>
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-1 place-content-center items-center lg:place-content-end">
          <p className="w-fit">
            2024 &copy; Kilah<span className="text-primary">Ui</span> Almost All
            rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
