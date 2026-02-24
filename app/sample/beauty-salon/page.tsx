"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import AnimatedContent from "@/components/animated-content";
import { ChevronLeftIcon, ChevronRightIcon, MenuIcon, Share2Icon, XIcon } from "lucide-react";

// Primary: #D9A299 (deep mauve), Secondary: #DCC5B2 (warm gold), Light: #ede8ec, Lighter bg: #f5f1f4

const services = [
    {
        name: "Signature Cut & Style",
        price: "$85",
        image: "/assets/beauty-salon/blowdrying-hair.jpg",
        tag: "Most Loved",
    },
    {
        name: "Radiance Facial",
        price: "$120",
        image: "/assets/beauty-salon/face-spa.jpg",
        tag: "New",
    },
    {
        name: "Lash Extensions",
        price: "$150",
        image: "/assets/beauty-salon/giving-eyelash-extensions.jpg",
        tag: null,
    },
];

const features = [
    {
        img: "/assets/beauty-salon/experstylists.png",
        title: "Expert Stylists",
        description: "Our team trained at leading academies across New York, Paris, and Tokyo.",
    },
    {
        img: "/assets/beauty-salon/cleanproducts.png",
        title: "Clean Products Only",
        description: "We use luxury, toxin-free formulas — nothing harsh, nothing your skin will regret.",
    },
    {
        img: "/assets/beauty-salon/easybooking.png",
        title: "Easy Online Booking",
        description: "Book, reschedule, or cancel any time. No phone tag, no waiting on hold.",
    },
    {
        img: "/assets/beauty-salon/personalizedcare.png",
        title: "Personalized Care",
        description: "Every treatment is tailored to you. No one-size-fits-all here.",
    },
];

const testimonials = [
    {
        quote: "I've been to a lot of salons in the city and Lume is on a completely different level. The atmosphere alone is worth it — and my hair has never looked better. I won't go anywhere else.",
        name: "Amanda T.",
        role: "Regular client since 2021",
        image: "/assets/beauty-salon/amanda.jpg",
    },
    {
        quote: "Came in for a facial and left feeling like a completely different person. The esthetician was thorough, genuinely knowledgeable, and the results lasted weeks. Absolutely worth every penny.",
        name: "Chelsea S.",
        role: "First-time client",
        image: "/assets/beauty-salon/chelsea.jpg",
    },
    {
        quote: "Booked the bridal package for my wedding day and they nailed every detail. My bridesmaids are already asking for the number. The whole team was calm, professional, and made the morning unforgettable.",
        name: "Cassie R.",
        role: "Bridal client",
        image: "/assets/beauty-salon/cassie.jpg",
    },
    {
        quote: "My partner surprised me with a gift card and I ended up booking a cut and scalp treatment. The team made me feel so welcome. I never thought I'd be a regular at a beauty studio — now I am.",
        name: "Luis M.",
        role: "Regular client since 2023",
        image: "/assets/beauty-salon/luis.jpg",
    },
];

const galleryImages = [
    { src: "/assets/beauty-salon/blowdrying-hair.jpg", alt: "Hair styling", height: 300 },
    { src: "/assets/beauty-salon/face-spa.jpg", alt: "Facial", height: 220 },
    { src: "/assets/beauty-salon/nailpolish.jpg", alt: "Nail art", height: 270 },
    { src: "/assets/beauty-salon/giving-eyelash-extensions.jpg", alt: "Lash extensions", height: 240 },
    { src: "/assets/beauty-salon/hair-dryers-in-wall.jpg", alt: "Studio", height: 310 },
    { src: "/assets/beauty-salon/mud-facial.jpg", alt: "Mud facial", height: 250 },
    { src: "/assets/beauty-salon/curling-customers-hair.jpg", alt: "Curling hair", height: 280 },
    { src: "/assets/beauty-salon/counter.jpg", alt: "Counter", height: 230 },
    { src: "/assets/beauty-salon/facial-mintcolor.jpg", alt: "Facial treatment", height: 300 },
    { src: "/assets/beauty-salon/washing-hair.jpg", alt: "Hair wash", height: 260 },
    { src: "/assets/beauty-salon/wigs-in-transparent-containers.jpg", alt: "Wigs", height: 240 },
    { src: "/assets/beauty-salon/interior-beauty-spa.jpg", alt: "Spa interior", height: 290 },
];

