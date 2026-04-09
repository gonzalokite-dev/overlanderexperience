"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import AnimateIn from "@/components/ui/AnimateIn";
import { EMAIL, WHATSAPP_NUMBER, INSTAGRAM } from "@/lib/data";

interface ContactFormData {
  nombre: string;
  email: string;
  mensaje: string;
}

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    await new Promise(r => setTimeout(r, 1000));
    console.log("Contact:", data);
    setSubmitted(true);
  };

  return (
    <>
      <section className="pt-32 pb-8 bg-crema dark:bg-negro">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <p className="font-sans text-xs text-fuego font-semibold uppercase tracking-[0.3em] mb-4">Contacto</p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1 className="font-serif text-5xl md:text-6xl text-tierra dark:text-crema font-light mb-4">
              Hablemos
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="font-sans text-piedra dark:text-crema/60 text-lg">
              Respondemos en menos de 24h.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-16 bg-crema dark:bg-negro">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Contact info */}
            <div>
              <AnimateIn>
                <div className="space-y-8">
                  {/* WhatsApp */}
                  <div className="border border-musgo/15 dark:border-crema/10 p-6 hover:border-musgo dark:hover:border-crema/30 transition-colors group">
                    <p className="font-sans text-xs text-fuego font-semibold uppercase tracking-widest mb-3">
                      Más rápido · WhatsApp
                    </p>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20North%20Authentic%20Experience`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group-hover:text-fuego transition-colors"
                    >
                      <div className="w-12 h-12 bg-green-500 flex items-center justify-center shrink-0">
                        <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-sans font-semibold text-tierra dark:text-crema text-base">Escribir por WhatsApp</p>
                        <p className="font-sans text-sm text-piedra dark:text-crema/50">Respuesta inmediata</p>
                      </div>
                    </a>
                  </div>

                  {/* Email */}
                  <div className="border border-musgo/15 dark:border-crema/10 p-6">
                    <p className="font-sans text-xs text-fuego font-semibold uppercase tracking-widest mb-3">Email</p>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="font-sans text-tierra dark:text-crema hover:text-fuego transition-colors text-lg break-all"
                    >
                      {EMAIL}
                    </a>
                  </div>

                  {/* Instagram */}
                  <div className="border border-musgo/15 dark:border-crema/10 p-6">
                    <p className="font-sans text-xs text-fuego font-semibold uppercase tracking-widest mb-3">Instagram</p>
                    <a
                      href={`https://instagram.com/${INSTAGRAM.replace("@", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-tierra dark:text-crema hover:text-fuego transition-colors text-lg"
                    >
                      {INSTAGRAM}
                    </a>
                  </div>

                  {/* Mapa */}
                  <div>
                    <p className="font-sans text-xs text-fuego font-semibold uppercase tracking-widest mb-3">Ubicación</p>
                    <div className="w-full h-52 overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46876.89!2d-6.2!3d43.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd36a58b3f0e3e4f%3A0x1234!2sSomiedo%2C+Asturias!5e0!3m2!1ses!2ses!4v1"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        title="Mapa Somiedo, Asturias"
                      />
                    </div>
                  </div>
                </div>
              </AnimateIn>
            </div>

            {/* Right: Form */}
            <AnimateIn delay={0.2} direction="right">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-16 h-16 bg-musgo rounded-full flex items-center justify-center mb-6"
                  >
                    <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.div>
                  <h3 className="font-serif text-2xl text-tierra dark:text-crema mb-3">¡Mensaje enviado!</h3>
                  <p className="font-sans text-piedra dark:text-crema/60 text-sm">Te responderemos en menos de 24h.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <h2 className="font-serif text-2xl text-tierra dark:text-crema mb-6">Envíanos un mensaje</h2>

                  <div>
                    <label htmlFor="c-nombre" className="block font-sans text-xs font-semibold text-tierra dark:text-crema uppercase tracking-widest mb-1.5">
                      Nombre *
                    </label>
                    <input
                      id="c-nombre"
                      type="text"
                      {...register("nombre", { required: "Obligatorio" })}
                      className="w-full border border-musgo/20 dark:border-crema/20 bg-transparent px-4 py-3 font-sans text-sm text-tierra dark:text-crema placeholder-piedra dark:placeholder-crema/30 focus:outline-none focus:border-musgo dark:focus:border-crema transition-colors"
                      placeholder="Tu nombre"
                    />
                    {errors.nombre && <p className="font-sans text-xs text-fuego mt-1">{errors.nombre.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="c-email" className="block font-sans text-xs font-semibold text-tierra dark:text-crema uppercase tracking-widest mb-1.5">
                      Email *
                    </label>
                    <input
                      id="c-email"
                      type="email"
                      {...register("email", { required: "Obligatorio" })}
                      className="w-full border border-musgo/20 dark:border-crema/20 bg-transparent px-4 py-3 font-sans text-sm text-tierra dark:text-crema placeholder-piedra dark:placeholder-crema/30 focus:outline-none focus:border-musgo dark:focus:border-crema transition-colors"
                      placeholder="tu@email.com"
                    />
                    {errors.email && <p className="font-sans text-xs text-fuego mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="c-mensaje" className="block font-sans text-xs font-semibold text-tierra dark:text-crema uppercase tracking-widest mb-1.5">
                      Mensaje *
                    </label>
                    <textarea
                      id="c-mensaje"
                      rows={6}
                      {...register("mensaje", { required: "Cuéntanos en qué podemos ayudarte" })}
                      className="w-full border border-musgo/20 dark:border-crema/20 bg-transparent px-4 py-3 font-sans text-sm text-tierra dark:text-crema placeholder-piedra dark:placeholder-crema/30 focus:outline-none focus:border-musgo dark:focus:border-crema transition-colors resize-none"
                      placeholder="¿En qué podemos ayudarte?"
                    />
                    {errors.mensaje && <p className="font-sans text-xs text-fuego mt-1">{errors.mensaje.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-fuego text-crema font-sans font-medium text-sm uppercase tracking-widest py-4 hover:bg-tierra transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <><svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Enviando...</>
                    ) : (
                      "Enviar mensaje"
                    )}
                  </button>
                </form>
              )}
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
