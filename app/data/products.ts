import type { StaticImageData } from "next/image";
import heroBanner from "@/public/images/hero-banner.jpg";
import pinatas from "@/public/images/pinatas-collection.jpg";
import decoraciones from "@/public/images/decorations-collection.jpg";

export type ProductCategory = "piñata" | "dulcero" | "combo";

export type ProductItem = {
  title: string;
  description: string;
  image: StaticImageData | string;
  imageAlt: string;
  price?: string;
  meta?: string;
  category?: ProductCategory;
};

function pub(folder: string, filename: string): string {
  return `/${encodeURIComponent(folder)}/${encodeURIComponent(filename)}`;
}

// Featured products shown on the home page preview
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

// ── Piñatas ──────────────────────────────────────────────────────────────────

export const catalogPinatas: ProductItem[] = [
  // Character designs
  { title: "Bella", description: "Piñata temática de Bella hecha a mano, disponible en varios tamaños.", image: pub("Nuevas Piñatas", "Bella.jpeg"), imageAlt: "Piñata de Bella hecha a mano", category: "piñata" },
  { title: "Belly", description: "Piñata temática de Belly hecha a mano, disponible en varios tamaños.", image: pub("Nuevas Piñatas", "Belly.jpeg"), imageAlt: "Piñata de Belly hecha a mano", category: "piñata" },
  { title: "Beto", description: "Piñata temática de Beto hecha a mano, disponible en varios tamaños.", image: pub("Nuevas Piñatas", "Beto.jpeg"), imageAlt: "Piñata de Beto hecha a mano", category: "piñata" },
  { title: "Blancanieves", description: "Piñata temática de Blancanieves hecha a mano, disponible en varios tamaños.", image: pub("Nuevas Piñatas", "Blancanieves.jpeg"), imageAlt: "Piñata de Blancanieves hecha a mano", category: "piñata" },
  { title: "Bowser", description: "Piñata temática de Bowser hecha a mano, disponible en varios tamaños.", image: pub("Nuevas Piñatas", "Bowser.jpeg"), imageAlt: "Piñata de Bowser hecha a mano", category: "piñata" },
  { title: "Buzz Lightyear", description: "Piñata temática de Buzz Lightyear hecha a mano, disponible en varios tamaños.", image: pub("Nuevas Piñatas", "Buzz Lightyear.jpeg"), imageAlt: "Piñata de Buzz Lightyear hecha a mano", category: "piñata" },
  { title: "Cenicienta", description: "Piñata temática de Cenicienta hecha a mano, disponible en varios tamaños.", image: pub("Nuevas Piñatas", "Cenicienta.jpeg"), imageAlt: "Piñata de Cenicienta hecha a mano", category: "piñata" },
  { title: "Control de videojuegos", description: "Piñata temática de control de videojuegos hecha a mano, disponible en varios tamaños.", image: pub("Nuevas Piñatas", "Control-videojuegos.jpeg"), imageAlt: "Piñata de control de videojuegos hecha a mano", category: "piñata" },
  { title: "Futbolero", description: "Piñata temática de fútbol hecha a mano, disponible en varios tamaños.", image: pub("Nuevas Piñatas", "Futbolero.jpeg"), imageAlt: "Piñata de fútbol hecha a mano", category: "piñata" },
  { title: "Piñata grupal", description: "Piñata grupal hecha a mano con diseño especial para grupos.", image: pub("Nuevas Piñatas", "Grupal.jpg"), imageAlt: "Piñata grupal hecha a mano", category: "piñata" },
  { title: "Hello Kitty", description: "Piñata temática de Hello Kitty hecha a mano, disponible en varios tamaños.", image: pub("Nuevas Piñatas", "Kitty.jpg"), imageAlt: "Piñata de Hello Kitty hecha a mano", category: "piñata" },
  { title: "Labubu", description: "Piñata temática de Labubu hecha a mano, disponible en varios tamaños.", image: pub("Nuevas Piñatas", "Labubu.jpeg"), imageAlt: "Piñata de Labubu hecha a mano", category: "piñata" },
  { title: "Luigi", description: "Piñata temática de Luigi hecha a mano, disponible en varios tamaños.", image: pub("Nuevas Piñatas", "Luigi.jpeg"), imageAlt: "Piñata de Luigi hecha a mano", category: "piñata" },
  { title: "Mario y Luigi", description: "Piñata temática de Mario y Luigi hecha a mano, disponible en varios tamaños.", image: pub("Nuevas Piñatas", "Mario y Luigi.jpg"), imageAlt: "Piñata de Mario y Luigi hecha a mano", category: "piñata" },
  { title: "Mario", description: "Piñata temática de Mario hecha a mano, disponible en varios tamaños.", image: pub("Nuevas Piñatas", "Mario.jpeg"), imageAlt: "Piñata de Mario hecha a mano", category: "piñata" },
  { title: "Mickey", description: "Piñata temática de Mickey hecha a mano, disponible en varios tamaños.", image: pub("Nuevas Piñatas", "Micky.jpeg"), imageAlt: "Piñata de Mickey hecha a mano", category: "piñata" },
  { title: "Stitch", description: "Piñata temática de Stitch hecha a mano, disponible en varios tamaños.", image: pub("Nuevas Piñatas", "Stitch.jpeg"), imageAlt: "Piñata de Stitch hecha a mano", category: "piñata" },
  { title: "Yoshi", description: "Piñata temática de Yoshi hecha a mano, disponible en varios tamaños.", image: pub("Nuevas Piñatas", "Yoshi.jpeg"), imageAlt: "Piñata de Yoshi hecha a mano", category: "piñata" },
];

