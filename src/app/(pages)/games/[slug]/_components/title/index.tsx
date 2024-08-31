import "@/src/styles/tailwind.css";

export default function Page({ game }: { game: { title: string } }) {
  return (
    <div className="flex items-end justify-start">
      <h1 className="offside relative z-10 flex text-[2rem] md:text-[4rem]">
        <span className="border-b-4 border-yellow-200 text-white">
          {game.title}
        </span>
      </h1>
    </div>
  );
}
