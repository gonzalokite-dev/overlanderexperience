import ExperienciasHero from "@/components/sections/ExperienciasHero";
import ExperienciaVivir from "@/components/sections/ExperienciaVivir";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiencias en naturaleza auténtica · Somiedo, Asturias",
  description: "Vivir la Braña: experiencia de fin de semana en el corazón de Somiedo. Máximo 8 personas. 600€ por persona. Plazas limitadas.",
};

export default function ExperienciasPage() {
  return (
    <>
      <ExperienciasHero />
      <ExperienciaVivir />
    </>
  );
}
