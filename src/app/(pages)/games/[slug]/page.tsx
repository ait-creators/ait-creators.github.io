"use client";

import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();

  return <h2>This is the games/[slug] page. The slug is: {pathname}</h2>;
}
