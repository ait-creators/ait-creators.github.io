import Image from "next/image";

import { Game } from "@/src/lib/types";

export default function Gallery({ game }: { game: Game }) {
  return (
    <div className="grid grid-cols-3 gap-4 gap-y-10 p-10 px-7">
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
