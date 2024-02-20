import RoleCard from "@/app/ui/role-selection/role-card";
import { Header } from "@/app/ui/landing/header";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center px-12">
        <div className="font-serif text-2xl mt-20">
          Choose Your Role To Start
        </div>
        <div className="flex space-x-12 mt-20">
          <Link href="/seeker-dashboard/home">
            <RoleCard
              imageSrc="/seeker_role_card.png"
              cardName="Opportunity Seeker"
            />
          </Link>
          <Link href="/provider-dashboard/home">
            <RoleCard
              imageSrc="/reputation_provider.png"
              cardName="Reputation Provider"
            />
          </Link>
          <Link href="/request-listing">
            <RoleCard
              imageSrc="/request_listing.png"
              cardName="Request Listing"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
