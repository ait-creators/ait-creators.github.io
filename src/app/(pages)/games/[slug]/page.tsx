"use client";

import { useParams } from "next/navigation";
import Content from "./_components/content";
import Gallery from "./_components/gallery";
import Header from "./_components/header";
import Title from "./_components/title";
import { GAMES } from "@/src/data";

export default function Page() {
  const params = useParams();

  return (
    <div className="px-4">
      <Header />
      {GAMES.map((game) => {
        // このロジックはGptによって生成
        if (
          game.id ===
          parseInt(
            Array.isArray(params.slug) ? params.slug[0] : params.slug,
            10
          )
        ) {
          return (
            <div key={game.id}>
              <Title game={game} />
              <Gallery game={game} />

              <Content game={game} />
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}