// ── Dulceros ─────────────────────────────────────────────────────────────────

export const catalogDulceros: ProductItem[] = [
  { title: "Admiración", description: "Dulcero artesanal de Admiración.", image: pub("Nuevos dulceros", "Admiracion.jpeg"), imageAlt: "Dulcero de Admiración hecho a mano", price: "$40", category: "dulcero" },
  { title: "Alegría", description: "Dulcero artesanal de Alegría.", image: pub("Nuevos dulceros", "Alegria.JPG"), imageAlt: "Dulcero de Alegría hecho a mano", price: "$40", category: "dulcero" },
  { title: "Androide", description: "Dulcero artesanal de Androide.", image: pub("Nuevos dulceros", "Androide.jpeg"), imageAlt: "Dulcero de Androide hecho a mano", price: "$40", category: "dulcero" },
  { title: "Ansiedad", description: "Dulcero artesanal de Ansiedad.", image: pub("Nuevos dulceros", "Ansiedad.jpeg"), imageAlt: "Dulcero de Ansiedad hecho a mano", price: "$40", category: "dulcero" },
  { title: "Ariel", description: "Dulcero artesanal de Ariel.", image: pub("Nuevos dulceros", "Ariel.jpeg"), imageAlt: "Dulcero de Ariel hecho a mano", price: "$40", category: "dulcero" },
  { title: "Batman", description: "Dulcero artesanal de Batman.", image: pub("Nuevos dulceros", "Batman.jpeg"), imageAlt: "Dulcero de Batman hecho a mano", price: "$40", category: "dulcero" },
  { title: "Bella", description: "Dulcero artesanal de Bella.", image: pub("Nuevos dulceros", "Bella.jpeg"), imageAlt: "Dulcero de Bella hecho a mano", price: "$40", category: "dulcero" },
  { title: "Bellota", description: "Dulcero artesanal de Bellota.", image: pub("Nuevos dulceros", "Bellota.jpeg"), imageAlt: "Dulcero de Bellota hecho a mano", price: "$40", category: "dulcero" },
  { title: "Blancanieves", description: "Dulcero artesanal de Blancanieves.", image: pub("Nuevos dulceros", "Blancanieves.jpeg"), imageAlt: "Dulcero de Blancanieves hecho a mano", price: "$40", category: "dulcero" },
  { title: "Bob Esponja", description: "Dulcero artesanal de Bob Esponja.", image: pub("Nuevos dulceros", "Bob esponja.jpeg"), imageAlt: "Dulcero de Bob Esponja hecho a mano", price: "$40", category: "dulcero" },
  { title: "Bombón", description: "Dulcero artesanal de Bombón.", image: pub("Nuevos dulceros", "Bombon.jpeg"), imageAlt: "Dulcero de Bombón hecho a mano", price: "$40", category: "dulcero" },
  { title: "Bowser", description: "Dulcero artesanal de Bowser.", image: pub("Nuevos dulceros", "Bowser.jpeg"), imageAlt: "Dulcero de Bowser hecho a mano", price: "$40", category: "dulcero" },
  { title: "Buzz Lightyear", description: "Dulcero artesanal de Buzz Lightyear.", image: pub("Nuevos dulceros", "Buzz Lightyear.jpeg"), imageAlt: "Dulcero de Buzz Lightyear hecho a mano", price: "$40", category: "dulcero" },
  { title: "Capitán América", description: "Dulcero artesanal de Capitán América.", image: pub("Nuevos dulceros", "Capitan America.jpeg"), imageAlt: "Dulcero de Capitán América hecho a mano", price: "$40", category: "dulcero" },
  { title: "Cenicienta", description: "Dulcero artesanal de Cenicienta.", image: pub("Nuevos dulceros", "Cenicienta.jpeg"), imageAlt: "Dulcero de Cenicienta hecho a mano", price: "$40", category: "dulcero" },
  { title: "Changuito", description: "Dulcero artesanal de Changuito.", image: pub("Nuevos dulceros", "Changuito.jpeg"), imageAlt: "Dulcero de Changuito hecho a mano", price: "$40", category: "dulcero" },
  { title: "Chapulín Colorado", description: "Dulcero artesanal de Chapulín Colorado.", image: pub("Nuevos dulceros", "Chapulin Colorado.jpeg"), imageAlt: "Dulcero de Chapulín Colorado hecho a mano", price: "$40", category: "dulcero" },
  { title: "El Chavo", description: "Dulcero artesanal de El Chavo.", image: pub("Nuevos dulceros", "Chavo.JPG"), imageAlt: "Dulcero de El Chavo hecho a mano", price: "$40", category: "dulcero" },
  { title: "La Chilindrina", description: "Dulcero artesanal de La Chilindrina.", image: pub("Nuevos dulceros", "Chilindrina.jpeg"), imageAlt: "Dulcero de La Chilindrina hecho a mano", price: "$40", category: "dulcero" },
  { title: "Conejo Blanco", description: "Dulcero artesanal de Conejo Blanco.", image: pub("Nuevos dulceros", "Conejo Blanco.jpeg"), imageAlt: "Dulcero de Conejo Blanco hecho a mano", price: "$40", category: "dulcero" },
  { title: "Cosa Rosa", description: "Dulcero artesanal de Cosa Rosa.", image: pub("Nuevos dulceros", "Cosa rosa.jpeg"), imageAlt: "Dulcero de Cosa Rosa hecho a mano", price: "$40", category: "dulcero" },
  { title: "Daisy", description: "Dulcero artesanal de Daisy.", image: pub("Nuevos dulceros", "Daisy.jpeg"), imageAlt: "Dulcero de Daisy hecho a mano", price: "$40", category: "dulcero" },
  { title: "Donald", description: "Dulcero artesanal de Donald.", image: pub("Nuevos dulceros", "Donald.jpeg"), imageAlt: "Dulcero de Donald hecho a mano", price: "$40", category: "dulcero" },
  { title: "Dory", description: "Dulcero artesanal de Dory.", image: pub("Nuevos dulceros", "Dory.jpeg"), imageAlt: "Dulcero de Dory hecho a mano", price: "$40", category: "dulcero" },
  { title: "El Príncipe", description: "Dulcero artesanal de El Príncipe.", image: pub("Nuevos dulceros", "El Principe.jpeg"), imageAlt: "Dulcero de El Príncipe hecho a mano", price: "$40", category: "dulcero" },
  { title: "Elastigirl", description: "Dulcero artesanal de Elastigirl.", image: pub("Nuevos dulceros", "Elastigirl.jpeg"), imageAlt: "Dulcero de Elastigirl hecho a mano", price: "$40", category: "dulcero" },
  { title: "Espantapájaros", description: "Dulcero artesanal de Espantapájaros.", image: pub("Nuevos dulceros", "Espantapajaros.jpeg"), imageAlt: "Dulcero de Espantapájaros hecho a mano", price: "$40", category: "dulcero" },
  { title: "Estornudón", description: "Dulcero artesanal de Estornudón.", image: pub("Nuevos dulceros", "Estornudon.jpeg"), imageAlt: "Dulcero de Estornudón hecho a mano", price: "$40", category: "dulcero" },
  { title: "Feliz", description: "Dulcero artesanal de Feliz.", image: pub("Nuevos dulceros", "Feliz.jpeg"), imageAlt: "Dulcero de Feliz hecho a mano", price: "$40", category: "dulcero" },
  { title: "Furia", description: "Dulcero artesanal de Furia.", image: pub("Nuevos dulceros", "Furia.jpeg"), imageAlt: "Dulcero de Furia hecho a mano", price: "$40", category: "dulcero" },
  { title: "Garfield", description: "Dulcero artesanal de Garfield.", image: pub("Nuevos dulceros", "Garfield.jpeg"), imageAlt: "Dulcero de Garfield hecho a mano", price: "$40", category: "dulcero" },
  { title: "Gatito", description: "Dulcero artesanal de Gatito.", image: pub("Nuevos dulceros", "Gatito.jpeg"), imageAlt: "Dulcero de Gatito hecho a mano", price: "$40", category: "dulcero" },
  { title: "Goku", description: "Dulcero artesanal de Goku.", image: pub("Nuevos dulceros", "Goku.jpeg"), imageAlt: "Dulcero de Goku hecho a mano", price: "$40", category: "dulcero" },
  { title: "Goofy", description: "Dulcero artesanal de Goofy.", image: pub("Nuevos dulceros", "Goofy.jpeg"), imageAlt: "Dulcero de Goofy hecho a mano", price: "$40", category: "dulcero" },
  { title: "Harry Potter", description: "Dulcero artesanal de Harry Potter.", image: pub("Nuevos dulceros", "Harry potter.jpeg"), imageAlt: "Dulcero de Harry Potter hecho a mano", price: "$40", category: "dulcero" },
  { title: "Hello Kitty", description: "Dulcero artesanal de Hello Kitty.", image: pub("Nuevos dulceros", "Hello Kitty.jpeg"), imageAlt: "Dulcero de Hello Kitty hecho a mano", price: "$40", category: "dulcero" },
  { title: "Hulk", description: "Dulcero artesanal de Hulk.", image: pub("Nuevos dulceros", "Hulk.jpeg"), imageAlt: "Dulcero de Hulk hecho a mano", price: "$40", category: "dulcero" },
  { title: "Jack", description: "Dulcero artesanal de Jack.", image: pub("Nuevos dulceros", "Jack.jpeg"), imageAlt: "Dulcero de Jack hecho a mano", price: "$40", category: "dulcero" },
  { title: "Krilín", description: "Dulcero artesanal de Krilín.", image: pub("Nuevos dulceros", "Krilin.jpeg"), imageAlt: "Dulcero de Krilín hecho a mano", price: "$40", category: "dulcero" },
  { title: "Luigi", description: "Dulcero artesanal de Luigi.", image: pub("Nuevos dulceros", "Luigi.jpeg"), imageAlt: "Dulcero de Luigi hecho a mano", price: "$40", category: "dulcero" },
  { title: "Mario", description: "Dulcero artesanal de Mario.", image: pub("Nuevos dulceros", "Mario.jpeg"), imageAlt: "Dulcero de Mario hecho a mano", price: "$40", category: "dulcero" },
  { title: "Mate", description: "Dulcero artesanal de Mate.", image: pub("Nuevos dulceros", "Mate.jpeg"), imageAlt: "Dulcero de Mate hecho a mano", price: "$40", category: "dulcero" },
  { title: "Mickey", description: "Dulcero artesanal de Mickey.", image: pub("Nuevos dulceros", "Mickey.jpeg"), imageAlt: "Dulcero de Mickey hecho a mano", price: "$40", category: "dulcero" },
  { title: "Mike Wazowski", description: "Dulcero artesanal de Mike Wazowski.", image: pub("Nuevos dulceros", "Mike.jpeg"), imageAlt: "Dulcero de Mike Wazowski hecho a mano", price: "$40", category: "dulcero" },
  { title: "Minerito", description: "Dulcero artesanal de Minerito.", image: pub("Nuevos dulceros", "Minerito.jpeg"), imageAlt: "Dulcero de Minerito hecho a mano", price: "$40", category: "dulcero" },
  { title: "Minnie", description: "Dulcero artesanal de Minnie.", image: pub("Nuevos dulceros", "Minnie.jpeg"), imageAlt: "Dulcero de Minnie hecho a mano", price: "$40", category: "dulcero" },
  { title: "Mujer Maravilla", description: "Dulcero artesanal de Mujer Maravilla.", image: pub("Nuevos dulceros", "Mujer maravilla.jpeg"), imageAlt: "Dulcero de Mujer Maravilla hecho a mano", price: "$40", category: "dulcero" },
  { title: "Nemo", description: "Dulcero artesanal de Nemo.", image: pub("Nuevos dulceros", "Nemo.jpeg"), imageAlt: "Dulcero de Nemo hecho a mano", price: "$40", category: "dulcero" },
  { title: "Pato Lucas", description: "Dulcero artesanal de Pato Lucas.", image: pub("Nuevos dulceros", "Pato lucas.jpeg"), imageAlt: "Dulcero de Pato Lucas hecho a mano", price: "$40", category: "dulcero" },
  { title: "Payasito Plim Plim", description: "Dulcero artesanal de Payasito Plim Plim.", image: pub("Nuevos dulceros", "Payasito Plim Plim.jpeg"), imageAlt: "Dulcero de Payasito Plim Plim hecho a mano", price: "$40", category: "dulcero" },
  { title: "Payasito", description: "Dulcero artesanal de Payasito.", image: pub("Nuevos dulceros", "Payasito.jpeg"), imageAlt: "Dulcero de Payasito hecho a mano", price: "$40", category: "dulcero" },
  { title: "Payaso", description: "Dulcero artesanal de Payaso.", image: pub("Nuevos dulceros", "Payaso.jpeg"), imageAlt: "Dulcero de Payaso hecho a mano", price: "$40", category: "dulcero" },
  { title: "Pepe Grillo", description: "Dulcero artesanal de Pepe Grillo.", image: pub("Nuevos dulceros", "Pepe Grillo.jpeg"), imageAlt: "Dulcero de Pepe Grillo hecho a mano", price: "$40", category: "dulcero" },
  { title: "Piccolo", description: "Dulcero artesanal de Piccolo.", image: pub("Nuevos dulceros", "Picoro.jpeg"), imageAlt: "Dulcero de Piccolo hecho a mano", price: "$40", category: "dulcero" },
  { title: "Piglet", description: "Dulcero artesanal de Piglet.", image: pub("Nuevos dulceros", "Pigglet.jpeg"), imageAlt: "Dulcero de Piglet hecho a mano", price: "$40", category: "dulcero" },
  { title: "Pinocho", description: "Dulcero artesanal de Pinocho.", image: pub("Nuevos dulceros", "Pinocho.jpeg"), imageAlt: "Dulcero de Pinocho hecho a mano", price: "$40", category: "dulcero" },
  { title: "Piolín", description: "Dulcero artesanal de Piolín.", image: pub("Nuevos dulceros", "Piolin.jpeg"), imageAlt: "Dulcero de Piolín hecho a mano", price: "$40", category: "dulcero" },
  { title: "Pocoyó", description: "Dulcero artesanal de Pocoyó.", image: pub("Nuevos dulceros", "Pocoyo.jpeg"), imageAlt: "Dulcero de Pocoyó hecho a mano", price: "$40", category: "dulcero" },
  { title: "Rayo McQueen", description: "Dulcero artesanal de Rayo McQueen.", image: pub("Nuevos dulceros", "Rayo McQueen.jpeg"), imageAlt: "Dulcero de Rayo McQueen hecho a mano", price: "$40", category: "dulcero" },
  { title: "René", description: "Dulcero artesanal de René.", image: pub("Nuevos dulceros", "Rene.jpeg"), imageAlt: "Dulcero de René hecho a mano", price: "$40", category: "dulcero" },
  { title: "Rito", description: "Dulcero artesanal de Rito.", image: pub("Nuevos dulceros", "Rito.jpeg"), imageAlt: "Dulcero de Rito hecho a mano", price: "$40", category: "dulcero" },
  { title: "Robin", description: "Dulcero artesanal de Robin.", image: pub("Nuevos dulceros", "Robin.jpeg"), imageAlt: "Dulcero de Robin hecho a mano", price: "$40", category: "dulcero" },
  { title: "Ron Weasley", description: "Dulcero artesanal de Ron Weasley.", image: pub("Nuevos dulceros", "Ron Weasley.jpeg"), imageAlt: "Dulcero de Ron Weasley hecho a mano", price: "$40", category: "dulcero" },
  { title: "Síndrome", description: "Dulcero artesanal de Síndrome.", image: pub("Nuevos dulceros", "Sindrome.jpeg"), imageAlt: "Dulcero de Síndrome hecho a mano", price: "$40", category: "dulcero" },
  { title: "Sully", description: "Dulcero artesanal de Sully.", image: pub("Nuevos dulceros", "Sully.jpeg"), imageAlt: "Dulcero de Sully hecho a mano", price: "$40", category: "dulcero" },
  { title: "Temor", description: "Dulcero artesanal de Temor.", image: pub("Nuevos dulceros", "Temor.jpeg"), imageAlt: "Dulcero de Temor hecho a mano", price: "$40", category: "dulcero" },
  { title: "Tiburón Azul", description: "Dulcero artesanal de Tiburón Azul.", image: pub("Nuevos dulceros", "Tiburon Azul.jpeg"), imageAlt: "Dulcero de Tiburón Azul hecho a mano", price: "$40", category: "dulcero" },
  { title: "Tiburón Naranja", description: "Dulcero artesanal de Tiburón Naranja.", image: pub("Nuevos dulceros", "Tiburon naranja.jpeg"), imageAlt: "Dulcero de Tiburón Naranja hecho a mano", price: "$40", category: "dulcero" },
  { title: "Tigger", description: "Dulcero artesanal de Tigger.", image: pub("Nuevos dulceros", "Tiger.jpeg"), imageAlt: "Dulcero de Tigger hecho a mano", price: "$40", category: "dulcero" },
  { title: "Tontín", description: "Dulcero artesanal de Tontín.", image: pub("Nuevos dulceros", "Tontin.jpeg"), imageAlt: "Dulcero de Tontín hecho a mano", price: "$40", category: "dulcero" },
  { title: "Tristeza", description: "Dulcero artesanal de Tristeza.", image: pub("Nuevos dulceros", "Tristeza.jpeg"), imageAlt: "Dulcero de Tristeza hecho a mano", price: "$40", category: "dulcero" },
  { title: "Unicornio", description: "Dulcero artesanal de Unicornio.", image: pub("Nuevos dulceros", "Unicornio.jpeg"), imageAlt: "Dulcero de Unicornio hecho a mano", price: "$40", category: "dulcero" },
  { title: "Woody", description: "Dulcero artesanal de Woody.", image: pub("Nuevos dulceros", "Woody.jpeg"), imageAlt: "Dulcero de Woody hecho a mano", price: "$40", category: "dulcero" },
  { title: "Gepeto", description: "Dulcero artesanal de Gepeto.", image: pub("Nuevos dulceros", "Yepeto.jpeg"), imageAlt: "Dulcero de Gepeto hecho a mano", price: "$40", category: "dulcero" },
  { title: "Igor", description: "Dulcero artesanal de Igor.", image: pub("Nuevos dulceros", "igor.jpeg"), imageAlt: "Dulcero de Igor hecho a mano", price: "$40", category: "dulcero" },
  { title: "Jessie", description: "Dulcero artesanal de Jessie.", image: pub("Nuevos dulceros", "jesse.jpeg"), imageAlt: "Dulcero de Jessie hecho a mano", price: "$40", category: "dulcero" },
  { title: "El Ñoño", description: "Dulcero artesanal de El Ñoño.", image: pub("Nuevos dulceros", "Ñoño.jpeg"), imageAlt: "Dulcero de El Ñoño hecho a mano", price: "$40", category: "dulcero" },
];

