"use client";

/* eslint-disable react/no-array-index-key */
import { useMotionValue, motion, useAnimationFrame } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import useMeasure from "react-use-measure";
import Card from "@/src/app/(app)/_components/card";
import { GAMES } from "@/src/data";

// GAMESの配列をそのまま使用
const games = [...GAMES];

//  表示するゲームの画像の配列をシャッフルする関数
const shuffleArray = (array: typeof games) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
};

export default function Page() {
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const progressRef = useRef(0);

  const duration = 50; // 50秒

  const [shuffledGames, setShuffledGames] = useState<typeof games>([]);

  useEffect(() => {
    setShuffledGames(shuffleArray([...games]));
  }, []);

  useAnimationFrame((time, delta) => {
    if (!isHovered) {
      const distance = width / 2 + 20;
      const progress = (progressRef.current + delta / (duration * 1000)) % 1;
      progressRef.current = progress;
      const position = -distance * progress;
      xTranslation.set(position);
    }
  });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      className="absolute left-0 flex gap-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ x: xTranslation }}
    >
      {/* gamesをランダムに取得したい */}
      {shuffledGames.map((game, index) => (
        <Card key={index} game={game} />
      ))}
    </motion.div>
  );
}
