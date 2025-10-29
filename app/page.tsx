"use client";
import MagicDock from "@/components/ui/magicdock";
import Navbar from "./components/Navbar/Navbar";
import { HomeIcon, SettingsIcon } from "lucide-react";
import "./styles/page.scss";
import { Button } from "@/components/ui/button";
import { LayeredText } from "@/components/ui/layered-text";
import ServicesSection from "./components/ServiceCards/ServiceCards";
import dulceros from "@/public/images/dulceros.png";
import pinatas from "@/public/images/pinatas.png";
import decoraciones from "@/public/images/decoraciones.png";
import ArtisanWork from "./components/ArtWork/Artwork";
import Link from "next/link";

const dockItems = [
  {
    id: 1,
    icon: <HomeIcon size={24} />,
    label: "Inicio",
    description: "Ir al inicio",
    onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
  },
  {
    id: 2,
    icon: <SettingsIcon size={24} />,
    label: "Productos",
    description: "Customize options",
    onClick: () => console.log("Settings clicked"),
  },
  {
    id: 3,
    icon: <SettingsIcon size={24} />,
    label: "Nosotros",
    description: "Customize options",
    onClick: () => console.log("Settings clicked"),
  },
  {
    id: 4,
    icon: <SettingsIcon size={24} />,
    label: "Contacto",
    description: "Customize options",
    onClick: () => console.log("Settings clicked"),
  },
];

const myServices = [
  {
    title: "Dulceros Premium",
    description:
      "Hermosos dulceros temáticos hechos a mano para hacer inolvidable la sorpresita de tu celebración.",
    image: dulceros,
    features: { personalizable: true, hechoAMano: true, mexicano: true },
    titleColor: "#F7D66B",
  },
  {
    title: "Piñatas",
    description:
      "Piñatas artesanales de todos los temas y personajes favoritos, creadas con amor y dedicación.",
    image: pinatas,
    features: { personalizable: true, hechoAMano: true, mexicano: true },
    titleColor: "#8BA4DC",
  },
  {
    title: "Decoraciones",
    description:
      "Decoraciones temáticas completas: banderines, centros de mesa y todos los detalles que necesitas.",
    image: decoraciones,
    features: { personalizable: true, hechoAMano: true, mexicano: true },
    titleColor: "#F5A8A8",
  },
];

export default function Home() {
  return (
    <main className="main_page">
      <Navbar />
      <main className="main_page-content">
        <section className="hero-section">
          <div className="hero-section__background" />
          <div className="hero-section__container">
            <div className="hero-section__content">
              <p className="hero-description">
                Creamos dulceros, piñatas y decoraciones temáticas completamente
                <span className="hero-description__emphasis">
                  hechas a mano
                </span>
                con el amor y la tradición mexicana que tu fiesta merece.
              </p>

              <div className="hero-cta">
                <Link href="/products">
                  <Button
                    size="lg"
                    className="hero-cta__primary bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Ver Nuestros Productos
                  </Button>
                </Link>
                {/* <Button
                  variant="outline"
                  size="lg"
                  className="hero-cta__secondary border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                >
                  Solicitar Cotización
                </Button> */}
              </div>

              <div className="hero-stats">
                <div className="hero-stats__grid">
                  <div className="hero-stats__item">
                    <div className="hero-stats__number hero-stats__number--accent">
                      100%
                    </div>
                    <div className="hero-stats__label">Hecho a Mano</div>
                  </div>
                  <div className="hero-stats__item">
                    <div className="hero-stats__number hero-stats__number--secondary">
                      5+
                    </div>
                    <div className="hero-stats__label">Años de Experiencia</div>
                  </div>
                  <div className="hero-stats__item">
                    <div className="hero-stats__number hero-stats__number--lavender">
                      500+
                    </div>
                    <div className="hero-stats__label">Fiestas Felices</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="decorative-bubble decorative-bubble--accent"></div>
          <div className="decorative-bubble decorative-bubble--secondary"></div>
          <div className="decorative-bubble decorative-bubble--lavender"></div>
        </section>
        <section>
          <ServicesSection services={myServices} />
        </section>
        <section>
          <ArtisanWork />
        </section>
      </main>
    </main>
  );
}
