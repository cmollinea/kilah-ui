import { categories } from "@/content";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <></>
      <main className="flex min-h-screen animate-translate-up flex-col place-content-center items-center space-y-20 px-4 py-28 opacity-0">
        <section className="flex w-full place-content-center px-4 py-16">
          <div className="flex max-w-3xl flex-col items-center space-y-16">
            <div className="relative grid max-w-xl place-items-center space-y-4">
              <span className="rounded-md bg-primary/10 px-2 py-1 font-bold text-primary">
                Start Today
              </span>
              <h2 className="text-center text-3xl font-bold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit
              </h2>
              <svg
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
              </svg>
            </div>
            <ul className="grid gap-10 text-balance md:grid-cols-2">
              <li className="flex space-x-6">
                <span className="flex h-fit place-content-center items-center rounded-md bg-primary/10 p-2 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M11 17a2.5 2.5 0 0 0 2 0" />
                    <path d="M12 3c-4.664 0 -7.396 2.331 -7.862 5.595a11.816 11.816 0 0 0 2 8.592a10.777 10.777 0 0 0 3.199 3.064c1.666 1 3.664 1 5.33 0a10.777 10.777 0 0 0 3.199 -3.064a11.89 11.89 0 0 0 2 -8.592c-.466 -3.265 -3.198 -5.595 -7.862 -5.595z" />
                    <path d="M8 11l2 2" />
                    <path d="M16 11l-2 2" />
                  </svg>
                </span>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold">Lorem ipsum dolor</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Expedita iusto, perferendis cupiditate, voluptatem
                    similique, nisi omnis optio voluptatum aperiam culpa vel
                    fuga? A quasi nesciunt, nam asperiores minus harum
                    repudiandae!
                  </p>
                </div>
              </li>
              <li className="flex space-x-6">
                <span className="flex h-fit place-content-center items-center rounded-md bg-primary/10 p-2 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M11 17a2.5 2.5 0 0 0 2 0" />
                    <path d="M12 3c-4.664 0 -7.396 2.331 -7.862 5.595a11.816 11.816 0 0 0 2 8.592a10.777 10.777 0 0 0 3.199 3.064c1.666 1 3.664 1 5.33 0a10.777 10.777 0 0 0 3.199 -3.064a11.89 11.89 0 0 0 2 -8.592c-.466 -3.265 -3.198 -5.595 -7.862 -5.595z" />
                    <path d="M8 11l2 2" />
                    <path d="M16 11l-2 2" />
                  </svg>
                </span>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold">Lorem ipsum dolor</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Expedita iusto, perferendis cupiditate, voluptatem
                    similique, nisi omnis optio voluptatum aperiam culpa vel
                    fuga? A quasi nesciunt, nam asperiores minus harum
                    repudiandae!
                  </p>
                </div>
              </li>
              <li className="flex space-x-6">
                <span className="flex h-fit place-content-center items-center rounded-md bg-primary/10 p-2 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M11 17a2.5 2.5 0 0 0 2 0" />
                    <path d="M12 3c-4.664 0 -7.396 2.331 -7.862 5.595a11.816 11.816 0 0 0 2 8.592a10.777 10.777 0 0 0 3.199 3.064c1.666 1 3.664 1 5.33 0a10.777 10.777 0 0 0 3.199 -3.064a11.89 11.89 0 0 0 2 -8.592c-.466 -3.265 -3.198 -5.595 -7.862 -5.595z" />
                    <path d="M8 11l2 2" />
                    <path d="M16 11l-2 2" />
                  </svg>
                </span>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold">Lorem ipsum dolor</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Expedita iusto, perferendis cupiditate, voluptatem
                    similique, nisi omnis optio voluptatum aperiam culpa vel
                    fuga? A quasi nesciunt, nam asperiores minus harum
                    repudiandae!
                  </p>
                </div>
              </li>
              <li className="flex space-x-6">
                <span className="flex h-fit place-content-center items-center rounded-md bg-primary/10 p-2 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M11 17a2.5 2.5 0 0 0 2 0" />
                    <path d="M12 3c-4.664 0 -7.396 2.331 -7.862 5.595a11.816 11.816 0 0 0 2 8.592a10.777 10.777 0 0 0 3.199 3.064c1.666 1 3.664 1 5.33 0a10.777 10.777 0 0 0 3.199 -3.064a11.89 11.89 0 0 0 2 -8.592c-.466 -3.265 -3.198 -5.595 -7.862 -5.595z" />
                    <path d="M8 11l2 2" />
                    <path d="M16 11l-2 2" />
                  </svg>
                </span>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold">Lorem ipsum dolor</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Expedita iusto, perferendis cupiditate, voluptatem
                    similique, nisi omnis optio voluptatum aperiam culpa vel
                    fuga? A quasi nesciunt, nam asperiores minus harum
                    repudiandae!
                  </p>
                </div>
              </li>
              <li className="flex space-x-6">
                <span className="flex h-fit place-content-center items-center rounded-md bg-primary/10 p-2 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M11 17a2.5 2.5 0 0 0 2 0" />
                    <path d="M12 3c-4.664 0 -7.396 2.331 -7.862 5.595a11.816 11.816 0 0 0 2 8.592a10.777 10.777 0 0 0 3.199 3.064c1.666 1 3.664 1 5.33 0a10.777 10.777 0 0 0 3.199 -3.064a11.89 11.89 0 0 0 2 -8.592c-.466 -3.265 -3.198 -5.595 -7.862 -5.595z" />
                    <path d="M8 11l2 2" />
                    <path d="M16 11l-2 2" />
                  </svg>
                </span>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold">Lorem ipsum dolor</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Expedita iusto, perferendis cupiditate, voluptatem
                    similique, nisi omnis optio voluptatum aperiam culpa vel
                    fuga? A quasi nesciunt, nam asperiores minus harum
                    repudiandae!
                  </p>
                </div>
              </li>
              <li className="flex space-x-6">
                <span className="flex h-fit place-content-center items-center rounded-md bg-primary/10 p-2 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M11 17a2.5 2.5 0 0 0 2 0" />
                    <path d="M12 3c-4.664 0 -7.396 2.331 -7.862 5.595a11.816 11.816 0 0 0 2 8.592a10.777 10.777 0 0 0 3.199 3.064c1.666 1 3.664 1 5.33 0a10.777 10.777 0 0 0 3.199 -3.064a11.89 11.89 0 0 0 2 -8.592c-.466 -3.265 -3.198 -5.595 -7.862 -5.595z" />
                    <path d="M8 11l2 2" />
                    <path d="M16 11l-2 2" />
                  </svg>
                </span>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold">Lorem ipsum dolor</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Expedita iusto, perferendis cupiditate, voluptatem
                    similique, nisi omnis optio voluptatum aperiam culpa vel
                    fuga? A quasi nesciunt, nam asperiores minus harum
                    repudiandae!
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {categories.map((item) => (
          <Link href={`/${item.slug}`} key={item.slug}>
            {item.title}
          </Link>
        ))}
      </main>
    </>
  );
}
