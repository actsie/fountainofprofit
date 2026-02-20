"use client";
import AnimatedContent from "@/components/animated-content";
import { ArrowUpRightIcon, CheckIcon, ClipboardIcon, PencilIcon, RocketIcon } from "lucide-react";

const TALLY_URL = "https://tally.so/#placeholder";

const whatsIncluded = [
    "Cleaner layout using your existing copy — no rewriting needed",
    "Better section order so visitors know what to do next",
    "A clear path to booking or contacting you",
    "Mobile-friendly and ready to publish",
];

const steps = [
    {
        icon: ClipboardIcon,
        title: "Send us your URL",
        description: "Fill out the form with your current page and a bit of context about your business.",
        iconBg: "bg-purple-500",
    },
    {
        icon: PencilIcon,
        title: "We rebuild in one day",
        description: "We take your existing copy and restructure it — cleaner layout, smarter flow, obvious next step.",
        iconBg: "bg-[#5bbfba]",
    },
    {
        icon: RocketIcon,
        title: "You get the new page",
        description: "Delivered the same day. Ready to publish or hand off to your dev.",
        iconBg: "bg-[#c98dc0]",
    },
];

export default function FixYourPage() {
    return (
        <main>
            {/* Hero */}
            <section className="bg-[url('/assets/hero-gradient-bg.png')] bg-cover bg-center bg-no-repeat px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto flex flex-col items-center justify-center h-screen">
                    <AnimatedContent reverse distance={30} className="flex items-center gap-2 bg-white/50 backdrop-blur px-4 py-1.5 rounded-full text-sm text-gray-600">
                        <span className="size-2 rounded-full bg-green-500 inline-block" />
                        One page per day · $100–$200
                    </AnimatedContent>

                    <AnimatedContent distance={30} delay={0.1}>
                        <h1 className="text-center font-urbanist text-5xl/15 md:text-6xl/18 mt-4 font-bold max-w-2xl">
                            <span style={{ color: "#eef9f8" }}>Your page isn&apos;t working.</span>
                            <br />
                            <span className="text-gray-800">Let&apos;s <span className="underline decoration-2 underline-offset-4">fix it.</span></span>
                        </h1>
                    </AnimatedContent>

                    <AnimatedContent distance={30} delay={0.2}>
                        <p className="text-center text-base/7 text-zinc-700 max-w-xl mt-4">
                            We take your existing page and rebuild it with a cleaner layout, better section order, and a more obvious path to booking. Same copy, done in a day.
                        </p>
                    </AnimatedContent>

                    <AnimatedContent className="flex flex-col md:flex-row items-center gap-4 mt-8 w-full md:w-auto" delay={0.3}>
                        <a
                            href={TALLY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-1.5 py-3 md:py-2.5 w-full md:w-auto px-8 border border-purple-200 bg-linear-to-tl from-purple-600 to-purple-500 text-white rounded-full"
                        >
                            Fix my page
                            <ArrowUpRightIcon size={16} />
                        </a>
                        <a
                            href="#how-it-works"
                            className="py-3 md:py-2.5 w-full md:w-auto px-8 bg-white/50 text-gray-600 font-medium text-center border border-white rounded-full"
                        >
                            See how it works
                        </a>
                    </AnimatedContent>
                </div>
            </section>

            {/* What's included */}
            <section className="border-y border-[#edf9f8] py-16 px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto border-x border-[#edf9f8]">
                    <div className="p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <AnimatedContent>
                            <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">
                                Everything your page needs. Nothing it doesn&apos;t.
                            </h2>
                            <p className="text-zinc-500 text-base/7 mt-4">
                                You don&apos;t need new copy. You don&apos;t need a rebrand. You need the same message delivered clearly — with a layout that actually converts.
                            </p>
                        </AnimatedContent>
                        <AnimatedContent className="flex flex-col gap-4">
                            {whatsIncluded.map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="p-1 rounded-full bg-purple-500 mt-0.5 shrink-0">
                                        <CheckIcon size={12} className="text-white" strokeWidth={3} />
                                    </div>
                                    <p className="text-zinc-700 text-sm/6">{item}</p>
                                </div>
                            ))}
                        </AnimatedContent>
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section id="how-it-works" className="border-b border-[#edf9f8] py-16 px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto border-x border-[#edf9f8]">
                    <div className="p-8 md:p-16">
                        <AnimatedContent className="text-center mb-12">
                            <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">How it works</h2>
                            <p className="text-zinc-500 text-base/7 mt-3 max-w-md mx-auto">Three steps. One day. Done.</p>
                        </AnimatedContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {steps.map((step, i) => (
                                <AnimatedContent key={i} className="bg-[#f7fcfb] border border-[#edf9f8] rounded-xl p-6">
                                    <div className={`${step.iconBg} p-2 text-white rounded-full w-fit`}>
                                        <step.icon size={18} />
                                    </div>
                                    <p className="text-base font-medium mt-4">
                                        <span className="text-gray-400 mr-2">{String(i + 1).padStart(2, "0")}</span>
                                        {step.title}
                                    </p>
                                    <p className="text-sm text-gray-600 mt-2">{step.description}</p>
                                </AnimatedContent>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing + CTA */}
            <section className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto border-x border-[#edf9f8]">
                    <AnimatedContent className="flex flex-col items-center text-center py-24 px-4">
                        <div className="flex items-center gap-2 bg-purple-50 border border-purple-100 px-4 py-1.5 rounded-full text-sm text-purple-600 font-medium mb-6">
                            $100–$200 flat · delivered same day
                        </div>
                        <h2 className="font-urbanist font-semibold text-4xl md:text-5xl max-w-xl text-gray-800">
                            Ready to fix your page?
                        </h2>
                        <p className="text-zinc-500 text-base/7 max-w-md mt-5">
                            Send us your URL and we&apos;ll take it from there. No back and forth, no waiting weeks. One day and it&apos;s done.
                        </p>
                        <a
                            href={TALLY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 py-2.5 px-8 mt-8 bg-purple-500 text-white rounded-full shadow-[inset_0_2px_4px_rgba(255,255,255,0.3)] hover:bg-purple-600 transition-colors"
                        >
                            Fix my page
                            <ArrowUpRightIcon size={16} />
                        </a>
                    </AnimatedContent>
                </div>
            </section>
        </main>
    );
}
