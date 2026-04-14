"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimateIn from "@/components/ui/AnimateIn";
import { IconCheck } from "@/components/ui/Icons";
import { IMAGES } from "@/lib/data";

const APARTAMENTOS = [
  {
    nombre: "El Teito",
    capacidad: "hasta 4 personas",
    tagline: "El más auténtico.",
    descripcion: "Piedra, madera y silencio. Con vistas directas a la braña, chimenea de leña y todo lo que necesitas para descansar de verdad. Sin televisión. Con cielo.",
    img: IMAGES.cabana,
    destacados: ["Vistas a la braña", "Chimenea de leña", "Cocina equipada", "Baño completo"],
    airbnb: "https://www.airbnb.es",
  },
  {
    nombre: "La Braña",
    capacidad: "hasta 6 personas",
    tagline: "Para quedarse unos días más.",
    descripcion: "Dos habitaciones amplias, salón con chimenea y terraza con las mejores vistas del Parque Natural de Somiedo. El espacio ideal para compartir sin renunciar a la calma.",
    img: IMAGES.lago,
    destacados: ["2 habitaciones", "Terraza panorámica", "Salón con chimenea", "Jardín privado"],
    airbnb: "https://www.airbnb.es",
  },
  {
    nombre: "El Refugio",
    capacidad: "hasta 2 personas",
    tagline: "Para desconectar en pareja.",
    descripcion: "Un espacio íntimo para dos. Pequeño, con carácter, pensado para quien quiere silencio de verdad. Sin distracciones. Solo tú, el otro y la montaña.",
    img: IMAGES.amanecer,
    destacados: ["Para dos personas", "Máxima privacidad", "Entorno íntimo", "Silencio garantizado"],
    airbnb: "https://www.airbnb.es",
  },
  {
    nombre: "La Cuadra",
    capacidad: "hasta 4 personas",
    tagline: "Carácter rural en estado puro.",
    descripcion: "Una antigua cuadra rehabilitada con mimo. Muros de piedra centenarios, vigas de madera y el olor a historia que no se puede fabricar. Auténtica sin pretenderlo.",
    img: IMAGES.naturaleza,
    destacados: ["Arquitectura original", "Muros de piedra", "Zona exterior", "Calefacción"],
    airbnb: "https://www.airbnb.es",
  },
  {
    nombre: "El Molín",
    capacidad: "hasta 3 personas",
    tagline: "Junto al agua.",
    descripcion: "Construido sobre los restos de un antiguo molino asturiano. El sonido del agua es constante, de fondo, como una nana que no cansa. Dormirás como no recordabas.",
    img: IMAGES.brana,
    destacados: ["Junto al arroyo", "Sonido del agua", "Ambiente íntimo", "Cocina completa"],
    airbnb: "https://www.airbnb.es",
  },
  {
    nombre: "El Corredor",
    capacidad: "hasta 5 personas",
    tagline: "La terraza más larga de Villar de Vildas.",
    descripcion: "Un corredor asturiano de madera que recorre toda la fachada. El sitio donde tomar el café cada mañana con vistas a los montes. El sitio donde no querrás salir.",
    img: IMAGES.fuego,
    destacados: ["Corredor tradicional", "Vistas a la montaña", "3 habitaciones", "Salón amplio"],
    airbnb: "https://www.airbnb.es",
  },
  {
    nombre: "La Casería",
    capacidad: "hasta 8 personas",
    tagline: "Para grupos que quieren hacerlo bien.",
    descripcion: "La casa grande. Con espacio para todos, chimenea central, cocina de leña y jardín. Ideal para combinar con la experiencia Vivir la Braña. Un fin de semana que no se olvida.",
    img: IMAGES.grupo,
    destacados: ["Hasta 8 personas", "Cocina de leña", "Jardín grande", "Chimenea central"],
    airbnb: "https://www.airbnb.es",
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
            alt="Refugios con alma en Villar de Vildas, Somiedo"
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
            Alojamientos
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl text-crema font-light mb-3"
          >
            Refugios con alma.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-serif italic text-crema/70 text-xl"
          >
            Siete espacios para descansar de verdad en el corazón de Somiedo.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-crema dark:bg-negro">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <div className="max-w-2xl mb-20">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-fuego mb-4">Villar de Vildas · Somiedo</p>
              <p className="font-serif italic text-piedra dark:text-crema/60 text-xl leading-relaxed">
                "Estos no son apartamentos de catálogo. Son espacios que tienen historia, carácter y silencio.
                El complemento perfecto a una experiencia en la braña. O simplemente un lugar donde parar."
              </p>
            </div>
          </AnimateIn>

          {/* Grid de apartamentos */}
          <div className="space-y-24">
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
                    <div className="absolute top-4 left-4 bg-tierra/90 text-crema font-sans text-xs uppercase tracking-widest px-3 py-1.5">
                      {apt.capacidad}
                    </div>
                  </div>
                  <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <p className="font-sans text-xs text-fuego font-semibold uppercase tracking-widest mb-2">
                      Alojamiento
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl text-tierra dark:text-crema font-light mb-1">
                      {apt.nombre}
                    </h2>
                    <p className="font-serif italic text-piedra dark:text-crema/50 text-lg mb-5">
                      {apt.tagline}
                    </p>
                    <p className="font-sans text-piedra dark:text-crema/70 leading-relaxed mb-6 text-base">
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
                    <div className="flex flex-wrap gap-4">
                      <a
                        href={apt.airbnb}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-fuego text-crema font-sans font-medium text-sm uppercase tracking-widest px-6 py-3 hover:bg-tierra transition-colors"
                      >
                        Reservar en Airbnb
                      </a>
                      <Link
                        href="/contacto"
                        className="inline-flex items-center gap-2 border border-musgo/30 dark:border-crema/20 text-tierra dark:text-crema font-sans text-sm px-6 py-3 hover:bg-musgo/5 transition-colors"
                      >
                        Consultar disponibilidad
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Closing */}
          <AnimateIn delay={0.2}>
            <div className="mt-28 grid lg:grid-cols-2 gap-12 items-center pt-16 border-t border-musgo/10 dark:border-crema/10">
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-fuego mb-4">
                  Experiencia + Alojamiento
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-tierra dark:text-crema font-light mb-6">
                  El combo perfecto.
                </h2>
                <p className="font-sans text-piedra dark:text-crema/70 leading-relaxed text-base mb-8">
                  Reserva la experiencia Vivir la Braña y el alojamiento juntos.
                  Sin logística, sin preocupaciones. Llegas el viernes y el fin de semana fluye solo.
                </p>
                <Link
                  href="/experiencias"
                  className="inline-block bg-fuego text-crema font-sans font-medium text-sm uppercase tracking-widest px-8 py-4 hover:bg-tierra transition-colors"
                >
                  Ver la experiencia
                </Link>
              </div>
              <div className="bg-tierra p-10">
                <p className="font-serif italic text-xl text-crema/70 leading-relaxed">
                  "La diferencia entre dormir y descansar<br />está en el entorno."
                </p>
                <div className="w-8 h-px bg-fuego mt-6" />
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
