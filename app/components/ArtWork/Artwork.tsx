import { Palette, Clock, Heart, Package } from 'lucide-react';
import './Artwork.scss';

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const ArtisanWork = () => {
  const features: FeatureCard[] = [
    {
      icon: <Palette className="feature-card__icon" />,
      title: "Personalización",
      description: "Adaptamos cada diseño a tu tema y colores favoritos",
      color: "#79C6AD"
    },
    {
      icon: <Clock className="feature-card__icon" />,
      title: "Puntualidad",
      description: "Respetamos los tiempos de entrega para tu evento especial",
      color: "#F5A8A8"
    },
    {
      icon: <Heart className="feature-card__icon" />,
      title: "Calidad",
      description: "Materiales premium y acabados perfectos en cada pieza",
      color: "#F7D66B"
    }
  ];

  return (
    <section className="artisan-work">
      <div className="artisan-work__container">
        {/* Header */}
        <div className="artisan-work__header">
          <h2 className="artisan-work__title">
            Nuestro Trabajo Artesanal
          </h2>
          <p className="artisan-work__subtitle">
            Somos una familia mexicana dedicada a crear momentos mágicos con nuestras manos
          </p>
        </div>

        {/* Content Grid */}
        <div className="artisan-work__content">
          {/* Left Column - Text */}
          <div className="artisan-work__text">
            <h3 className="artisan-work__section-title">
              La Magia de lo Hecho a Mano
            </h3>
            
            <p className="artisan-work__paragraph">
              En Decoraciones Sabi, cada piñata, dulcero y decoración nace de la pasión por 
              preservar las tradiciones mexicanas y crear sonrisas en cada celebración.
            </p>
            
            <p className="artisan-work__paragraph">
              Utilizamos técnicas tradicionales combinadas con diseños modernos, siempre con 
              materiales de calidad y el toque especial que solo las manos expertas pueden dar.
            </p>

            {/* Feature List */}
            <ul className="artisan-work__list">
              <li className="artisan-work__list-item artisan-work__list-item--yellow">
                Materiales de alta calidad
              </li>
              <li className="artisan-work__list-item artisan-work__list-item--pink">
                Diseños 100% personalizables
              </li>
              <li className="artisan-work__list-item artisan-work__list-item--lilac">
                Entrega puntual garantizada
              </li>
              <li className="artisan-work__list-item artisan-work__list-item--aqua">
                Tradición familiar mexicana
              </li>
            </ul>
          </div>

          {/* Right Column - Process Card */}
          <div className="artisan-work__visual">
            <div className="process-card">
              <div className="process-card__icon">
                <Palette className="process-card__palette" />
              </div>
              <h4 className="process-card__title">Proceso Artesanal</h4>
              <p className="process-card__description">
                Cada creación pasa por nuestras manos con dedicación, desde el diseño inicial 
                hasta los últimos detalles decorativos.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="artisan-work__features">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" style={{ borderTopColor: feature.color }}>
              <div className="feature-card__icon-wrapper" style={{ color: feature.color }}>
                {feature.icon}
              </div>
              <h4 className="feature-card__title" style={{ color: feature.color }}>
                {feature.title}
              </h4>
              <p className="feature-card__description">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Order Information */}
        <div className="order-info">
          <div className="order-info__icon">
            <Package className="order-info__package-icon" />
          </div>
          <h3 className="order-info__title">Información de Pedidos</h3>
          
          <div className="order-info__grid">
            <div className="order-info__item">
              <h4 className="order-info__item-title">Tiempo de Elaboración</h4>
              <p className="order-info__item-text">5-7 días hábiles</p>
            </div>
            
            <div className="order-info__item">
              <h4 className="order-info__item-title">Anticipo</h4>
              <p className="order-info__item-text">50% al confirmar pedido</p>
            </div>
            
            <div className="order-info__item">
              <h4 className="order-info__item-title">Entrega</h4>
              <p className="order-info__item-text">Zona metropolitana</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtisanWork;