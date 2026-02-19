import SectionTitle from "@/components/section-title";
import { ArrowUpRightIcon, WorkflowIcon } from "lucide-react";
import { features } from "@/data/features";
import AnimatedContent from "@/components/animated-content";

export default function FeaturesSection() {
    return (
        <section id="features" className="px-4 md:px-16 lg:px-24 xl:px-32">
            <div className="grid grid-cols-1 md:grid-cols-2 border-x md:divide-x border-[#edf9f8] divide-[#edf9f8] max-w-7xl mx-auto">
                <div>
                    <div className="p-4 pt-16 md:p-16 flex flex-col items-start md:sticky md:top-26">
                        <SectionTitle
                            dir="left"
                            icon={WorkflowIcon}
                            title="How it works"
                            subtitle="Four steps from job posting to working automations. No ambiguity, no ongoing dependency on us."
                        />
                        <AnimatedContent className="p-4 md:p-6 bg-purple-500 w-full rounded-xl mt-12">
                            <p className="text-lg text-white">
                                If the role has repeatable tasks, we can automate them. Most do.
                            </p>
                            <a href="#pricing" className="bg-white w-max hover:bg-gray-100 px-5 py-2 rounded-full mt-6 flex items-center gap-1">
                                See what a sprint costs
                                <ArrowUpRightIcon size={20} />
                            </a>
                        </AnimatedContent>
                    </div>
                </div>
                <div className="p-4 pt-16 md:p-16 space-y-6">
                    {features.map((feature, index) => (
                        <AnimatedContent key={index} className={`${feature.cardBg} backdrop-blur-md border border-white/60 shadow-sm flex flex-col items-start p-6 rounded-xl w-full md:sticky md:top-26`}>
                            <div className={`${feature.iconBg} p-2 text-white rounded-full`}>
                                <feature.icon />
                            </div>
                            <p className="text-base font-medium mt-4">
                                <span className="text-gray-400 mr-2">{String(index + 1).padStart(2, '0')}</span>
                                {feature.title}
                            </p>
                            <p className="text-sm text-gray-600 mt-2">{feature.description}</p>
                        </AnimatedContent>
                    ))}
                </div>
            </div>
        </section>
    );
}
