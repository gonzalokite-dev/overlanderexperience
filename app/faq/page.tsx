"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "@/components/ui/AnimateIn";
const CATEGORIAS = [
  {
    categoria: "La experiencia",
    preguntas: [
      {
        q: "¿Qué es exactamente North Authentic Experience?",
        a: "Es una experiencia de bienestar en naturaleza. Un fin de semana en la braña de La Pornacal, en el Parque Natural de Somiedo, con prácticas de movimiento, respiración y calma. No es un retiro, no es un curso, no es turismo rural. Es otra cosa.",
      },
      {
        q: "¿Esto es un retiro de yoga o meditación?",
        a: "No. No hay etiquetas espirituales ni disciplinas concretas. Hay prácticas sencillas de movimiento y respiración, tiempo en naturaleza, calma y fuego. Sin uniformes, sin dogmas, sin incienso obligatorio.",
      },
      {
        q: "¿Para quién es esta experiencia?",
        a: "Para cualquier persona que siente que vive demasiado rápido y quiere parar de verdad unos días. No hace falta ningún conocimiento previo, ninguna práctica espiritual y ninguna forma física especial.",
      },
      {
        q: "¿Qué es una braña?",
        a: "Una braña es un pastizal de montaña donde los vaqueiros asturianos llevaban el ganado cada verano. La braña de La Pornacal, en Somiedo, es uno de los conjuntos de arquitectura popular mejor conservados de Europa. Un lugar donde el tiempo cambia de ritmo.",
      },
    ],
  },
  {
    categoria: "Logística y preparación",
    preguntas: [
      {
        q: "¿Hay que estar en forma?",
        a: "No. La subida a la braña se hace caminando a ritmo tranquilo. Si puedes caminar durante una hora sin problema, estás listo. No es alpinismo.",
      },
      {
        q: "¿Qué debo llevar?",
        a: "Ropa cómoda por capas, calzado de montaña, un saco de dormir si lo tienes. Nada técnico ni complicado. En la confirmación de reserva te mandamos la lista completa.",
      },
      {
        q: "¿Cómo llego?",
        a: "El punto de encuentro es Villar de Vildas, Somiedo, Asturias. La forma más cómoda es en coche propio. No hay transporte público directo. Si tienes dudas con la logística, escríbenos.",
      },
      {
        q: "¿Qué pasa si llueve?",
        a: "La experiencia continúa. La lluvia en la braña es parte de estar en la naturaleza real. El teito aguanta. Tú también. Solo en condiciones de seguridad comprometida se modificaría algún tramo del programa.",
      },
    ],
  },
  {
    categoria: "Grupo y alojamiento",
    preguntas: [
      {
        q: "¿Cuántas personas hay en cada experiencia?",
        a: "Máximo 8. Siempre. No hay excepciones. El grupo pequeño es parte de lo que hace que esto funcione.",
      },
      {
        q: "¿Puedo ir solo?",
        a: "Sí, y es una de las formas más recomendadas. El grupo pequeño facilita conexiones reales con personas que buscan lo mismo que tú. Muchos repiten precisamente por eso.",
      },
      {
        q: "¿Dónde dormimos?",
        a: "En alojamientos rurales auténticos en Villar de Vildas. No es glamping ni hotel de cinco estrellas. Es cómodo, limpio, con carácter. Dormirás como no recordabas.",
      },
      {
        q: "¿Puedo alojarme sin hacer la experiencia?",
        a: "Sí. Los apartamentos están disponibles de forma independiente. Si quieres simplemente un refugio en Somiedo sin programa, puedes reservar solo alojamiento.",
      },
    ],
  },
  {
    categoria: "Reservas y precios",
    preguntas: [
      {
        q: "¿Cuánto cuesta la experiencia?",
        a: "600€ por persona. Incluye alojamiento, todas las comidas del programa, el acompañamiento y las prácticas. No incluye el transporte ni las bebidas adicionales.",
      },
      {
        q: "¿Cómo reservo?",
        a: "A través del calendario en esta web o escribiéndonos por WhatsApp. Te mandamos la confirmación con todos los detalles en 24 horas.",
      },
      {
        q: "¿Puedo cancelar?",
        a: "Sí. Más de 30 días antes: devolución completa. Entre 15 y 30 días: devolución del 50%. Menos de 15 días: sin devolución. Consulta las condiciones completas en la página legal.",
      },
      {
        q: "¿Puedo pagar a plazos?",
        a: "Sí. Aceptamos una reserva con el 50% y el resto en los 15 días anteriores a la experiencia. Escríbenos y lo gestionamos.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <>
      {/* Header */}
      <section className="pt-32 lg:pt-40 pb-16 bg-crema dark:bg-negro">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <p className="font-sans text-xs text-fuego font-semibold uppercase tracking-[0.3em] mb-6">
              Preguntas frecuentes
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1 className="font-serif text-5xl md:text-7xl text-tierra dark:text-crema font-light leading-none mb-8 max-w-3xl">
              Lo que suelen<br /><em>preguntarnos.</em>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="font-sans text-piedra dark:text-crema/60 text-lg max-w-xl leading-relaxed">
              Si no encuentras lo que buscas, escríbenos directamente. Contestamos siempre.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="pb-20 bg-crema dark:bg-negro">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {CATEGORIAS.map((cat, ci) => (
              <AnimateIn key={cat.categoria} delay={ci * 0.1}>
                <div>
                  <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-fuego mb-6">
                    {cat.categoria}
                  </h2>
                  <div className="space-y-2">
                    {cat.preguntas.map((faq, fi) => {
                      const id = `${ci}-${fi}`;
                      const isOpen = openItem === id;
                      return (
                        <div
                          key={fi}
                          className="border border-musgo/10 dark:border-crema/10 overflow-hidden"
                        >
                          <button
                            className="w-full flex items-center justify-between px-6 py-5 text-left group"
                            onClick={() => toggleItem(id)}
                          >
                            <span className="font-sans font-medium text-tierra dark:text-crema text-base pr-4 group-hover:text-fuego transition-colors">
                              {faq.q}
                            </span>
                            <motion.span
                              animate={{ rotate: isOpen ? 45 : 0 }}
                              transition={{ duration: 0.2 }}
                              className="text-piedra dark:text-crema/40 shrink-0 text-2xl leading-none"
                            >
                              +
                            </motion.span>
                          </button>
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <p className="px-6 pb-6 font-sans text-base text-piedra dark:text-crema/60 leading-relaxed">
                                  {faq.a}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Contact CTA */}
          <AnimateIn delay={0.3}>
            <div className="mt-20 bg-tierra p-10 text-center">
              <p className="font-serif text-2xl text-crema font-light mb-4">
                ¿Tienes más preguntas?
              </p>
              <p className="font-sans text-crema/60 text-base mb-8">
                Escríbenos directamente. Somos personas reales y contestamos de verdad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contacto"
                  className="bg-fuego text-crema font-sans font-medium text-sm uppercase tracking-widest px-8 py-4 hover:bg-crema hover:text-tierra transition-colors"
                >
                  Escribirnos
                </Link>
                <Link
                  href="/experiencias"
                  className="border border-crema/30 text-crema font-sans font-medium text-sm uppercase tracking-widest px-8 py-4 hover:bg-crema/10 transition-colors"
                >
                  Ver la experiencia
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
