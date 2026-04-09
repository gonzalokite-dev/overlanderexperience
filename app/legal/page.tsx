import AnimateIn from "@/components/ui/AnimateIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal y Condiciones · North Authentic Experience",
  description: "Aviso legal, condiciones de reserva, política de cancelación y política de privacidad de North Authentic Experience.",
};

const SECTIONS = [
  {
    id: "aviso-legal",
    titulo: "Aviso Legal",
    contenido: [
      { subtitulo: "Titular del sitio web", texto: "North Authentic Experience, en proceso de constitución. Domicilio: Somiedo, Asturias, España. Email de contacto: hola@northauthenticexperience.com" },
      { subtitulo: "Objeto", texto: "El presente aviso legal regula el uso del sitio web northauthenticexperience.com (en adelante, el Sitio Web), del que es titular North Authentic Experience." },
      { subtitulo: "Propiedad intelectual", texto: "Todos los contenidos del Sitio Web, incluyendo textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece a North Authentic Experience, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos más allá de lo estrictamente necesario para el correcto uso de la web." },
    ],
  },
  {
    id: "condiciones",
    titulo: "Condiciones de Reserva",
    contenido: [
      { subtitulo: "Formalización de la reserva", texto: "La reserva se formaliza mediante la cumplimentación del formulario de solicitud y el abono del importe correspondiente según las condiciones indicadas. La confirmación de la reserva se realizará vía email o WhatsApp en un plazo máximo de 24 horas." },
      { subtitulo: "Precio y pago", texto: "El precio por persona para la experiencia 'Vivir la Braña' es de 600€. El pago se realizará mediante transferencia bancaria o bizum al número indicado en la confirmación. La plaza queda confirmada al recibir el justificante de pago." },
      { subtitulo: "Confirmación", texto: "Una vez recibido el pago, se enviará al participante la información detallada sobre el punto de encuentro, qué llevar, y cualquier información relevante para la experiencia." },
    ],
  },
  {
    id: "cancelacion",
    titulo: "Política de Cancelación",
    contenido: [
      { subtitulo: "Cancelación por parte del participante", texto: "" },
      {
        subtitulo: "",
        texto: "La política de cancelación es la siguiente:\n\n• Más de 30 días antes de la experiencia: Devolución del 100% del importe pagado.\n\n• Entre 15 y 30 días antes: Devolución del 50% del importe pagado.\n\n• Menos de 15 días antes: Sin devolución del importe pagado.\n\nEn todos los casos, el participante puede trasladar su plaza a otra persona, notificándolo con al menos 48 horas de antelación.",
      },
      { subtitulo: "Cancelación por parte de North Authentic Experience", texto: "En el caso de que North Authentic Experience deba cancelar la experiencia por causas de fuerza mayor, condiciones meteorológicas adversas o cualquier otra causa justificada, se ofrecerá al participante la opción de cambio de fecha o la devolución íntegra del importe pagado." },
    ],
  },
  {
    id: "privacidad",
    titulo: "Política de Privacidad",
    contenido: [
      { subtitulo: "Responsable del tratamiento", texto: "North Authentic Experience, con domicilio en Somiedo, Asturias. Email: hola@northauthenticexperience.com" },
      { subtitulo: "Datos recogidos", texto: "Recogemos los datos que el usuario nos facilita voluntariamente a través de los formularios del sitio web: nombre, email, teléfono y cualquier otro dato incluido en el campo de mensaje." },
      { subtitulo: "Finalidad del tratamiento", texto: "Los datos recogidos se utilizan exclusivamente para gestionar las solicitudes de reserva y consultas de los usuarios, así como para enviar información sobre las experiencias cuando el usuario lo haya solicitado expresamente." },
      { subtitulo: "Base legal", texto: "El tratamiento se basa en el consentimiento del interesado, prestado en el momento de enviar el formulario." },
      { subtitulo: "Derechos del usuario", texto: "El usuario tiene derecho a acceder, rectificar, suprimir, limitar el tratamiento, oponerse al mismo y a la portabilidad de sus datos. Puede ejercer estos derechos enviando un email a hola@northauthenticexperience.com." },
      { subtitulo: "Conservación de datos", texto: "Los datos se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recogidos y para atender posibles responsabilidades legales." },
    ],
  },
  {
    id: "condiciones-experiencia",
    titulo: "Condiciones de la Experiencia",
    contenido: [
      { subtitulo: "Entorno natural", texto: "Las experiencias de North Authentic Experience tienen lugar en entornos naturales. El participante es consciente de las condiciones propias de estos entornos y acepta los riesgos inherentes a las actividades en la naturaleza." },
      { subtitulo: "Responsabilidad del participante", texto: "El participante es responsable de su preparación física y mental para la actividad. North Authentic Experience no se responsabiliza de accidentes o lesiones derivados de una preparación insuficiente o de la negligencia del participante." },
      { subtitulo: "Seguro de viaje", texto: "Se recomienda encarecidamente que los participantes dispongan de un seguro de viaje y/o accidentes que cubra actividades en entornos naturales." },
      { subtitulo: "Normas de convivencia", texto: "North Authentic Experience se reserva el derecho de excluir de la experiencia a cualquier participante que no respete las normas de convivencia, el entorno natural o que ponga en riesgo la seguridad del grupo." },
    ],
  },
];

export default function LegalPage() {
  return (
    <>
      <section className="pt-32 pb-8 bg-crema dark:bg-negro">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <h1 className="font-serif text-4xl md:text-5xl text-tierra dark:text-crema font-light mb-4">
              Información legal
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="font-sans text-piedra dark:text-crema/60 mb-8">Última actualización: enero 2025</p>
          </AnimateIn>

          {/* Anchor nav */}
          <AnimateIn delay={0.15}>
            <nav className="border border-musgo/15 dark:border-crema/10 p-5 mb-12">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-tierra dark:text-crema mb-3">Contenido</p>
              <ul className="space-y-2">
                {SECTIONS.map(s => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="font-sans text-sm text-musgo dark:text-crema/70 hover:text-fuego transition-colors">
                      → {s.titulo}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </AnimateIn>
        </div>
      </section>

      <section className="pb-20 bg-crema dark:bg-negro">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-16">
          {SECTIONS.map((section, i) => (
            <AnimateIn key={section.id} delay={0.05 * i}>
              <div id={section.id} className="scroll-mt-24">
                <h2 className="font-serif text-2xl md:text-3xl text-tierra dark:text-crema font-light mb-6 pb-3 border-b border-musgo/10 dark:border-crema/10">
                  {section.titulo}
                </h2>
                <div className="space-y-6">
                  {section.contenido.map((item, j) => (
                    <div key={j}>
                      {item.subtitulo && (
                        <h3 className="font-sans font-semibold text-sm uppercase tracking-wider text-tierra dark:text-crema mb-2">
                          {item.subtitulo}
                        </h3>
                      )}
                      <p className="font-sans text-piedra dark:text-crema/60 text-sm leading-relaxed whitespace-pre-line">
                        {item.texto}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>
    </>
  );
}
