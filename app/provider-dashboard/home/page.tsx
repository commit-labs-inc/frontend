import { Banner } from "@/app/ui/provider-dashboard/banner.jsx";
import { Stats } from "@/app/ui/provider-dashboard/stats.jsx";
import { ButtonGroup } from "@/app/ui/provider-dashboard/button-groups.jsx";
import { QuestTable } from "@/app/ui/provider-dashboard/quest-table.jsx";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Banner />
      <Stats />
      <ButtonGroup />
      <QuestTable />
    </div>
  );
}
