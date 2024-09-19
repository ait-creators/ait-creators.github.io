import Carousel from "./_components/carousel";

export default function Page() {
  return (
    <div>
      <div className="translate-y-0 md:translate-y-0">
        <Carousel />
      </div>
      <div className="translate-y-[250px] md:translate-y-[500px]">
        <Carousel />
      </div>
    </div>
  );
}
