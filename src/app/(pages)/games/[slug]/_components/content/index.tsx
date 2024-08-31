import { Game } from "@/src/lib/types";

export default function Content({ game }: { game: Game }) {
  return (
    <div className="mx-auto flex w-4/5 items-start justify-center pt-4 md:pt-0">
      <div className="w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
        <div className="size-full bg-black p-2 md:p-1 ">
          <h1 className="text-2xl font-black text-white">ゲーム説明</h1>
          <p>{game.description}</p>
        </div>
      </div>
    </div>
  );
}
