import HeroSection from "@/components/sections/HeroSection";
import WhatIsSection from "@/components/sections/WhatIsSection";
import ExperienciaDestacada from "@/components/sections/ExperienciaDestacada";
import AlojamientosPreview from "@/components/sections/AlojamientosPreview";
import FilosofiaPreview from "@/components/sections/FilosofiaPreview";
import CTAFinal from "@/components/sections/CTAFinal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "North Authentic Experience · Vivir la braña. Reconectar con lo esencial.",
  description: "Experiencias de naturaleza auténtica en Somiedo, Asturias. Grupos reducidos de máximo 8 personas. Plazas limitadas.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatIsSection />
      <ExperienciaDestacada />
      <AlojamientosPreview />
      <FilosofiaPreview />
      <CTAFinal />
    </>
  );
}
