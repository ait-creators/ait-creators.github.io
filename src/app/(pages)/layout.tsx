import { Inter as FontSans } from "next/font/google";

import React from "react";
import { cn } from "@/src/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )} overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
