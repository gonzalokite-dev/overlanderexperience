import ExperienciasHero from "@/components/sections/ExperienciasHero";
import ExperienciaVivir from "@/components/sections/ExperienciaVivir";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiencias de bienestar en naturaleza · Somiedo, Asturias",
  description: "Vivir la Braña: fin de semana de bienestar en la braña de La Pornacal, Somiedo. Grupos reducidos de máximo 8 personas. Viernes a domingo. 600€ por persona.",
};

export default function ExperienciasPage() {
  return (
    <>
      <ExperienciasHero />
      <ExperienciaVivir />
    </>
  );
}
