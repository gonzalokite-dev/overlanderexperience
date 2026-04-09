"use client";

import { useScroll, useSpring, motion } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      id="scroll-progress"
      style={{ scaleX, width: "100%" }}
      className="fixed top-0 left-0 h-0.5 bg-fuego z-[9999] origin-left"
    />
  );
}
