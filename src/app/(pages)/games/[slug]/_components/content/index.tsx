"use client";

import { Game } from "@/src/lib/types";

export default function Content({ game }: { game: Game }) {
  return (
    <>
      <div className="mb-5 flex items-end justify-start py-1 md:py-5">
        <h1 className="offside neon_border_orange border-4 border-orange-500 p-2 text-[1rem] font-bold md:text-[3rem]">
          <span className="neon_orange">ゲーム説明</span>
        </h1>
      </div>
      <div className="mx-auto flex w-4/5 items-start justify-center pt-4 md:pt-0">
        <div className="double-border w-full">
          <p className="text-base md:text-3xl">{game.description}</p>
        </div>
      </div>
    </>
  );
}
