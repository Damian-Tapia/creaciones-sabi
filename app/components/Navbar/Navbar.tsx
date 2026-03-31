import Link from "next/link";
import { LayeredText } from "@/components/ui/layered-text";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <header className="navbar" aria-label="Encabezado principal">
      <Link className="navbar-brand" href="/" aria-label="Ir al inicio">
        <LayeredText
          text="Creaciones Sabi"
          className="text-3xl md:text-5xl font-bold text-slate-100 [--stroke-color:#FFFFFF]"
          layers={["#F6A7B0", "#F4D06F", "#6EC6C3"]}
          offsetX={2}
          offsetY={2}
          strokeWidth={2}
          animate={true}
        />
      </Link>

      <nav className="navbar-links" aria-label="Secciones principales">
        <Link href="/">Inicio</Link>
        <Link href="/catalogo">Creaciones</Link>
        <Link href="/#contacto">Hablemos</Link>
      </nav>

      <Link className="navbar-cta" href="/#contacto">
        Cotizar en WhatsApp
      </Link>
    </header>
  );
}
