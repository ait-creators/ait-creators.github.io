import Image from "next/image";
import Link from "next/link";
import { GAMES } from "@/src/data";

export default function Page() {
  return (
    <>
      <div className="flex items-end justify-start py-5 ">
        <h1 className="offside z-10 rounded-xl border-4 border-blue-500 p-2 text-[2rem] md:text-[4rem]">
          <span className="neon_blue">Pick up !</span>
        </h1>
      </div>
      <div className="mx-3 grid grid-cols-3 gap-4 gap-y-10 px-7 lg:mx-40">
        {GAMES.map((game) => {
          if (game.pickup) {
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
                  <h2 className="flex justify-center">{game.title}</h2>
                </Link>
              </div>
            );
          }

          return null;
        })}
      </div>
    </>
  );
}
