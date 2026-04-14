"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const LINKS = [
  { href: "/experiencias", label: "Experiencias" },
  { href: "/alojamientos", label: "Alojamientos" },
  { href: "/filosofia", label: "Filosofía" },
  { href: "/sobre-nosotros", label: "Nosotros" },
  { href: "/faq", label: "FAQ" },
];

function MountainIcon() {
  return (
    <svg width="24" height="20" viewBox="0 0 24 20" fill="none" className="inline-block mr-2">
      <path d="M2 18L8 8L13 13L16 9L22 18H2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      <circle cx="18" cy="5" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggle } = useTheme();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const transparent = isHome && !scrolled && !menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        transparent
          ? "bg-transparent"
          : "bg-crema/95 dark:bg-tierra/95 backdrop-blur-md shadow-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <span className={`font-serif text-lg lg:text-xl font-semibold tracking-wide transition-colors ${transparent ? "text-crema" : "text-tierra dark:text-crema"}`}>
            <MountainIcon />
            North Authentic
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium tracking-wide uppercase transition-colors relative group ${
                transparent ? "text-crema/90 hover:text-crema" : "text-tierra/80 dark:text-crema/80 hover:text-musgo dark:hover:text-crema"
              } ${pathname === href ? "text-fuego dark:text-fuego" : ""}`}
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-fuego transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggle}
            aria-label="Cambiar tema"
            className={`w-9 h-9 flex items-center justify-center rounded-full transition-colors ${
              transparent ? "text-crema hover:bg-white/10" : "text-tierra dark:text-crema hover:bg-musgo/10"
            }`}
          >
            {theme === "light" ? (
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" strokeLinecap="round" />
              </svg>
            )}
          </button>
          <Link
            href="/calendario"
            className="bg-fuego text-crema text-sm font-medium px-5 py-2.5 rounded-sm hover:bg-tierra transition-colors tracking-wide uppercase"
          >
            Reservar plaza
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 ${transparent ? "text-crema" : "text-tierra dark:text-crema"}`}
          aria-label="Menú"
        >
          <span className={`w-6 h-px bg-current transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`w-6 h-px bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-px bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-crema dark:bg-tierra border-t border-musgo/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="font-serif text-2xl text-tierra dark:text-crema hover:text-fuego transition-colors"
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/calendario"
                className="inline-block bg-fuego text-crema text-sm font-medium px-6 py-3 text-center uppercase tracking-wide"
              >
                Reservar plaza
              </Link>
              <button onClick={toggle} className="text-left text-sm text-piedra dark:text-crema/60">
                {theme === "light" ? "Modo oscuro" : "Modo claro"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
