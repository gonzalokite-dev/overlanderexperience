import Link from "next/link";
import { IconExternalLink } from "@/components/ui/Icons";
import { EMAIL, WHATSAPP_NUMBER, INSTAGRAM } from "@/lib/data";

function MountainIcon() {
  return (
    <svg width="20" height="16" viewBox="0 0 24 20" fill="none" className="inline-block mr-2 opacity-70">
      <path d="M2 18L8 8L13 13L16 9L22 18H2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      <circle cx="18" cy="5" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-tierra text-crema/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-4">
              <span className="font-serif text-xl text-crema font-semibold">
                <MountainIcon />
                North Authentic
              </span>
            </Link>
            <p className="font-serif text-base italic text-crema/70 mb-6 leading-relaxed">
              "Vivir la braña.<br />Reconectar con lo esencial."
            </p>
            {/* Social */}
            <div className="flex gap-4">
              <a
                href={`https://instagram.com/${INSTAGRAM.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-crema/20 flex items-center justify-center hover:border-fuego hover:text-fuego transition-colors"
                aria-label="Instagram"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" strokeWidth="0" />
                </svg>
              </a>
              <a
                href="https://tiktok.com/@northauthenticexperience"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-crema/20 flex items-center justify-center hover:border-fuego hover:text-fuego transition-colors"
                aria-label="TikTok"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.78a4.86 4.86 0 01-1.02-.09z" />
                </svg>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-crema/20 flex items-center justify-center hover:border-green-400 hover:text-green-400 transition-colors"
                aria-label="WhatsApp"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-crema text-xs font-sans font-semibold uppercase tracking-widest mb-5">Explora</h4>
            <ul className="space-y-3">
              {[
                ["Experiencias", "/experiencias"],
                ["Alojamientos", "/alojamientos"],
                ["Filosofía", "/filosofia"],
                ["Sobre Dani", "/sobre-nosotros"],
                ["Calendario", "/calendario"],
                ["Galería", "/galeria"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-crema/60 hover:text-crema transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-crema text-xs font-sans font-semibold uppercase tracking-widest mb-5">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-crema/60 hover:text-green-400 transition-colors flex items-center gap-2"
                >
                  <IconExternalLink className="w-3.5 h-3.5 text-green-400" />
                  WhatsApp directo
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="text-sm text-crema/60 hover:text-crema transition-colors break-all">
                  {EMAIL}
                </a>
              </li>
              <li>
                <span className="text-sm text-crema/60">Somiedo, Asturias</span>
              </li>
              <li>
                <span className="text-xs text-crema/40">Respondemos en menos de 24h</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h4 className="text-crema text-xs font-sans font-semibold uppercase tracking-widest mb-5">Ubicación</h4>
            <div className="w-full h-36 rounded-sm overflow-hidden opacity-70">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46876.89!2d-6.2!3d43.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd36a58b3f0e3e4f%3A0x1234!2sSomiedo%2C+Asturias!5e0!3m2!1ses!2ses!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Mapa de Somiedo, Asturias"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-crema/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-crema/40">
            © {new Date().getFullYear()} North Authentic Experience. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {[
              ["Aviso Legal", "/legal#aviso-legal"],
              ["Privacidad", "/legal#privacidad"],
              ["Condiciones", "/legal#condiciones"],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="text-xs text-crema/40 hover:text-crema/70 transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
