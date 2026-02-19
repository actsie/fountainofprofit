import { InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import AnimatedContent from "./animated-content";

export default function Footer() {
    return (
        <footer className="px-4 md:px-16 lg:px-24 xl:px-32">
            <div className="border-x border-[#edf9f8] px-4 md:px-12 max-w-7xl mx-auto pt-40">
                <div className="flex flex-col md:flex-row items-start justify-between relative p-8 md:p-12 overflow-hidden pb-32 md:pb-42 bg-linear-to-t from-purple-50 to-purple-100 rounded-t-[80px]" style={{ background: 'radial-gradient(ellipse 150% 120% at 50% 100%, #ffffff 0%, #edf9f8 40%, #e0dafc 65%, #ede8f6 85%, #e4dcff 100%)' }}>
                    <AnimatedContent distance={40} className="max-w-72">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/assets/auto-factory.png"
                                alt="Logo"
                                width={36}
                                height={36}
                                className="h-9 w-9"
                            />
                            <span className="font-urbanist font-semibold text-gray-800">Automation Factory</span>
                        </div>
                        <p className="text-zinc-500 mt-4 pb-6">Automating roles before companies hire for them. Built by people who learned the hard way.</p>

                        <p className="text-gray-500 py-0">© 2026 Automation Factory. All rights reserved.</p>
                    </AnimatedContent>
                    <div>
                        <p className="uppercase font-semibold text-purple-600 text-base">Social</p>
                        <AnimatedContent className="flex flex-col mt-6 gap-3">
                            <a href="#!" className="flex items-center gap-2 text-purple-500">
                                <TwitterIcon size={20} />
                                <p>Twitter</p>
                            </a>
                            <a href="#!" className="flex items-center gap-2 text-purple-500">
                                <LinkedinIcon size={20} />
                                <p>Linkedin</p>
                            </a>
                            <a href="#!" className="flex items-center gap-2 text-purple-500">
                                <InstagramIcon size={20} />
                                <p>Instagram</p>
                            </a>
                        </AnimatedContent>
                    </div>
                </div>
            </div>
        </footer>
    );
}