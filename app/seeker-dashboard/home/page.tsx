import { Banner } from "@/app/ui/provider-dashboard/banner";
import { ButtonGroup } from "@/app/ui/seeker-dashboard/button-group";
import { QuestTable } from "@/app/ui/seeker-dashboard/quest-table";

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
            <Banner title="Home" subtitle="Track your progress, commit to success!" />
            <ButtonGroup />
            <QuestTable filter={filter} />
        </div>
    );
}