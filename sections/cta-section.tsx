"use client";
import AnimatedContent from "@/components/animated-content";
import { pitchConfig } from "@/pitch-config";
import { ArrowUpRightIcon, ChevronUpIcon } from "lucide-react";
import Image from "next/image";

const { cta } = pitchConfig;

export default function CtaSection() {
    return (
        <section className="relative border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
            <div className="max-w-7xl mx-auto border-x border-[#edf9f8]">
                <AnimatedContent className="flex flex-col items-center text-center py-28 pb-36 px-4">
                    <h2 className="font-urbanist font-semibold text-4xl md:text-5xl max-w-xl text-gray-800">
                        {cta.headlineLine1} <span className="underline decoration-2 underline-offset-4">{cta.headlineAccent}</span>
                        <br />
                        {cta.headlineLine2}
                    </h2>
                    <p className="text-zinc-500 text-base/7 max-w-md mt-5">
                        {cta.subtext}
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
                        <a
                            href="#pricing"
                            className="flex items-center gap-1.5 py-2.5 px-6 bg-purple-500 text-white rounded-full shadow-[inset_0_2px_4px_rgba(255,255,255,0.3)] hover:bg-purple-600 transition-colors"
                        >
                            {cta.ctaPrimary}
                            <ArrowUpRightIcon size={16} />
                        </a>
                        <a
                            href="#features"
                            className="py-2.5 px-6 border border-[#edf9f8] bg-white text-zinc-600 rounded-full hover:bg-gray-50 transition-colors"
                        >
                            {cta.ctaSecondary}
                        </a>
                    </div>
                </AnimatedContent>
            </div>
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 cursor-pointer relative"
                aria-label="Scroll to top"
            >
                <Image
                    src="/assets/auto-factory.png"
                    alt="Scroll to top"
                    width={48}
                    height={48}
                    className="h-12 w-12 opacity-90 hover:opacity-100 transition-opacity"
                />
                <ChevronUpIcon size={14} strokeWidth={3} className="absolute inset-0 m-auto text-white" />
            </button>
        </section>
    );
}
