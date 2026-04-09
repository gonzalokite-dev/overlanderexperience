"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimateIn from "@/components/ui/AnimateIn";

export default function CTAFinal() {
  return (
    <section className="py-28 lg:py-40 bg-tierra">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <AnimateIn>
          <p className="text-fuego font-sans text-xs font-semibold uppercase tracking-[0.3em] mb-6">
            Plazas limitadas
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-8xl text-crema font-light leading-none mb-6">
            Tu plaza te espera.
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <p className="font-sans text-crema/60 text-lg mb-12 max-w-md mx-auto">
            Plazas limitadas. Próximas fechas disponibles. Grupos reducidos. Siempre.
          </p>
        </AnimateIn>
        <AnimateIn delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/calendario"
              className="bg-fuego text-crema font-sans font-medium text-sm uppercase tracking-widest px-10 py-5 hover:bg-crema hover:text-tierra transition-all duration-300 text-base"
            >
              Reservar ahora
            </Link>
            <Link
              href="/experiencias"
              className="border border-crema/30 text-crema font-sans font-medium text-sm uppercase tracking-widest px-10 py-5 hover:bg-crema/10 transition-all duration-300"
            >
              Ver experiencias
            </Link>
          </div>
        </AnimateIn>

        {/* Spots counter */}
        <AnimateIn delay={0.5}>
          <div className="mt-16 flex items-center justify-center gap-3">
            <motion.span
              className="font-serif text-5xl text-crema font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              3
            </motion.span>
            <div className="text-left">
              <p className="font-sans text-crema text-sm font-medium">plazas disponibles</p>
              <p className="font-sans text-crema/40 text-xs">para la próxima fecha · 16-18 mayo</p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
