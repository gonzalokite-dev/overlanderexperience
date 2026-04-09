"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  personas: string;
  experiencia: string;
  fecha: string;
  mensaje: string;
  condiciones: boolean;
}

interface ReservaFormProps {
  fecha?: string;
  onClose: () => void;
}

export default function ReservaForm({ fecha = "", onClose }: ReservaFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    defaultValues: { fecha, experiencia: "Vivir la Braña" },
  });

  const onSubmit = async (data: FormData) => {
    await new Promise(r => setTimeout(r, 1200));
    console.log("Reserva:", data);
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-negro/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-crema dark:bg-negro w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
      >
        {submitted ? (
          <div className="p-10 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-16 h-16 bg-musgo rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
            <h3 className="font-serif text-2xl text-tierra dark:text-crema mb-3">¡Solicitud enviada!</h3>
            <p className="font-sans text-piedra dark:text-crema/60 text-sm leading-relaxed mb-6">
              Hemos recibido tu solicitud de reserva. Nos pondremos en contacto contigo en menos de 24h para confirmar los detalles y el pago.
            </p>
            <button
              onClick={onClose}
              className="bg-fuego text-crema font-sans text-sm font-medium uppercase tracking-widest px-6 py-3 hover:bg-tierra transition-colors"
            >
              Cerrar
            </button>
          </div>
        ) : (
          <>
            <div className="bg-fuego text-crema px-6 py-4 flex items-center justify-between">
              <div>
                <p className="font-sans font-bold text-sm uppercase tracking-widest">Reservar plaza</p>
                {fecha && <p className="font-sans text-crema/70 text-xs mt-0.5">{fecha}</p>}
              </div>
              <button onClick={onClose} className="text-crema/60 hover:text-crema transition-colors">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
              {/* Nombre */}
              <div>
                <label htmlFor="nombre" className="block font-sans text-xs font-semibold text-tierra dark:text-crema uppercase tracking-widest mb-1.5">
                  Nombre completo *
                </label>
                <input
                  id="nombre"
                  type="text"
                  {...register("nombre", { required: "El nombre es obligatorio" })}
                  className="w-full border border-musgo/20 dark:border-crema/20 bg-transparent px-4 py-3 font-sans text-sm text-tierra dark:text-crema placeholder-piedra dark:placeholder-crema/30 focus:outline-none focus:border-musgo dark:focus:border-crema transition-colors"
                  placeholder="Tu nombre"
                />
                {errors.nombre && <p className="font-sans text-xs text-fuego mt-1">{errors.nombre.message}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-sans text-xs font-semibold text-tierra dark:text-crema uppercase tracking-widest mb-1.5">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", { required: "El email es obligatorio", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email no válido" } })}
                  className="w-full border border-musgo/20 dark:border-crema/20 bg-transparent px-4 py-3 font-sans text-sm text-tierra dark:text-crema placeholder-piedra dark:placeholder-crema/30 focus:outline-none focus:border-musgo dark:focus:border-crema transition-colors"
                  placeholder="tu@email.com"
                />
                {errors.email && <p className="font-sans text-xs text-fuego mt-1">{errors.email.message}</p>}
              </div>

              {/* Teléfono */}
              <div>
                <label htmlFor="telefono" className="block font-sans text-xs font-semibold text-tierra dark:text-crema uppercase tracking-widest mb-1.5">
                  Teléfono (WhatsApp) *
                </label>
                <input
                  id="telefono"
                  type="tel"
                  {...register("telefono", { required: "El teléfono es obligatorio" })}
                  className="w-full border border-musgo/20 dark:border-crema/20 bg-transparent px-4 py-3 font-sans text-sm text-tierra dark:text-crema placeholder-piedra dark:placeholder-crema/30 focus:outline-none focus:border-musgo dark:focus:border-crema transition-colors"
                  placeholder="+34 600 000 000"
                />
                {errors.telefono && <p className="font-sans text-xs text-fuego mt-1">{errors.telefono.message}</p>}
              </div>

              {/* Personas + Experiencia (2 col) */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="personas" className="block font-sans text-xs font-semibold text-tierra dark:text-crema uppercase tracking-widest mb-1.5">
                    Nº personas *
                  </label>
                  <select
                    id="personas"
                    {...register("personas", { required: true })}
                    className="w-full border border-musgo/20 dark:border-crema/20 bg-crema dark:bg-negro px-4 py-3 font-sans text-sm text-tierra dark:text-crema focus:outline-none focus:border-musgo dark:focus:border-crema transition-colors"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? "persona" : "personas"}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="experiencia" className="block font-sans text-xs font-semibold text-tierra dark:text-crema uppercase tracking-widest mb-1.5">
                    Experiencia *
                  </label>
                  <select
                    id="experiencia"
                    {...register("experiencia")}
                    className="w-full border border-musgo/20 dark:border-crema/20 bg-crema dark:bg-negro px-4 py-3 font-sans text-sm text-tierra dark:text-crema focus:outline-none focus:border-musgo dark:focus:border-crema transition-colors"
                  >
                    <option value="Vivir la Braña">Vivir la Braña</option>
                  </select>
                </div>
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="mensaje" className="block font-sans text-xs font-semibold text-tierra dark:text-crema uppercase tracking-widest mb-1.5">
                  Preguntas o comentarios
                </label>
                <textarea
                  id="mensaje"
                  rows={3}
                  {...register("mensaje")}
                  className="w-full border border-musgo/20 dark:border-crema/20 bg-transparent px-4 py-3 font-sans text-sm text-tierra dark:text-crema placeholder-piedra dark:placeholder-crema/30 focus:outline-none focus:border-musgo dark:focus:border-crema transition-colors resize-none"
                  placeholder="¿Alguna pregunta sobre la experiencia?"
                />
              </div>

              {/* Condiciones */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("condiciones", { required: "Debes aceptar las condiciones" })}
                    className="mt-1 accent-fuego"
                  />
                  <span className="font-sans text-xs text-piedra dark:text-crema/60 leading-relaxed">
                    Acepto las{" "}
                    <a href="/legal#condiciones" target="_blank" className="text-musgo underline hover:text-fuego">condiciones de la experiencia</a>{" "}
                    y la{" "}
                    <a href="/legal#cancelacion" target="_blank" className="text-musgo underline hover:text-fuego">política de cancelación</a>
                  </span>
                </label>
                {errors.condiciones && <p className="font-sans text-xs text-fuego mt-1">{errors.condiciones.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-fuego text-crema font-sans font-medium text-sm uppercase tracking-widest py-4 hover:bg-tierra transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Enviando...
                  </>
                ) : (
                  "Enviar solicitud de reserva"
                )}
              </button>
              <p className="font-sans text-xs text-piedra dark:text-crema/40 text-center">
                Sin compromiso hasta confirmar fecha y pago
              </p>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}
