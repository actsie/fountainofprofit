"use client";
import Image from "next/image";
import { useState } from "react";
import { ClockIcon, MapPinIcon, MenuIcon, PhoneIcon, StarIcon, XIcon } from "lucide-react";

const menuItems = [
    {
        name: "Raspberry Layer Cake",
        description: "Single slice, fresh raspberries, lemon curd, vanilla mascarpone",
        price: "$12",
        image: "/assets/sample/anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg",
        tag: "Chef's Pick",
    },
    {
        name: "Garden Harvest Bowl",
        description: "Roasted seasonal veg, quinoa, tahini drizzle, toasted seeds",
        price: "$18",
        image: "/assets/sample/anna-pelzer-IGfIGP5ONV0-unsplash.jpg",
    },
    {
        name: "Green Goddess Bowl",
        description: "Avocado, edamame, cucumber, pickled radish, miso ginger dressing",
        price: "$18",
        image: "/assets/sample/odiseo-castrejon-1SPu0KT-Ejg-unsplash.jpg",
        tag: "Most Loved",
    },
    {
        name: "Wood-Fired Pizza",
        description: "San Marzano tomato, fresh basil, fior di latte, extra virgin olive oil",
        price: "$24",
        image: "/assets/sample/chad-montano-MqT0asuoIcU-unsplash.jpg",
    },
    {
        name: "Market Salad",
        description: "Mixed greens, shaved fennel, citrus segments, champagne vinaigrette",
        price: "$16",
        image: "/assets/sample/anh-nguyen-kcA-c3f_3FE-unsplash.jpg",
    },
    {
        name: "Slow-Smoked Barbeque",
        description: "Low and slow over oak, house rub, pickled slaw, charred corn",
        price: "$32",
        image: "/assets/sample/victoria-shes-UC0HZdUitWY-unsplash.jpg",
    },
];

const testimonials = [
    {
        name: "Sarah M.",
        text: "Best neighborhood restaurant in the Mission. We come here for every special occasion and it never disappoints.",
        rating: 5,
    },
    {
        name: "James T.",
        text: "The short rib is unreal. Service is warm and attentive without being intrusive. Exactly what a great dinner should feel like.",
        rating: 5,
    },
    {
        name: "Priya K.",
        text: "Cozy, delicious, and the wine list is fantastic. We've been coming back every month since we first tried it.",
        rating: 5,
    },
    {
        name: "David L.",
        text: "Took my parents here for their anniversary. They talked about it for weeks. The atmosphere is just right — intimate without being stuffy.",
        rating: 5,
    },
    {
        name: "Rachel S.",
        text: "The wood-fired pizza alone is worth the trip. Everything feels homemade and intentional. One of my top three in the city.",
        rating: 5,
    },
    {
        name: "Marcus W.",
        text: "Came in on a whim on a Tuesday and ended up having one of the best meals of the year. The staff made us feel like regulars from the start.",
        rating: 5,
    },
];

