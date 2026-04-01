import Image, { StaticImageData } from "next/image";

type ProductPhotoCardProps = {
  title: string;
  image: StaticImageData | string;
  imageAlt: string;
};

export default function ProductPhotoCard({ title, image, imageAlt }: ProductPhotoCardProps) {
  return (
    <article className="photo-card">
      <div className="photo-card-media">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="photo-card-image"
        />
        <div className="photo-card-overlay">
          <span className="photo-card-name">{title}</span>
        </div>
      </div>
    </article>
  );
}
