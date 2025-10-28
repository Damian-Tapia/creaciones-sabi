"use client"
import { LayeredText } from "@/components/ui/layered-text";
import MagicDock from "@/components/ui/magicdock";
import Navbar from "./components/Navbar/Navbar";
import "./page.scss";
import { HomeIcon, SettingsIcon } from "lucide-react";
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import pinatas from "@/public/images/pinatas-collection.jpg"
import decoraciones from "@/public/images/decorations-collection.jpg"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const dockItems = [
  {
    id: 1,
    icon: <HomeIcon size={24} />,
    label: "Inicio",
    description: "Ir al inicio",
    onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
  },
  {
    id: 2,
    icon: <SettingsIcon size={24} />,
    label: "Productos",
    description: "Customize options",
    onClick: () => console.log("Settings clicked"),
  },
  {
    id: 3,
    icon: <SettingsIcon size={24} />,
    label: "Nosotros",
    description: "Customize options",
    onClick: () => console.log("Settings clicked"),
  },
  {
    id: 4,
    icon: <SettingsIcon size={24} />,
    label: "Contacto",
    description: "Customize options",
    onClick: () => console.log("Settings clicked"),
  }
];

export default function Home() {
  return (
    <main className="main_page">
      <Navbar />
      <main className="main_page-content">
        <article className="main_page-content-grid">
          <section className="main_page-content-grid-left">
            <span className="main_page-content-grid-left-image">
              <Image src={pinatas} alt="Image" className="rounded-md object-cover" />
            </span>
          </section>
          <section className="main_page-content-grid-right">
            <h2>Creamos dulceros, piñatas y decoraciones temáticas completamente hechas a mano con el amor y la tradición mexicana que tu fiesta merece.</h2>
          </section>
        </article>
        <article className="main_page-content-about">
          <h2 className="title">Nuestras creaciones</h2>
          <section className="cards">
            <Card>
              <Image src={decoraciones} alt={"imagen-decoraciones"} width={200} height={100}></Image>
              <CardHeader>
                <CardTitle>Decoraciones</CardTitle>
                <CardDescription>Descripcion para las decoraciones</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Image src={""} alt={""}></Image>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
                <CardAction>Card Action</CardAction>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
                <CardAction>Card Action</CardAction>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </section>
        </article>
      </main>
      <MagicDock items={dockItems} variant="tooltip" className="bg-transparent border-none sticky" />
    </main>
  );
}
