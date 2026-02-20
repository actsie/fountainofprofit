import { InstagramIcon, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import AnimatedContent from "./animated-content";

export default function Footer() {
    return (
        <footer className="px-4 md:px-16 lg:px-24 xl:px-32">
            <div className="border-x border-[#edf9f8] px-4 md:px-12 max-w-7xl mx-auto pt-40">
                <div className="flex flex-col relative p-8 md:p-12 overflow-hidden pb-16 md:pb-20 bg-linear-to-t from-purple-50 to-purple-100 rounded-t-[80px]" style={{ background: 'radial-gradient(ellipse 150% 120% at 50% 100%, #ffffff 0%, #edf9f8 40%, #e0dafc 65%, #ede8f6 85%, #e4dcff 100%)' }}>
                    <AnimatedContent distance={40} className="max-w-72 flex flex-col items-center md:items-start text-center md:text-left">
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
                        <p className="text-zinc-500 mt-4">Automating roles before companies hire for them. Built by people who learned the hard way.</p>
                    </AnimatedContent>
                    <div className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-4 mt-12">
                        <p className="text-gray-500 text-sm">© 2026 Automation Factory. All rights reserved.</p>
                        <div className="flex items-center gap-4">
                            <a href="#!" className="text-purple-500 hover:text-purple-600">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-label="X (formerly Twitter)">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a href="#!" className="text-purple-500 hover:text-purple-600">
                                <LinkedinIcon size={18} />
                            </a>
                            <a href="#!" className="text-purple-500 hover:text-purple-600">
                                <InstagramIcon size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}