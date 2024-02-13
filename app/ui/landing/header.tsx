import { TextButton } from "@/app/ui/button";

export function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/logo.svg" alt="Logo" className="h-10 mr-4" />
      </div>
      <div className="flex items-center">
        <TextButton>Whitepaper</TextButton>
        <TextButton>Palybook</TextButton>
        <TextButton>About Us</TextButton>
      </div>
    </header>
  );
}
