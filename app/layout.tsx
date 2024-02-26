import type { Metadata } from "next";
import { secFont } from "@/app/ui/fonts";
import "./globals.css";
import { PolkadotExtensionContextProvider } from "@/app/polkadot-provider";


export const metadata: Metadata = {
  title: "Commit",
  description: "Powering the future of work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={secFont.className}>
        <PolkadotExtensionContextProvider>{children}</PolkadotExtensionContextProvider>
      </body>
    </html>
  );
}
