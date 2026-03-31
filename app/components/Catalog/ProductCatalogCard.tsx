import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

type ProductCatalogCardProps = {
  title: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
};

export default function ProductCatalogCard({ title, description, image, imageAlt }: ProductCatalogCardProps) {
  return (
    <article className="catalog-card">
      <div className="catalog-card-media">
        <Image
          src={image}
          alt={imageAlt}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          className="catalog-card-image"
        />
        <span className="catalog-card-badge">Hecho a mano</span>
      </div>

      <div className="catalog-card-content">
        <h3 className="catalog-card-title">{title}</h3>
        <p className="catalog-card-description">{description}</p>
        <p className="catalog-card-meta">Tiempo de entrega estimado: 4 a 7 días según personalización.</p>
      </div>

      <div className="catalog-card-footer">
        <Link href="/catalogo" className="catalog-card-cta">
          Ver productos <ArrowRightIcon size={16} />
        </Link>
      </div>
    </article>
  );
}
