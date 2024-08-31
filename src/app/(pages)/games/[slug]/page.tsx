"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import Content from "./_components/content";
import Gallery from "./_components/gallery";
import Header from "./_components/header";
import Title from "./_components/title";
import { GAMES } from "@/src/data";

export default function Page() {
  const params = useParams();

  return (
    <>
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
      <button
        className="fixed bottom-4 right-4 rounded-xl bg-white p-2 text-black"
        type="button"
      >
        <Link href="/games">戻る</Link>
      </button>
    </>
  );
}
