import type { StaticImageData } from "next/image";
import heroBanner from "@/public/images/hero-banner.jpg";
import pinatas from "@/public/images/pinatas-collection.jpg";
import decoraciones from "@/public/images/decorations-collection.jpg";

export type ProductItem = {
  title: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
};

export const products: ProductItem[] = [
  {
    title: "Piñatas personalizadas",
    description: "Diseños temáticos hechos a mano, con cariño familiar, para cumpleaños y celebraciones especiales.",
    image: pinatas,
    imageAlt: "Colección de piñatas personalizadas",
  },
  {
    title: "Decoraciones de mesa",
    description: "Kits decorativos artesanales que llenan de color tu evento y se adaptan a tu temática favorita.",
    image: decoraciones,
    imageAlt: "Decoraciones temáticas para fiestas",
  },
  {
    title: "Sets completos",
    description: "Preparamos una propuesta integral para que tú y tu familia solo se enfoquen en disfrutar la fiesta.",
    image: heroBanner,
    imageAlt: "Decoración completa para fiesta temática",
  },
];
