"use client";

import { Game } from "@/src/lib/types";

export default function Content({ game }: { game: Game }) {
  return (
    <div className="mx-auto flex w-4/5 items-start justify-center pt-4 md:pt-0">
      <div className="double-border w-full">
        <h1 className="text-2xl font-black text-white">ゲーム説明</h1>
        <p className="text-base md:text-3xl">{game.description}</p>
      </div>
    </div>
  );
}
