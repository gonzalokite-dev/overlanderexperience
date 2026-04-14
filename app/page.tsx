import HeroSection from "@/components/sections/HeroSection";
import WhatIsSection from "@/components/sections/WhatIsSection";
import BranaExplainer from "@/components/sections/BranaExplainer";
import ExperienciaDestacada from "@/components/sections/ExperienciaDestacada";
import LoQueTeLlevas from "@/components/sections/LoQueTeLlevas";
import AlojamientosPreview from "@/components/sections/AlojamientosPreview";
import FilosofiaPreview from "@/components/sections/FilosofiaPreview";
import CTAFinal from "@/components/sections/CTAFinal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "North Authentic Experience · Vive la braña. Vuelve a lo esencial.",
  description: "Experiencia de bienestar en una braña tradicional asturiana. Somiedo, Asturias. Grupos reducidos de máximo 8 personas. Vienes a desconectar. Te vas sabiendo vivir mejor.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatIsSection />
      <BranaExplainer />
      <ExperienciaDestacada />
      <LoQueTeLlevas />
      <AlojamientosPreview />
      <FilosofiaPreview />
      <CTAFinal />
    </>
  );
}
