import "@/src/styles/tailwind.css";

export default function Page() {
  return (
    <div className="relative">
      <div className="flex items-end justify-center">
        <h1 className="offside relative z-10 flex text-[4rem] md:text-[8rem]">
          <span className="neon_blue">BeCreate</span>
          <span className="neon_orange rotate-12">!</span>
        </h1>
      </div>
      <div className="absolute inset-x-0 -translate-y-7 md:-translate-y-14">
        <div className="border-t-4 border-yellow-200 p-0.5 md:border-t-8 md:p-1" />
        <div className="border-t-4 border-yellow-200 md:border-t-8" />
      </div>
    </div>
  );
}