const serviceMenu = [
    {
        category: "Hair",
        items: [
            { name: "Signature Cut & Style", price: "$85" },
            { name: "Blowout", price: "$65" },
            { name: "Full Color", price: "$120" },
            { name: "Balayage / Highlights", price: "$160+" },
            { name: "Keratin Treatment", price: "$200" },
            { name: "Deep Conditioning", price: "$45" },
        ],
    },
    {
        category: "Skin",
        items: [
            { name: "Radiance Facial", price: "$120" },
            { name: "Detox Mud Facial", price: "$95" },
            { name: "Chemical Peel", price: "$140" },
            { name: "Microdermabrasion", price: "$110" },
            { name: "LED Light Therapy", price: "$75" },
            { name: "Hydrating Mask", price: "$60" },
        ],
    },
    {
        category: "Lashes & Brows",
        items: [
            { name: "Classic Lash Extensions", price: "$150" },
            { name: "Volume Lashes", price: "$190" },
            { name: "Lash Lift & Tint", price: "$85" },
            { name: "Brow Lamination", price: "$70" },
            { name: "Brow Tint", price: "$35" },
            { name: "Brow Shaping", price: "$30" },
        ],
    },
    {
        category: "Bridal & Events",
        items: [
            { name: "Bridal Package", price: "$380" },
            { name: "Bridal Trial", price: "$150" },
            { name: "Bridesmaid Hair", price: "$95" },
            { name: "Event Makeup", price: "$110" },
            { name: "Updo / Special Occasion", price: "$120" },
        ],
    },
];

