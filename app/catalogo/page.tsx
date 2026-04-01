import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar/Navbar";
import ProductPhotoCard from "@/app/components/Catalog/ProductPhotoCard";
import { catalogPinatas, catalogDulceros, catalogCombos, type ProductItem } from "@/app/data/products";
import "./page.scss";

export const metadata: Metadata = {
  title: "Catálogo de productos",
  description:
    "Explora todas las piñatas, dulceros y decoraciones temáticas de Creaciones Sabi. Precios desde $40. Hecho a mano con materiales reciclados.",
};

type PricingTier = {
  label: string;
  size: string;
  price: string;
};

type CatalogSection = {
  id: string;
  kicker: string;
  title: string;
  subtitle: string;
  items: ProductItem[];
  pricingTiers?: PricingTier[];
};

const pinataPricingTiers: PricingTier[] = [
  { label: "Centro de casa", size: "40 cm", price: "$150" },
  { label: "Mini", size: "30 cm", price: "$250" },
  { label: "Chica", size: "50 cm", price: "$300" },
  { label: "Mediana", size: "60–70 cm", price: "$350" },
  { label: "Grande", size: "80 cm – 1 m", price: "$400" },
];

const sections: CatalogSection[] = [
  {
    id: "pinatas",
    kicker: "Personalizadas",
    title: "Piñatas",
    subtitle: "Diseños temáticos hechos a mano en distintos tamaños y personajes.",
    items: catalogPinatas,
    pricingTiers: pinataPricingTiers,
  },
  {
    id: "dulceros",
    kicker: "Desde $40 c/u",
    title: "Dulceros",
    subtitle: "Dulceros artesanales con tu personaje favorito, a $40 cada uno.",
    items: catalogDulceros,
  },
  {
    id: "combos",
    kicker: "Pack completo",
    title: "Combos",
    subtitle: "Paquetes de piñata y dulceros con temática coordinada, hechos a mano.",
    items: catalogCombos,
  },
];

export default function CatalogPage() {
  return (
    <main className="catalog-page">
      <Navbar />

      <section className="catalog-page-content">
        <header className="catalog-page-header">
          <p className="catalog-kicker">Catálogo completo</p>
          <h1>Todos nuestros productos disponibles</h1>
          <p>
            Conoce todas las creaciones de Creaciones Sabi. Cada diseño está hecho a mano y pensado para celebraciones
            especiales.
          </p>
        </header>

        {sections.map(({ id, kicker, title, subtitle, items, pricingTiers }) =>
          items.length > 0 ? (
            <section key={id} className="catalog-category" id={id} aria-label={title}>
              <div className="catalog-category-header">
                <h2 className="catalog-category-title">{title}</h2>
                <p className="catalog-category-subtitle">{subtitle}</p>
                <span className="catalog-kicker">{kicker}</span>
                {pricingTiers && (
                  <div className="pricing-tiers" aria-label="Tamaños y precios">
                    {pricingTiers.map((tier) => (
                      <div key={tier.label} className="pricing-tier">
                        <span className="pricing-tier-label">{tier.label}</span>
                        <span className="pricing-tier-size">{tier.size}</span>
                        <span className="pricing-tier-price">{tier.price}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="cards" aria-label={`Catálogo de ${title.toLowerCase()}`}>
                {items.map((product) => (
                  <ProductPhotoCard
                    key={`${id}-${product.title}`}
                    title={product.title}
                    image={product.image}
                    imageAlt={product.imageAlt}
                  />
                ))}
              </div>
            </section>
          ) : null
        )}
      </section>
    </main>
  );
}
