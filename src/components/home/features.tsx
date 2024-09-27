export const Features = () => {
  return (
    <section className="flex w-full place-content-center px-4 pb-32">
      <div className="flex flex-col items-center space-y-16">
        <div className="relative grid max-w-xl place-items-center space-y-4">
          <span className="rounded-md bg-primary/10 px-2 py-1 font-bold text-primary">
            Explore KilahUI
          </span>
          <h2 className="text-center text-3xl font-bold">
            Build Modern Interfaces with Simplicity
          </h2>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 800 800"
            className="absolute -top-[90px] right-20 h-40 w-40 -rotate-45 max-[600px]:right-10 max-[550px]:-right-0 max-[450px]:-right-10"
          >
            <g
              strokeWidth="10"
              stroke="#eb5e28"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="18 26"
              transform="matrix(-0.7771459614569708,-0.6293203910498376,0.6293203910498376,-0.7771459614569708,426.13022816285326,962.5865410027234)"
            >
              <path
                d="M320.6474151611328 241.1018524169922Q-70.35258483886719 634.1018524169922 620.6474151611328 541.1018524169922 "
                marker-end="url(#SvgjsMarker1612)"
              ></path>
            </g>
            <defs>
              <marker
                markerWidth="8"
                markerHeight="8"
                refX="4"
                refY="4"
                viewBox="0 0 8 8"
                orient="auto"
                id="SvgjsMarker1612"
              >
                <polyline
                  points="0,4 4,2 0,0"
                  fill="none"
                  strokeWidth="1.3333333333333333"
                  stroke="#eb5e28"
                  strokeLinecap="round"
                  transform="matrix(1,0,0,1,1.3333333333333333,2)"
                  strokeLinejoin="round"
                ></polyline>
              </marker>
            </defs>
          </svg> */}
        </div>
        <ul className="grid w-full gap-10 md:grid-cols-2 md:text-balance xl:grid-cols-3">
          <li className="flex space-x-6 self-center">
            <span className="flex h-fit place-content-center items-center rounded-md bg-primary/10 p-2 text-primary">
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
                className="h-8 w-8"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14.5 4h2.5a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-5" />
                <path d="M6 5l-2 2l2 2" />
                <path d="M10 9l2 -2l-2 -2" />
              </svg>
            </span>
            <div className="space-y-2">
              <h4 className="text-lg font-bold">Free & Open Source</h4>
              <p>
                KilahUI is completely free and open source, allowing developers
                to access and modify the code as needed. With full transparency,
                you can confidently integrate it for free into your projects.
              </p>
            </div>
          </li>
          <li className="flex space-x-6 self-center">
            <span className="flex h-fit place-content-center items-center rounded-md bg-primary/10 p-2 text-primary">
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
                className="h-8 w-8"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M6 4v4" />
                <path d="M6 12v8" />
                <path d="M13.199 14.399a2 2 0 1 0 -1.199 3.601" />
                <path d="M12 4v10" />
                <path d="M12 18v2" />
                <path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M18 4v1" />
                <path d="M18 9v2.5" />
                <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M19.001 15.5v1.5" />
                <path d="M19.001 21v1.5" />
                <path d="M22.032 17.25l-1.299 .75" />
                <path d="M17.27 20l-1.3 .75" />
                <path d="M15.97 17.25l1.3 .75" />
                <path d="M20.733 20l1.3 .75" />
              </svg>
            </span>
            <div className="space-y-2">
              <h4 className="text-lg font-bold">Fully Customizable</h4>
              <p>
                Every component in KilahUI is fully customizable, enabling you
                to adjust the styles and layout to match your project’s unique
                requirements. Tailor each element to fit your brand’s visual
                identity effortlessly.
              </p>
            </div>
          </li>
          <li className="flex space-x-6 self-center">
            <span className="flex h-fit place-content-center items-center rounded-md bg-primary/10 p-2 text-primary">
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
                className="h-8 w-8"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8.812 4.793l3.188 -1.793l8 4.5v8.5m-2.282 1.784l-5.718 3.216l-8 -4.5v-9l2.223 -1.25" />
                <path d="M14.543 10.57l5.457 -3.07" />
                <path d="M12 12v9" />
                <path d="M12 12l-8 -4.5" />
                <path d="M16 5.25l-4.35 2.447m-2.564 1.442l-1.086 .611" />
                <path d="M3 3l18 18" />
              </svg>
            </span>
            <div className="space-y-2">
              <h4 className="text-lg font-bold">Zero Dependecies</h4>
              <p>
                KilahUI operates without any external dependencies, which means
                you won’t need to install additional libraries or tools. This
                helps keep your projects lightweight and easy to maintain.
              </p>
            </div>
          </li>
          <li className="flex space-x-6 self-center">
            <span className="flex h-fit place-content-center items-center rounded-md bg-primary/10 p-2 text-primary">
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
                className="h-8 w-8"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2" />
                <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9" />
                <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12" />
                <path d="M17 17l0 .01" />
              </svg>
            </span>
            <div className="space-y-2">
              <h4 className="text-lg font-bold">Use Custom Colors</h4>
              <p>
                Easily implement custom colors to match your brand or project’s
                theme. Whether you’re building a personal blog or a professional
                website, KilahUI’s elements are designed to seamlessly integrate
                with any color scheme.
              </p>
            </div>
          </li>
          <li className="flex space-x-6 self-center">
            <span className="flex h-fit place-content-center items-center rounded-md bg-primary/10 p-2 text-primary">
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
                className="h-8 w-8"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 5m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z" />
                <path d="M7 7l0 10" />
                <path d="M4 8l0 8" />
              </svg>
            </span>
            <div className="space-y-2">
              <h4 className="text-lg font-bold">Responsive across Devices</h4>
              <p>
                With KilahUI, all components are designed to work across
                multiple devices and screen sizes. Whether viewed on a desktop,
                tablet, or mobile phone, your UI will remain clean and
                intuitive.
              </p>
            </div>
          </li>
          <li className="flex space-x-6 self-center">
            <span className="flex h-fit place-content-center items-center rounded-md bg-primary/10 p-2 text-primary">
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
                className="h-8 w-8"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M13 16v-8l2 5l2 -5v8" />
                <path d="M1 16v-8" />
                <path d="M5 8v8" />
                <path d="M1 12h4" />
                <path d="M7 8h4" />
                <path d="M9 8v8" />
                <path d="M20 8v8h3" />
              </svg>
            </span>
            <div className="space-y-2">
              <h4 className="text-lg font-bold">Just HTML</h4>
              <p>
                All components are built using only HTML, making them simple to
                integrate into any project. No complex frameworks or programming
                languages are required—just clean, readable HTML code.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
