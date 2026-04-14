import AnimateIn from "@/components/ui/AnimateIn";

export default function BranaExplainer() {
  return (
    <section className="py-24 lg:py-32 bg-tierra text-crema overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: big number / decorative */}
          <AnimateIn direction="left">
            <div className="relative">
              <p className="font-serif text-[180px] lg:text-[240px] leading-none text-crema/5 font-light select-none -ml-4">
                braña
              </p>
              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 px-2">
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.4em] text-fuego mb-4">
                  Del asturiano
                </p>
                <p className="font-serif text-3xl md:text-4xl text-crema font-light leading-snug">
                  "Pastizal de montaña donde los vaqueiros<br />
                  <em>llevaban el ganado cada verano."</em>
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Right: explanation */}
          <AnimateIn delay={0.15} direction="right">
            <div className="lg:pt-12">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-fuego mb-6">
                ¿Qué es una braña?
              </p>

              <div className="space-y-6 font-sans text-crema/70 leading-relaxed text-lg">
                <p>
                  Una braña es un lugar donde el tiempo cambia de ritmo. Durante siglos, los vaqueiros asturianos
                  subían cada verano con sus ganados hasta estos prados de altura. Vivían allí meses, en construcciones
                  de piedra y paja llamadas <em className="text-crema">teitos</em>, sin más que lo esencial.
                </p>
                <p>
                  Hoy, la braña de La Pornacal —en el corazón del Parque Natural de Somiedo— es uno de los conjuntos
                  de arquitectura popular mejor conservados de Europa. Un lugar donde aún puedes escuchar el silencio
                  real. Donde el viento huele distinto. Donde el cielo es completamente oscuro por las noches.
                </p>
                <p className="text-crema font-medium">
                  Un lugar donde la vida sigue el ritmo de la naturaleza. No al revés.
                </p>
              </div>

              {/* Divider */}
              <div className="w-12 h-px bg-fuego mt-10 mb-10" />

              <blockquote className="font-serif italic text-xl text-crema/60 leading-relaxed border-l border-fuego/40 pl-6">
                "Cuando llegas a la braña, no entiendes por qué estabas tan ocupado."
              </blockquote>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
