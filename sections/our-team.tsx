import AnimatedContent from "@/components/animated-content";
import SectionTitle from "@/components/section-title";
import { team } from "@/data/team";
import { LinkedinIcon, UsersIcon } from "lucide-react";

export default function OurTeamSection() {
    const bios: Record<string, string> = {
        "Mai": "Former software engineer turned founder. Built HeyMint from zero to acquisition by Alchemy — 1M+ users, $3.4M raised, Stanford StartX. At Gusto, she built a no-code tool that compressed landing page delivery from a month to a few days. Same pattern, applied now to entire roles: find what repeats, build the system, free up the humans for work that actually needs them.",
        "Ben": "Thiel Fellow. Harvard dropout. Co-founded Stream, raising $20M from Pantera Capital. Then worked as a backend and full-stack engineer before becoming COO — which means he's seen the same problem from both sides: operators buried in repeatable work that should have been automated months ago.",
    };

    return (
        <section id="team" className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
            <div className="pt-20 pb-32 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-[#edf9f8]">
                <SectionTitle
                    icon={UsersIcon}
                    title="We've been on the inside"
                    subtitle="We learned the hard way what should be automated vs. staffed. Now we apply that playbook for other companies."
                />
                <div className="flex flex-wrap items-start justify-center gap-12 md:gap-16 mt-24">
                    {team.map((member, index) => (
                        <AnimatedContent delay={index * 0.15} key={index} className="flex flex-col max-w-xs">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-52 h-64 object-cover rounded-lg"
                            />
                            <div className="flex items-center gap-2 mt-4">
                                <h3 className="text-lg font-medium">{member.name}</h3>
                                {member.linkedin && (
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-600">
                                        <LinkedinIcon size={16} />
                                    </a>
                                )}
                            </div>
                            <p className="text-purple-500 text-sm font-medium">{member.role}</p>
                            {bios[member.name] && (
                                <p className="text-zinc-500 text-sm mt-3 leading-6">
                                    {bios[member.name]}
                                </p>
                            )}
                        </AnimatedContent>
                    ))}
                </div>
            </div>
        </section>
    );
}
