"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHoveringImage(
        target.tagName === "IMG" ||
          target.closest("a") !== null ||
          target.closest("button") !== null ||
          target.classList.contains("cursor-image")
      );
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", checkHover);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", checkHover);
    };
  }, []);

  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-fuego rounded-full z-[9998] pointer-events-none hidden md:block"
        animate={{ x: position.x - 4, y: position.y - 4, opacity: isVisible ? 1 : 0 }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />
      {/* Trailing circle */}
      <motion.div
        className="fixed top-0 left-0 z-[9997] pointer-events-none hidden md:flex items-center justify-center"
        animate={{
          x: position.x - (isHoveringImage ? 28 : 16),
          y: position.y - (isHoveringImage ? 28 : 16),
          width: isHoveringImage ? 56 : 32,
          height: isHoveringImage ? 56 : 32,
          opacity: isVisible ? 1 : 0,
          borderColor: isHoveringImage ? "#C4622D" : "#3D5A3E",
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
        style={{ border: "1px solid", borderRadius: "50%" }}
      >
        {isHoveringImage && (
          <span className="text-fuego text-xs font-sans font-medium tracking-widest">VER +</span>
        )}
      </motion.div>
    </>
  );
}
