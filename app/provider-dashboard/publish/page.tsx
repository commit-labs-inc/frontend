"use client";

import { useState } from "react";
import { Banner } from "@/app/ui/provider-dashboard/banner";
import { Preview } from "@/app/ui/provider-dashboard/preview";
import { QuestPreview } from "@/app/ui/provider-dashboard/quest-preview";
import {
  PaperClipIcon,
  StarIcon,
  ArrowRightIcon,
} from "@heroicons/react/20/solid";

export default function Page() {
  const [clicked, setClicked] = useState("manual");
  const [preview, setPreview] = useState(false);
  const clickHandler = (btnName: string) => {
    setClicked(btnName);
  };

  const previewHandler = () => {
    setPreview(true);
  }

  return (
    <div className="flex flex-col">
      <Banner
        title="Publish"
        subtitle="Quests are opportunities to showcase your organization !"
      />
      {/* Button Group */}
      <span className="isolate inline-flex justify-center mt-8">
        <button
          type="button"
          className="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          onClick={() => {
            clickHandler("manual");
          }}
        >
          Manual Publish
        </button>
        <button
          type="button"
          className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          onClick={() => {
            clickHandler("AI");
          }}
        >
          AI-Powered
        </button>
      </span>
      {/* Manual Generation Preview */}
      {clicked === "manual" && <Preview />}
      {/* AI-Powered Generation Preview */}
      {clicked === "AI" && (
        <div className="flex flex-col mt-4">
          {/* AI Chat Input */}
          <div className="flex items-center border-2 border-gray-300 rounded-full py-2 px-4 w-full">
            <PaperClipIcon className="h-5 w-5 text-gray-500" />
            <input
              className="flex-1 pl-2 pr-2 bg-transparent outline-none placeholder-gray-500"
              type="text"
              placeholder="Upload or type your information to generate quests at ease..."
            />
            <div className="flex space-x-2">
              <StarIcon className="h-5 w-5 text-gray-500" />
              <ArrowRightIcon onClick={previewHandler} className="h-5 w-5 text-gray-500" />
            </div>
          </div>
          {/* Quest Preview Section */}
          {preview && <QuestPreview />}
        </div>
      )}
    </div>
  );
}
