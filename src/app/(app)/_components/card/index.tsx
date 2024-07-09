import Image from "next/image";

interface CardProps {
  image: string;
}

const Card: React.FC<CardProps> = ({ image }) => {
  return (
    <div className="group relative flex h-[200px] min-w-[300px] skew-x-[-15deg] items-center justify-center overflow-hidden rounded-xl bg-slate-400 md:h-[400px] md:min-w-[600px]">
      <div className="hidden group-hover:block">
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="pointer-events-none absolute size-full bg-black opacity-50" />
        </div>
      </div>
      <Image alt={image} fill src={image} style={{ objectFit: "cover" }} />
    </div>
  );
};

export default Card;
