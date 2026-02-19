import AnimatedContent from "@/components/animated-content";
import SectionTitle from "@/components/section-title";
import { faqs } from "@/data/faqs";
import { ChevronDownIcon, SparklesIcon } from "lucide-react";

export default function FaqSection() {
    return (
        <section className="border-y border-[#edf9f8]">
            <div className="px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="p-4 pt-20 md:p-20 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-[#edf9f8]">
                    <SectionTitle
                        icon={SparklesIcon}
                        title="Common questions"
                        subtitle="Straight answers about what we do, what we don't do, and how the sprint works."
                    />
                </div>
            </div>
            <div className="px-4 md:px-16 lg:px-24 xl:px-32 border-t border-[#edf9f8]">
                <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-[#edf9f8] border-x border-[#edf9f8] max-w-7xl mx-auto">
                    <div className="p-4 pt-20 md:p-20 space-y-6">
                        {faqs.map((faq, index) => (
                            <AnimatedContent key={index}>
                                <details key={index} className="group bg-[#f7fcfb] border border-[#edf9f8] rounded-xl" open={index === 0}>
                                    <summary className="flex items-center justify-between p-6 select-none">
                                        <h3 className="font-medium text-base">{faq.question}</h3>
                                        <ChevronDownIcon size={20} className="group-open:rotate-180" />
                                    </summary>
                                    <p className="text-sm/6 text-zinc-500 max-w-md p-6 pt-0">
                                        {faq.answer}
                                    </p>
                                </details>
                            </AnimatedContent>
                        ))}
                    </div>
                    <div className="p-4 pt-20 md:p-20">
                        <div className="sticky top-30 flex items-center justify-between gap-5 p-6 bg-[#5bbfba] w-full rounded-xl mt-12">
                            <h3 className="text-lg text-white text-balance">
                                Still not sure? Send us the posting — we&apos;ll tell you what&apos;s automatable.
                            </h3>

                            <a
                                href="#pricing"
                                className="bg-white w-max shrink-0 hover:bg-gray-100 px-5 py-2 rounded-full text-sm"
                            >
                                Book the call
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}