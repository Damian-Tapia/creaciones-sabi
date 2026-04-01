import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

type ProductCatalogCardProps = {
  title: string;
  description: string;
  image: StaticImageData | string;
  imageAlt: string;
  price?: string;
  meta?: string;
};

export default function ProductCatalogCard({ title, description, image, imageAlt, price, meta }: ProductCatalogCardProps) {
  return (
    <article className="catalog-card">
      {price && (
        <div className="catalog-card-top-bar" aria-label={`Precio: ${price}`}>
          <span className="catalog-card-price-label">Precio</span>
          <strong className="catalog-card-price">{price}</strong>
        </div>
      )}

      <div className="catalog-card-media">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="catalog-card-image"
        />
        <span className="catalog-card-badge">Hecho a mano</span>
      </div>

      <div className="catalog-card-content">
        <h3 className="catalog-card-title">{title}</h3>
        <p className="catalog-card-description">{description}</p>
        {meta && <p className="catalog-card-meta">{meta}</p>}
      </div>

      <div className="catalog-card-footer">
        <Link href="/catalogo" className="catalog-card-cta">
          Ver productos <ArrowRightIcon size={16} />
        </Link>
      </div>
    </article>
  );
}
