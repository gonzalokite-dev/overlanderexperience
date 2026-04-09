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
  { src: IMAGES.desayuno, alt: "Desayuno tradicional asturiano" },
  { src: IMAGES.grupo, alt: "Grupo en la braña" },
];

const PROGRAMA = [
  {
    dia: "Viernes tarde",
    titulo: "Llegada y bienvenida",
    desc: "Llegada al punto de encuentro. Presentación del grupo. Cena de bienvenida en el teito con productos locales de temporada. Primera noche bajo las estrellas de Somiedo.",
  },
  {
    dia: "Sábado",
    titulo: "El día completo en la braña",
    desc: "Desayuno tradicional asturiano. Ruta guiada por la braña de Somiedo con el guía experiencial. Tiempo libre para explorar. Actividad de bienestar: meditación o respiración en la montaña. Cena bajo las estrellas.",
  },
  {
    dia: "Domingo",
    titulo: "Cierre y regreso",
    desc: "Desayuno tranquilo sin prisa. Círculo de cierre en grupo. Tiempo para la reflexión. Regreso con algo diferente dentro.",
  },
];

const INCLUYE = [
  { ok: true, text: "Alojamiento viernes y sábado noche" },
  { ok: true, text: "Cena de bienvenida viernes" },
  { ok: true, text: "Desayuno sábado y domingo" },
  { ok: true, text: "Guía experiencial todo el fin de semana" },
  { ok: true, text: "Actividad de bienestar incluida" },
  { ok: true, text: "Materiales para la experiencia" },
  { ok: false, text: "Transporte hasta el punto de encuentro" },
  { ok: false, text: "Bebidas adicionales" },
  { ok: false, text: "Seguro de viaje (recomendado)" },
  { ok: false, text: "Actividades opcionales no programadas" },
];

const FAQS = [
  {
    q: "¿Hay baño en el teito?",
    a: "Hay instalaciones rústicas adaptadas. La experiencia es auténtica, no un hotel. Pero no te faltará lo esencial.",
  },
  {
    q: "¿Qué nivel físico se necesita?",
    a: "Buena forma física básica. La ruta es moderada, accesible para la mayoría de personas activas. No es alpinismo.",
  },
  {
    q: "¿Qué debo llevar?",
    a: "Ropa de montaña por capas, botas de trekking, saco de dormir (o lo indicaremos en la info de confirmación), ganas de desconectar.",
  },
  {
    q: "¿Es cómodo?",
    a: "Es auténtico. Ni glamping ni hotel de cinco estrellas. Pero dormirás como no recuerdas haber dormido en años.",
  },
  {
    q: "¿Puedo cancelar?",
    a: "Sí, con condiciones. Más de 30 días: devolución 100%. Entre 15-30 días: 50%. Menos de 15 días: sin devolución. Consulta condiciones completas.",
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
                "Hay lugares donde el tiempo se detiene. Donde el fuego del teito es la única pantalla que necesitas. Vivir la Braña es una experiencia de fin de semana en el corazón de Somiedo, donde los vaqueiros de alzada llevaban su ganado cada verano. Tú harás lo mismo: desconectar, respirar, volver."
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
                    className={`font-sans text-sm px-4 py-3 border-b-2 transition-all -mb-px ${
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
                  <h4 className="font-sans font-semibold text-tierra dark:text-crema mb-2">{PROGRAMA[activeTab].titulo}</h4>
                  <p className="font-sans text-piedra dark:text-crema/60 text-sm leading-relaxed">{PROGRAMA[activeTab].desc}</p>
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
                        className="text-piedra dark:text-crema/40 ml-4 shrink-0"
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
                          <p className="px-5 pb-4 font-sans text-sm text-piedra dark:text-crema/60 leading-relaxed">{faq.a}</p>
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
                    • Esta es una experiencia en entorno natural, no un alojamiento turístico reglado.
                  </li>
                  <li className="font-sans text-xs text-piedra dark:text-crema/50 leading-relaxed">
                    • El participante acepta las condiciones del entorno y asume responsabilidad sobre su preparación física.
                  </li>
                  <li className="font-sans text-xs text-piedra dark:text-crema/50 leading-relaxed">
                    • North Authentic Experience no se responsabiliza de accidentes por negligencia del participante.
                  </li>
                  <li className="font-sans text-xs text-piedra dark:text-crema/50 leading-relaxed">
                    • Se recomienda disponer de seguro de viaje/accidentes.
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
                    Experiencia Estrella
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
                        { icon: <IconPin className="w-4 h-4" />, text: "Somiedo, Asturias" },
                        { icon: <IconUsers className="w-4 h-4" />, text: "Máx. 8 personas" },
                        { icon: <IconCalendar className="w-4 h-4" />, text: "Viernes a domingo" },
                        { icon: <IconLeaf className="w-4 h-4" />, text: "Grupos reducidos" },
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
                        <span className="text-fuego font-medium">¡Quedan pocas!</span>
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
