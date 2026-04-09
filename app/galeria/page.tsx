"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import AnimateIn from "@/components/ui/AnimateIn";
import { GALLERY_IMAGES } from "@/lib/data";

const CATEGORIES = [
  { key: "all", label: "Todo" },
  { key: "teito", label: "Teito" },
  { key: "brana", label: "Braña" },
  { key: "experiencias", label: "Experiencias" },
  { key: "alojamiento", label: "Alojamiento" },
];

export default function GaleriaPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filtered = activeCategory === "all"
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  const handleOpen = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Masonry-like layout: alternate heights
  const heights = ["aspect-square", "aspect-[3/4]", "aspect-[4/3]", "aspect-square", "aspect-[3/4]", "aspect-[4/3]"];

  return (
    <>
      <section className="pt-32 pb-8 bg-crema dark:bg-negro">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <p className="font-sans text-xs text-fuego font-semibold uppercase tracking-[0.3em] mb-4">Galería</p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1 className="font-serif text-5xl md:text-6xl text-tierra dark:text-crema font-light mb-8">
              Somiedo en imágenes
            </h1>
          </AnimateIn>

          {/* Filter tabs */}
          <AnimateIn delay={0.2}>
            <div className="flex flex-wrap gap-2 mb-10">
              {CATEGORIES.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`font-sans text-sm px-5 py-2 border transition-all duration-300 ${
                    activeCategory === key
                      ? "bg-tierra dark:bg-crema text-crema dark:text-tierra border-tierra dark:border-crema"
                      : "border-musgo/20 dark:border-crema/20 text-piedra dark:text-crema/60 hover:border-tierra dark:hover:border-crema hover:text-tierra dark:hover:text-crema"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="pb-20 bg-crema dark:bg-negro">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="columns-2 md:columns-3 gap-3 space-y-3">
            {filtered.map((img, i) => (
              <motion.div
                key={`${img.src}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative w-full break-inside-avoid overflow-hidden group cursor-image ${heights[i % heights.length]}`}
                onClick={() => handleOpen(i)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-negro/0 group-hover:bg-negro/40 transition-all duration-500 flex items-end">
                  <div className="p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="font-sans text-xs text-crema uppercase tracking-widest">{img.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={filtered.map(img => ({ src: img.src, alt: img.alt }))}
      />
    </>
  );
}
