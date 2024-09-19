import Link from "next/link";

export default function Page() {
  return (
    <div
      className="offside fixed bottom-0 z-50 flex w-full justify-around overflow-x-hidden py-3 text-2xl text-cyan-300 md:text-4xl"
      style={{
        background:
          "linear-gradient(to right, black 10%, rgba(200, 200, 200, 0.8) 50%, black 90%)",
      }}
    >
      <Link className="flow" href="/">
        HOME
      </Link>
      <Link className="flow" href="/about">
        ABOUT
      </Link>
      <Link className="flow" href="/games">
        GAMES
      </Link>
      <Link className="flow" href="/contact">
        CONTACT
      </Link>
    </div>
  );
}
