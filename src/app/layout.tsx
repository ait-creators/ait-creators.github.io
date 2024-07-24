import { GoogleAnalytics } from '@next/third-parties/google'
import { Metadata } from "next";
import "@/src/styles/tailwind.css";

import React from "react";

export const metadata: Metadata = {
  title: "BeCreAIT",
  description: "BeCreAIT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>{children}</body>
      <GoogleAnalytics gaId="G-EJLW92B540" />
    </html>
  );
}
