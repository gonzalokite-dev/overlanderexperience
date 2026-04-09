import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ToastAvailability from "@/components/ui/ToastAvailability";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "North Authentic Experience · Experiencias en naturaleza auténtica · Somiedo, Asturias",
    template: "%s · North Authentic Experience",
  },
  description:
    "Experiencias de naturaleza auténtica en Somiedo, Asturias. Grupos reducidos, plazas limitadas. Vivir la braña. Reconectar con lo esencial.",
  keywords: ["turismo rural Asturias", "experiencias naturaleza Somiedo", "turismo experiencial", "Parque Natural Somiedo", "braña asturiana"],
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "North Authentic Experience",
    title: "North Authentic Experience · Vivir la braña. Reconectar con lo esencial.",
    description: "Experiencias de naturaleza auténtica en Somiedo, Asturias. Grupos reducidos. Plazas limitadas.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
        width: 1200,
        height: 630,
        alt: "North Authentic Experience - Naturaleza auténtica en Somiedo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${cormorant.variable} ${dmSans.variable} font-sans antialiased`}>
        <ThemeProvider>
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <ToastAvailability />
        </ThemeProvider>
      </body>
    </html>
  );
}
