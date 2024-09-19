import { GoogleAnalytics } from "@next/third-parties/google";
import { Metadata } from "next";
import "@/src/styles/tailwind.css";
import { Inter as FontSans } from "next/font/google";
import React from "react";
import { cn } from "@/src/lib/utils";

export const metadata: Metadata = {
  title: "BeCreAIT",
  description: "BeCreAIT",
};

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
    <html lang="ja" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-EJLW92B540" />
    </html>
  );
}
