import { RectangleStackIcon } from "@heroicons/react/24/outline";

const quests = [
  {
    name: "Ph.D. position in BME",
    deadline: "xx.xx.xxxx",
    details: "Link to quest",
    status: "Open",
  },
  {
    name: "Ph.D. position in BME",
    deadline: "xx.xx.xxxx",
    details: "Link to quest",
    status: "Full",
  },
  {
    name: "Ph.D. position in BME",
    deadline: "xx.xx.xxxx",
    details: "Link to quest",
    status: "Closed",
  },
  // More people...
];

export function QuestTable() {
  const statusStyles = {
    open: "bg-blue-50 text-blue-700 ring-blue-600/20",
    full: "bg-yellow-50 text-yellow-700 ring-yellow-600/20",
    closed: "bg-green-50 text-green-700 ring-green-600/20",
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-8">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Quest Name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Quest Details
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Quest Status
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {quests.map((quest) => (
                  <tr key={quest.name}>
                    <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                      <div className="flex items-center">
                        <div className="h-11 w-11 flex-shrink-0">
                          <RectangleStackIcon />
                        </div>
                        <div className="ml-4">
                          <div className="font-medium text-gray-900">
                            {quest.name}
                          </div>
                          <div className="mt-1 text-gray-500">
                            {quest.deadline}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      {quest.details}
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      <span
                        className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                          statusStyles[quest.status]
                        }`}
                      >
                        {quest.status}
                      </span>
                    </td>
                    <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Manage<span className="sr-only">, {quest.name}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
