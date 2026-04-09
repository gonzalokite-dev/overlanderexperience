"use client";

import Image from "next/image";
import AnimateIn from "@/components/ui/AnimateIn";
import { IMAGES } from "@/lib/data";

const VALORES = [
  { num: "01", titulo: "Autenticidad", desc: "No vendemos lo que no somos. Lo que ofreces tiene que ser real." },
  { num: "02", titulo: "Calma", desc: "El objetivo no es la emoción. Es el asiento. La respiración. La quietud." },
  { num: "03", titulo: "Conexión", desc: "Con el entorno, con el grupo, con uno mismo. En ese orden." },
];

const SECCIONES = [
  {
    num: "01",
    titulo: "Desconexión real",
    texto:
      "No hablamos de apagar el móvil 5 minutos antes de cenar. Hablamos de que cuando llegues al teito, no importará. No habrá señal. No habrá ruido de fondo. Solo el viento y el fuego. Y poco a poco, verás que no echas de menos nada.",
    img: IMAGES.fuego,
    imgAlt: "Fuego en el teito - desconexión real",
  },
  {
    num: "02",
    titulo: "Naturaleza sin artificios",
    texto:
      "Sin glamping de Instagram. Sin decoración de atrezzo colocada para la foto. Tierra, piedra, fuego. Los mismos materiales que usaban los vaqueiros hace cien años cuando subían a la braña. La autenticidad no necesita filtro.",
    img: IMAGES.brana,
    imgAlt: "Braña de Somiedo - naturaleza auténtica",
  },
  {
    num: "03",
    titulo: "Experiencias pequeñas",
    texto:
      "Máximo 8 personas. Siempre. Porque las conversaciones reales no pasan en grupos de treinta. Porque el silencio colectivo solo es posible cuando todos se conocen. Porque la montaña no es un auditorio.",
    img: IMAGES.grupo,
    imgAlt: "Grupo pequeño en la naturaleza",
  },
  {
    num: "04",
    titulo: "Volver a lo esencial",
    texto:
      "No vendemos aventura de catálogo. No vendemos adrenalina. Vendemos la sensación de que algo en ti se asienta. De que cuando vuelves a casa, algo ha cambiado. No sé exactamente qué. Pero tú sí lo sabrás.",
    img: IMAGES.amanecer,
    imgAlt: "Amanecer en la montaña asturiana",
  },
];

export default function FilosofiaPage() {
  return (
    <>
      {/* Apertura editorial sin hero convencional */}
      <section className="pt-32 lg:pt-40 pb-16 bg-crema dark:bg-negro">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <p className="font-sans text-xs text-fuego font-semibold uppercase tracking-[0.3em] mb-6">
              Filosofía
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-tierra dark:text-crema font-light leading-none mb-8 max-w-4xl">
              ¿Por qué<br />hacemos esto?
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="w-16 h-px bg-fuego mb-8" />
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <p className="font-serif italic text-xl md:text-2xl text-piedra dark:text-crema/60 leading-relaxed max-w-2xl">
              "No es un negocio de turismo. Es una obsesión por preservar algo que se está perdiendo."
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Manifesto secciones */}
      <section className="pb-20 bg-crema dark:bg-negro">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {SECCIONES.map((s, i) => (
            <div key={s.num} className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16 border-t border-musgo/10 dark:border-crema/10 ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
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
            <h2 className="font-serif text-3xl md:text-4xl text-crema font-light text-center mb-16">
              Nuestros valores
            </h2>
          </AnimateIn>
          <div className="grid md:grid-cols-3 gap-8">
            {VALORES.map((v, i) => (
              <AnimateIn key={v.num} delay={i * 0.15}>
                <div className="text-center border border-crema/10 p-8 hover:border-fuego transition-colors duration-500">
                  <p className="font-serif text-6xl text-crema/10 font-light mb-4">{v.num}</p>
                  <h3 className="font-serif text-2xl text-crema mb-3">{v.titulo}</h3>
                  <p className="font-sans text-sm text-crema/60 leading-relaxed">{v.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
