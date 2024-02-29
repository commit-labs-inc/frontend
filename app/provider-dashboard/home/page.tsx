"use client";

import { Banner } from "@/app/ui/provider-dashboard/banner.jsx";
import { Stats } from "@/app/ui/provider-dashboard/stats.jsx";
import { QuestTable } from "@/app/ui/provider-dashboard/quest-table.jsx";
import { ButtonGroup } from "@/app/ui/provider-dashboard/button-groups.jsx";

export default function Page({
  searchParams,
}: {
  searchParams?: {
    filter?: string;
  };
}) {
  const filter = searchParams?.filter || "All";

  return (
    <div className="flex flex-col">
      <Banner
        title="Home"
        subtitle="Welcome to your quest management portal !"
      />
      <Stats />
      {/* ButtonGroup */}
      <ButtonGroup />
      <QuestTable filter={filter} />
    </div>
  );
}
