import Link from "next/link";
import Navbar from "@/app/components/Navbar/Navbar";
import ProductCatalogCard from "@/app/components/Catalog/ProductCatalogCard";
import { products } from "@/app/data/products";
import "./page.scss";

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

        {products.length > 0 ? (
          <section className="cards" aria-label="Listado completo de productos">
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
            <p>Estamos actualizando nuestro catálogo.</p>
            <Link href="/#contacto" className="catalog-empty-cta">
              Hablar por WhatsApp
            </Link>
          </section>
        )}
      </section>
    </main>
  );
}
