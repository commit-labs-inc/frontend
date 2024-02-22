import { TextButton } from "@/app/ui/button";
import Image from "next/image";

export function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Image
          src="/logo.svg"
          alt="Logo"
          className="h-10 mr-4"
          width={100}
          height={100}
        />
      </div>
      <div className="flex items-center">
        <a href="/marketplace/quests">
          <TextButton>World of Quests</TextButton>
        </a>
      </div>
    </header>
  );
}
