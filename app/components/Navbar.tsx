import { SpotlightCard } from "@/components/ui/spotlightcard";

export default function Navbar() {
    return (
        <nav>
            <SpotlightCard className="w-full " spotlightColor="34, 211, 238">
                <div className="w-full h-full flex flex-col items-center justify-center text-center">
                    <h3 className="text-xl font-semibold mb-1">Spotlight Card</h3>
                    <p className="text-sm text-muted-foreground">
                        Hover to see the spotlight effect.
                    </p>
                </div>
            </SpotlightCard>
        </nav>
    )
}