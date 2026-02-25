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
                            <span className="font-urbanist font-semibold text-gray-800">Fountain of Profit</span>
                        </div>
                        <p className="text-zinc-500 mt-4">Automating roles before companies hire for them. Built by people who learned the hard way.</p>
                    </AnimatedContent>
                    <div className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-4 mt-12">
                        <p className="text-gray-500 text-sm">© 2026 Fountain of Profit. All rights reserved.</p>
                        {/* social links hidden until ready */}
                    </div>
                </div>
            </div>
        </footer>
    );
}