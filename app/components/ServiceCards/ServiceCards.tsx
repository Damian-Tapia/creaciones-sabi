import { Sparkles, Hand, MapPin } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import "./ServiceCards.scss";
import { LayeredText } from "@/components/ui/layered-text";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  features: {
    personalizable: boolean;
    hechoAMano: boolean;
    mexicano: boolean;
  };
  titleColor?: string;
}

const ServiceCard = ({
  title,
  description,
  image,
  features,
  titleColor = "#F7D66B",
}: ServiceCardProps) => {
  return (
    <article className="service-card">
      {/* Imagen */}
      <div className="service-card__image-wrapper">
        {typeof image === "string" ? (
          <Image
            src={image}
            alt={title}
            className="service-card__image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <Image
            src={image}
            alt={title}
            className="service-card__image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            placeholder="blur"
          />
        )}
      </div>

      {/* Contenido */}
      <div className="service-card__content">
        <h3 className="service-card__title" style={{ color: titleColor }}>
          {title}
        </h3>

        <p className="service-card__description">{description}</p>

        {/* Features */}
        <div className="service-card__features">
          {features.personalizable && (
            <div className="feature-badge">
              <Sparkles className="feature-badge__icon feature-badge__icon--personalizable" />
              <span className="feature-badge__text">Personalizable</span>
            </div>
          )}

          {features.hechoAMano && (
            <div className="feature-badge">
              <Hand className="feature-badge__icon feature-badge__icon--hecho-mano" />
              <span className="feature-badge__text">Hecho a Mano</span>
            </div>
          )}

          {features.mexicano && (
            <div className="feature-badge">
              <MapPin className="feature-badge__icon feature-badge__icon--mexicano" />
              <span className="feature-badge__text">MX 100% Mexicano</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

// Sección de servicios
interface Service {
  title: string;
  description: string;
  image: string | StaticImageData;
  features: {
    personalizable: boolean;
    hechoAMano: boolean;
    mexicano: boolean;
  };
  titleColor: string;
}

interface ServicesSectionProps {
  services?: Service[];
}

const ServicesSection = ({ services }: ServicesSectionProps) => {
  const defaultServices: Service[] = [
    {
      title: "Dulceros",
      description:
        "Hermosos dulceros temáticos hechos a mano para hacer inolvidable la sorpresita de tu celebración.",
      image: "/api/placeholder/400/400",
      features: {
        personalizable: true,
        hechoAMano: true,
        mexicano: true,
      },
      titleColor: "#F7D66B",
    },
    {
      title: "Piñatas",
      description:
        "Piñatas artesanales de todos los temas y personajes favoritos, creadas con amor y dedicación.",
      image: "/api/placeholder/400/400",
      features: {
        personalizable: true,
        hechoAMano: true,
        mexicano: true,
      },
      titleColor: "#F5A8A8",
    },
    {
      title: "Decoraciones",
      description:
        "Decoraciones temáticas completas: banderines, centros de mesa y todos los detalles que necesitas.",
      image: "/api/placeholder/400/400",
      features: {
        personalizable: true,
        hechoAMano: true,
        mexicano: true,
      },
      titleColor: "#C2A0D9",
    },
  ];

  const servicesList = services || defaultServices;

  return (
    <section className="services-section">
      <LayeredText
        text="Nuestros servicios"
        className="text-4xl md:text-6xl text-orange-100 font-bold [--stroke-color:#F5A8A8] dark:[--stroke-color:#C2A0D9]"
        layers={["#F7D66B", "#F5A8A8", "#C2A0D9"]}
        offsetX={2}
        offsetY={2}
        strokeWidth={2}
        animate={true}
      />

      <div className="services-section__grid">
        {servicesList.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
            features={service.features}
            titleColor={service.titleColor}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
