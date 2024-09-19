"use client";

import Image from "next/image";

import { Game } from "@/src/lib/types";

export default function Gallery({ game }: { game: Game }) {
  return (
    <div className="mx-3 grid grid-cols-2 gap-4 gap-y-10 p-10 md:grid-cols-3 lg:mx-40">
      {game.images.map((image: { src: string; alt: string }) => (
        <div
          key={image.src}
          className="skew-x-[-15deg] rounded-xl border-4 shadow-xl shadow-slate-500 md:border-8"
        >
          <Image alt={image.alt} height={1080} src={image.src} width={1920} />
        </div>
      ))}
    </div>
  );
}
