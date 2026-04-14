import AnimateIn from "@/components/ui/AnimateIn";
import { IconArrowRight } from "@/components/ui/Icons";

const CREENCIAS = [
  {
    num: "01",
    title: "El estrés no es inevitable",
    text: "Hemos aceptado que vivir acelerado es lo normal. No lo es. Y un fin de semana en la naturaleza puede recordártelo.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "La calma se aprende",
    text: "Respirar bien. Moverse sin tensión. Bajar el ritmo. Son habilidades, no lujos. Y se pueden practicar.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
        <path d="M12 22c0 0-8-6-8-12a8 8 0 0116 0c0 6-8 12-8 12z" />
        <path d="M12 10v4M12 10c0-2 2-3 2-3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "La naturaleza es la herramienta",
    text: "No necesitas un spa. Necesitas silencio real, aire limpio, un fuego y tiempo sin agenda. Lo demás viene solo.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
        <path d="M17 8C8 10 5.9 16.17 3.82 19.99M6.37 4.57A8 8 0 0118.48 17.3" strokeLinecap="round" />
        <path d="M12 2L9 9l-7 1 5 5-1 7 6-3.5L18 22l-1-7 5-5-7-1z" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function FilosofiaPreview() {
  return (
    <section className="py-24 lg:py-32 bg-niebla dark:bg-negro/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimateIn>
            <p className="text-fuego font-sans text-xs font-semibold uppercase tracking-[0.3em] mb-4">
              En qué creemos
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-tierra dark:text-crema font-light leading-tight max-w-2xl mx-auto">
              Hay otra forma<br />
              <em>de vivir el tiempo.</em>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="font-sans text-piedra dark:text-crema/50 text-base mt-6 max-w-md mx-auto leading-relaxed">
              No es filosofía. Es algo que se siente. Y una vez que lo sientes, es difícil volver a vivir igual.
            </p>
          </AnimateIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {CREENCIAS.map((c, i) => (
            <AnimateIn key={c.num} delay={i * 0.15}>
              <div className="group text-center p-8 border border-musgo/10 dark:border-crema/10 hover:border-musgo dark:hover:border-crema/30 transition-all duration-500 hover:bg-white/60 dark:hover:bg-crema/5 bg-crema/60 dark:bg-transparent">
                <div className="flex justify-center text-musgo dark:text-crema/60 mb-6 group-hover:text-fuego transition-colors duration-300">
                  {c.icon}
                </div>
                <p className="font-serif text-5xl text-musgo/20 dark:text-crema/10 font-light mb-2">{c.num}</p>
                <h3 className="font-serif text-xl text-tierra dark:text-crema mb-3">{c.title}</h3>
                <p className="font-sans text-sm text-piedra dark:text-crema/60 leading-relaxed">{c.text}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.4}>
          <div className="text-center mt-16">
            <a
              href="/filosofia"
              className="font-serif italic text-musgo dark:text-crema/60 text-lg hover:text-fuego dark:hover:text-fuego transition-colors"
            >
              <span className="inline-flex items-center gap-2">Leer nuestro manifiesto <IconArrowRight className="w-4 h-4" /></span>
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
