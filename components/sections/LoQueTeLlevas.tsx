import AnimateIn from "@/components/ui/AnimateIn";

const ITEMS = [
  {
    num: "01",
    titulo: "Respirar de verdad",
    desc: "Aprenderás a usar la respiración como herramienta. Para calmar. Para activar. Para dormir. Es lo más sencillo y lo más transformador.",
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
        <path d="M12 22V12M12 12C12 12 8 10 8 7a4 4 0 018 0c0 3-4 5-4 5z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 18c-2 0-4-1-4-3s2-3 4-3M16 18c2 0 4-1 4-3s-2-3-4-3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "02",
    titulo: "Moverte sin tensión",
    desc: "Prácticas sencillas de movimiento que puedes hacer cada mañana. Sin equipamiento. Sin hora fija. Sin excusa.",
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v8M9 10l3-3 3 3M9 15l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "03",
    titulo: "Dormir mejor",
    desc: "Sin pantallas. Sin ruido. Con la fatiga del cuerpo que ha caminado. Dormirás como no recuerdas haber dormido en años.",
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "04",
    titulo: "Hábitos simples",
    desc: "Pequeñas prácticas que funcionan. Sin apps, sin rutinas complicadas. Solo herramientas reales que puedes mantener cuando vuelvas a casa.",
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="3" y="3" width="18" height="18" rx="2" />
      </svg>
    ),
  },
  {
    num: "05",
    titulo: "Una perspectiva distinta",
    desc: "Cuando estás tres días sin ruido, sin prisa y sin agenda, algo en ti se reordena. Vuelves a casa con ojos distintos.",
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" />
        <path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8-10-8-10-8z" />
      </svg>
    ),
  },
];

export default function LoQueTeLlevas() {
  return (
    <section className="py-24 lg:py-32 bg-crema dark:bg-negro">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimateIn>
            <p className="text-fuego font-sans text-xs font-semibold uppercase tracking-[0.3em] mb-4">
              El retorno real
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-tierra dark:text-crema font-light leading-tight">
              Lo que te llevas<br />
              <em>a casa.</em>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="font-sans text-piedra dark:text-crema/50 text-base mt-6 max-w-lg mx-auto leading-relaxed">
              No souvenirs. No fotos para Instagram. Herramientas reales para vivir con más calma, más energía y más consciencia.
            </p>
          </AnimateIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-musgo/10 dark:bg-crema/10">
          {ITEMS.map((item, i) => (
            <AnimateIn key={item.num} delay={i * 0.08}>
              <div className="bg-crema dark:bg-negro p-8 lg:p-10 group hover:bg-musgo/5 dark:hover:bg-crema/5 transition-colors duration-500">
                <div className="text-musgo dark:text-crema/50 mb-5 group-hover:text-fuego transition-colors duration-300">
                  {item.icon}
                </div>
                <p className="font-serif text-4xl text-musgo/15 dark:text-crema/10 font-light mb-2">{item.num}</p>
                <h3 className="font-serif text-xl text-tierra dark:text-crema mb-3 font-light">{item.titulo}</h3>
                <p className="font-sans text-sm text-piedra dark:text-crema/60 leading-relaxed">{item.desc}</p>
              </div>
            </AnimateIn>
          ))}
          {/* Closing card */}
          <AnimateIn delay={ITEMS.length * 0.08}>
            <div className="bg-tierra p-8 lg:p-10 flex flex-col justify-between">
              <p className="font-serif italic text-xl text-crema/70 leading-relaxed">
                "Vienes a desconectar, pero te vas sabiendo vivir mejor."
              </p>
              <div className="w-8 h-px bg-fuego mt-8" />
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
