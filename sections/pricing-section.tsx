'use client';

import AnimatedContent from "@/components/animated-content";
import SectionTitle from "@/components/section-title";
import { pricing } from "@/data/pricing";
import { CheckIcon, SparklesIcon } from "lucide-react";

export default function PricingSection() {
    return (
        <section id="pricing" className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
            <div className="p-4 pt-20 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-[#edf9f8]">
                <SectionTitle
                    icon={SparklesIcon}
                    title="Cheaper than hiring"
                    subtitle="A mid-level hire costs $7,000–$12,000 a month fully loaded. A sprint costs a fraction of that — and you keep the automations forever."
                />

                <div className="flex flex-wrap items-stretch justify-center gap-10 md:gap-4 px-4 mt-12 pb-20">
                    {pricing.map((plan, index) => (
                        <AnimatedContent
                            delay={index * 0.10}
                            key={index}
                            className={`p-5 pb-8 w-full sm:max-w-64 rounded-xl border border-[#edf9f8] flex flex-col ${
                                plan.type === 'enterprise'
                                    ? 'bg-purple-500 text-white'
                                    : plan.type === 'popular'
                                    ? 'bg-linear-to-br from-purple-50 to-purple-100'
                                    : 'bg-white'
                            }`}
                        >
                            <div className={`w-max border border-[#edf9f8] p-2 aspect-square rounded-full ${plan.type === 'enterprise' ? 'text-white' : 'text-purple-500 bg-white'}`}>
                                <plan.icon size={24} />
                            </div>
                            <h3 className="text-lg font-medium mt-6">{plan.name}</h3>
                            <p className={`min-h-[5.25rem] ${plan.type === 'enterprise' ? 'text-white/80' : 'text-zinc-500'}`}>
                                {plan.description}
                            </p>
                            <div className="mt-4">
                                {plan.price === 0 ? (
                                    <span className="text-3xl font-semibold">Free</span>
                                ) : (
                                    <span className="text-3xl font-semibold">
                                        ${plan.price.toLocaleString()}
                                        <span className="text-base font-normal">{plan.type === 'enterprise' ? '/mo' : ' flat'}</span>
                                    </span>
                                )}
                            </div>
                            <a
                                href={plan.linkUrl}
                                className={`block text-center py-2.5 rounded-full mt-6 border ${
                                    plan.type === 'enterprise'
                                        ? 'bg-white text-purple-500 border-white'
                                        : 'text-zinc-600 bg-gray-50 border-[#edf9f8]'
                                }`}
                            >
                                {plan.linkText}
                            </a>
                            <div className="space-y-2 mt-6">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <CheckIcon className={`size-4 shrink-0 ${plan.type === 'enterprise' ? 'text-white' : 'text-purple-500'}`} />
                                        <p className={plan.type === 'enterprise' ? 'text-white/90' : 'text-zinc-500'}>
                                            {feature}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </AnimatedContent>
                    ))}
                </div>
            </div>
        </section>
    );
}
