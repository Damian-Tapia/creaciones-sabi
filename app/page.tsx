"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  Clock3Icon,
  GiftIcon,
  HeartHandshakeIcon,
  PaletteIcon,
  SparklesIcon,
} from "lucide-react";
import Navbar from "./components/Navbar/Navbar";
import ProductCatalogCard from "./components/Catalog/ProductCatalogCard";
import "./page.scss";
import pinatas from "@/public/images/pinatas-collection.jpg";
import decoraciones from "@/public/images/decorations-collection.jpg";
import logoCrop from "@/public/images/logo-crop.png";
import { products } from "./data/products";

const heroHighlights = [
  "Personalización 100% artesanal",
  "Materiales reciclados y reutilizables",
  "Asesoría cercana por WhatsApp",
];

export default function Home() {
  return (
    <main className="main_page">
      <Navbar />
      <section className="main_page-content" id="inicio">
        <article className="main_page-hero" aria-label="Sección principal" id="nosotros">
          <span className="hero-decoration hero-decoration--mint" aria-hidden="true" />
          <span className="hero-decoration hero-decoration--pink" aria-hidden="true" />

          <section className="main_page-hero-content">
            <p className="eyebrow">
              <SparklesIcon size={16} /> Hecho a mano por una familia emprendedora
            </p>

            <div className="hero-brand" aria-label="Marca Creaciones Sabi">
              <div className="hero-brand-logo">
                <Image
                  src={logoCrop}
                  alt="Logo de Creaciones Sabi"
                  priority
                  sizes="72px"
                  className="hero-brand-logo-image"
                />
              </div>
              <span className="hero-brand-mark">Creaciones Sabi</span>
            </div>

            <h1>Dulceros, piñatas y decoraciones temáticas hechas con cariño para tu celebración</h1>

            <p className="description">
              En Creaciones Sabi transformamos tus ideas en detalles únicos, con trabajo artesanal, enfoque familiar y
              materiales reciclados siempre que es posible.
            </p>

            <ul className="highlights" aria-label="Beneficios principales">
              {heroHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="actions">
              <a className="cta-primary" href="#contacto">
                Quiero cotizar por WhatsApp <ArrowRightIcon size={16} />
              </a>
              <Link className="cta-secondary" href="/catalogo">
                Ver catálogo
              </Link>
            </div>
          </section>

          <section className="main_page-hero-media">
            {/* <div className="hero-main-image">
              <Image
                src={heroBanner}
                alt="Mesa de fiesta con decoraciones artesanales"
                priority
                sizes="(max-width: 768px) 100vw, 45vw"
                className="hero-image"
              />
            </div> */}

            <div className="hero-gallery" aria-label="Muestra de productos">
              <article className="hero-gallery-card">
                <Image
                  src={pinatas}
                  alt="Piñatas personalizadas hechas a mano"
                  sizes="(max-width: 768px) 44vw, 15vw"
                  className="hero-gallery-image"
                />
                <p>Piñatas</p>
              </article>
              <article className="hero-gallery-card">
                <Image
                  src={decoraciones}
                  alt="Decoraciones temáticas para eventos"
                  sizes="(max-width: 768px) 44vw, 15vw"
                  className="hero-gallery-image"
                />
                <p>Decoraciones</p>
              </article>
            </div>

            <div className="hero-floating-card" aria-label="Respuesta de contacto">
              <Clock3Icon size={18} />
              <div>
                <strong>Respuesta rápida</strong>
                <p>Te respondemos por WhatsApp en menos de 1 hora hábil para ayudarte a planear tu evento.</p>
              </div>
            </div>
          </section>
        </article>

        <section className="main_page-story" aria-label="Proceso artesanal">
          <article className="story-card">
            <span className="story-icon story-icon--mint">
              <HeartHandshakeIcon size={18} />
            </span>
            <h3>Te escuchamos</h3>
            <p>Nos compartes temática, colores y presupuesto para preparar una propuesta personalizada y realista.</p>
          </article>
          <article className="story-card">
            <span className="story-icon story-icon--pink">
              <PaletteIcon size={18} />
            </span>
            <h3>Diseñamos a mano</h3>
            <p>Cada pieza se arma a mano con dedicación, cuidando cada detalle para que tu celebración sea única.</p>
          </article>
          <article className="story-card">
            <span className="story-icon story-icon--yellow">
              <GiftIcon size={18} />
            </span>
            <h3>Entregamos listo</h3>
            <p>Recibes todo listo para montar y disfrutar, mientras sigues apoyando a un emprendimiento familiar local.</p>
          </article>
        </section>

        <article className="main_page-content-about" id="productos">
          <section className="catalog-header">
            <p className="catalog-kicker">Colección artesanal</p>
            <h2 className="title">Nuestras creaciones</h2>
            <p className="catalog-subtitle">
              Explora dulceros, piñatas y decoraciones temáticas creadas con estilo artesanal, tonos suaves y mucho
              amor por los detalles.
            </p>
          </section>

          {products.length > 0 ? (
            <section className="cards" aria-label="Catálogo de productos">
              {products.map((product) => (
                <ProductCatalogCard
                  key={product.title}
                  title={product.title}
                  description={product.description}
                  image={product.image}
                  imageAlt={product.imageAlt}
                />
              ))}
            </section>
          ) : (
            <section className="catalog-empty" aria-label="Catálogo sin productos">
              <p>Estamos preparando nuevas creaciones artesanales para ti y tu familia.</p>
              <a href="#contacto" className="catalog-empty-cta">
                Cuéntanos tu idea por WhatsApp
              </a>
            </section>
          )}
        </article>

        <section className="main_page-content-contact" id="contacto">
          <h2>¿Planeamos juntos tu próxima fiesta?</h2>
          <p>Compártenos tu idea y te acompañamos con una propuesta artesanal, cercana y pensada para tu familia.</p>
          <a
            className="contact-button"
            href="https://wa.me/5210000000000?text=Hola%20Creaciones%20Sabi,%20quiero%20cotizar%20mi%20evento"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hablar por WhatsApp
          </a>
        </section>

        <footer className="main_page-footer" aria-label="Pie de página">
          <p>Creaciones Sabi · Hecho a mano, en familia, para celebrar contigo</p>
          <nav className="footer-links" aria-label="Navegación rápida">
            <a href="#inicio">Inicio</a>
            <Link href="/catalogo">Catálogo</Link>
            <a href="#contacto">WhatsApp</a>
          </nav>
        </footer>
      </section>
    </main>
  );
}
