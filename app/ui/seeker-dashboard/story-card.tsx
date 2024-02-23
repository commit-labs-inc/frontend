import { UserIcon } from "@heroicons/react/20/solid";
import { SkillCard } from "@/app/ui/seeker-dashboard/skill-card";

export function StoryCard() {
  return (
    <div className="flex flex-col rounded-lg shadow-md items-center justify-center">
      {/* Card Header */}
      <div className="flex">
        <UserIcon className="h-6 w-6" />
        <p>Seeker Y - blockchain wallet address.</p>
      </div>
      {/* Skill Tags */}
      <div className="flex space-x-2 mt-2">
        <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
          Computer Science
        </span>
        <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
          Writer
        </span>
        <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
          Translator
        </span>
      </div>
      {/* Skill Card */}
      <div className="flex flex-col">
        <SkillCard
          title="Cybersecurity Showdown"
          description="Defend a virtual network from a series of simulated cyber attacks."
          icon="/programmer_owl.png"
        />
        <SkillCard
          title="Tech Doc Writer"
          description="Write articles about Polkadot architecture."
          icon="/bookworm_owl.png"
        />
        <SkillCard
          title="Translator"
          description="Translate research paper from English to Chinese."
          icon="/translator_owl.png"
        />
      </div>
      {/* Buttons */}
      <div className="flex space-x-2 mb-4">
        <button className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Add To Stories
        </button>
        <button className="rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Share My Story
        </button>
      </div>
    </div>
  );
}
