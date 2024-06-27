import "@/src/styles/tailwind.css";

export default function Page() {
  return (
    <div className="relative">
      <div className="flex items-end justify-center">
        <div className="offside relative z-10 flex text-[8rem]">
          <h1 className="neon_blue">BeCreate</h1>
          <h1 className="neon_orange rotate-12">!</h1>
        </div>
      </div>
      <div className="absolute inset-x-0 -translate-y-14">
        <div className="border-t-8 border-yellow-200 p-1" />
        <div className="border-t-8 border-yellow-200" />
      </div>
    </div>
  );
}
