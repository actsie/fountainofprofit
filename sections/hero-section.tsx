import AnimatedContent from "@/components/animated-content";
import Link from "next/link";
import { pitchConfig } from "@/pitch-config";

const { hero } = pitchConfig;

export default function HeroSection() {
    return (
        <section className="bg-[url('/assets/hero-gradient-bg.png')] bg-cover bg-center bg-no-repeat px-4 md:px-16 lg:px-24 xl:px-32">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center h-screen">
                <AnimatedContent reverse distance={30} className="flex items-center gap-2 bg-white/50 backdrop-blur px-4 py-1.5 rounded-full text-sm text-gray-600">
                    <span className="size-2 rounded-full bg-green-500 inline-block" />
                    {hero.badge}
                </AnimatedContent>

                <AnimatedContent distance={30} delay={0.1}>
                    <h1 className="text-center font-urbanist text-5xl/15 md:text-6xl/18 mt-4 font-bold max-w-2xl">
                        <span style={{ color: '#eef9f8' }}>{hero.headlineLine1}</span>
                        <br />
                        <span className="text-gray-800">{hero.headlineLine2} <span className="underline decoration-2 underline-offset-4">{hero.headlineAccent}</span></span>
                    </h1>
                </AnimatedContent>

                <AnimatedContent distance={30} delay={0.2}>
                    <p className="text-center text-base/7 text-zinc-700 max-w-xl mt-4">
                        {hero.subtext}
                        <br /><br />
                        {hero.subtextTagline}
                    </p>
                </AnimatedContent>

                <AnimatedContent className="flex flex-col md:flex-row items-center gap-4 mt-8 w-full md:w-auto" delay={0.3}>
                    <Link
                        href="#pricing"
                        className="py-3 md:py-2.5 w-full md:w-auto px-8 border border-purple-200 bg-linear-to-tl from-purple-600 to-purple-500 text-white text-center rounded-full"
                    >
                        {hero.ctaPrimary}
                    </Link>
                    <Link
                        href="#features"
                        className="py-3 md:py-2.5 w-full md:w-auto px-8 bg-white/50 text-gray-600 font-medium text-center border border-white rounded-full"
                    >
                        {hero.ctaSecondary}
                    </Link>
                </AnimatedContent>
            </div>
        </section>
    );
}
