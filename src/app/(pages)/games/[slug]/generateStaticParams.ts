import { GAMES } from "@/src/data";

export async function generateStaticParams() {
  return GAMES.map((game) => ({
    slug: game.id.toString(),
  }));
}
