import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import "./styles/design-system.scss";
import { SpotlightCard } from "@/components/ui/spotlightcard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Creaciones Sabi – Piñatas, dulceros y decoraciones artesanales",
    template: "%s | Creaciones Sabi",
  },
  description:
    "Piñatas, dulceros y decoraciones temáticas hechas a mano por una familia emprendedora. Personalización 100% artesanal con materiales reciclados. Cotiza por WhatsApp.",
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Creaciones Sabi",
    title: "Creaciones Sabi – Piñatas, dulceros y decoraciones artesanales",
    description:
      "Piñatas, dulceros y decoraciones temáticas hechas a mano. Personalización artesanal para tu celebración. Cotiza por WhatsApp.",
  },
};



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`background ${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}>
        <SpotlightCard className="layout" spotlightColor="255,255,255">
          {children}
        </SpotlightCard>
      </body>
    </html>
  );
}