// ── Combos ───────────────────────────────────────────────────────────────────

export const catalogCombos: ProductItem[] = [
  { title: "Combo Beto", description: "Combo de piñata y dulceros con temática de Beto, hecho a mano.", image: pub("Combos", "Beto.jpeg"), imageAlt: "Combo de piñata y dulceros de Beto", category: "combo" },
  { title: "Combo Blancanieves", description: "Combo de piñata y dulceros con temática de Blancanieves, hecho a mano.", image: pub("Combos", "Blancanieves.jpeg"), imageAlt: "Combo de piñata y dulceros de Blancanieves", category: "combo" },
  { title: "Combo Bowser", description: "Combo de piñata y dulceros con temática de Bowser, hecho a mano.", image: pub("Combos", "Bowser.jpeg"), imageAlt: "Combo de piñata y dulceros de Bowser", category: "combo" },
  { title: "Combo Hello Kitty", description: "Combo de piñata y dulceros con temática de Hello Kitty, hecho a mano.", image: pub("Combos", "Kitty.jpeg"), imageAlt: "Combo de piñata y dulceros de Hello Kitty", category: "combo" },
  { title: "Combo Mickey", description: "Combo de piñata y dulceros con temática de Mickey, hecho a mano.", image: pub("Combos", "Micky.jpeg"), imageAlt: "Combo de piñata y dulceros de Mickey", category: "combo" },
];

// Combined export for backward compatibility (home page still uses `products`)
export const catalogProducts: ProductItem[] = [
  ...catalogPinatas,
  ...catalogDulceros,
  ...catalogCombos,
];
