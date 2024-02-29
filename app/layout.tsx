"use client";

import type { Metadata } from "next";
import "./globals.css";
import { GearProviders } from "./GearProviders";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GearProviders>{children}</GearProviders>
      </body>
    </html>
  );
}
