import { pitches } from "@/pitches";
import { notFound } from "next/navigation";
import HeroSection from "@/sections/hero-section";
import StatsSection from "@/sections/stats-section";
import FeaturesSection from "@/sections/features-section";
import PricingSection from "@/sections/pricing-section";
import FaqSection from "@/sections/faq-section";
import OurTeamSection from "@/sections/our-team";
import CtaSection from "@/sections/cta-section";

export default async function PitchPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const config = pitches[slug];

    if (!config) notFound();

    return (
        <main>
            <HeroSection config={config.hero} />
            <StatsSection />
            <FeaturesSection />
            <PricingSection />
            <FaqSection />
            <OurTeamSection />
            <CtaSection config={config.cta} />
        </main>
    );
}
