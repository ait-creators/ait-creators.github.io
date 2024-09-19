import React from "react";
import Header from "@/src/app/(app)/_components/header";
import Menu from "@/src/components/menu";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Menu />
    </>
  );
}
