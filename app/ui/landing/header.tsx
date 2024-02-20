import { TextButton } from "@/app/ui/button";
import Image from "next/image";

export function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Image src="/logo.svg" alt="Logo" className="h-10 mr-4" width={100} height={100} />
      </div>
      <div className="flex items-center">
        <a href="https://romantic-salesman-da5.notion.site/Whitepaper-v0-1-0-e2a48c8f39b34476b508fa3022e78b9f?pvs=4" target="_blank" rel="noopener noreferrer">
          <TextButton className="font-mono">Whitepaper</TextButton>
        </a>
        <a href="https://forms.visme.co/formsPlayer/dm0opw4v-contact-us-contact-form" target="_blank" rel="noopener noreferrer">
          <TextButton className="font-mono">Contact Us</TextButton>
        </a>
      </div>
    </header>
  );
}
