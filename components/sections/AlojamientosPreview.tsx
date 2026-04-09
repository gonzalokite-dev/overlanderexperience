import Link from "next/link";
import Image from "next/image";
import AnimateIn from "@/components/ui/AnimateIn";
import { IMAGES } from "@/lib/data";

export default function AlojamientosPreview() {
  return (
    <section className="py-24 lg:py-32 bg-niebla dark:bg-negro/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimateIn direction="left">
            <div className="relative aspect-[4/3] overflow-hidden group">
              <Image
                src={IMAGES.cabana}
                alt="Apartamentos La Pornacal - Somiedo"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-negro/20 group-hover:bg-negro/10 transition-colors duration-500" />
            </div>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <p className="text-fuego font-sans text-xs font-semibold uppercase tracking-[0.3em] mb-4">
              Alojamiento
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-tierra dark:text-crema font-light leading-tight mb-6">
              Apartamentos<br />La Pornacal
            </h2>
            <p className="font-sans text-piedra dark:text-crema/60 text-lg leading-relaxed mb-4">
              Tu base en Somiedo. Apartamentos rústicos con todo lo necesario para descansar de verdad, en el entorno del Parque Natural de Somiedo.
            </p>
            <p className="font-serif italic text-piedra dark:text-crema/40 text-base mb-8">
              "El complemento perfecto a las experiencias. O simplemente tu refugio en Somiedo."
            </p>
            <Link
              href="/alojamientos"
              className="inline-block border border-tierra dark:border-crema text-tierra dark:text-crema font-sans font-medium text-sm uppercase tracking-widest px-8 py-4 hover:bg-tierra hover:text-crema dark:hover:bg-crema dark:hover:text-tierra transition-all duration-300"
            >
              Ver alojamientos
            </Link>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
