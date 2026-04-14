"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { IMAGES } from "@/lib/data";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Parallax image */}
      <motion.div className="absolute inset-0 scale-110" style={{ y }}>
        <Image
          src={IMAGES.amanecer}
          alt="Amanecer en Somiedo, Asturias"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-negro/40 via-negro/30 to-negro/70" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        style={{ opacity }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-crema/80 text-xs font-sans font-medium uppercase tracking-[0.3em] mb-6"
        >
          Asturias · Somiedo · Experiencias únicas
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl text-crema font-light leading-none mb-4"
        >
          Vive la braña.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="font-serif text-2xl md:text-3xl lg:text-4xl text-crema/80 font-light italic mb-8"
        >
          Reconectar con lo esencial.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-sans text-crema/70 text-base md:text-lg mb-10 max-w-md mx-auto"
        >
          Experiencias en naturaleza auténtica. Grupos reducidos. Plazas limitadas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/experiencias"
            className="bg-fuego text-crema font-sans font-medium text-sm uppercase tracking-widest px-8 py-4 hover:bg-crema hover:text-tierra transition-all duration-300"
          >
            Ver experiencias
          </Link>
          <a
            href="#que-es"
            className="border border-crema/50 text-crema font-sans font-medium text-sm uppercase tracking-widest px-8 py-4 hover:bg-crema/10 transition-all duration-300"
          >
            ¿Qué es esto?
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-crema/50 text-xs font-sans uppercase tracking-widest">Scroll</span>
        <motion.div
          className="w-px h-12 bg-crema/30"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
        />
      </motion.div>
    </section>
  );
}
