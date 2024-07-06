"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import "@/src/app/(app)/_components/card/index.css";

interface CardProps {
  image: string;
}

const Card: React.FC<CardProps> = ({ image }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.div
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className="skewed relative flex h-[200px] min-w-[300px] items-center justify-center overflow-hidden rounded-xl bg-slate-400 md:h-[400px] md:min-w-[600px]"
      onHoverEnd={() => setShowOverlay(false)}
      onHoverStart={() => setShowOverlay(true)}
    >
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            animate={{ opacity: 1 }}
            className="absolute inset-0 z-10 flex items-center justify-center"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
          >
            <div className="pointer-events-none absolute size-full bg-black opacity-50" />
            <motion.h1
              animate={{ y: 10 }}
              className="z-10 flex items-center gap-[0.5ch] rounded-full bg-white px-3 py-2 text-sm font-semibold hover:opacity-75"
              exit={{ y: 10 }}
              initial={{ y: 0 }}
            >
              <span />
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
      <Image alt={image} fill src={image} style={{ objectFit: "cover" }} />
    </motion.div>
  );
};

export default Card;
