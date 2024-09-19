import "@/src/styles/tailwind.css";
import Link from "next/link";

export default function Page() {
  return (
    <div className="relative">
      <div className="flex items-end justify-start">
        <Link href="/">
          <h1 className="offside relative z-10 flex text-[2rem] md:text-[4rem]">
            <span className="neon_blue">BeCreate</span>
            <span className="neon_orange rotate-12">!</span>
          </h1>
        </Link>
      </div>
    </div>
  );
}
