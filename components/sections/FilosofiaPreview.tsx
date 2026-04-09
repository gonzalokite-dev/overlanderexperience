import AnimateIn from "@/components/ui/AnimateIn";
import { IconArrowRight } from "@/components/ui/Icons";

const CONCEPTOS = [
  {
    num: "01",
    title: "Desconexión real",
    text: "Sin wifi, sin ruido, sin prisa. No hablamos de apagar el móvil 5 minutos.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
        <path d="M18.364 5.636l-1.414 1.414M5.636 18.364l-1.414 1.414M5.636 5.636l1.414 1.414M18.364 18.364l1.414 1.414" strokeLinecap="round" />
        <circle cx="12" cy="12" r="4" />
        <path d="M1 1l22 22" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Calma que se siente",
    text: "Naturaleza que habla. Silencio que no incomoda. Aire que sabe distinto.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
        <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Volver a lo esencial",
    text: "Fuego, conversación, tierra. Lo que éramos antes de que todo se acelerase.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
        <path d="M12 2c0 0-6 6-6 12a6 6 0 0012 0c0-6-6-12-6-12z" />
        <path d="M12 12c0 0-2 2-2 4a2 2 0 004 0c0-2-2-4-2-4z" fill="currentColor" fillOpacity="0.3" />
      </svg>
    ),
  },
];

export default function FilosofiaPreview() {
  return (
    <section className="py-24 lg:py-32 bg-crema dark:bg-negro">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimateIn>
            <p className="text-fuego font-sans text-xs font-semibold uppercase tracking-[0.3em] mb-4">
              Nuestra filosofía
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-tierra dark:text-crema font-light leading-tight">
              Desconecta de verdad.
            </h2>
          </AnimateIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {CONCEPTOS.map((c, i) => (
            <AnimateIn key={c.num} delay={i * 0.15}>
              <div className="group text-center p-8 border border-musgo/10 dark:border-crema/10 hover:border-musgo dark:hover:border-crema/30 transition-all duration-500 hover:bg-musgo/5 dark:hover:bg-crema/5">
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
