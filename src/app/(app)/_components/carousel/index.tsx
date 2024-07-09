"use client";

/* eslint-disable react/no-array-index-key */
import { useMotionValue, motion, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";
import useMeasure from "react-use-measure";
import Card from "@/src/app/(app)/_components/card";
import { images } from "@/src/lib/data";

export default function Page() {
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const progressRef = useRef(0);

  const duration = 50; // 50秒

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
      {[...images, ...images].map((item, index) => (
        <Card key={index} image={item} />
      ))}
    </motion.div>
  );
}
