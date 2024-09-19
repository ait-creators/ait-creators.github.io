import Image from "next/image";
import Link from "next/link";
import { Game } from "@/src/lib/types";

export default function Card({ game }: { game: Game }) {
  return (
    <Link href={`/games/${game.id}`}>
      <div className="group relative flex h-[200px] min-w-[300px] skew-x-[-15deg] items-center justify-center overflow-hidden rounded-xl bg-slate-400 md:h-[350px] md:min-w-[600px]">
        <div className="hidden group-hover:block">
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="pointer-events-none absolute size-full bg-black opacity-50" />
          </div>
        </div>
        <Image
          alt={game.title}
          height={600}
          src={game.images[0].src}
          width={600}
        />
      </div>
    </Link>
  );
}
