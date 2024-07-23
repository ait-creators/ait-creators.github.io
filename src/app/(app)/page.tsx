import Carousel from "./_components/carousel";

export default function Page() {
  return (
    <div>
      <div>
        <Carousel />
      </div>
      <div className="translate-y-[250px] md:translate-y-[500px]">
        <Carousel />
      </div>
      <div className="md:hidden">
        <div className="translate-y-[500px]">
          <Carousel />
        </div>
        <div className="translate-y-[750px]">
          <Carousel />
        </div>
        <div className="translate-y-[1000px]">
          <Carousel />
        </div>
      </div>
    </div>
  );
}
