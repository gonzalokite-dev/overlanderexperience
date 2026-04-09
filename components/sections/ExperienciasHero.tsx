"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { IMAGES } from "@/lib/data";

export default function ExperienciasHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section ref={ref} className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
      <motion.div className="absolute inset-0 scale-110" style={{ y }}>
        <Image
          src={IMAGES.brana}
          alt="Experiencias en naturaleza auténtica en Somiedo"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-negro/80 via-negro/30 to-negro/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-16 w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-fuego font-sans text-xs font-semibold uppercase tracking-[0.3em] mb-3"
        >
          Experiencias
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-5xl md:text-6xl lg:text-7xl text-crema font-light leading-none mb-4"
        >
          Experiencias en<br />naturaleza auténtica
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-serif italic text-crema/70 text-xl"
        >
          Diseñadas para los que buscan algo real.
        </motion.p>
      </div>
    </section>
  );
}
