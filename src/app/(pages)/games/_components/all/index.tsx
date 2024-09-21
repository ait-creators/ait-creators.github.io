import Image from "next/image";
import Link from "next/link";
import { GAMES } from "@/src/data";

export default function Page() {
  return (
    <>
      <div className="flex items-end justify-start py-5">
        <h1 className="offside neon_border_orange border-4 border-orange-500 p-2 text-[2rem] font-bold md:text-[4rem]">
          <span className="neon_orange">All !</span>
        </h1>
      </div>
      <div className="mx-3 grid grid-cols-2 gap-4 gap-y-10 px-2 md:grid-cols-3 md:px-7 lg:mx-40">
        {GAMES.map((game) => {
          return (
            <div
              key={game.id}
              className="skew-x-[-15deg] rounded-xl border-4 shadow-xl shadow-slate-500 md:border-8"
            >
              <Link href={`/games/${game.id}`}>
                <div className="flex justify-center">
                  <Image
                    alt={game.images[0].alt}
                    height={1080}
                    src={game.images[0].src}
                    width={1920}
                  />
                </div>
                <h2 className="flex justify-center text-xs font-semibold md:text-4xl">
                  {game.title}
                </h2>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
