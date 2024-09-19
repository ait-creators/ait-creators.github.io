import "@/src/styles/tailwind.css";

export default function Page({ game }: { game: { title: string } }) {
  return (
    <h1 className="offside text-[2rem] md:text-[4rem]">
      <span className="border-b-4 border-yellow-200 text-white">
        {game.title}
      </span>
    </h1>
  );
}