function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function BeautySalonSample() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [testimonialIndex, setTestimonialIndex] = useState(0);
    const [scrolled, setScrolled] = useState(false);
    const [autoplayKey, setAutoplayKey] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [slideDir, setSlideDir] = useState<"left" | "right">("left");

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            setSlideDir("left");
            setTestimonialIndex(i => (i === testimonials.length - 1 ? 0 : i + 1));
        }, 4000);
        return () => clearInterval(timer);
    }, [autoplayKey, isPaused]);

    function prevTestimonial() {
        setSlideDir("right");
        setAutoplayKey(k => k + 1);
        setTestimonialIndex(i => (i === 0 ? testimonials.length - 1 : i - 1));
    }
    function nextTestimonial() {
        setSlideDir("left");
        setAutoplayKey(k => k + 1);
        setTestimonialIndex(i => (i === testimonials.length - 1 ? 0 : i + 1));
    }

    const t = testimonials[testimonialIndex];

    return (
        <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#f5f1f4", color: "#6a6a6a", fontSize: "14px", lineHeight: "28px" }}>

            {/* FOS Banner */}
            <div className="text-center text-xs py-2 px-4" style={{ backgroundColor: "#f5f1f4", color: "#D9A299" }}>
                This is a sample page built by{" "}
                <a href="/fix-your-page" className="underline font-medium transition-colors" style={{ color: "#D9A299" }}>
                    Fountain of Scale
                </a>
                {" "}· Want one like this for your business?{" "}
                <a href="/fix-your-page" className="underline font-medium transition-colors" style={{ color: "#D9A299" }}>
                    Get yours →
                </a>
            </div>

            {/* Navbar */}
            <nav style={{ backgroundColor: "#D9A299", paddingTop: "20px", paddingBottom: "20px", borderRadius: scrolled ? "0 0 20px 20px" : "0", transition: "border-radius 0.3s ease" }} className="sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                    <a href="#" style={{ fontSize: "28px", fontWeight: 600, color: "#fff", textDecoration: "none" }}>
                        Lume<span style={{ opacity: 0.4 }}>.</span>
                    </a>
                    <div className="hidden md:flex items-center gap-8">
                        {["Home", "Services", "About", "Gallery", "Contact"].map(link => (
                            <a key={link} href={`#${link.toLowerCase()}`}
                                onClick={e => { e.preventDefault(); link === "Home" ? window.scrollTo({ top: 0, behavior: "smooth" }) : scrollTo(link.toLowerCase()); }}
                                style={{ color: "#fff", opacity: 0.6, fontWeight: 500, fontSize: "14px", textDecoration: "none", transition: "opacity .3s", cursor: "pointer" }}
                                onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                                onMouseLeave={e => (e.currentTarget.style.opacity = "0.6")}>
                                {link}
                            </a>
                        ))}
                    </div>
                    <a href="#contact" onClick={e => { e.preventDefault(); scrollTo("contact"); }} style={{ backgroundColor: "#DCC5B2", color: "#2f2a2f", fontWeight: 600, padding: "10px 24px", borderRadius: "30px", fontSize: "14px", textDecoration: "none" }}
                        className="hidden md:block">
                        Book Now
                    </a>
                    <button className="md:hidden" style={{ color: "#fff", background: "none", border: "none" }} onClick={() => setMobileMenuOpen(o => !o)}>
                        {mobileMenuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
                    </button>
                </div>
                {mobileMenuOpen && (
                    <div className="md:hidden px-6 pt-4 pb-4 flex flex-col gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                        {["Home", "Services", "About", "Gallery", "Contact"].map(link => (
                            <a key={link} href={`#${link.toLowerCase()}`} onClick={e => { e.preventDefault(); setMobileMenuOpen(false); link === "Home" ? window.scrollTo({ top: 0, behavior: "smooth" }) : scrollTo(link.toLowerCase()); }}
                                style={{ color: "#fff", opacity: 0.8, textDecoration: "none", fontSize: "14px" }}>
                                {link}
                            </a>
                        ))}
                    </div>
                )}
            </nav>

            {/* Hero */}
            <section style={{ backgroundColor: "#D9A299", overflow: "hidden", borderRadius: "0 0 20px 20px" }}>
                <div className="flex flex-col lg:flex-row" style={{ minHeight: "600px" }}>
                    {/* Text col */}
                    <div className="flex-1 flex items-center justify-center">
                        <div style={{ maxWidth: "480px", padding: "7rem 3rem 7rem clamp(1.5rem, 6vw, 5rem)" }}>
                            <h1 style={{ fontWeight: 700, color: "#fff", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", lineHeight: 1.2, marginBottom: "24px" }}>
                                Where every visit feels like a gift to yourself.
                            </h1>
                            <p style={{ color: "rgba(255,255,255,0.55)", marginBottom: "30px", fontSize: "15px", lineHeight: "28px" }}>
                                Precision cuts, radiance-restoring facials, and lash artistry — all in a space designed to make you feel exactly that.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a href="#contact" onClick={e => { e.preventDefault(); scrollTo("contact"); }} style={{ backgroundColor: "#DCC5B2", color: "#2f2a2f", fontWeight: 600, padding: "12px 30px", borderRadius: "30px", textDecoration: "none", fontSize: "14px", display: "inline-flex", alignItems: "center" }}>
                                    Book Now
                                </a>
                                <a href="#full-services" onClick={e => { e.preventDefault(); scrollTo("full-services"); }} style={{ border: "2px solid rgba(255,255,255,0.3)", color: "#fff", fontWeight: 600, padding: "12px 30px", borderRadius: "30px", textDecoration: "none", fontSize: "14px", display: "inline-flex", alignItems: "center" }}>
                                    Our Services
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Image + info col */}
                    <div className="flex-1 hidden lg:flex flex-col" style={{ minHeight: "500px", borderRadius: "0 0 20px 0", overflow: "hidden" }}>
                        <div style={{ position: "relative", flex: 1 }}>
                            <Image
                                src="/assets/beauty-salon/interior-light.jpg"
                                alt="Lume Studio interior"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div style={{ display: "flex", gap: "24px", padding: "16px 28px", justifyContent: "center" }}>
                            {[
                                { icon: "/assets/beauty-salon/pin-location.png", text: "2418 Fillmore St, San Francisco" },
                                { icon: "/assets/beauty-salon/phone.png", text: "(415) 555-0182" },
                                { icon: "/assets/beauty-salon/open.png", text: "Mon–Sat 9am – 7pm" },
                            ].map((item, i) => (
                                <div key={i} style={{ display: "flex", alignItems: "center", gap: "7px", color: "rgba(255,255,255,0.85)", fontSize: "12px" }}>
                                    <Image src={item.icon} alt="" width={13} height={13} style={{ objectFit: "contain", opacity: 0.8 }} />
                                    {item.text}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" style={{ padding: "7rem 0" }}>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Intro col */}
                        <AnimatedContent distance={30} delay={0} style={{ maxWidth: "260px", flexShrink: 0 }}>
                            <h2 style={{ color: "#2f2a2f", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "16px", lineHeight: 1.3 }}>
                                Our most sought-after treatments.
                            </h2>
                            <p style={{ marginBottom: "24px" }}>
                                Each service is tailored to you — no templates, no rushing. Just skilled hands and the right products.
                            </p>
                            <a href="#full-services" onClick={e => { e.preventDefault(); scrollTo("full-services"); }} style={{ backgroundColor: "#2f2a2f", color: "#fff", fontWeight: 600, padding: "12px 28px", borderRadius: "30px", textDecoration: "none", fontSize: "14px", display: "inline-block" }}>
                                View All
                            </a>
                        </AnimatedContent>
                        {/* Service cards */}
                        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-8">
                            {services.map((svc, i) => (
                                <AnimatedContent key={i} distance={30} delay={i * 0.15}>
                                <a href="#contact" className="treatment-card" style={{ padding: "15px", borderRadius: "10px", position: "relative", display: "block", textDecoration: "none" }}>
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "15px" }}>
                                        <div className="treatment-img" style={{ position: "relative", width: "100%" }}>
                                            <Image src={svc.image} alt={svc.name} fill className="object-cover" style={{ borderRadius: "8px" }} />
                                        </div>
                                        <div style={{ width: "100%" }}>
                                            <p style={{ fontSize: "12px", textTransform: "uppercase", fontWeight: 500, color: "#4d4d4d", margin: "0 0 4px 0" }}>{svc.name}</p>
                                            <p style={{ fontSize: "16px", fontWeight: 700, color: "#2f2a2f", margin: 0 }}>{svc.price}</p>
                                        </div>
                                        <button className="treatment-btn" style={{ width: "100%", height: "40px", backgroundColor: "#D9A299", border: "none", borderRadius: "40px", color: "white", fontWeight: 500, cursor: "pointer", fontSize: "13px" }}>
                                            Book Now
                                        </button>
                                    </div>
                                    {svc.tag && (
                                        <p style={{ position: "absolute", backgroundColor: "#DCC5B2", color: "#2f2a2f", left: "12px", top: 0, padding: "4px 10px", borderRadius: "50px", fontSize: "11px", fontWeight: 600, margin: 0, letterSpacing: "0.02em" }}>
                                            {svc.tag}
                                        </p>
                                    )}
                                </a>
                                </AnimatedContent>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section id="about" style={{ padding: "7rem 0", backgroundColor: "#f5f1f4" }}>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row justify-between gap-16">
                        <AnimatedContent distance={30} delay={0} className="flex-1">
                            <h2 style={{ color: "#2f2a2f", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "16px" }}>
                                Why clients keep coming back
                            </h2>
                            <p style={{ marginBottom: "40px" }}>
                                We've built Lume around one idea: you should leave feeling genuinely better than when you walked in — not just styled, but cared for.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                {features.map((f, i) => (
                                    <div key={i} style={{ marginBottom: "10px" }}>
                                        <div style={{ marginBottom: "16px" }}>
                                            <Image src={f.img} alt={f.title} width={24} height={24} style={{ objectFit: "contain" }} />
                                        </div>
                                        <h3 style={{ fontSize: "14px", fontWeight: 700, color: "#2f2a2f", marginBottom: "6px" }}>{f.title}</h3>
                                        <p style={{ fontSize: "14px", lineHeight: "22px", margin: 0 }}>{f.description}</p>
                                    </div>
                                ))}
                            </div>
                            <div style={{ backgroundColor: "#fff", borderRadius: "20px", padding: "32px 36px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "20px", marginTop: "40px", position: "sticky", top: "96px" }}>
                                <p style={{ fontSize: "14px", color: "#2f2a2f", lineHeight: "22px", margin: 0 }}>
                                    Your next great hair day, facial, or lash set is one booking away.
                                </p>
                                <a href="#contact" onClick={e => { e.preventDefault(); scrollTo("contact"); }} style={{ display: "inline-flex", alignItems: "center", gap: "6px", backgroundColor: "#D9A299", color: "#fff", fontWeight: 600, fontSize: "14px", textDecoration: "none", padding: "12px 28px", borderRadius: "30px", alignSelf: "center" }}>
                                    Book a visit
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                                </a>
                            </div>
                        </AnimatedContent>
                        <AnimatedContent distance={30} delay={0.2} className="flex-1" style={{ position: "relative" }}>
                            <div style={{ position: "relative" }}>
                                <div style={{
                                    position: "absolute", width: "255px", height: "217px", zIndex: 0,
                                    bottom: 0, right: 0,
                                    background: "linear-gradient(45deg, #f5f1f4 20%, transparent 0 45%, #f5f1f4 0 70%, transparent 0), linear-gradient(-45deg, #f5f1f4 20%, transparent 0 35%, rgba(209,192,182,0.27) 0 45%, #f5f1f4 0 70%, transparent 0), linear-gradient(45deg, #f5f1f4 35%, rgba(209,192,182,0.27) 0 45%, #f5f1f4 0)",
                                    backgroundSize: "80px 80px",
                                    transform: "translate(30%, 30%)"
                                }} />
                                <Image src="/assets/beauty-salon/beauty-wall.jpg" alt="Lume Studio interior"
                                    width={500} height={600} className="object-cover" style={{ borderRadius: "20px", position: "relative", zIndex: 1, maxWidth: "100%" }} />
                            </div>
                        </AnimatedContent>
                    </div>
                </div>
            </section>

            {/* We Help / Gallery + Story */}
            <section id="gallery" style={{ padding: "7rem 0" }}>
                <div className="max-w-7xl mx-auto pl-4 pr-6">
                    <div className="flex flex-col lg:flex-row justify-between gap-16 items-start">
                        {/* Overlapping image grid */}
                        <AnimatedContent distance={30} delay={0} className="w-full lg:flex-none lg:w-[58%]" style={{ position: "relative" }}>
                            {/* Mobile: single elixir image */}
                            <div className="lg:hidden" style={{ position: "relative", height: "280px", borderRadius: "20px", overflow: "hidden" }}>
                                <Image src="/assets/beauty-salon/elixirs.jpg" alt="Elixirs" fill className="object-cover" />
                            </div>
                            {/* Desktop: overlapping grid */}
                            <div className="hidden lg:block">
                                <div style={{
                                    position: "absolute", width: "255px", height: "217px", zIndex: 0,
                                    background: "linear-gradient(45deg, #f5f1f4 20%, transparent 0 45%, #f5f1f4 0 70%, transparent 0), linear-gradient(-45deg, #f5f1f4 20%, transparent 0 35%, rgba(209,192,182,0.27) 0 45%, #f5f1f4 0 70%, transparent 0), linear-gradient(45deg, #f5f1f4 35%, rgba(209,192,182,0.27) 0 45%, #f5f1f4 0)",
                                    backgroundSize: "80px 80px",
                                    transform: "translate(-40%, -40%)"
                                }} />
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(27, 1fr)", position: "relative" }}>
                                    <div style={{ gridColumn: "1 / span 16", gridRow: "1 / span 27", position: "relative", height: "560px" }}>
                                        <Image src="/assets/beauty-salon/elixirs.jpg" alt="Elixirs" fill className="object-cover" style={{ borderRadius: "20px" }} />
                                    </div>
                                    <div style={{ gridColumn: "18 / span 10", gridRow: "1 / span 5", position: "relative", height: "240px" }}>
                                        <Image src="/assets/beauty-salon/curling-customers-hair.jpg" alt="Hair styling" fill className="object-cover" style={{ borderRadius: "20px" }} />
                                    </div>
                                    <div style={{ gridColumn: "16 / span 12", gridRow: "9 / span 19", position: "relative", height: "300px" }}>
                                        <Image src="/assets/beauty-salon/facial-mintcolor.jpg" alt="Facial" fill className="object-cover" style={{ borderRadius: "20px" }} />
                                    </div>
                                </div>
                            </div>
                        </AnimatedContent>
                        {/* Text */}
                        <AnimatedContent distance={30} delay={0.2} style={{ flex: 1 }}>
                            <h2 style={{ color: "#2f2a2f", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "20px", lineHeight: 1.3 }}>
                                A studio built to make you feel your best
                            </h2>
                            <p style={{ marginBottom: "20px" }}>
                                Lume opened in 2018 with one belief: beauty services should feel like a genuine act of care — not a transaction. Every detail of this space, from the lighting to the product shelf, was chosen with that in mind.
                            </p>
                            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0", display: "flex", flexWrap: "wrap" }}>
                                {[
                                    "Certified in advanced color techniques",
                                    "Licensed estheticians on staff",
                                    "Clean beauty products only",
                                    "Private suites for bridal parties",
                                ].map((item, i) => (
                                    <li key={i} style={{ width: "calc(50% - 10px)", marginBottom: "12px", paddingLeft: "20px", position: "relative", lineHeight: 1.5, fontSize: "14px" }}>
                                        <span style={{ position: "absolute", left: 0, top: "8px", width: "8px", height: "8px", borderRadius: "50%", border: "2px solid #D9A299", display: "block" }} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <a href="#contact" onClick={e => { e.preventDefault(); scrollTo("contact"); }} style={{ backgroundColor: "#2f2a2f", color: "#fff", fontWeight: 600, padding: "12px 28px", borderRadius: "30px", textDecoration: "none", fontSize: "14px", display: "inline-block" }}>
                                Book an Appointment
                            </a>
                        </AnimatedContent>
                    </div>
                </div>
            </section>

            {/* Services Menu */}
            <section id="full-services" style={{ padding: "0 0 7rem 0" }}>
                <div className="max-w-6xl mx-auto px-6">
                    <AnimatedContent distance={30} delay={0} className="mb-10">
                        <h2 style={{ color: "#2f2a2f", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2rem)", margin: 0 }}>Full Services Menu</h2>
                        <p style={{ margin: "8px 0 0 0", fontSize: "14px", color: "#6a6a6a" }}>All treatments are customized to your needs. Prices may vary.</p>
                    </AnimatedContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {serviceMenu.map((cat, i) => (
                            <AnimatedContent key={i} distance={30} delay={i * 0.1}>
                                <div style={{ paddingBottom: "10px", marginBottom: "20px", borderBottom: "2px solid #D9A299", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <h3 style={{ fontSize: "13px", fontWeight: 700, color: "#2f2a2f", textTransform: "uppercase", letterSpacing: "0.06em", margin: 0 }}>{cat.category}</h3>
                                </div>
                                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                    {cat.items.map((item, j) => (
                                        <li key={j} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 0", borderBottom: "1px solid #f0eaee" }}>
                                            <span style={{ fontSize: "13px", color: "#4d4d4d" }}>{item.name}</span>
                                            <span style={{ fontSize: "13px", fontWeight: 600, color: "#D9A299", flexShrink: 0, marginLeft: "12px" }}>{item.price}</span>
                                        </li>
                                    ))}
                                </ul>
                            </AnimatedContent>
                        ))}
                    </div>
                    <AnimatedContent distance={30} delay={0.2} style={{ textAlign: "center", marginTop: "48px" }}>
                        <a href="#contact" onClick={e => { e.preventDefault(); scrollTo("contact"); }} style={{ fontWeight: 600, color: "#2f2a2f", fontSize: "14px", textDecoration: "none", border: "1.5px solid #2f2a2f", padding: "12px 28px", borderRadius: "30px", display: "inline-block" }}>Book Now</a>
                    </AnimatedContent>
                </div>
            </section>

            {/* Testimonials */}
            <section style={{ padding: "3rem 0 7rem 0", backgroundColor: "#f5f1f4" }}>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex justify-center">
                        <AnimatedContent distance={30} delay={0} style={{ maxWidth: "700px", width: "100%", textAlign: "center" }}>
                            <h2 style={{ color: "#2f2a2f", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "48px" }}>
                                What our clients say
                            </h2>
                            <div style={{ position: "relative" }}
                                onMouseEnter={() => setIsPaused(true)}
                                onMouseLeave={() => setIsPaused(false)}
                            >
                                {/* Chevrons */}
                                <button onClick={prevTestimonial} className="hidden md:flex" style={{
                                    position: "absolute", left: "-44px", top: "50%", transform: "translateY(-50%)",
                                    width: 40, height: 40, borderRadius: "50%", border: "1.5px solid #D9A299",
                                    background: "transparent", alignItems: "center", justifyContent: "center",
                                    color: "#D9A299", cursor: "pointer", transition: ".25s all ease", zIndex: 9,
                                }}
                                    onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#D9A299"; (e.currentTarget as HTMLButtonElement).style.color = "#fff"; }}
                                    onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = "#D9A299"; }}>
                                    <ChevronLeftIcon size={18} />
                                </button>
                                <button onClick={nextTestimonial} className="hidden md:flex" style={{
                                    position: "absolute", right: "-44px", top: "50%", transform: "translateY(-50%)",
                                    width: 40, height: 40, borderRadius: "50%", border: "1.5px solid #D9A299",
                                    background: "transparent", alignItems: "center", justifyContent: "center",
                                    color: "#D9A299", cursor: "pointer", transition: ".25s all ease", zIndex: 9,
                                }}
                                    onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#D9A299"; (e.currentTarget as HTMLButtonElement).style.color = "#fff"; }}
                                    onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = "#D9A299"; }}>
                                    <ChevronRightIcon size={18} />
                                </button>
                                <div style={{ overflow: "hidden" }}>
                                    <div key={`${testimonialIndex}-${slideDir}`} style={{ animation: `testimonial-slide-in-${slideDir} 0.4s ease` }}>
                                        <blockquote style={{ fontSize: "17px", lineHeight: "32px", marginBottom: "40px", fontStyle: "italic" }}>
                                            &ldquo;{t.quote}&rdquo;
                                        </blockquote>
                                        <div>
                                            <div style={{ marginBottom: "16px", display: "flex", justifyContent: "center" }}>
                                                <div style={{ width: 80, height: 80, borderRadius: "50%", overflow: "hidden", position: "relative", flexShrink: 0 }}>
                                                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                                                </div>
                                            </div>
                                            <h3 style={{ fontSize: "14px", fontWeight: 700, color: "#2f2a2f", marginBottom: "2px" }}>{t.name}</h3>
                                            <span style={{ fontSize: "13px", color: "#6a6a6a" }}>{t.role}</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Dots */}
                                <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "40px" }}>
                                    {testimonials.map((_, i) => (
                                        <button key={i} onClick={() => { setSlideDir("left"); setTestimonialIndex(i); setAutoplayKey(k => k + 1); }} style={{
                                            width: "7px", height: "7px", borderRadius: "50%", border: "none", padding: 0,
                                            cursor: "pointer", transition: ".3s all ease",
                                            backgroundColor: i === testimonialIndex ? "#D9A299" : "#d6d6d6"
                                        }} />
                                    ))}
                                </div>
                            </div>
                        </AnimatedContent>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section id="gallery-grid" style={{ padding: "7rem 0 10rem 0" }}>
                <div className="max-w-6xl mx-auto px-6">
                    <AnimatedContent distance={30} delay={0} className="mb-12">
                        <h2 style={{ color: "#2f2a2f", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2rem)", margin: 0 }}>Our Gallery</h2>
                    </AnimatedContent>
                    <div className="columns-1 sm:columns-2 lg:columns-3" style={{ columnGap: "16px" }}>
                        {galleryImages.map((img, i) => (
                            <div key={i} className="gallery-card" style={{ height: img.height }}>
                                <Image src={img.src} alt={img.alt} fill className="object-cover" />
                            </div>
                        ))}
                    </div>
                    <AnimatedContent distance={30} delay={0.2} style={{ textAlign: "center", marginTop: "64px" }}>
                        <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", fontWeight: 600, color: "#2f2a2f", marginBottom: "24px" }}>Ready to experience Lume?</p>
                        <a href="#contact" onClick={e => { e.preventDefault(); scrollTo("contact"); }} style={{ display: "inline-block", backgroundColor: "#D9A299", color: "#fff", fontWeight: 600, fontSize: "14px", textDecoration: "none", padding: "12px 28px", borderRadius: "30px" }}>Book Your Appointment</a>
                    </AnimatedContent>
                </div>
            </section>

            {/* Map */}
            <section style={{ height: "450px", position: "relative", overflow: "hidden" }}>
                <iframe
                    src="https://maps.google.com/maps?q=Pacific+Heights,San+Francisco,CA&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "grayscale(1) contrast(1.1)", display: "block" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </section>

            {/* Footer */}
            <footer id="contact" style={{ backgroundColor: "#fff", padding: "0 0 0 0" }}>
                <div className="max-w-6xl mx-auto px-6" style={{ position: "relative" }}>
                    <div style={{ position: "absolute", top: "-200px", right: "24px", zIndex: 1, pointerEvents: "none" }}>
                        <Image src="/assets/beauty-salon/makeup-brushes.png" alt="" width={320} height={320}
                            className="object-contain" style={{ opacity: 0.85 }} />
                    </div>
                    {/* Booking form — straddles map + footer */}
                    <AnimatedContent distance={30} delay={0}>
                        <div style={{ marginTop: "-80px", marginBottom: "60px", position: "relative", zIndex: 10, backgroundColor: "#fff", borderRadius: "24px", boxShadow: "0 24px 64px rgba(0,0,0,0.10)", padding: "48px" }}>
                            <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                                <div style={{ flexShrink: 0, maxWidth: "260px" }}>
                                    <h3 style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)", fontWeight: 700, color: "#2f2a2f", marginBottom: "12px", lineHeight: 1.3 }}>
                                        Book your visit
                                    </h3>
                                    <p style={{ fontSize: "14px", lineHeight: "24px", marginBottom: "20px" }}>
                                        Fill out the form and we'll confirm your appointment within 24 hours.
                                    </p>
                                    <div style={{ fontSize: "13px", lineHeight: "26px", color: "#6a6a6a", display: "flex", flexDirection: "column", gap: "8px" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                            <Image src="/assets/beauty-salon/pin-location.png" alt="Location" width={16} height={16} style={{ objectFit: "contain", flexShrink: 0 }} />
                                            <span>2418 Fillmore St, San Francisco</span>
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                            <Image src="/assets/beauty-salon/phone.png" alt="Phone" width={16} height={16} style={{ objectFit: "contain", flexShrink: 0 }} />
                                            <span>(415) 555-0182</span>
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                            <Image src="/assets/beauty-salon/open.png" alt="Hours" width={16} height={16} style={{ objectFit: "contain", flexShrink: 0 }} />
                                            <span>Mon–Sat 9am – 7pm</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => {
                                            if (navigator.share) {
                                                navigator.share({ title: "Lume Studio", url: window.location.href });
                                            } else {
                                                navigator.clipboard.writeText(window.location.href);
                                            }
                                        }}
                                        style={{ marginTop: "16px", background: "none", border: "none", cursor: "pointer", padding: 0, color: "#6a6a6a", display: "inline-flex", alignItems: "center" }}>
                                        <Share2Icon size={16} />
                                    </button>
                                </div>
                                <form className="flex-1 flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
                                    <div className="grid grid-cols-2 gap-4">
                                        <input type="text" placeholder="Your name" style={{ height: "48px", borderRadius: "10px", border: "1px solid #e8e0e6", padding: "0 16px", fontSize: "14px", outline: "none", fontFamily: "Inter, sans-serif", backgroundColor: "#faf8f9" }} />
                                        <input type="email" placeholder="Email address" style={{ height: "48px", borderRadius: "10px", border: "1px solid #e8e0e6", padding: "0 16px", fontSize: "14px", outline: "none", fontFamily: "Inter, sans-serif", backgroundColor: "#faf8f9" }} />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <input type="tel" placeholder="Phone number" style={{ height: "48px", borderRadius: "10px", border: "1px solid #e8e0e6", padding: "0 16px", fontSize: "14px", outline: "none", fontFamily: "Inter, sans-serif", backgroundColor: "#faf8f9" }} />
                                        <select style={{ height: "48px", borderRadius: "10px", border: "1px solid #e8e0e6", padding: "0 16px", fontSize: "14px", outline: "none", fontFamily: "Inter, sans-serif", backgroundColor: "#faf8f9", color: "#6a6a6a", appearance: "none" }}>
                                            <option value="">Select a service</option>
                                            <option>Signature Cut & Style</option>
                                            <option>Radiance Facial</option>
                                            <option>Lash Extensions</option>
                                            <option>Bridal Package</option>
                                            <option>Color & Highlights</option>
                                            <option>Detox Mud Facial</option>
                                        </select>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <input type="date" style={{ height: "48px", borderRadius: "10px", border: "1px solid #e8e0e6", padding: "0 16px", fontSize: "14px", outline: "none", fontFamily: "Inter, sans-serif", backgroundColor: "#faf8f9", color: "#6a6a6a" }} />
                                        <input type="text" placeholder="Preferred time (e.g. 2pm)" style={{ height: "48px", borderRadius: "10px", border: "1px solid #e8e0e6", padding: "0 16px", fontSize: "14px", outline: "none", fontFamily: "Inter, sans-serif", backgroundColor: "#faf8f9" }} />
                                    </div>
                                    <textarea placeholder="Any notes or requests?" rows={3} style={{ borderRadius: "10px", border: "1px solid #e8e0e6", padding: "12px 16px", fontSize: "14px", outline: "none", fontFamily: "Inter, sans-serif", backgroundColor: "#faf8f9", resize: "none" }} />
                                    <button type="submit" style={{ height: "50px", backgroundColor: "#D9A299", border: "none", borderRadius: "30px", color: "#fff", fontWeight: 600, fontSize: "14px", cursor: "pointer", transition: ".3s all ease" }}
                                        onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#DCC5B2")}
                                        onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#D9A299")}>
                                        Book Appointment
                                    </button>
                                </form>
                            </div>
                        </div>
                    </AnimatedContent>
                    <div style={{ paddingTop: "40px" }}>
                    {/* Logo + Links */}
                    <AnimatedContent distance={30} delay={0.1} className="grid grid-cols-1 md:grid-cols-4 gap-10" style={{ marginBottom: "48px" }}>
                        <div>
                            <a href="#" style={{ fontSize: "28px", fontWeight: 500, color: "#D9A299", textDecoration: "none", display: "block", marginBottom: "16px" }}>
                                Lume<span style={{ opacity: 0.4 }}>.</span>
                            </a>
                            <p style={{ fontSize: "14px", lineHeight: "24px", marginBottom: "20px" }}>
                                A premium beauty studio in San Francisco's Pacific Heights. Hair, skin, and lashes done right.
                            </p>
                            <div className="flex gap-2">
                                {["f", "in", "ig"].map((s, i) => (
                                    <a key={i} href="#" style={{
                                        width: "38px", height: "38px", borderRadius: "50%", backgroundColor: "#ede8ec",
                                        color: "#D9A299", display: "flex", alignItems: "center", justifyContent: "center",
                                        fontSize: "12px", fontWeight: 700, textDecoration: "none", transition: ".3s all ease"
                                    }}
                                        onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#D9A299"; (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
                                        onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#ede8ec"; (e.currentTarget as HTMLAnchorElement).style.color = "#D9A299"; }}>
                                        {s}
                                    </a>
                                ))}
                            </div>
                        </div>
                        {[
                            { heading: "Visit Us", links: ["Services", "About Us", "Gallery", "Contact"] },
                            { heading: "Support", links: ["FAQ", "Gift Cards", "Cancellation Policy", "Accessibility"] },
                            { heading: "Our Services", links: ["Hair Styling", "Facials", "Lash Extensions", "Bridal Packages"] },
                        ].map((col, i) => (
                            <div key={i}>
                                <p style={{ fontSize: "13px", fontWeight: 700, color: "#2f2a2f", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{col.heading}</p>
                                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                    {col.links.map((link, j) => (
                                        <li key={j} style={{ marginBottom: "10px" }}>
                                            <a href="#" style={{ textDecoration: "none", color: "#6a6a6a", fontSize: "14px", transition: ".3s all ease" }}
                                                onMouseEnter={e => (e.currentTarget.style.color = "rgba(47,42,47,0.5)")}
                                                onMouseLeave={e => (e.currentTarget.style.color = "#6a6a6a")}>
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </AnimatedContent>
                    </div>
                    {/* Copyright */}
                    <div style={{ borderTop: "1px solid #dce5e4", padding: "24px 0", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px", fontSize: "13px" }}>
                        <p style={{ margin: 0 }}>
                            © 2025 Lume Studio. All rights reserved. ·{" "}
                            <a href="/fix-your-page" style={{ color: "#D9A299", fontWeight: 600, textDecoration: "underline" }}>
                                Built by Fountain of Scale
                            </a>
                        </p>
                        <div className="flex gap-6">
                            <a href="#" style={{ color: "#6a6a6a", textDecoration: "none" }}>Terms & Conditions</a>
                            <a href="#" style={{ color: "#6a6a6a", textDecoration: "none" }}>Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
