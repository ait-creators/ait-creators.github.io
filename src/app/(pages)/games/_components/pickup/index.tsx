import Image from "next/image";
import { GAMES } from "@/src/data";

export default function Page() {
  return (
    <>
      <div className="flex translate-y-0 items-end justify-start lg:translate-y-[-50px]">
        <h1 className="offside z-10 border-4 border-cyan-500 p-2 text-[4rem] md:text-[6rem]">
          <span className="neon_blue">PICK UP !</span>
        </h1>
      </div>
      <div className="flex justify-around">
        {GAMES.map((game) => {
          if (game.pickup) {
            return (
              <div key={game.id} className="skew-x-[-15deg] border">
                <Image
                  alt={game.images[0].alt}
                  height={200}
                  src={game.images[0].src}
                  width={200}
                />
                <h2 className="flex justify-center">{game.title}</h2>
              </div>
            );
          }

          return null;
        })}
      </div>
    </>
  );
}
