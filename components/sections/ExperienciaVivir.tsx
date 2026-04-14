"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import AnimateIn from "@/components/ui/AnimateIn";
import { IconPin, IconUsers, IconCalendar, IconLeaf, IconCheck, IconX, IconStar } from "@/components/ui/Icons";
import { IMAGES, WHATSAPP_NUMBER } from "@/lib/data";

const GALLERY = [
  { src: IMAGES.brana, alt: "Teito en la braña de Somiedo" },
  { src: IMAGES.fuego, alt: "Fuego en el teito" },
  { src: IMAGES.desayuno, alt: "Desayuno en la braña" },
  { src: IMAGES.grupo, alt: "Grupo en la naturaleza" },
];

const PROGRAMA = [
  {
    dia: "Viernes",
    titulo: "Llegada y bienvenida",
    momentos: [
      { hora: "17:00", texto: "Llegada al punto de encuentro en Villar de Vildas. Presentación del grupo." },
      { hora: "18:30", texto: "Paseo de apertura por el entorno de la aldea. Primer contacto con el paisaje." },
      { hora: "21:00", texto: "Cena de bienvenida con productos locales de temporada." },
      { hora: "23:00", texto: "Primera noche. Cielo sin contaminación lumínica. Silencio real." },
    ],
  },
  {
    dia: "Sábado",
    titulo: "El día en la braña",
    momentos: [
      { hora: "08:00", texto: "Despertar tranquilo. Práctica de respiración matinal en exterior." },
      { hora: "09:00", texto: "Desayuno asturiano. Sin prisa." },
      { hora: "10:30", texto: "Subida caminando a la braña de La Pornacal. El camino es parte de la experiencia." },
      { hora: "13:00", texto: "Desayuno tardío en la braña. Pausa larga. Tiempo de calma." },
      { hora: "15:30", texto: "Práctica de bienestar: movimiento consciente y respiración en altura." },
      { hora: "17:30", texto: "Paseo libre por los teitos. Tiempo para uno mismo." },
      { hora: "20:00", texto: "Bajada. Cena. Fuego de cierre." },
    ],
  },
  {
    dia: "Domingo",
    titulo: "Cierre y vuelta",
    momentos: [
      { hora: "08:30", texto: "Despertar sin alarma. Último desayuno." },
      { hora: "10:00", texto: "Práctica final. Círculo de cierre en grupo." },
      { hora: "11:30", texto: "Paseo corto. Tiempo para integrar lo vivido." },
      { hora: "13:00", texto: "Despedida. Vuelta a casa con algo distinto dentro." },
    ],
  },
];

const INCLUYE = [
  { ok: true, text: "Alojamiento viernes y sábado noche" },
  { ok: true, text: "Cena de bienvenida viernes" },
  { ok: true, text: "Todos los desayunos" },
  { ok: true, text: "Acompañamiento todo el fin de semana" },
  { ok: true, text: "Prácticas de bienestar incluidas" },
  { ok: true, text: "Materiales para la experiencia" },
  { ok: false, text: "Transporte hasta el punto de encuentro" },
  { ok: false, text: "Bebidas adicionales" },
  { ok: false, text: "Seguro de viaje (recomendado)" },
  { ok: false, text: "Actividades opcionales no programadas" },
];

const FAQS = [
  {
    q: "¿Esto es un retiro de yoga?",
    a: "No. No hay clases de yoga ni etiquetas terapéuticas. Es una experiencia de bienestar en naturaleza con prácticas sencillas de movimiento y respiración. Sin dogmas. Sin uniformes.",
  },
  {
    q: "¿Hay que estar en forma?",
    a: "No hace falta ser deportista. La subida a la braña es caminando, a ritmo tranquilo. Si puedes caminar una hora, puedes hacer esta experiencia.",
  },
  {
    q: "¿Qué debo llevar?",
    a: "Ropa cómoda por capas, calzado de montaña, un saco de dormir si lo tienes. En la confirmación te mandamos la lista completa. Nada complicado.",
  },
  {
    q: "¿Puedo ir solo?",
    a: "Sí, y es una de las experiencias más recomendadas para ir solo. El grupo pequeño facilita conexiones reales. Muchos repiten precisamente por eso.",
  },
  {
    q: "¿Qué pasa si llueve?",
    a: "Continuamos. La lluvia en la braña es parte de la experiencia. El teito aguanta. Tú también. Si hay condiciones de seguridad comprometidas, avisamos con antelación.",
  },
  {
    q: "¿Puedo cancelar?",
    a: "Sí. Más de 30 días antes: devolución completa. Entre 15 y 30 días: 50%. Menos de 15 días: sin devolución. Consulta las condiciones completas.",
  },
];

