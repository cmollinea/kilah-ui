"use client";

import { useAlertContext } from "@/hooks/use-alert-context";

export const Alert = () => {
  const { ref, title, description, type, showAlert } = useAlertContext();

  return (
    <>
      {showAlert ? (
        <div
          ref={ref}
          role="alert"
          className="fixed bottom-20 right-10 z-[99] flex w-full max-w-md animate-translate-up duration-200"
        >
          <div className="relative flex w-full gap-4 rounded-xl bg-card-background py-4 pl-4 pr-6 ring-1 ring-inset ring-accent/20">
            <div className="absolute right-2 top-1"></div>
            <div>
              <span className="flex h-12 w-12 place-content-center items-center rounded-xl bg-success/20 p-2 text-success/80 ring-1 ring-inset ring-success/80 md:h-16 md:w-16">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  className="h-full w-full"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                </svg>
              </span>
            </div>
            <div>
              <h6 className="font-bold">{title}</h6>
              <p className="text-sm">{description}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
