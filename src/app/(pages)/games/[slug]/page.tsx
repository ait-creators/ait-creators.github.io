import Data from "./_components/getdata";
import { GAMES } from "@/src/data";

export async function generateStaticParams() {
  return GAMES.map((game) => ({
    slug: game.id.toString(),
  }));
}

export default function Page() {
  return <Data />;
}
