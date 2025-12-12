"use client";

import { Box, Clock, MapPin, Heart, ShieldCheck, Network } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function FeaturesGrid() {
    return (
        <section id="features" className="py-20 lg:py-24 bg-[#0B1120] relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <span className="inline-block px-4 py-2 rounded-full bg-[#00C853]/10 text-[#00C853] font-semibold text-sm mb-4">
                        Why Choose Tazty?
                    </span>
                    <h2 className="text-balance text-4xl font-bold tracking-tight text-white lg:text-5xl">
                        Celebrating <span className="text-[#00C853]">Madurai's</span> Focus
                    </h2>
                    <p className="mt-4 text-lg text-gray-300">
                        We're building more than just a food delivery app - we're creating a platform that celebrates and supports Madurai's rich food culture.
                    </p>
                </div>

                <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2 auto-rows-fr">
                    {/* Hyperlocal Focus - Large Card */}
                    <GridItem
                        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
                        icon={<MapPin className="h-6 w-6 text-[#00C853]" />}
                        title="Hyperlocal Focus"
                        description="Discover amazing restaurants and food joints in your immediate neighborhood. We bring the local gems to your table."
                    />

                    {/* Lightning Fast - Wide Card */}
                    <GridItem
                        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
                        icon={<Clock className="h-6 w-6 text-[#00C853]" />}
                        title="Lightning Fast"
                        description="15-minute average delivery time from local restaurants to your doorstep. Hot and fresh."
                    />

                    {/* Support Local - Medium Card */}
                    <GridItem
                        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
                        icon={<Heart className="h-6 w-6 text-[#00C853]" />}
                        title="Support Local"
                        description="Every order directly supports local restaurant owners and the Madurai food culture."
                    />

                    {/* Quality Assured - Wide Card */}
                    <GridItem
                        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
                        icon={<ShieldCheck className="h-6 w-6 text-[#00C853]" />}
                        title="Quality Assured"
                        description="Curated restaurants with verified quality and hygiene standards. We ensure excellence."
                    />

                    {/* Built on ONDC - Large Bottom Card */}
                    <GridItem
                        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
                        icon={<Network className="h-6 w-6 text-[#00C853]" />}
                        title="Built on ONDC"
                        description="Powered by ONDC — an open, interoperable network based on the Beckn protocol. Fair and open."
                    />
                </ul>
            </div>
        </section>
    );
}

interface GridItemProps {
    area: string;
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
    return (
        <li className={`min-h-[16rem] sm:min-h-[14rem] list-none ${area}`}>
            <div className="relative h-full rounded-2xl border border-white/10 p-2 md:rounded-3xl md:p-3 bg-white/5">
                <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    variant="green"
                />
                <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-black p-6 md:p-6 shadow-sm ring-1 ring-white/10 transition-shadow hover:shadow-md">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="w-fit rounded-xl bg-[#00C853]/10 p-3 ring-1 ring-[#00C853]/20">
                            {icon}
                        </div>
                        <div className="space-y-3" style={{ fontFamily: "var(--font-open-sans), system-ui, sans-serif" }}>
                            <h3 className="pt-0.5 text-xl font-bold text-white md:text-2xl">
                                {title}
                            </h3>
                            <p className="text-sm text-gray-400 md:text-base">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