export default function SampleRestaurant() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [testimonialIndex, setTestimonialIndex] = useState(0);

    return (
        <div className="bg-stone-50 min-h-screen font-serif">
            {/* Fountain of Scale banner */}
            <div className="bg-purple-500 text-white text-center text-xs py-2 px-4">
                This is a sample page built by{" "}
                <a href="/fix-your-page" className="underline font-medium hover:text-purple-200 transition-colors">
                    Fountain of Scale
                </a>
                {" "}· Want one like this for your business?{" "}
                <a href="/fix-your-page" className="underline font-medium hover:text-purple-200 transition-colors">
                    Get yours →
                </a>
            </div>

            {/* Navbar */}
            <nav className="sticky top-0 z-50 bg-stone-50/95 backdrop-blur-md border-b border-stone-200">
                <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
                    <div>
                        <span className="text-xl font-bold tracking-wide text-stone-900">Harvest Table</span>
                        <span className="text-xs text-stone-400 ml-2 hidden sm:inline tracking-wide">San Francisco</span>
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-sm text-stone-600 font-sans">
                        <a href="#menu" className="hover:text-stone-900 transition-colors">Menu</a>
                        <a href="#about" className="hover:text-stone-900 transition-colors">About</a>
                        <a href="#contact" className="hover:text-stone-900 transition-colors">Find us</a>
                    </div>
                    <a
                        href="#contact"
                        className="hidden md:inline-flex items-center bg-stone-900 text-white text-sm px-5 py-2 rounded-full hover:bg-stone-700 transition-colors font-sans"
                    >
                        Reserve a table
                    </a>
                    <button className="md:hidden text-stone-700" onClick={() => setMobileMenuOpen(v => !v)}>
                        {mobileMenuOpen ? <XIcon size={22} /> : <MenuIcon size={22} />}
                    </button>
                </div>
                {mobileMenuOpen && (
                    <div className="md:hidden border-t border-stone-200 bg-stone-50 px-6 py-5 flex flex-col gap-4 text-sm text-stone-700 font-sans">
                        <a href="#menu" onClick={() => setMobileMenuOpen(false)}>Menu</a>
                        <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
                        <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Find us</a>
                        <a
                            href="#contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="bg-stone-900 text-white px-5 py-2 rounded-full text-center w-max"
                        >
                            Reserve a table
                        </a>
                    </div>
                )}
            </nav>

            {/* Hero */}
            <section className="relative h-[90vh] min-h-[520px] flex items-center justify-center overflow-hidden">
                <Image
                    src="/assets/sample/dan-gold-4_jhDO54BYg-unsplash.jpg"
                    alt="Harvest Table"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/55" />
                <div className="relative z-10 text-center text-white px-4 max-w-2xl mx-auto">
                    <p className="text-xs tracking-[0.3em] text-stone-300 uppercase mb-5 font-sans">San Francisco · Est. 2019</p>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">Harvest Table</h1>
                    <p className="mt-5 text-lg text-stone-300 leading-relaxed font-sans">
                        Seasonal ingredients. Honest cooking. Good company.
                    </p>
                    <div className="flex items-center justify-center gap-5 mt-4 text-sm text-stone-400 font-sans">
                        <span className="flex items-center gap-1.5"><MapPinIcon size={13} />718 Valencia St, San Francisco</span>
                        <span className="text-stone-600">·</span>
                        <span className="flex items-center gap-1.5"><PhoneIcon size={13} />(415) 555-0142</span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 font-sans">
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-white text-stone-900 rounded-full text-sm font-medium hover:bg-stone-100 transition-colors"
                        >
                            Reserve a table
                        </a>
                        <a
                            href="#menu"
                            className="px-8 py-3 border border-white/50 text-white rounded-full text-sm hover:border-white transition-colors"
                        >
                            View the menu
                        </a>
                    </div>
                </div>
            </section>

            {/* Highlights strip */}
            <section className="bg-white border-y border-stone-200 py-10">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center font-sans">
                    {[
                        { label: "Locally Sourced", sub: "Partnered with 12 Bay Area farms" },
                        { label: "Rated #1 in the Mission", sub: "Yelp & Google · 2023 & 2024" },
                        { label: "Private Dining Available", sub: "Up to 20 guests · Full buyout options" },
                    ].map((item, i) => (
                        <div key={i}>
                            <p className="font-semibold text-amber-700">{item.label}</p>
                            <p className="text-stone-500 text-sm mt-1">{item.sub}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Menu */}
            <section id="menu" className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14 font-sans">
                        <p className="text-xs uppercase tracking-widest text-amber-700 mb-2">What we&apos;re cooking</p>
                        <h2 className="text-4xl font-bold text-stone-900 font-serif">A taste of what&apos;s waiting</h2>
                        <p className="text-stone-500 mt-3 max-w-md mx-auto text-sm leading-6">
                            Our menu changes with the season. Here&apos;s a look at some of our current favorites.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {menuItems.map((item, i) => (
                            <a key={i} href="#contact" className="group block bg-white rounded-2xl overflow-hidden transition-transform duration-150 hover:scale-[0.97] cursor-pointer">
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-150 group-hover:scale-110" />
                                    {item.tag && (
                                        <span className="absolute top-3 left-3 bg-amber-700 text-white text-xs px-3 py-1 rounded-full font-sans">
                                            {item.tag}
                                        </span>
                                    )}
                                    <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-150">
                                        <div className="w-full bg-amber-700 text-white text-sm font-medium py-3 font-sans text-center">
                                            Book now
                                        </div>
                                    </div>
                                </div>
                                <div className="p-5 font-sans">
                                    <div className="flex items-start justify-between gap-2">
                                        <h3 className="font-semibold text-stone-900 text-base">{item.name}</h3>
                                        <span className="text-amber-700 font-medium text-sm shrink-0">{item.price}</span>
                                    </div>
                                    <p className="text-stone-500 text-sm mt-1.5 leading-5">{item.description}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="bg-stone-900 text-white">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative min-h-80 md:min-h-full">
                        <Image
                            src="/assets/sample/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg"
                            alt="Our kitchen"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="py-32 px-10 md:px-16">
                        <p className="text-xs uppercase tracking-widest text-amber-400 mb-4 font-sans">Our story</p>
                        <h2 className="text-4xl font-bold leading-tight">Good food doesn&apos;t need to be complicated.</h2>
                        <p className="text-stone-400 mt-6 leading-7 text-sm font-sans">
                            Harvest Table opened in 2019 with a simple idea: great food doesn&apos;t need to be complicated. We work with local farms to build a menu that changes with the season, letting the ingredients do the talking.
                        </p>
                        <p className="text-stone-400 mt-4 leading-7 text-sm font-sans">
                            What started as a 30-seat spot on Valencia has grown into a neighborhood staple — the kind of place people bring their parents, celebrate anniversaries, and come back to week after week.
                        </p>
                        <p className="text-stone-300 mt-4 leading-7 text-sm font-sans font-medium">
                            We&apos;re proud of what we&apos;ve built here. Come hungry.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 mt-8 px-6 py-2.5 border border-white/30 rounded-full text-sm hover:bg-white/10 transition-colors font-sans"
                        >
                            Reserve a table
                        </a>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-28 bg-white overflow-hidden">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-14 font-sans">
                        <p className="text-xs uppercase tracking-widest text-amber-700 mb-2">What guests say</p>
                        <h2 className="text-4xl font-bold text-stone-900 font-serif">We love good company</h2>
                    </div>
                </div>
                <div
                    className="flex overflow-hidden [--marquee-duration:40s]"
                    style={{ WebkitMaskImage: "linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)" }}
                    onMouseEnter={e => (e.currentTarget.querySelector(".marquee-track") as HTMLElement)?.style.setProperty("animation-play-state", "paused")}
                    onMouseLeave={e => (e.currentTarget.querySelector(".marquee-track") as HTMLElement)?.style.setProperty("animation-play-state", "running")}
                >
                    <div className="marquee-track flex shrink-0 animate-marquee">
                        {[...testimonials, ...testimonials].map((t, i) => (
                            <div key={i} className="bg-stone-50 rounded-2xl p-9 font-sans shrink-0 w-[380px] mr-6">
                                <div className="flex gap-0.5 mb-4">
                                    {Array.from({ length: t.rating }).map((_, j) => (
                                        <StarIcon key={j} size={14} className="text-amber-500 fill-amber-500" />
                                    ))}
                                </div>
                                <p className="text-stone-700 text-sm leading-6">&ldquo;{t.text}&rdquo;</p>
                                <p className="text-stone-400 text-sm mt-4">— {t.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Booking CTA */}
            <section id="contact" className="py-20 px-6 bg-stone-900 text-white">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-xs uppercase tracking-widest text-stone-400 mb-3 font-sans">Come visit us</p>
                    <h2 className="text-4xl font-bold">Ready for a great night out?</h2>
                    <p className="text-stone-400 mt-4 text-sm leading-6 max-w-md mx-auto font-sans">
                        Reservations are recommended, especially on weekends. Walk-ins welcome based on availability.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 font-sans">
                        <a
                            href="tel:+14155550142"
                            className="flex items-center gap-2 bg-white text-stone-900 px-7 py-3 rounded-full text-sm font-medium hover:bg-stone-100 transition-colors"
                        >
                            <PhoneIcon size={14} />
                            (415) 555-0142
                        </a>
                        <a
                            href="#"
                            className="flex items-center gap-2 bg-amber-700 text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-amber-800 transition-colors"
                        >
                            Reserve online
                        </a>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12 text-sm text-stone-400 font-sans">
                        <div className="flex items-center gap-2">
                            <ClockIcon size={14} />
                            Tue–Sun · 5pm–10pm · Bar opens at 4pm
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPinIcon size={14} />
                            718 Valencia St, San Francisco
                        </div>
                    </div>
                </div>
            </section>

            {/* Photo collage banner */}
            <div className="flex h-52 overflow-hidden">
                {[
                    { src: "/assets/sample/dan-gold-4_jhDO54BYg-unsplash.jpg", alt: "Harvest Table" },
                    { src: "/assets/sample/anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg", alt: "Raspberry cake" },
                    { src: "/assets/sample/chad-montano-MqT0asuoIcU-unsplash.jpg", alt: "Wood-fired pizza" },
                    { src: "/assets/sample/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg", alt: "Our kitchen" },
                    { src: "/assets/sample/victoria-shes-UC0HZdUitWY-unsplash.jpg", alt: "Barbeque" },
                    { src: "/assets/sample/anna-pelzer-IGfIGP5ONV0-unsplash.jpg", alt: "Garden bowl" },
                    { src: "/assets/sample/anh-nguyen-kcA-c3f_3FE-unsplash.jpg", alt: "Market salad" },
                    { src: "/assets/sample/odiseo-castrejon-1SPu0KT-Ejg-unsplash.jpg", alt: "Green goddess bowl" },
                ].map((img, i) => (
                    <div key={i} className="relative flex-1">
                        <Image src={img.src} alt={img.alt} fill className="object-cover" />
                    </div>
                ))}
            </div>

            {/* Footer */}
            <footer className="bg-stone-900 text-stone-500 py-10 px-6 text-center text-sm font-sans">
                <p className="text-stone-300 font-semibold mb-1 font-serif text-base">Harvest Table</p>
                <p>718 Valencia St · San Francisco, CA · (415) 555-0142</p>
                <p className="mt-6 text-stone-600 text-xs">
                    © 2025 Harvest Table. All rights reserved. ·{" "}
                    <a href="/fix-your-page" className="hover:text-stone-400 underline transition-colors">
                        Built by Fountain of Scale
                    </a>
                </p>
            </footer>
        </div>
    );
}
