import Carousel from "./_components/carousel";

export default function Page() {
  return (
    <div>
      <div className="translate-y-0 md:translate-y-0">
        <Carousel />
      </div>
      <div className="translate-y-[230px] md:translate-y-[430px]">
        <Carousel />
      </div>
      <div className="translate-y-[460px] md:translate-y-[860px]">
        <Carousel />
      </div>
      <div className="block md:hidden">
        <div className="translate-y-[690px]">
          <Carousel />
        </div>
        <div className="translate-y-[910px]">
          <Carousel />
        </div>
      </div>
    </div>
  );
}
