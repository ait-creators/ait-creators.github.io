"use client";

import { useParams } from "next/navigation";
import Content from "../content";
import Gallery from "../gallery";
import Header from "../header";
import Title from "../title";
import { GAMES } from "@/src/data";

export default function Data() {
  const params = useParams();

  return (
    <div className="px-4">
      <Header />
      {GAMES.map((game) => {
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
