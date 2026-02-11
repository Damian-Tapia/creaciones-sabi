"use client";

import Image from "next/image";
import {
  ArrowRightIcon,
  Clock3Icon,
  HomeIcon,
  ImagesIcon,
  InfoIcon,
  MessageCircleIcon,
  SparklesIcon,
} from "lucide-react";
import MagicDock from "@/components/ui/magicdock";
import Navbar from "./components/Navbar/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import "./page.scss";
import heroBanner from "@/public/images/hero-banner.jpg";
import pinatas from "@/public/images/pinatas-collection.jpg";
import decoraciones from "@/public/images/decorations-collection.jpg";

const products = [
  {
    title: "Piñatas personalizadas",
    description: "Diseños temáticos y hechos a mano para cumpleaños, baby shower y eventos especiales.",
    image: pinatas,
    imageAlt: "Colección de piñatas personalizadas",
  },
  {
    title: "Decoraciones de mesa",
    description: "Kits decorativos que llenan de color tu evento y combinan con tu temática favorita.",
    image: decoraciones,
    imageAlt: "Decoraciones temáticas para fiestas",
  },
  {
    title: "Sets completos",
    description: "Armamos una propuesta integral para que solo te concentres en disfrutar tu celebración.",
    image: heroBanner,
    imageAlt: "Decoración completa para fiesta temática",
  },
];

const heroHighlights = ["Personalización 100% artesanal", "Entrega local y nacional", "Asesoría por WhatsApp"];

const goToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export default function Home() {
  const dockItems = [
    {
      id: 1,
      icon: <HomeIcon size={24} />,
      label: "Inicio",
      description: "Volver al inicio",
      onClick: () => goToSection("inicio"),
    },
    {
      id: 2,
      icon: <ImagesIcon size={24} />,
      label: "Productos",
      description: "Ver nuestras creaciones",
      onClick: () => goToSection("productos"),
    },
    {
      id: 3,
      icon: <InfoIcon size={24} />,
      label: "Nosotros",
      description: "Conocer el taller",
      onClick: () => goToSection("nosotros"),
    },
    {
      id: 4,
      icon: <MessageCircleIcon size={24} />,
      label: "Contacto",
      description: "Pedir cotización",
      onClick: () => goToSection("contacto"),
    },
  ];

  return (
    <main className="main_page">
      <Navbar />
      <section className="main_page-content" id="inicio">
        <article className="main_page-hero" aria-label="Sección principal" id="nosotros">
          <section className="main_page-hero-content">
            <p className="eyebrow">
              <SparklesIcon size={16} /> Pasteles, artesanal y hecho con amor
            </p>

            <h1>Decoraciones y piñatas que convierten tu fiesta en un momento inolvidable</h1>

            <p className="description">
              Diseñamos cada pieza para que combine perfecto con tu evento. Tú nos cuentas tu idea y nosotros te
              proponemos opciones listas para cotizar.
            </p>

            <ul className="highlights" aria-label="Beneficios principales">
              {heroHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="actions">
              <a className="cta-primary" href="#contacto">
                Quiero cotizar mi evento <ArrowRightIcon size={16} />
              </a>
              <button className="cta-secondary" type="button" onClick={() => goToSection("productos")}>
                Ver catálogo
              </button>
            </div>
          </section>

          <section className="main_page-hero-media">
            <div className="hero-main-image">
              <Image
                src={heroBanner}
                alt="Mesa de fiesta con decoraciones artesanales"
                priority
                sizes="(max-width: 768px) 100vw, 45vw"
                className="hero-image"
              />
            </div>
            <div className="hero-floating-card" aria-label="Respuesta de contacto">
              <Clock3Icon size={18} />
              <div>
                <strong>Respuesta rápida</strong>
                <p>Te respondemos por WhatsApp en menos de 1 hora hábil.</p>
              </div>
            </div>
          </section>
        </article>

        <article className="main_page-content-about" id="productos">
          <h2 className="title">Nuestras creaciones</h2>
          <section className="cards" aria-label="Catálogo de productos">
            {products.map((product) => (
              <Card key={product.title} className="product-card">
                <div className="product-card-image-wrapper">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    className="product-card-image"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{product.title}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Tiempo de entrega estimado: 4 a 7 días según personalización.</p>
                </CardContent>
                <CardFooter>
                  <a href="#contacto" className="mini-cta">
                    Solicitar precio
                  </a>
                </CardFooter>
              </Card>
            ))}
          </section>
        </article>

        <section className="main_page-content-contact" id="contacto">
          <h2>¿Lista tu próxima fiesta?</h2>
          <p>Compártenos tu idea y te ayudamos a transformar tu evento con una propuesta personalizada.</p>
          <a
            className="contact-button"
            href="https://wa.me/5210000000000?text=Hola%20Creaciones%20Sabi,%20quiero%20cotizar%20mi%20evento"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contactar por WhatsApp
          </a>
        </section>
      </section>
      <MagicDock items={dockItems} variant="tooltip" className="bg-transparent border-none sticky" />
    </main>
  );
}
