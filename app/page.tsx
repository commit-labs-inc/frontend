import { Header } from "@/app/ui/landing/header";
import { Content } from "@/app/ui/landing/content";
import AccountSelector from "./ui/account-select";

export default function Page() {
  return (
    <div className="h-screen flex flex-col">
        <Header />
        <Content />
    </div>
  );
}
