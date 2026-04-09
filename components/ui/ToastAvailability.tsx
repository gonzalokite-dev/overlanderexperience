"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function ToastAvailability() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const shown = sessionStorage.getItem("nae-toast-shown");
    if (!shown) {
      const timer = setTimeout(() => {
        setVisible(true);
        sessionStorage.setItem("nae-toast-shown", "1");
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: -40, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="fixed bottom-6 left-6 z-50 max-w-xs bg-tierra dark:bg-negro text-crema rounded-sm shadow-2xl overflow-hidden"
        >
          <div className="px-4 py-4 pr-10">
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-fuego mb-1">
              Próxima experiencia
            </p>
            <p className="text-sm font-sans text-crema/90 mb-2">
              16-18 mayo · <span className="font-semibold text-crema">3 plazas libres</span>
            </p>
            <Link
              href="/calendario"
              onClick={() => setVisible(false)}
              className="text-xs text-crema/60 hover:text-fuego transition-colors underline underline-offset-2"
            >
              Ver fechas disponibles →
            </Link>
          </div>
          <button
            onClick={() => setVisible(false)}
            className="absolute top-3 right-3 text-crema/40 hover:text-crema transition-colors"
            aria-label="Cerrar"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
          {/* Progress bar auto-close */}
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-fuego"
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 8, ease: "linear" }}
            onAnimationComplete={() => setVisible(false)}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
