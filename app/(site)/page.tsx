import CtaSection from "@/sections/cta-section";
import FaqSection from "@/sections/faq-section";
import FeaturesSection from "@/sections/features-section";
import HeroSection from "@/sections/hero-section";
import OurTeamSection from "@/sections/our-team";
import PricingSection from "@/sections/pricing-section";
import StatsSection from "@/sections/stats-section";

export default function Page() {
    return (
        <main>
            <HeroSection />
            <StatsSection />
            <FeaturesSection />
            <PricingSection />
            <FaqSection />
            <OurTeamSection />
            <CtaSection />
        </main>
    );
}
