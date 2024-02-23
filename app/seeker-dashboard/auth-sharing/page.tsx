"use client";

import { useState } from "react";
import { Banner } from "@/app/ui/provider-dashboard/banner";
import { NftGrid } from "@/app/ui/seeker-dashboard/nft-grid";
import { StoryCard } from "@/app/ui/seeker-dashboard/story-card";

export default function Page() {
  const [render, setRender] = useState(false);

  return (
    <div className="flex flex-col">
      <Banner title="Story Builder" subtitle="Tell Your Story, Your Way." />
      <div className="flex items-center justify-center text-center mt-4">
        {/* Your reputation area. */}
        <div>
          <h1>Your Reputation</h1>
          <NftGrid />
        </div>
        {/* Build Story Button */}
        <button
          className="rotate-90 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setRender(true)}
        >
          Build Story
        </button>
        {/* Story Card */}
        {render && (
          <StoryCard />
        )}
      </div>
    </div>
  );
}
