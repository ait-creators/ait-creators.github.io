import Image from "next/image";
import { GAMES } from "@/src/data";

export default function Page() {
  return (
    <>
      <div className="flex items-end justify-start py-5 pt-16 md:pt-32">
        <h1 className="offside z-10 rounded-xl border-4 border-orange-500 p-2 text-[2rem] md:text-[rem]">
          <span className="neon_orange">All !</span>
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-4 gap-y-10 px-7 md:p-10">
        {GAMES.map((game) => {
          return (
            <div
              key={game.id}
              className="skew-x-[-15deg] rounded-xl border-4 shadow-xl shadow-slate-500 md:border-8"
            >
              <Image
                alt={game.images[0].alt}
                height={200}
                src={game.images[0].src}
                width={200}
              />
              <h2 className="flex justify-center">{game.title}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
}
