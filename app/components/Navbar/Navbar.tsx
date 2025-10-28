import { LayeredText } from "@/components/ui/layered-text";
import "./Navbar.scss";
import StaggerChars from "@/components/ui/stagger-chars";

export default function Navbar() {
    return (
        <nav className="navbar">
                <LayeredText
                  text="Creaciones Sabi"
                  className="text-4xl md:text-6xl text-orange-100 font-bold [--stroke-color:#F5A8A8] dark:[--stroke-color:#C2A0D9]"
                  layers={["#F7D66B", "#F5A8A8", "#C2A0D9"]}
                  offsetX={2}
                  offsetY={2}
                  strokeWidth={2}
                  animate={true}
                />
        </nav>
    )
}