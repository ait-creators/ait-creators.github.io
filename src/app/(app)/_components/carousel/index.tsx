"use client";

/* eslint-disable react/no-array-index-key */
import { animate, useMotionValue, motion } from "framer-motion";
import { useEffect } from "react";
import useMeasure from "react-use-measure";
import Card from "@/src/app/(app)/_components/card";
import { images } from "@/src/lib/data";

export default function Page({ flag }: { flag: boolean }) {
  const [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;

    let firstposition;
    let finalposition;
    if (flag === true) {
      firstposition = 0;
      finalposition = -width / 2 - 20;
    } else {
      firstposition = -width / 2 - 20;
      finalposition = 0;
    }

    // eslint-disable-next-line prefer-const
    controls = animate(xTranslation, [firstposition, finalposition], {
      ease: "linear",
      duration: 50,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width, flag]);

  return (
    <motion.div
      ref={ref}
      className="absolute left-0 flex gap-4"
      style={{ x: xTranslation }}
    >
      {[...images, ...images].map((item, index) => (
        <Card key={index} image={item} />
      ))}
    </motion.div>
  );
}