export default function ExperienciaVivir() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-crema dark:bg-negro">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_380px] gap-16">
          {/* Left: content */}
          <div>
            {/* Gallery */}
            <AnimateIn>
              <div className="grid grid-cols-2 gap-3 mb-12">
                {GALLERY.map((img, i) => (
                  <div
                    key={i}
                    className={`relative overflow-hidden cursor-image ${i === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"} group`}
                    onClick={() => { setLightboxIndex(i); setLightboxOpen(true); }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 50vw, 30vw"
                    />
                    <div className="absolute inset-0 bg-negro/0 group-hover:bg-negro/30 transition-all duration-500 flex items-center justify-center">
                      <span className="text-crema text-xs font-sans uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Ver +</span>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>

            {/* Description */}
            <AnimateIn delay={0.1}>
              <h2 className="font-serif text-3xl md:text-4xl text-tierra dark:text-crema font-light mb-6">
                La experiencia
              </h2>
              <blockquote className="font-serif italic text-xl text-piedra dark:text-crema/70 leading-relaxed border-l-2 border-fuego pl-6 mb-8">
                "Hay lugares donde el tiempo se detiene. La braña de La Pornacal es uno de los conjuntos de arquitectura popular mejor conservados de Europa. Un fin de semana aquí no es turismo. Es reconectar con algo que llevamos dentro y que hemos dejado de escuchar."
              </blockquote>
            </AnimateIn>

            {/* Programa con tabs */}
            <AnimateIn delay={0.15}>
              <h3 className="font-serif text-2xl text-tierra dark:text-crema font-light mb-6">
                Programa del fin de semana
              </h3>
              <div className="flex gap-0 border-b border-musgo/20 dark:border-crema/10 mb-0">
                {PROGRAMA.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTab(i)}
                    className={`font-sans text-sm px-5 py-3 border-b-2 transition-all -mb-px ${
                      activeTab === i
                        ? "border-fuego text-fuego"
                        : "border-transparent text-piedra dark:text-crema/50 hover:text-tierra dark:hover:text-crema"
                    }`}
                  >
                    {p.dia}
                  </button>
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="border border-t-0 border-musgo/10 dark:border-crema/10 p-6 mb-12"
                >
                  <h4 className="font-sans font-semibold text-tierra dark:text-crema mb-5">
                    {PROGRAMA[activeTab].titulo}
                  </h4>
                  <div className="space-y-4">
                    {PROGRAMA[activeTab].momentos.map((m, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <span className="font-sans text-xs text-fuego font-semibold uppercase tracking-wider shrink-0 pt-0.5 w-14">
                          {m.hora}
                        </span>
                        <p className="font-sans text-piedra dark:text-crema/60 text-sm leading-relaxed">{m.texto}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </AnimateIn>

            {/* Incluye / No incluye */}
            <AnimateIn delay={0.2}>
              <h3 className="font-serif text-2xl text-tierra dark:text-crema font-light mb-6">
                Qué incluye
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-12">
                {INCLUYE.map(({ ok, text }, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className={`mt-0.5 shrink-0 ${ok ? "text-musgo" : "text-piedra/50"}`}>
                      {ok ? <IconCheck className="w-4 h-4" /> : <IconX className="w-4 h-4" />}
                    </span>
                    <span className={`font-sans text-sm ${ok ? "text-tierra dark:text-crema" : "text-piedra dark:text-crema/40"}`}>
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </AnimateIn>

            {/* FAQ accordion */}
            <AnimateIn delay={0.25}>
              <h3 className="font-serif text-2xl text-tierra dark:text-crema font-light mb-6">
                Preguntas frecuentes
              </h3>
              <div className="space-y-2 mb-12">
                {FAQS.map((faq, i) => (
                  <div key={i} className="border border-musgo/10 dark:border-crema/10">
                    <button
                      className="w-full flex items-center justify-between px-5 py-4 text-left"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span className="font-sans font-medium text-tierra dark:text-crema text-sm">{faq.q}</span>
                      <motion.span
                        animate={{ rotate: openFaq === i ? 45 : 0 }}
                        className="text-piedra dark:text-crema/40 ml-4 shrink-0 text-xl leading-none"
                      >
                        +
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 font-sans text-sm text-piedra dark:text-crema/60 leading-relaxed">{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </AnimateIn>

            {/* Condiciones */}
            <AnimateIn delay={0.3}>
              <div className="bg-niebla dark:bg-negro/50 border border-musgo/10 dark:border-crema/10 p-6">
                <h4 className="font-sans font-semibold text-tierra dark:text-crema text-sm uppercase tracking-wider mb-3">
                  Condiciones de la experiencia
                </h4>
                <ul className="space-y-2">
                  <li className="font-sans text-xs text-piedra dark:text-crema/50 leading-relaxed">
                    • Esta es una experiencia en entorno natural auténtico, no un alojamiento turístico reglado.
                  </li>
                  <li className="font-sans text-xs text-piedra dark:text-crema/50 leading-relaxed">
                    • El participante acepta las condiciones del entorno y asume responsabilidad sobre su preparación física.
                  </li>
                  <li className="font-sans text-xs text-piedra dark:text-crema/50 leading-relaxed">
                    • North Authentic Experience no se responsabiliza de accidentes por negligencia del participante.
                  </li>
                  <li className="font-sans text-xs text-piedra dark:text-crema/50 leading-relaxed">
                    • Se recomienda disponer de seguro de viaje y accidentes.
                  </li>
                </ul>
              </div>
            </AnimateIn>
          </div>

          {/* Right: sticky booking card */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <AnimateIn direction="right">
                <div className="border border-musgo/20 dark:border-crema/10 bg-crema dark:bg-negro shadow-xl">
                  {/* Badge */}
                  <div className="bg-fuego text-crema text-xs font-sans font-bold uppercase tracking-widest px-4 py-2 text-center flex items-center justify-center gap-1.5">
                    <IconStar className="w-2.5 h-2.5" />
                    Experiencia principal
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-2xl text-tierra dark:text-crema font-light mb-1">Vivir la Braña</h3>
                    <p className="font-serif text-4xl text-tierra dark:text-crema font-light mb-4">
                      600<span className="text-xl text-piedra">€</span>
                      <span className="text-sm font-sans text-piedra dark:text-crema/50 font-normal"> / persona</span>
                    </p>

                    {/* Info */}
                    <div className="space-y-2.5 mb-5 text-sm">
                      {[
                        { icon: <IconPin className="w-4 h-4" />, text: "La Pornacal, Somiedo" },
                        { icon: <IconUsers className="w-4 h-4" />, text: "Máx. 8 personas" },
                        { icon: <IconCalendar className="w-4 h-4" />, text: "Viernes a domingo" },
                        { icon: <IconLeaf className="w-4 h-4" />, text: "Bienestar en naturaleza" },
                      ].map(({ icon, text }) => (
                        <div key={text} className="flex gap-2.5 items-center font-sans text-piedra dark:text-crema/60">
                          <span className="shrink-0 text-musgo dark:text-crema/40">{icon}</span>
                          <span>{text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Plazas */}
                    <div className="mb-5">
                      <div className="flex justify-between text-xs font-sans mb-1">
                        <span className="text-tierra dark:text-crema font-medium">5 de 8 plazas libres</span>
                        <span className="text-fuego font-medium">Quedan pocas</span>
                      </div>
                      <div className="h-1.5 bg-musgo/10 dark:bg-crema/10 rounded-full overflow-hidden">
                        <div className="h-full bg-fuego rounded-full" style={{ width: "37.5%" }} />
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href="/calendario"
                      className="block w-full bg-fuego text-crema font-sans font-medium text-sm uppercase tracking-widest px-6 py-4 text-center hover:bg-tierra transition-colors duration-300 mb-3"
                    >
                      Reservar mi plaza
                    </Link>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20me%20interesa%20la%20experiencia%20Vivir%20la%20Bra%C3%B1a`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full border border-musgo/30 dark:border-crema/20 text-musgo dark:text-crema font-sans text-sm text-center py-3 hover:bg-musgo hover:text-crema transition-colors duration-300 mb-4"
                    >
                      Consultar por WhatsApp
                    </a>

                    <p className="font-sans text-xs text-piedra dark:text-crema/40 text-center">
                      Sin compromiso hasta confirmar fecha
                    </p>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="lg:hidden mt-8 sticky bottom-4 z-20">
          <Link
            href="/calendario"
            className="block w-full bg-fuego text-crema font-sans font-medium text-sm uppercase tracking-widest px-6 py-5 text-center shadow-2xl"
          >
            Reservar mi plaza — 600€
          </Link>
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={GALLERY.map((img) => ({ src: img.src, alt: img.alt }))}
      />
    </section>
  );
}
