"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimateIn from "@/components/ui/AnimateIn";
import { IconCheck, IconExternalLink } from "@/components/ui/Icons";
import { IMAGES } from "@/lib/data";

const APARTAMENTOS = [
  {
    nombre: "Apartamento Teito",
    capacidad: "hasta 4 personas",
    descripcion: "El más auténtico. Con vistas directas a la braña, decoración rústica con maderas nobles y piedra asturiana. El refugio perfecto para desconectar en pareja o en familia pequeña.",
    img: IMAGES.cabana,
    destacados: ["Vistas a la braña", "Chimenea de leña", "Cocina equipada", "Baño completo"],
  },
  {
    nombre: "Casa Braña",
    capacidad: "hasta 6 personas",
    descripcion: "Más espacio para más personas. Dos habitaciones, salón amplio con chimenea y terraza con las mejores vistas del Parque Natural de Somiedo. Ideal para grupos de amigos.",
    img: IMAGES.lago,
    destacados: ["2 habitaciones", "Terraza panorámica", "Salón con chimenea", "Jardín privado"],
  },
  {
    nombre: "El Refugio",
    capacidad: "hasta 2 personas",
    descripcion: "La opción más íntima. Un espacio pensado para dos personas que quieren desconectar de verdad. Pequeño pero con carácter. Silencio garantizado.",
    img: IMAGES.amanecer,
    destacados: ["Para parejas", "Desayuno incluido", "Máxima privacidad", "Entorno íntimo"],
  },
];

export default function AlojamientosPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[60vh] min-h-[450px] flex items-end overflow-hidden">
        <motion.div className="absolute inset-0 scale-110" style={{ y }}>
          <Image
            src={IMAGES.cabana}
            alt="Apartamentos La Pornacal en Somiedo"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-negro/80 via-negro/30 to-negro/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-16 w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-fuego font-sans text-xs font-semibold uppercase tracking-[0.3em] mb-3"
          >
            Alojamiento
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl text-crema font-light mb-3"
          >
            Apartamentos La Pornacal
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-serif italic text-crema/70 text-xl"
          >
            Tu base en Somiedo.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28 bg-crema dark:bg-negro">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Intro */}
          <AnimateIn>
            <div className="max-w-2xl mb-20">
              <p className="font-serif italic text-piedra dark:text-crema/60 text-xl leading-relaxed">
                "Nuestros apartamentos son el complemento perfecto a las experiencias. O simplemente tu refugio en Somiedo. En el corazón del Parque Natural, con todo el sabor auténtico de Asturias."
              </p>
            </div>
          </AnimateIn>

          {/* Apartamentos */}
          <div className="space-y-20">
            {APARTAMENTOS.map((apt, i) => (
              <AnimateIn key={apt.nombre} delay={0.1}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                  <div className={`relative aspect-[4/3] overflow-hidden group ${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <Image
                      src={apt.img}
                      alt={apt.nombre}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <p className="font-sans text-xs text-fuego font-semibold uppercase tracking-widest mb-2">
                      Alojamiento
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl text-tierra dark:text-crema font-light mb-2">
                      {apt.nombre}
                    </h2>
                    <p className="font-sans text-sm text-piedra dark:text-crema/50 mb-4">
                      👤 {apt.capacidad}
                    </p>
                    <p className="font-sans text-piedra dark:text-crema/70 leading-relaxed mb-6">
                      {apt.descripcion}
                    </p>
                    <ul className="grid grid-cols-2 gap-2 mb-8">
                      {apt.destacados.map((d) => (
                        <li key={d} className="flex items-center gap-2 font-sans text-sm text-tierra dark:text-crema/80">
                          <span className="text-musgo shrink-0"><IconCheck className="w-3.5 h-3.5" /></span>
                          {d}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-4">
                      <a
                        href="https://www.airbnb.es"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-fuego text-crema font-sans font-medium text-sm uppercase tracking-widest px-6 py-3 hover:bg-tierra transition-colors"
                      >
                        Ver en Airbnb
                        <IconExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Nota */}
          <AnimateIn delay={0.2}>
            <div className="mt-20 text-center border-t border-musgo/10 dark:border-crema/10 pt-16">
              <p className="font-serif italic text-2xl text-tierra dark:text-crema/70 max-w-xl mx-auto">
                "La diferencia entre dormir y descansar está en el entorno."
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
