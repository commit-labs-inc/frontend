import { BookOpenIcon, CircleStackIcon } from "@heroicons/react/20/solid";
import { Banner } from "../provider-dashboard/banner";
import { fetchForQuestCard } from "@/app/lib/web3-comm";

export async function QuestGrid({filter}: {filter: string}) {
    const quests = await fetchForQuestCard(filter);

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {/* Quest Card */}
      {quests.map((quest) => (
        <li
          key={quest.questName}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-left shadow"
        >
          <div className="flex flex-1 flex-col p-8">
            <Banner title={quest.tier} subtitle={quest.skillTokens} />
            <h3 className="mt-6 text-sm font-medium text-gray-900">
              {quest.questName}
            </h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Quest Description</dt>
              <dd className="text-sm text-gray-500">{quest.questDescription}</dd>
              <dt className="sr-only">Quest Skill</dt>
              <dd className="mt-3">
                <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  {quest.skill}
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <a
                  href="#"
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <BookOpenIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  Details
                </a>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href="#"
                  className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <CircleStackIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  Commit
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
