"use client";

import Image from "next/image";
import AnimateIn from "@/components/ui/AnimateIn";
import { IMAGES } from "@/lib/data";

const PILLARS = [
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 2C6 2 2 7 2 12s4 10 10 10 10-5 10-10S18 2 12 2z" />
        <path d="M12 8v5l3 3" strokeLinecap="round" />
      </svg>
    ),
    title: "Experiencia, no excursión",
    text: "No vendrás a ver cosas. Vendrás a sentir cosas. Hay una diferencia enorme entre mirar un paisaje y dejar que ese paisaje te cambie algo por dentro.",
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
    text: "Siempre. Las conversaciones reales no pasan en grupos de treinta. El silencio colectivo solo es posible cuando el grupo es pequeño.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 22c0 0-8-5-8-12a8 8 0 0116 0c0 7-8 12-8 12z" />
        <circle cx="12" cy="10" r="2" />
      </svg>
    ),
    title: "Te llevas algo real a casa",
    text: "Respirarás diferente. Te moverás sin tensión. Dormirás mejor. Y cuando vuelvas a tu vida, algo habrá cambiado. No sabrás exactamente qué. Pero lo notarás.",
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
                Qué es esto
              </p>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-tierra dark:text-crema font-light leading-tight mb-6">
                No somos turismo.
                <br />
                <em>Somos otra forma de vivir.</em>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="font-sans text-piedra dark:text-crema/60 text-lg leading-relaxed mb-10">
                Vivimos demasiado rápido. Hemos normalizado el estrés. Nos hemos desconectado de lo esencial.
                North Authentic Experience nació para cambiar eso: un fin de semana en la naturaleza donde algo en ti se asienta.
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
                  alt="Naturaleza auténtica en Somiedo, Asturias"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Overlap card */}
              <div className="absolute -bottom-6 -left-6 bg-tierra text-crema p-6 max-w-[220px] shadow-2xl">
                <p className="font-serif text-3xl font-light mb-1">8</p>
                <p className="font-sans text-xs uppercase tracking-widest text-crema/70">plazas máximo</p>
                <div className="w-8 h-px bg-fuego mt-3" />
                <p className="font-sans text-xs text-crema/50 mt-2">Siempre. Sin excepciones.</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
