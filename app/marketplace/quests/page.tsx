import { Header } from "@/app/ui/landing/header";
import { Banner } from "@/app/ui/provider-dashboard/banner";
import { ButtonGroup } from "@/app/ui/quest-marketplace/button-group";
import { QuestGrid } from "@/app/ui/quest-marketplace/quest-grid";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    filter?: string;
  };
}) {
  const filter = searchParams?.filter || "All";

  return (
    <div className="flex flex-col">
      <Header />
      <Banner title="World of Quests" subtitle="Fullfill your ambitions." />
      <ButtonGroup />
      <div className="p-20">
        <QuestGrid filter={filter} />
      </div>
    </div>
  );
}
