// src/types.ts
export interface Game {
  id: number;
  title: string;
  description: string;
  images: { title: string; src: string; alt: string }[];
  pickup: boolean;
}
