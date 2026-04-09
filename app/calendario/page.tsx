"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "@/components/ui/AnimateIn";
import ReservaForm from "@/components/sections/ReservaForm";
import { CALENDAR_DATES, WHATSAPP_NUMBER } from "@/lib/data";

const MONTHS = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const DAYS = ["L", "M", "X", "J", "V", "S", "D"];

function getDateRange(year: number, month: number, start: number, end: number) {
  const dates = [];
  for (let d = start; d <= end; d++) dates.push(d);
  return dates;
}

interface DateInfo {
  month: number;
  year: number;
  start: number;
  end: number;
  available: boolean;
  spots: number;
}

function getDayClass(day: number, month: number, year: number, dates: DateInfo[]) {
  for (const d of dates) {
    if (d.month === month && d.year === year) {
      const range = getDateRange(year, month, d.start, d.end);
      if (range.includes(day)) {
        return d.available ? "available" : "full";
      }
    }
  }
  return "normal";
}

function getDateInfo(day: number, month: number, year: number, dates: DateInfo[]) {
  for (const d of dates) {
    if (d.month === month && d.year === year) {
      const range = getDateRange(year, month, d.start, d.end);
      if (range.includes(day)) return d;
    }
  }
  return null;
}

function CalendarMonth({ month, year }: { month: number; year: number }) {
  const [selected, setSelected] = useState<DateInfo | null>(null);
  const [showForm, setShowForm] = useState(false);

  const firstDay = new Date(year, month, 1).getDay();
  const adjustedFirst = firstDay === 0 ? 6 : firstDay - 1;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  return (
    <div className="border border-musgo/15 dark:border-crema/10">
      {/* Month header */}
      <div className="bg-musgo text-crema px-4 py-3 flex items-center justify-between">
        <span className="font-serif text-lg">{MONTHS[month]} {year}</span>
        <span className="font-sans text-xs text-crema/60 uppercase tracking-widest">
          {CALENDAR_DATES.filter(d => d.month === month && d.year === year && d.available).length} fechas disponibles
        </span>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 bg-musgo/5 dark:bg-crema/5">
        {DAYS.map(d => (
          <div key={d} className="py-2 text-center font-sans text-xs text-piedra dark:text-crema/40 font-medium uppercase">{d}</div>
        ))}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 p-2 gap-1">
        {Array.from({ length: adjustedFirst }).map((_, i) => <div key={`e-${i}`} />)}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const cls = getDayClass(day, month, year, CALENDAR_DATES);
          const info = getDateInfo(day, month, year, CALENDAR_DATES);
          const isSelected = selected && info && info.start === selected.start;

          return (
            <button
              key={day}
              disabled={cls === "normal" || cls === "full"}
              onClick={() => {
                if (info && info.available) {
                  setSelected(isSelected ? null : info);
                }
              }}
              className={`
                aspect-square flex items-center justify-center text-sm font-sans rounded-sm transition-all
                ${cls === "available" ? (isSelected ? "bg-fuego text-crema" : "bg-musgo/20 dark:bg-crema/10 text-musgo dark:text-crema hover:bg-musgo hover:text-crema cursor-pointer") : ""}
                ${cls === "full" ? "bg-piedra/10 text-piedra/40 dark:text-crema/20 line-through cursor-not-allowed" : ""}
                ${cls === "normal" ? "text-tierra dark:text-crema/70" : ""}
              `}
            >
              {day}
            </button>
          );
        })}
      </div>

      {/* Selected date panel */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-musgo/10 dark:border-crema/10 overflow-hidden"
          >
            <div className="p-4 bg-niebla dark:bg-negro/50">
              <p className="font-sans font-semibold text-sm text-tierra dark:text-crema mb-1">
                Vivir la Braña
              </p>
              <p className="font-sans text-xs text-piedra dark:text-crema/60 mb-1">
                {selected.start}–{selected.end} {MONTHS[selected.month]} {selected.year}
              </p>
              <p className="font-sans text-xs text-fuego font-medium mb-3">
                {selected.spots} plazas libres · 600€ / persona
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-fuego text-crema font-sans text-xs font-medium uppercase tracking-wider px-4 py-2 hover:bg-tierra transition-colors"
                >
                  Reservar esta fecha
                </button>
                <button
                  onClick={() => setSelected(null)}
                  className="font-sans text-xs text-piedra dark:text-crema/40 hover:text-tierra dark:hover:text-crema transition-colors px-2"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showForm && selected && (
          <ReservaForm
            fecha={`${selected.start}–${selected.end} ${MONTHS[selected.month]} ${selected.year}`}
            onClose={() => { setShowForm(false); setSelected(null); }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CalendarioPage() {
  const MONTHS_TO_SHOW = [
    { month: 4, year: 2025 },
    { month: 5, year: 2025 },
    { month: 6, year: 2025 },
    { month: 7, year: 2025 },
  ];

  return (
    <>
      <section className="pt-32 pb-8 bg-crema dark:bg-negro">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <p className="font-sans text-xs text-fuego font-semibold uppercase tracking-[0.3em] mb-4">Disponibilidad</p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1 className="font-serif text-5xl md:text-6xl text-tierra dark:text-crema font-light mb-4">
              Calendario de experiencias
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="font-sans text-piedra dark:text-crema/60 text-lg mb-6">
              Selecciona una fecha disponible para reservar tu plaza.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.25}>
            <div className="flex flex-wrap gap-4 text-sm mb-8">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-musgo/20 rounded-sm" />
                <span className="font-sans text-piedra dark:text-crema/60">Disponible</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-piedra/10 rounded-sm" />
                <span className="font-sans text-piedra dark:text-crema/60">Completo</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-fuego rounded-sm" />
                <span className="font-sans text-piedra dark:text-crema/60">Seleccionado</span>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="pb-20 bg-crema dark:bg-negro">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {MONTHS_TO_SHOW.map(({ month, year }) => (
              <AnimateIn key={`${month}-${year}`} delay={0.1}>
                <CalendarMonth month={month} year={year} />
              </AnimateIn>
            ))}
          </div>

          {/* Contact alternative */}
          <AnimateIn delay={0.3}>
            <div className="mt-16 text-center border-t border-musgo/10 dark:border-crema/10 pt-16">
              <p className="font-serif italic text-xl text-tierra dark:text-crema mb-6">
                ¿No encuentras tu fecha ideal?
              </p>
              <p className="font-sans text-piedra dark:text-crema/60 mb-8 max-w-md mx-auto">
                Consúltanos directamente. A veces podemos organizar fechas especiales para grupos que lo necesitan.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20me%20gustar%C3%ADa%20consultar%20disponibilidad%20para%20una%20fecha%20especial`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-fuego text-crema font-sans font-medium text-sm uppercase tracking-widest px-8 py-4 hover:bg-tierra transition-colors"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
