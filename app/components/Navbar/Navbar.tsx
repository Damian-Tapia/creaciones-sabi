import { LayeredText } from "@/components/ui/layered-text";
import "./Navbar.scss";
import StaggerChars from "@/components/ui/stagger-chars";

export default function Navbar() {
    return (
        <nav className="navbar">
            <LayeredText
                text="Creaciones Sabi"
                className="text-4xl md:text-6xl font-bold text-slate-100 dark:text-white [--stroke-color:#FFFFFF] dark:[--stroke-color:#000000]"
                layers={["#F5A8A8", "#F7D66B", "#F2B6A0"]}
                offsetX={2}
                offsetY={2}
                strokeWidth={2}
                animate={true}
            />
        </nav>
    )
}