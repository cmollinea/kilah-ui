function Test() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="w-full overflow-x-auto px-4">
        <div className="w-full min-w-[40rem] lg:min-w-full">
          <table className="w-full bg-card-background p-6 text-sm">
            <thead className="p-2 text-base">
              <tr className="border-y border-accent/20">
                <th className="px-2 py-4 text-left">
                  <input type="checkbox" name="all" id="" />
                </th>
                <th className="px-2 py-4 text-left">ID</th>
                <th className="px-2 py-4 text-left">Customer</th>
                <th className="px-2 py-4 text-left">Date</th>
                <th className="px-2 py-4 text-left">Service</th>
                <th className="px-2 py-4 text-left">Amount</th>
                <th className="px-2 py-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="p-2">
              <tr className="border-y border-l-4 border-accent/20 border-l-transparent transition ease-in hover:border-l-primary hover:bg-accent/5">
                <td className="px-2 py-4">
                  <input type="checkbox" name="" id="" />
                </td>
                <td className="px-2 py-4 font-bold">14568</td>
                <td className="px-2 py-4">
                  <a
                    href="#"
                    className="underline transition hover:text-primary"
                  >
                    Jane Doe
                  </a>
                </td>
                <td className="px-2 py-4">Agoust 26, 2024</td>
                <td className="px-2 py-4">Electricity</td>
                <td className="px-2 py-4">$1500</td>
                <td className="px-2 py-4 text-xs font-medium">
                  <div className="flex w-fit items-center space-x-1 rounded-full px-3 py-0.5 text-danger">
                    <span className="block h-2 w-2 rounded-full bg-danger"></span>
                    <span className="block">Rejected</span>
                  </div>
                </td>
              </tr>{" "}
              <tr className="border-y border-l-4 border-accent/20 border-l-transparent transition ease-in hover:border-l-primary hover:bg-accent/5">
                <td className="px-2 py-4">
                  <input type="checkbox" name="" id="" />
                </td>
                <td className="px-2 py-4 font-bold">14568</td>
                <td className="px-2 py-4">
                  <a
                    href="#"
                    className="underline transition hover:text-primary"
                  >
                    Jane Doe
                  </a>
                </td>
                <td className="px-2 py-4">Agoust 26, 2024</td>
                <td className="px-2 py-4">Electricity</td>
                <td className="px-2 py-4">$1500</td>
                <td className="px-2 py-4 text-xs font-medium">
                  <div className="flex w-fit items-center space-x-1 rounded-full px-3 py-0.5 text-info">
                    <span className="block h-2 w-2 rounded-full bg-info"></span>
                    <span className="block">Initiated</span>
                  </div>
                </td>
              </tr>{" "}
              <tr className="border-y border-l-4 border-accent/20 border-l-transparent transition ease-in hover:border-l-primary hover:bg-accent/5">
                <td className="px-2 py-4">
                  <input type="checkbox" name="" id="" />
                </td>
                <td className="px-2 py-4 font-bold">14568</td>
                <td className="px-2 py-4">
                  <a
                    href="#"
                    className="underline transition hover:text-primary"
                  >
                    Jane Doe
                  </a>
                </td>
                <td className="px-2 py-4">Agoust 26, 2024</td>
                <td className="px-2 py-4">Electricity</td>
                <td className="px-2 py-4">$1500</td>
                <td className="px-2 py-4 text-xs font-medium">
                  <div className="flex w-fit items-center space-x-1 rounded-full px-3 py-0.5 text-danger">
                    <span className="block h-2 w-2 rounded-full bg-danger"></span>
                    <span className="block">Rejected</span>
                  </div>
                </td>
              </tr>{" "}
              <tr className="border-y border-l-4 border-accent/20 border-l-transparent transition ease-in hover:border-l-primary hover:bg-accent/5">
                <td className="px-2 py-4">
                  <input type="checkbox" name="" id="" />
                </td>
                <td className="px-2 py-4 font-bold">14568</td>
                <td className="px-2 py-4">
                  <a
                    href="#"
                    className="underline transition hover:text-primary"
                  >
                    Jane Doe
                  </a>
                </td>
                <td className="px-2 py-4">Agoust 26, 2024</td>
                <td className="px-2 py-4">Electricity</td>
                <td className="px-2 py-4">$1500</td>
                <td className="px-2 py-4 text-xs font-medium">
                  <div className="flex w-fit items-center space-x-1 rounded-full px-3 py-0.5 text-warning">
                    <span className="block h-2 w-2 rounded-full bg-warning"></span>
                    <span className="block">Pending</span>
                  </div>
                </td>
              </tr>{" "}
              <tr className="border-y border-l-4 border-accent/20 border-l-transparent transition ease-in hover:border-l-primary hover:bg-accent/5">
                <td className="px-2 py-4">
                  <input type="checkbox" name="" id="" />
                </td>
                <td className="px-2 py-4 font-bold">14568</td>
                <td className="px-2 py-4">
                  <a
                    href="#"
                    className="underline transition hover:text-primary"
                  >
                    Jane Doe
                  </a>
                </td>
                <td className="px-2 py-4">Agoust 26, 2024</td>
                <td className="px-2 py-4">Electricity</td>
                <td className="px-2 py-4">$1500</td>
                <td className="px-2 py-4 text-xs font-medium">
                  <div className="flex w-fit items-center space-x-1 rounded-full px-3 py-0.5 text-success">
                    <span className="block h-2 w-2 rounded-full bg-success"></span>
                    <span className="block">Paid</span>
                  </div>
                </td>
              </tr>
            </tbody>
            <tfoot className="">
              <tr className="px-2 py-4">
                <td colSpan={7}>
                  <p className="py-2 text-center">Updated 7 minutes ago</p>
                </td>
              </tr>
            </tfoot>
            <caption className="w-full text-center">Awesome Caption</caption>
          </table>
        </div>
      </div>
    </main>
  );
}
export default Test;
