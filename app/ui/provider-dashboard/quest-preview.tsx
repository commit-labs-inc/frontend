"use client";

import {
  PaperClipIcon,
  UserIcon,
  CalendarIcon,
} from "@heroicons/react/20/solid";
import { useSendQuestMessage } from "@/app/lib/hooks/api";
import { useAccount } from "@gear-js/react-hooks";

export function QuestPreview() {
  const sendQuestMessage = useSendQuestMessage();
  const { accounts } = useAccount();

  const handlePublish = () => {
    console.log(accounts);
    sendQuestMessage({
      publish: {
        questType: "BaseTier",
        questInfo: {
          institutionName: "fake institution",
          questName: "fake quest",
          description: "fake description",
          deliverables: "fake deliverables",
          capacity: 32,
          skillTokenName: "Python",
          deadline: 5000000,
          openTry: false,
          providerName: "fake provider",
          contactInfo: "fake contact",
          freeGradings: 10,
          hiringFor: "something",
          skillTags: "Python",
          reputationNft: "None",
          prize: "",
          applicationDeadline: 0,
          dedicatedTo: null,
        },
      },
    });
  };

  const previewData = {
    institution: "[University/Institute Name]",
    publisher: "Dr. [Your Name], Professor of Biotechnology",
    contactInfo: "xxX@gmail.com",
    deadline: "12.19.2025",
    questOverview: "xxxx",
    questType: "[for hiring - Ph.D. / skill assessments]",
    freeGradingLimits: "10",
    questDescription: "",
    submissionDescription: "",
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-6">
      <div className="flex flex-col items-center justify-between border-b pb-4">
        <div className="flex space-x-4 items-center">
          <h1 className="text-xl font-bold">Quest for biotechnology!</h1>
          <button
            className="bg-black hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            onClick={handlePublish}
          >
            Publish
          </button>
        </div>
        <div>
          <span className="isolate inline-flex justify-center mt-8">
            <button
              type="button"
              className="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
            >
              LinkedIn
            </button>
            <button
              type="button"
              className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
            >
              Commit
            </button>
          </span>
        </div>
      </div>
      <ul className="my-4">
        <li className="flex items-center text-sm my-2">
          <PaperClipIcon className="h-5 w-5 mr-2 text-gray-500" />
          Institution: {previewData.institution}
        </li>
        <li className="flex items-center text-sm my-2">
          <UserIcon className="h-5 w-5 mr-2 text-gray-500" />
          Publisher: {previewData.publisher}
        </li>
        <li className="flex items-center text-sm my-2">
          <PaperClipIcon className="h-5 w-5 mr-2 text-gray-500" />
          Contact info: {previewData.contactInfo}
        </li>
        <li className="flex items-center text-sm my-2">
          <CalendarIcon className="h-5 w-5 mr-2 text-gray-500" />
          Deadline: {previewData.deadline}
        </li>
      </ul>
      <div className="my-4">
        <p className="text-sm">
          <span className="font-bold">Quest overview:</span>{" "}
          {previewData.questOverview}
        </p>
        <p className="text-sm">
          <span className="font-bold">Quest type:</span> {previewData.questType}
        </p>
        <p className="text-sm">
          <span className="font-bold">Free grading limits:</span>{" "}
          {previewData.freeGradingLimits}
        </p>
        <p className="text-sm">
          <span className="font-bold">Quest description:</span>{" "}
          {previewData.questDescription}
        </p>
        <p className="text-sm">
          <span className="font-bold">Submission description:</span>{" "}
          {previewData.submissionDescription}
        </p>
      </div>
    </div>
  );
}
