import "@/src/styles/tailwind.css";

export default function Page() {
  return (
    <div className="relative">
      <div className="flex items-end justify-start">
        <h1 className="offside relative z-10 flex text-[3rem] md:text-[4rem]">
          <span className="neon_blue">BeCreate</span>
          <span className="neon_orange rotate-12">!</span>
        </h1>
      </div>
    </div>
  );
}
