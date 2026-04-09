"use client";

import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";
import { IMAGES } from "@/lib/data";

export default function SobreNosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-0 bg-crema dark:bg-negro">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <p className="font-sans text-xs text-fuego font-semibold uppercase tracking-[0.3em] mb-6">
              Sobre nosotros
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1 className="font-serif text-5xl md:text-7xl text-tierra dark:text-crema font-light leading-none mb-12">
              Hola, soy Dani.
            </h1>
          </AnimateIn>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 bg-crema dark:bg-negro">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_500px] gap-16 lg:gap-24 items-start">
            {/* Texto */}
            <div>
              <AnimateIn delay={0.1}>
                <p className="font-serif italic text-2xl md:text-3xl text-tierra dark:text-crema leading-relaxed mb-8">
                  "Crecí escuchando historias de los vaqueiros. De cómo subían a la braña cada verano, sin GPS, sin Instagram, con lo justo."
                </p>
              </AnimateIn>

              <AnimateIn delay={0.15}>
                <div className="w-16 h-px bg-fuego mb-8" />
              </AnimateIn>

              <AnimateIn delay={0.2}>
                <div className="space-y-5 font-sans text-lg text-piedra dark:text-crema/70 leading-relaxed mb-10">
                  <p>
                    Somiedo lleva en mi ADN desde que tengo memoria. Las brañas, el olor a hierba mojada, el sonido del fuego en el teito. No es nostalgia, es identidad.
                  </p>
                  <p>
                    Un día decidí que quería que otros lo vivieran también. Que había algo en esa forma de estar en la naturaleza —sin adornos, sin filtros— que se estaba perdiendo. Y que valía la pena preservarlo.
                  </p>
                  <p>
                    Esto no es un negocio de turismo. Es una obsesión. Por la autenticidad. Por los grupos pequeños. Por las conversaciones que solo pasan cuando el móvil no tiene señal.
                  </p>
                  <p>
                    Cada experiencia que diseño tiene un objetivo: que cuando vuelvas, algo haya cambiado. No sé exactamente qué. Pero tú sí lo sabrás.
                  </p>
                </div>
              </AnimateIn>

              {/* Valores personales */}
              <AnimateIn delay={0.25}>
                <div className="grid sm:grid-cols-3 gap-6 border-t border-musgo/10 dark:border-crema/10 pt-10 mb-10">
                  {[
                    { num: "8", label: "personas máximo,\nsiempre" },
                    { num: "100%", label: "experiencias\nauténticas" },
                    { num: "∞", label: "naturaleza\nsin artificios" },
                  ].map(({ num, label }) => (
                    <div key={num} className="text-center">
                      <p className="font-serif text-4xl text-tierra dark:text-crema font-light mb-1">{num}</p>
                      <p className="font-sans text-xs text-piedra dark:text-crema/50 uppercase tracking-wide whitespace-pre-line">{label}</p>
                    </div>
                  ))}
                </div>
              </AnimateIn>

              <AnimateIn delay={0.3}>
                <div className="space-y-4">
                  <p className="font-serif italic text-tierra dark:text-crema/80 text-xl">
                    "Esto no es postureo. Es lo que somos."
                  </p>
                  <div className="flex gap-4 pt-4">
                    <Link
                      href="/experiencias"
                      className="inline-block bg-fuego text-crema font-sans font-medium text-sm uppercase tracking-widest px-6 py-3 hover:bg-tierra transition-colors"
                    >
                      Ver experiencias
                    </Link>
                    <Link
                      href="/contacto"
                      className="inline-block border border-tierra dark:border-crema text-tierra dark:text-crema font-sans font-medium text-sm uppercase tracking-widest px-6 py-3 hover:bg-tierra hover:text-crema dark:hover:bg-crema dark:hover:text-tierra transition-colors"
                    >
                      Hablar con Dani
                    </Link>
                  </div>
                </div>
              </AnimateIn>
            </div>

            {/* Foto / imagen */}
            <div>
              <AnimateIn direction="right" delay={0.1}>
                <div className="relative">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={IMAGES.naturaleza}
                      alt="Dani - Fundador de North Authentic Experience en Somiedo"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 500px"
                    />
                  </div>
                  {/* Quote card */}
                  <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-tierra text-crema p-6 max-w-[220px] shadow-2xl">
                    <p className="font-serif italic text-sm leading-relaxed mb-2">
                      "La autenticidad no necesita filtro."
                    </p>
                    <p className="font-sans text-xs text-crema/50 uppercase tracking-widest">— Dani</p>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* Entorno */}
      <section className="mt-20 relative h-64 overflow-hidden">
        <Image
          src={IMAGES.lago}
          alt="Somiedo, Asturias - entorno natural"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-negro/50 flex items-center justify-center">
          <AnimateIn>
            <p className="font-serif text-3xl md:text-4xl text-crema text-center font-light italic max-w-2xl px-6">
              "El entorno no es el escenario. Es el protagonista."
            </p>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
