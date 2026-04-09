"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimateIn from "@/components/ui/AnimateIn";
import { IMAGES } from "@/lib/data";

export default function ExperienciaDestacada() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background parallax */}
      <motion.div className="absolute inset-0 scale-110" style={{ y }}>
        <Image
          src={IMAGES.brana}
          alt="Vivir la Braña - Experiencia en Somiedo"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-negro/80 via-negro/50 to-negro/20" />

      {/* Badge animado */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          className="bg-fuego text-crema font-sans text-xs font-bold uppercase tracking-[0.3em] px-5 py-2"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ✦ Experiencia Estrella
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
        <div className="max-w-xl">
          <AnimateIn>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-crema font-light leading-none mb-6">
              Vivir la Braña
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="font-sans text-crema/80 text-lg leading-relaxed mb-8">
              Un fin de semana en el corazón de Somiedo. Donde el fuego del teito es la única pantalla que necesitas. Desconecta, respira, vuelve.
            </p>
          </AnimateIn>

          {/* Quick stats */}
          <AnimateIn delay={0.2}>
            <div className="flex flex-wrap gap-6 mb-10">
              {[
                { icon: "📍", label: "Somiedo, Asturias" },
                { icon: "👥", label: "8 plazas máx." },
                { icon: "💰", label: "600€ / persona" },
                { icon: "🗓️", label: "Fin de semana" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <span className="text-base">{icon}</span>
                  <span className="font-sans text-crema/80 text-sm">{label}</span>
                </div>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <Link
              href="/experiencias"
              className="inline-block bg-fuego text-crema font-sans font-medium text-sm uppercase tracking-widest px-8 py-4 hover:bg-crema hover:text-tierra transition-all duration-300"
            >
              Ver experiencia completa
            </Link>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
