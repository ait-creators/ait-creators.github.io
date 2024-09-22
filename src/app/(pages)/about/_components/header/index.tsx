import "@/src/styles/tailwind.css";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="offside block text-[4rem] lg:hidden">
        <span className="neon_blue2 border-b-4 border-yellow-200 text-white">
          ABOUT
        </span>
      </div>
      <div className="hidden pb-12 lg:block">
        <span className="neon_blue2 text-[8rem] text-white">ABOUT</span>
        <br />
        <div className="my-[-80px] flex items-center">
          <span className="neon_blue text-[11rem] text-white">BeCreAIT</span>
          <Image
            alt="icon"
            className="size-fit"
            height={900}
            src="/icon.png"
            width={900}
          />
        </div>
      </div>
    </>
  );
}
