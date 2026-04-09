"use client";

import Image from "next/image";
import AnimateIn from "@/components/ui/AnimateIn";
import { IMAGES } from "@/lib/data";

const PILLARS = [
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
        <path d="M12 6v6l4 2" strokeLinecap="round" />
      </svg>
    ),
    title: "Naturaleza sin artificios",
    text: "Sin decorados. Sin filtros. Solo tierra, piedra y el sonido del viento en la braña.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="9" cy="7" r="3" />
        <circle cx="15" cy="7" r="3" />
        <path d="M3 19c0-3.314 2.686-6 6-6h6c3.314 0 6 2.686 6 6" strokeLinecap="round" />
      </svg>
    ),
    title: "Grupos de máximo 8 personas",
    text: "Siempre. Las conversaciones reales no pasan en grupos de treinta.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" strokeLinejoin="round" />
      </svg>
    ),
    title: "Experiencias que no se olvidan",
    text: "Diseñadas para que algo en ti se asiente. No aventura de catálogo.",
  },
];

export default function WhatIsSection() {
  return (
    <section id="que-es" className="py-24 lg:py-32 bg-crema dark:bg-negro">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <AnimateIn>
              <p className="text-fuego font-sans text-xs font-semibold uppercase tracking-[0.3em] mb-4">
                Sobre nosotros
              </p>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-tierra dark:text-crema font-light leading-tight mb-6">
                No somos un hotel.
                <br />
                <em>No somos una excursión.</em>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="font-sans text-piedra dark:text-crema/60 text-lg leading-relaxed mb-10">
                Somos algo diferente. North Authentic Experience nació de la obsesión por preservar algo que se está perdiendo: la autenticidad de la braña, el silencio que se siente en la montaña, la sencillez de lo esencial.
              </p>
            </AnimateIn>

            {/* Pillars */}
            <div className="space-y-8">
              {PILLARS.map((p, i) => (
                <AnimateIn key={p.title} delay={0.3 + i * 0.1}>
                  <div className="flex gap-5 items-start group">
                    <div className="w-12 h-12 border border-musgo/30 dark:border-crema/20 flex items-center justify-center text-musgo dark:text-crema/70 shrink-0 group-hover:bg-musgo group-hover:text-crema transition-all duration-300">
                      {p.icon}
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-tierra dark:text-crema text-sm uppercase tracking-wider mb-1">
                        {p.title}
                      </h3>
                      <p className="font-sans text-piedra dark:text-crema/60 text-sm leading-relaxed">{p.text}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>

          {/* Image with overlap */}
          <AnimateIn delay={0.2} direction="right">
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={IMAGES.naturaleza}
                  alt="Naturaleza auténtica en Asturias"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Overlap card */}
              <div className="absolute -bottom-6 -left-6 bg-tierra text-crema p-6 max-w-[200px] shadow-2xl">
                <p className="font-serif text-3xl font-light mb-1">8</p>
                <p className="font-sans text-xs uppercase tracking-widest text-crema/70">plazas máximo</p>
                <div className="w-8 h-px bg-fuego mt-3" />
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
