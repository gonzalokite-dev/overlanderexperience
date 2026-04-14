"use client";

import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";
import { IMAGES } from "@/lib/data";

const CREENCIAS = [
  {
    num: "01",
    titulo: "Vivimos demasiado rápido",
    texto:
      "No es opinión. Es un hecho fisiológico. El sistema nervioso humano no estaba diseñado para el ritmo que llevamos. La hiperconectividad, las notificaciones, la agenda perpetua. Nos hemos adaptado a un nivel de activación que no es sostenible. Y lo hemos llamado 'normalidad'.",
    img: IMAGES.fuego,
    imgAlt: "Fuego lento - símbolo de calma",
  },
  {
    num: "02",
    titulo: "Hemos normalizado el estrés",
    texto:
      "Estar ocupado se ha convertido en una señal de éxito. Descansar, en una debilidad. Nos hemos olvidado de que el cuerpo necesita parar. Que el silencio no es aburrimiento. Que la calma no es pereza. Que respirar bien es, literalmente, vivir mejor.",
    img: IMAGES.naturaleza,
    imgAlt: "Naturaleza en calma - Somiedo",
  },
  {
    num: "03",
    titulo: "La naturaleza lo recalibra todo",
    texto:
      "No hablamos de terapia. Hablamos de algo más antiguo y más simple. Cuando llevas dos días sin señal, caminando, respirando aire limpio, durmiendo con la oscuridad, algo en tu sistema nervioso se ajusta. No necesitas entenderlo. Solo necesitas vivirlo.",
    img: IMAGES.brana,
    imgAlt: "Braña de Somiedo - naturaleza auténtica",
  },
  {
    num: "04",
    titulo: "Parar es un acto de valentía",
    texto:
      "La sociedad recompensa la actividad. Parar parece improductivo. Pero parar conscientemente, con intención, es lo más difícil y lo más necesario. Un fin de semana en la braña no es escapismo. Es volver a ti. Y eso, en el mundo en que vivimos, requiere valentía.",
    img: IMAGES.amanecer,
    imgAlt: "Amanecer en la montaña asturiana",
  },
];

const VALORES = [
  {
    num: "01",
    titulo: "Autenticidad",
    desc: "No vendemos lo que no somos. Lo que ofreces tiene que ser real. Sin decorados. Sin artificios. La autenticidad no necesita filtro.",
  },
  {
    num: "02",
    titulo: "Calma",
    desc: "El objetivo no es la emoción. Es el asiento. La respiración. La quietud. Hacer mucho menos, pero de verdad.",
  },
  {
    num: "03",
    titulo: "Conexión",
    desc: "Con el entorno, con el grupo, con uno mismo. En ese orden. La conexión real empieza cuando apagas la pantalla.",
  },
  {
    num: "04",
    titulo: "Lo esencial",
    desc: "Fuego, conversación, tierra. Lo que éramos antes de que todo se acelerase. Lo que seguimos siendo cuando bajamos la guardia.",
  },
];

export default function FilosofiaPage() {
  return (
    <>
      {/* Apertura editorial */}
      <section className="pt-32 lg:pt-40 pb-16 bg-crema dark:bg-negro">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <p className="font-sans text-xs text-fuego font-semibold uppercase tracking-[0.3em] mb-6">
              En qué creemos
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-tierra dark:text-crema font-light leading-none mb-8 max-w-4xl">
              Hay otra forma<br /><em>de vivir el tiempo.</em>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="w-16 h-px bg-fuego mb-8" />
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <p className="font-serif italic text-xl md:text-2xl text-piedra dark:text-crema/60 leading-relaxed max-w-2xl">
              "No es un negocio de turismo. Es una obsesión por preservar algo que se está perdiendo: el ritmo lento, la naturaleza real, la autenticidad que no se puede comprar."
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Manifesto */}
      <section className="pb-20 bg-crema dark:bg-negro">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {CREENCIAS.map((s, i) => (
            <div
              key={s.num}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16 border-t border-musgo/10 dark:border-crema/10 ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
            >
              <AnimateIn delay={0.1} direction={i % 2 === 0 ? "left" : "right"}>
                <div className={`relative aspect-[4/3] overflow-hidden ${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <Image
                    src={s.img}
                    alt={s.imgAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </AnimateIn>
              <AnimateIn delay={0.15} direction={i % 2 === 0 ? "right" : "left"}>
                <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <p className="font-serif text-6xl text-musgo/15 dark:text-crema/10 font-light mb-2">{s.num}</p>
                  <h2 className="font-serif text-3xl md:text-4xl text-tierra dark:text-crema font-light mb-6">
                    {s.titulo}
                  </h2>
                  <p className="font-sans text-piedra dark:text-crema/60 leading-relaxed text-lg">
                    {s.texto}
                  </p>
                </div>
              </AnimateIn>
            </div>
          ))}
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 lg:py-28 bg-tierra">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <p className="font-sans text-xs text-fuego font-semibold uppercase tracking-[0.3em] mb-4 text-center">
              Lo que nos mueve
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="font-serif text-3xl md:text-4xl text-crema font-light text-center mb-16">
              Nuestros valores
            </h2>
          </AnimateIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-crema/10">
            {VALORES.map((v, i) => (
              <AnimateIn key={v.num} delay={i * 0.1}>
                <div className="bg-tierra p-8 hover:bg-tierra/80 transition-colors duration-500 h-full">
                  <p className="font-serif text-6xl text-crema/10 font-light mb-4">{v.num}</p>
                  <h3 className="font-serif text-2xl text-crema mb-3">{v.titulo}</h3>
                  <p className="font-sans text-sm text-crema/60 leading-relaxed">{v.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-crema dark:bg-negro">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimateIn>
            <h2 className="font-serif text-3xl md:text-4xl text-tierra dark:text-crema font-light mb-6">
              ¿Te reconoces en esto?
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="font-sans text-piedra dark:text-crema/60 leading-relaxed mb-10">
              Entonces la experiencia es para ti. No hace falta estar en crisis. Solo tener ganas de parar un momento y recordar cómo se respira de verdad.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/experiencias"
                className="bg-fuego text-crema font-sans font-medium text-sm uppercase tracking-widest px-8 py-4 hover:bg-tierra transition-colors"
              >
                Ver la experiencia
              </Link>
              <Link
                href="/contacto"
                className="border border-musgo/30 dark:border-crema/20 text-tierra dark:text-crema font-sans text-sm font-medium uppercase tracking-widest px-8 py-4 hover:bg-musgo/5 transition-colors"
              >
                Hablar con nosotros
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
