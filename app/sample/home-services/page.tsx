"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { MenuIcon, PhoneIcon, MapPinIcon, ClockIcon, XIcon, CheckIcon } from "lucide-react";

// Primary: #1e3a5f (deep navy) | Accent: #ea580c (orange) | Light bg: #f8fafc | Dark bg: #0f172a

const services = [
    {
        id: "hvac",
        name: "HVAC",
        label: "HVAC",
        subtitle: "Heating, Ventilation & Air Conditioning",
        description: "Keep your home comfortable year-round. Our certified HVAC technicians handle everything from routine tune-ups to full system replacements — fast, clean, and done right the first time.",
        bullets: [
            "AC & heating installation, repair, and replacement",
            "Seasonal tune-ups and preventive maintenance",
            "Duct cleaning, sealing, and air quality testing",
            "24-hour emergency service available",
        ],
        image: "/assets/home-services/pov-lookingup-hotel-outside-ac.jpg",
    },
    {
        id: "plumbing",
        name: "Plumbing",
        label: "Plumbing",
        subtitle: "Repairs, Installations & Emergency Calls",
        description: "From a dripping faucet to a full pipe replacement, our licensed plumbers get to you fast and fix it right. No upsells, no surprises — just honest work at a fair price.",
        bullets: [
            "Leak detection and pipe repair",
            "Water heater installation and replacement",
            "Drain cleaning and clog removal",
            "Toilet, faucet, and fixture installation",
        ],
        image: "/assets/home-services/plumber-in-cr.jpg",
    },
    {
        id: "roofing",
        name: "Roofing",
        label: "Roofing",
        subtitle: "Inspections, Repairs & Full Replacements",
        description: "Your roof is your home's first line of defense. We offer honest inspections, storm damage repairs, and full replacements with top-grade materials and a workmanship warranty.",
        bullets: [
            "Free roof inspections and damage assessments",
            "Shingle, tile, and flat roof repairs",
            "Full roof replacement with warranty",
            "Gutter cleaning and installation",
        ],
        image: "/assets/home-services/roofing.jpg",
    },
    {
        id: "cleaning",
        name: "Cleaning",
        label: "Residential & Airbnb Cleaning",
        subtitle: "Standard, Deep Clean & Airbnb Turnover",
        description: "Spotless homes and five-star Airbnb turnovers — done on your schedule. Our trained cleaning crews use eco-friendly products and follow a detailed checklist every single visit.",
        bullets: [
            "Standard recurring and one-time deep cleans",
            "Airbnb and short-term rental turnover service",
            "Move-in / move-out cleaning",
            "Eco-friendly, pet-safe products",
        ],
        image: "/assets/home-services/california-steam-dry-carpet-cleaning.jpg",
    },
    {
        id: "junk",
        name: "Junk Removal",
        label: "Junk Removal & Hauling",
        subtitle: "Fast Pickup, Responsible Disposal",
        description: "Clear out the clutter without lifting a finger. We haul away furniture, appliances, construction debris, and more — and we donate or recycle what we can.",
        bullets: [
            "Same-day and next-day pickup available",
            "Furniture, appliance, and electronics removal",
            "Construction and yard debris hauling",
            "Donation drop-off and responsible recycling",
        ],
        image: "/assets/home-services/junk-removal.jpg",
    },
    {
        id: "pressure",
        name: "Pressure Washing",
        label: "Pressure Washing & Window Cleaning",
        subtitle: "Driveways, Siding, Roofs & Windows",
        description: "Years of grime, mold, and weather stains gone in a single visit. We pressure wash driveways, siding, and decks, and leave your windows streak-free inside and out.",
        bullets: [
            "Driveway, patio, and deck pressure washing",
            "House siding and roof soft washing",
            "Interior and exterior window cleaning",
            "Gutter flushing and downspout clearing",
        ],
        image: "/assets/home-services/pressure-wash.jpg",
    },
    {
        id: "landscaping",
        name: "Landscaping",
        label: "Landscaping & Lawn Care",
        subtitle: "Mowing, Trimming, Design & More",
        description: "From weekly mowing to full landscape redesigns, we keep your outdoor spaces looking sharp all year. Licensed, insured, and always on schedule.",
        bullets: [
            "Weekly and bi-weekly lawn mowing and edging",
            "Tree trimming, shrub shaping, and leaf removal",
            "Sod installation and planting beds",
            "Irrigation system installation and repair",
        ],
        image: "/assets/home-services/landscaping.jpg",
    },
];

const stats = [
    { value: "12+", label: "Years in Business" },
    { value: "4,800+", label: "Jobs Completed" },
    { value: "98%", label: "5-Star Reviews" },
    { value: "2-hr", label: "Avg Response Time" },
];

const whyUs = [
    {
        title: "Licensed & Insured",
        desc: "Every technician is background-checked, licensed, and fully insured. You're in safe hands.",
    },
    {
        title: "Upfront Pricing",
        desc: "We quote before we start. No surprises, no hidden fees — the price we give is the price you pay.",
    },
    {
        title: "Same-Day Availability",
        desc: "Urgent jobs don't wait. We keep slots open every day for same-day service requests.",
    },
    {
        title: "Satisfaction Guaranteed",
        desc: "If something isn't right, we come back and fix it — no questions, no charge.",
    },
];

const team = [
    {
        name: "Amanda Torres",
        role: "HVAC Lead Technician",
        image: "/assets/home-services/amanda.jpg",
    },
    {
        name: "Luis Mendez",
        role: "Master Plumber",
        image: "/assets/home-services/luis.jpg",
    },
    {
        name: "Chelsea Rivera",
        role: "Cleaning Operations Supervisor",
        image: "/assets/home-services/chelsea.jpg",
    },
    {
        name: "Cassie Kim",
        role: "Landscape & Grounds Lead",
        image: "/assets/home-services/cassie.jpg",
    },
];

const testimonials = [
    {
        name: "Marcus D.",
        location: "South Austin",
        rating: 5,
        text: "Called AllPro on a Friday afternoon when our AC died in 95-degree heat. They had a tech out within two hours and the unit fixed before dinner. Genuinely saved our weekend.",
        image: "/assets/home-services/amanda.jpg",
    },
    {
        name: "Priya S.",
        location: "Cedar Park",
        rating: 5,
        text: "We use AllPro for our Airbnb unit and the turnovers are flawless every time. Our guests consistently mention the cleanliness in their reviews. It's been a huge boost for our ratings.",
        image: "/assets/home-services/chelsea.jpg",
    },
    {
        name: "Derek F.",
        location: "Round Rock",
        rating: 5,
        text: "Hired them for a full lawn cleanup after a storm dropped branches everywhere. The crew showed up on time, worked fast, and the yard looked better than before the storm. Will definitely use again.",
        image: "/assets/home-services/luis.jpg",
    },
    {
        name: "Nadia W.",
        location: "Mueller, Austin",
        rating: 5,
        text: "Had a slow drain that two other plumbers couldn't figure out. AllPro diagnosed the issue in 20 minutes, fixed it cleanly, and didn't leave a mess. Best experience I've had with a home service company.",
        image: "/assets/home-services/cassie.jpg",
    },
    {
        name: "James K.",
        location: "Buda, TX",
        rating: 5,
        text: "The roofing crew was the most professional contractor team I've ever worked with. They finished a full replacement in one day, cleaned up everything, and the quality is outstanding. Worth every penny.",
        image: "/assets/home-services/luis.jpg",
    },
    {
        name: "Sofia R.",
        location: "North Loop, Austin",
        rating: 5,
        text: "Booked a deep clean before hosting family for the holidays. The team was thorough, fast, and used products that didn't leave any chemical smell. My place looked brand new.",
        image: "/assets/home-services/chelsea.jpg",
    },
    {
        name: "Tyler B.",
        location: "Pflugerville",
        rating: 5,
        text: "Had a massive junk pile in the garage after a renovation. AllPro cleared it out in under two hours and even separated items for donation. Couldn't believe how easy they made it.",
        image: "/assets/home-services/luis.jpg",
    },
    {
        name: "Melissa H.",
        location: "Barton Hills, Austin",
        rating: 5,
        text: "The pressure washing completely transformed our driveway and back patio. We'd ignored the buildup for years and it looked brand new after they were done. Already booked them again for the windows.",
        image: "/assets/home-services/amanda.jpg",
    },
    {
        name: "Carlos V.",
        location: "East Austin",
        rating: 5,
        text: "AllPro installed a whole new HVAC system for us and the process was incredibly smooth. They walked us through every step, finished on schedule, and the energy bill dropped noticeably the first month.",
        image: "/assets/home-services/cassie.jpg",
    },
    {
        name: "Hannah T.",
        location: "Westlake Hills",
        rating: 5,
        text: "We hired them for weekly lawn care and landscaping maintenance. Three months in and the yard has never looked this good. Reliable, communicative, and they actually show up when they say they will.",
        image: "/assets/home-services/chelsea.jpg",
    },
    {
        name: "Brian M.",
        location: "Georgetown",
        rating: 5,
        text: "Water heater gave out on a Sunday morning. AllPro picked up, confirmed availability, and had a new unit installed by early afternoon. That kind of responsiveness is rare and I won't go anywhere else.",
        image: "/assets/home-services/luis.jpg",
    },
    {
        name: "Rachel D.",
        location: "South Congress, Austin",
        rating: 5,
        text: "I manage four rental properties and AllPro handles all the maintenance. Having one company for HVAC, plumbing, and cleaning has saved me so much time. They're reliable, professional, and the pricing is fair.",
        image: "/assets/home-services/amanda.jpg",
    },
];

function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function useInView(threshold = 0.15) {
    const ref = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
            { threshold }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    return [ref, visible] as const;
}

export default function HomeServicesPage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeService, setActiveService] = useState(0);
    const [scrolled, setScrolled] = useState(false);
    const [servicePaused, setServicePaused] = useState(false);
    const [serviceNoTransition, setServiceNoTransition] = useState(false);
    const [reviewPage, setReviewPage] = useState(0);
    const [formService, setFormService] = useState("");
    const reviewsPerPage = 4;
    const totalPages = Math.ceil(testimonials.length / reviewsPerPage);

    const [heroMounted, setHeroMounted] = useState(false);
    useEffect(() => { const t = setTimeout(() => setHeroMounted(true), 80); return () => clearTimeout(t); }, []);

    const [featureRef, featureVisible] = useInView(0.2);
    const [aboutRef, aboutVisible] = useInView(0.1);
    const [servicesRef, servicesVisible] = useInView(0.1);
    const [bookingRef, bookingVisible] = useInView(0.1);
    const [teamRef2, teamVisible2] = useInView(0.15);
    const [reviewsRef, reviewsVisible] = useInView(0.1);
    const [ctaRef, ctaVisible] = useInView(0.2);

    const statsRef = useRef<HTMLElement>(null);
    const [statsVisible, setStatsVisible] = useState(false);
    const statParsed = [
        { num: 12, suffix: "+", label: "Years in Business" },
        { num: 4800, suffix: "+", label: "Jobs Completed", comma: true },
        { num: 98, suffix: "%", label: "5-Star Reviews" },
        { num: 2, suffix: "-hr", label: "Avg Response Time" },
    ];
    const [statCounts, setStatCounts] = useState(statParsed.map(() => 0));

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setStatsVisible(true); observer.disconnect(); } },
            { threshold: 0.3 }
        );
        if (statsRef.current) observer.observe(statsRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!statsVisible) return;
        const steps = 50;
        const duration = 1400;
        let step = 0;
        const timer = setInterval(() => {
            step++;
            const eased = 1 - Math.pow(1 - step / steps, 3);
            setStatCounts(statParsed.map(s => Math.round(s.num * eased)));
            if (step >= steps) clearInterval(timer);
        }, duration / steps);
        return () => clearInterval(timer);
    }, [statsVisible]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (servicePaused) return;
        const timer = setInterval(() => {
            setActiveService(i => i + 1);
        }, 3500);
        return () => clearInterval(timer);
    }, [servicePaused]);

    function handleServiceTransitionEnd() {
        if (activeService === services.length) {
            setServiceNoTransition(true);
            setActiveService(0);
            requestAnimationFrame(() => requestAnimationFrame(() => setServiceNoTransition(false)));
        }
    }

    const svc = services[activeService];

    return (
        <div style={{ fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif", backgroundColor: "#f8fafc", color: "#374151", fontSize: "15px", lineHeight: "1.7" }}>

            {/* FOS Banner */}
            <div className="text-center text-xs py-2 px-4" style={{ backgroundColor: "#1e3a5f", color: "rgba(255,255,255,0.6)" }}>
                Sample page built by{" "}
                <a href="/fix-your-page" className="underline font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>
                    Fountain of Profit
                </a>
                {" "}· Want one like this for your business?{" "}
                <a href="/fix-your-page" className="underline font-medium" style={{ color: "#fb923c" }}>
                    Get yours →
                </a>
            </div>

            {/* Topbar */}
            <div className="hidden md:block" style={{ backgroundColor: "#f1f5f9", borderBottom: "1px solid #e2e8f0" }}>
                <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between">
                    <div className="flex items-center gap-6 text-xs" style={{ color: "#64748b" }}>
                        <span className="flex items-center gap-1.5">
                            <MapPinIcon size={12} style={{ color: "#ea580c" }} />
                            4820 Westlake Dr, Austin, TX 78746
                        </span>
                        <span className="flex items-center gap-1.5">
                            <ClockIcon size={12} style={{ color: "#ea580c" }} />
                            Mon – Sat 7:00 AM – 7:00 PM
                        </span>
                    </div>
                    <a href="tel:+15125550198" className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: "#ea580c", textDecoration: "none" }}>
                        <PhoneIcon size={12} />
                        (512) 555-0198
                    </a>
                </div>
            </div>

            {/* Navbar */}
            <nav style={{
                backgroundColor: scrolled ? "rgba(30, 58, 95, 0.97)" : "#1e3a5f",
                backdropFilter: scrolled ? "blur(8px)" : "none",
                transition: "background-color 0.3s ease",
                borderBottom: "1px solid rgba(255,255,255,0.08)"
            }} className="sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <a href="#" style={{ fontSize: "22px", fontWeight: 800, color: "#fff", textDecoration: "none", letterSpacing: "-0.02em" }}>
                        AllPro<span style={{ color: "#ea580c" }}>.</span>
                    </a>
                    <div className="hidden md:flex items-center gap-8">
                        {[
                            { label: "Services", id: "services" },
                            { label: "About", id: "about" },
                            { label: "Team", id: "team" },
                            { label: "Reviews", id: "reviews" },
                        ].map(link => (
                            <a key={link.id} href={`#${link.id}`}
                                onClick={e => { e.preventDefault(); scrollTo(link.id); }}
                                style={{ color: "rgba(255,255,255,0.65)", fontWeight: 500, fontSize: "14px", textDecoration: "none", transition: "color .2s", cursor: "pointer" }}
                                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}>
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <a href="#contact"
                        onClick={e => { e.preventDefault(); scrollTo("contact"); }}
                        style={{ backgroundColor: "#ea580c", color: "#fff", fontWeight: 700, padding: "10px 22px", borderRadius: "6px", fontSize: "14px", textDecoration: "none" }}
                        className="hidden md:block">
                        Get a Free Quote
                    </a>
                    <button className="md:hidden" style={{ color: "#fff", background: "none", border: "none", cursor: "pointer" }} onClick={() => setMobileMenuOpen(o => !o)}>
                        {mobileMenuOpen ? <XIcon size={22} /> : <MenuIcon size={22} />}
                    </button>
                </div>
                {mobileMenuOpen && (
                    <div className="md:hidden px-6 pb-5 flex flex-col gap-5" style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "20px" }}>
                        {[
                            { label: "Services", id: "services" },
                            { label: "About", id: "about" },
                            { label: "Team", id: "team" },
                            { label: "Reviews", id: "reviews" },
                        ].map(link => (
                            <a key={link.id} href={`#${link.id}`}
                                onClick={e => { e.preventDefault(); setMobileMenuOpen(false); scrollTo(link.id); }}
                                style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "15px", fontWeight: 500 }}>
                                {link.label}
                            </a>
                        ))}
                        <a href="#contact" onClick={e => { e.preventDefault(); setMobileMenuOpen(false); scrollTo("contact"); }}
                            style={{ backgroundColor: "#ea580c", color: "#fff", fontWeight: 700, padding: "12px 20px", borderRadius: "6px", textDecoration: "none", textAlign: "center" }}>
                            Get a Free Quote
                        </a>
                    </div>
                )}
            </nav>

            {/* Hero */}
            <section style={{ position: "relative", minHeight: "600px", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0 }}>
                    <Image
                        src="/assets/home-services/mopping-entrance-building.jpg"
                        alt="Home services professional at work"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15, 23, 42, 0.85) 50%, rgba(15, 23, 42, 0.4))" }} />
                </div>
                <div className="relative max-w-6xl mx-auto px-6" style={{ paddingTop: "7rem", paddingBottom: "7rem" }}>
                    <div style={{ maxWidth: "580px" }}>
                        <h1 style={{ fontWeight: 800, color: "#fff", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", lineHeight: 1.15, marginBottom: "20px", letterSpacing: "-0.02em", opacity: heroMounted ? 1 : 0, transform: heroMounted ? "translateY(0)" : "translateY(28px)", transition: "opacity 0.65s ease, transform 0.65s ease" }}>
                            Austin's Most Trusted Home Service Team
                        </h1>
                        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "32px", fontSize: "16px", lineHeight: "1.7", maxWidth: "480px", opacity: heroMounted ? 1 : 0, transform: heroMounted ? "translateY(0)" : "translateY(28px)", transition: "opacity 0.65s ease 0.1s, transform 0.65s ease 0.1s" }}>
                            HVAC, plumbing, roofing, cleaning, junk removal, pressure washing, and landscaping — one company, seven services, and a team you can actually count on.
                        </p>
                        <div className="flex flex-wrap gap-3" style={{ opacity: heroMounted ? 1 : 0, transform: heroMounted ? "translateY(0)" : "translateY(28px)", transition: "opacity 0.65s ease 0.2s, transform 0.65s ease 0.2s" }}>
                            <a href="#contact"
                                onClick={e => { e.preventDefault(); scrollTo("contact"); }}
                                style={{ backgroundColor: "#ea580c", color: "#fff", fontWeight: 700, padding: "14px 32px", borderRadius: "6px", textDecoration: "none", fontSize: "15px", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                                Get a Free Quote
                            </a>
                            <a href="tel:+15125550198"
                                style={{ border: "2px solid rgba(255,255,255,0.3)", color: "#fff", fontWeight: 600, padding: "14px 32px", borderRadius: "6px", textDecoration: "none", fontSize: "15px", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                                <PhoneIcon size={16} />
                                (512) 555-0198
                            </a>
                        </div>
                    </div>
                </div>

                {/* Info strip at bottom */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, backgroundColor: "rgba(15,23,42,0.8)", backdropFilter: "blur(4px)" }}>
                    <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center gap-6 md:gap-10">
                        {[
                            { icon: <MapPinIcon size={14} />, text: "4820 Westlake Dr, Austin, TX" },
                            { icon: <PhoneIcon size={14} />, text: "(512) 555-0198" },
                            { icon: <ClockIcon size={14} />, text: "Mon – Sat  7AM – 7PM" },
                        ].map((item, i) => (
                            <span key={i} style={{ display: "flex", alignItems: "center", gap: "7px", color: "rgba(255,255,255,0.7)", fontSize: "13px" }}>
                                <span style={{ color: "#ea580c" }}>{item.icon}</span>
                                {item.text}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature strip */}
            <section ref={featureRef} style={{ backgroundColor: "#1e3a5f", padding: "0" }}>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        {[
                            { title: "Licensed & Fully Insured", desc: "Every tech on our team is licensed, background-checked, and covered." },
                            { title: "Same-Day Service Available", desc: "We hold slots open daily so urgent jobs don't have to wait." },
                            { title: "Satisfaction Guaranteed", desc: "Not happy? We come back and make it right — no charge." },
                        ].map((item, i) => (
                            <div key={i} style={{ padding: "28px 32px 28px 0", opacity: featureVisible ? 1 : 0, transform: featureVisible ? "translateY(0)" : "translateY(20px)", transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s` }}>
                                <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "15px", marginBottom: "6px" }}>{item.title}</h3>
                                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "15px", margin: 0, lineHeight: "1.6" }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About */}
            <section ref={aboutRef} id="about" style={{ padding: "7rem 0", backgroundColor: "#fff" }}>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        {/* Image */}
                        <div className="flex-1 w-full" style={{ position: "relative", minHeight: "420px", borderRadius: "10px", overflow: "hidden", opacity: aboutVisible ? 1 : 0, transform: aboutVisible ? "translateY(0)" : "translateY(32px)", transition: "opacity 0.65s ease, transform 0.65s ease" }}>
                            <Image
                                src="/assets/home-services/electrician.jpg"
                                alt="AllPro team at work"
                                fill
                                className="object-cover"
                            />
                            <div style={{ position: "absolute", top: "24px", right: "24px", backgroundColor: "#ea580c", borderRadius: "8px", padding: "16px 20px", textAlign: "center" }}>
                                <p style={{ color: "#fff", fontWeight: 800, fontSize: "32px", margin: 0, lineHeight: 1 }}>12+</p>
                                <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "12px", margin: "4px 0 0 0", fontWeight: 600 }}>Years Serving<br />Austin</p>
                            </div>
                        </div>
                        {/* Text */}
                        <div className="flex-1" style={{ opacity: aboutVisible ? 1 : 0, transform: aboutVisible ? "translateY(0)" : "translateY(32px)", transition: "opacity 0.65s ease 0.15s, transform 0.65s ease 0.15s" }}>
                            <p style={{ color: "#ea580c", fontWeight: 700, fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px" }}>About AllPro</p>
                            <h2 style={{ color: "#0f172a", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", lineHeight: 1.2, marginBottom: "16px", letterSpacing: "-0.02em" }}>
                                One company for every job your home needs
                            </h2>
                            <p style={{ color: "#64748b", marginBottom: "24px", fontSize: "15px" }}>
                                We started AllPro because homeowners were tired of juggling five different contractors who never showed up on time. Since 2012, we've built a team of specialists across every major home service — all under one roof, all held to the same high standard.
                            </p>
                            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
                                {whyUs.map((item, i) => (
                                    <div key={i} style={{ display: "flex", gap: "14px" }}>
                                        <div style={{ width: "28px", height: "28px", borderRadius: "50%", backgroundColor: "#fef3ec", border: "2px solid #ea580c", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                                            <CheckIcon size={13} style={{ color: "#ea580c" }} />
                                        </div>
                                        <div>
                                            <p style={{ fontWeight: 700, color: "#0f172a", margin: "0 0 2px 0", fontSize: "15px" }}>{item.title}</p>
                                            <p style={{ color: "#64748b", margin: 0, fontSize: "15px" }}>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <a href="#contact" onClick={e => { e.preventDefault(); scrollTo("contact"); }}
                                style={{ backgroundColor: "#1e3a5f", color: "#fff", fontWeight: 700, padding: "13px 28px", borderRadius: "6px", textDecoration: "none", fontSize: "15px", display: "inline-block" }}>
                                Get a Free Quote
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section ref={statsRef} style={{ background: "linear-gradient(to bottom, #ffffff, #f8fafc)", padding: "4rem 0" }}>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {statParsed.map((s, i) => (
                            <div key={i} style={{
                                textAlign: "center",
                                opacity: statsVisible ? 1 : 0,
                                transform: statsVisible ? "translateY(0)" : "translateY(24px)",
                                transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
                            }}>
                                <p style={{ color: "#ea580c", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 2.8rem)", margin: "0 0 6px 0", lineHeight: 1 }}>
                                    {s.comma
                                        ? statCounts[i].toLocaleString() + s.suffix
                                        : statCounts[i] + s.suffix}
                                </p>
                                <p style={{ color: "#475569", fontSize: "13px", margin: 0, fontWeight: 500 }}>{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section ref={servicesRef} id="services" style={{ padding: "7rem 0", backgroundColor: "#f8fafc" }}>
                <div className="max-w-6xl mx-auto px-6">
                    <div style={{ textAlign: "center", marginBottom: "3rem", opacity: servicesVisible ? 1 : 0, transform: servicesVisible ? "translateY(0)" : "translateY(28px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
                        <p style={{ color: "#ea580c", fontWeight: 700, fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "10px" }}>What We Do</p>
                        <h2 style={{ color: "#0f172a", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", lineHeight: 1.2, marginBottom: "12px", letterSpacing: "-0.02em" }}>
                            Seven services, one reliable team
                        </h2>
                        <p style={{ color: "#64748b", maxWidth: "500px", margin: "0 auto", fontSize: "15px" }}>
                            Every technician is a specialist in their trade — not a generalist doing everything halfway.
                        </p>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0", opacity: servicesVisible ? 1 : 0, transform: servicesVisible ? "translateY(0)" : "translateY(28px)", transition: "opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s" }}>
                        {/* Tab nav — horizontal */}
                        <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
                            {services.map((s, i) => (
                                <button key={s.id} onClick={() => { setActiveService(i % services.length); setServicePaused(true); setTimeout(() => setServicePaused(false), 4000); }}
                                    style={{
                                        padding: "12px 20px",
                                        border: "none",
                                        borderBottom: (activeService % services.length) === i ? "2.5px solid #ea580c" : "2.5px solid transparent",
                                        backgroundColor: "transparent",
                                        cursor: "pointer",
                                        transition: "all .2s",
                                    }}>
                                    <span style={{ fontWeight: (activeService % services.length) === i ? 700 : 500, color: (activeService % services.length) === i ? "#ea580c" : "#64748b", fontSize: "14px", transition: "color .2s", whiteSpace: "nowrap" }}>
                                        {s.name}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* Content panel — infinite sliding track */}
                        <div style={{ borderRadius: "12px", overflow: "hidden", marginTop: "20px" }}
                            onMouseEnter={() => setServicePaused(true)}
                            onMouseLeave={() => setServicePaused(false)}>
                            <div
                                style={{ display: "flex", transform: `translateX(-${activeService * 100}%)`, transition: serviceNoTransition ? "none" : "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)" }}
                                onTransitionEnd={handleServiceTransitionEnd}>
                                {[...services, services[0]].map((s, idx) => (
                                    <div key={idx} style={{ minWidth: "100%", backgroundColor: "#fff", display: "flex", flexDirection: "row", height: "580px" }}>
                                        <div style={{ flex: 1, position: "relative" }} className="hidden md:block">
                                            <Image src={s.image} alt={s.label} fill className="object-cover" />
                                        </div>
                                        <div style={{ flex: 1, padding: "56px 52px", overflowY: "auto" }}>
                                            <p style={{ color: "#ea580c", fontWeight: 700, fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>{s.name}</p>
                                            <h3 style={{ color: "#0f172a", fontWeight: 800, fontSize: "1.6rem", lineHeight: 1.3, marginBottom: "14px" }}>{s.subtitle}</h3>
                                            <p style={{ color: "#64748b", fontSize: "15px", marginBottom: "24px", lineHeight: "1.75" }}>{s.description}</p>
                                            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px 0", display: "flex", flexDirection: "column", gap: "10px" }}>
                                                {s.bullets.map((b, i) => (
                                                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "15px", color: "#374151" }}>
                                                        <CheckIcon size={16} style={{ color: "#ea580c", marginTop: "3px", flexShrink: 0 }} />
                                                        {b}
                                                    </li>
                                                ))}
                                            </ul>
                                            <a href="#contact" onClick={e => { e.preventDefault(); setFormService(s.id); scrollTo("contact"); }}
                                                style={{ backgroundColor: "#ea580c", color: "#fff", fontWeight: 700, padding: "13px 28px", borderRadius: "6px", textDecoration: "none", fontSize: "15px", display: "inline-block" }}>
                                                Get a Quote for {s.name}
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Booking */}
            <section ref={bookingRef} id="contact" style={{ padding: "7rem 0", background: "linear-gradient(to bottom, #eff6ff, #fef3ec)" }}>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        {/* Left copy */}
                        <div style={{ flex: 1, opacity: bookingVisible ? 1 : 0, transform: bookingVisible ? "translateY(0)" : "translateY(32px)", transition: "opacity 0.65s ease, transform 0.65s ease" }}>
                            <p style={{ color: "#ea580c", fontWeight: 700, fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px" }}>Free Quote</p>
                            <h2 style={{ color: "#0f172a", fontWeight: 700, fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", lineHeight: 1.25, marginBottom: "16px" }}>
                                Tell us what you need and we'll get back to you same day
                            </h2>
                            <p style={{ color: "#475569", fontSize: "15px", marginBottom: "32px", lineHeight: "1.7" }}>
                                No pushy sales calls. You describe the job, we give you a straight price. If it works for you, we schedule — it's that simple.
                            </p>
                            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                {[
                                    "Free, no-obligation estimates",
                                    "Response within 2 business hours",
                                    "No contract required for one-time jobs",
                                    "Available Mon – Sat, 7AM – 7PM",
                                ].map((item, i) => (
                                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                        <CheckIcon size={15} style={{ color: "#ea580c", flexShrink: 0 }} />
                                        <span style={{ color: "#374151", fontSize: "15px" }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Form */}
                        <div style={{ flex: 1, backgroundColor: "#fff", borderRadius: "12px", padding: "40px 36px", opacity: bookingVisible ? 1 : 0, transform: bookingVisible ? "translateY(0)" : "translateY(32px)", transition: "opacity 0.65s ease 0.15s, transform 0.65s ease 0.15s" }}>
                            <h3 style={{ color: "#0f172a", fontWeight: 800, fontSize: "1.2rem", marginBottom: "24px" }}>Request a Free Quote</h3>
                            <form style={{ display: "flex", flexDirection: "column", gap: "14px" }}
                                onSubmit={e => e.preventDefault()}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label style={{ fontSize: "12px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "6px" }}>Full Name</label>
                                        <input type="text" placeholder="Jane Smith"
                                            style={{ width: "100%", padding: "10px 14px", border: "1.5px solid #e2e8f0", borderRadius: "6px", fontSize: "15px", outline: "none", boxSizing: "border-box" }} />
                                    </div>
                                    <div>
                                        <label style={{ fontSize: "12px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "6px" }}>Phone Number</label>
                                        <input type="tel" placeholder="(512) 555-0100"
                                            style={{ width: "100%", padding: "10px 14px", border: "1.5px solid #e2e8f0", borderRadius: "6px", fontSize: "15px", outline: "none", boxSizing: "border-box" }} />
                                    </div>
                                </div>
                                <div>
                                    <label style={{ fontSize: "12px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "6px" }}>Email</label>
                                    <input type="email" placeholder="jane@email.com"
                                        style={{ width: "100%", padding: "10px 14px", border: "1.5px solid #e2e8f0", borderRadius: "6px", fontSize: "15px", outline: "none", boxSizing: "border-box" }} />
                                </div>
                                <div>
                                    <label style={{ fontSize: "12px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "6px" }}>Service Needed</label>
                                    <div style={{ position: "relative" }}>
                                        <select
                                            value={formService}
                                            onChange={e => setFormService(e.target.value)}
                                            style={{ width: "100%", padding: "10px 36px 10px 14px", border: "1.5px solid #e2e8f0", borderRadius: "6px", fontSize: "15px", outline: "none", backgroundColor: "#fff", boxSizing: "border-box", appearance: "none", WebkitAppearance: "none" }}>
                                            <option value="">Select a service...</option>
                                            {services.map(s => (
                                                <option key={s.id} value={s.id}>{s.label}</option>
                                            ))}
                                            <option value="other">Not sure / multiple services</option>
                                        </select>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
                                            <path d="m6 9 6 6 6-6"/>
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <label style={{ fontSize: "12px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "6px" }}>Tell us about the job</label>
                                    <textarea placeholder="Describe what you need — the more detail the better..." rows={4}
                                        style={{ width: "100%", padding: "10px 14px", border: "1.5px solid #e2e8f0", borderRadius: "6px", fontSize: "14px", outline: "none", resize: "vertical", boxSizing: "border-box" }} />
                                </div>
                                <button type="submit"
                                    style={{ backgroundColor: "#ea580c", color: "#fff", fontWeight: 700, padding: "13px 24px", borderRadius: "6px", fontSize: "15px", border: "none", cursor: "pointer" }}>
                                    Send My Request
                                </button>
                                <p style={{ fontSize: "12px", color: "#94a3b8", textAlign: "center", margin: 0 }}>
                                    We respond within 2 hours during business hours
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section ref={teamRef2} id="team" style={{ padding: "5rem 0", background: "linear-gradient(to bottom, #fef3ec, #eff6ff)" }}>
                <div className="max-w-5xl mx-auto px-6">
                    <div style={{ background: "linear-gradient(to bottom, #fef3ec, #eff6ff)", borderRadius: "24px", overflow: "hidden", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", position: "relative", opacity: teamVisible2 ? 1 : 0, transform: teamVisible2 ? "translateY(0)" : "translateY(32px)", transition: "opacity 0.65s ease, transform 0.65s ease" }}
                        className="flex-col md:flex-row">
                        {/* Left: text */}
                        <div style={{ flex: 1, padding: "clamp(2.5rem, 5vw, 4.5rem)", paddingBottom: "clamp(2.5rem, 5vw, 4.5rem)" }}>
                            <p style={{ color: "#ea580c", fontWeight: 700, fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "14px" }}>Our Team</p>
                            <h2 style={{ color: "#0f172a", fontWeight: 700, fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", lineHeight: 1.25, marginBottom: "14px" }}>
                                Meet the team keeping Austin's homes in great shape.
                            </h2>
                            <p style={{ color: "#475569", fontSize: "15px", lineHeight: "1.7", maxWidth: "340px", marginBottom: "28px" }}>
                                Every lead tech has 8+ years in their trade and is licensed, insured, and genuinely proud of the work they do.
                            </p>
                            <a href="#contact" onClick={e => { e.preventDefault(); scrollTo("contact"); }}
                                style={{ display: "inline-block", backgroundColor: "#ea580c", color: "#fff", fontWeight: 700, fontSize: "15px", padding: "13px 28px", borderRadius: "6px", textDecoration: "none" }}>
                                Get in touch
                            </a>
                        </div>
                        {/* Right: 2x2 photo grid bleeding to bottom */}
                        <div style={{ flexShrink: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", padding: "0 0 0 8px", alignSelf: "flex-end", marginBottom: "-2px" }}
                            className="w-full md:w-auto">
                            {team.map((member, i) => (
                                <div key={i} style={{ position: "relative", width: "200px", height: "240px", borderRadius: i === 0 ? "12px 0 0 0" : i === 1 ? "0 12px 0 0" : i === 2 ? "0" : "0", overflow: "hidden" }}
                                    className="w-full md:w-[200px]">
                                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(15,23,42,0.7), transparent)", padding: "20px 10px 8px" }}>
                                        <p style={{ color: "#fff", fontWeight: 600, fontSize: "11px", margin: 0 }}>{member.name}</p>
                                        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "10px", margin: 0 }}>{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section ref={reviewsRef} id="reviews" style={{ padding: "5rem 0", background: "linear-gradient(to bottom, #eff6ff, #fef3ec)" }}>
                <div className="max-w-5xl mx-auto px-6">
                <div style={{ opacity: reviewsVisible ? 1 : 0, transform: reviewsVisible ? "translateY(0)" : "translateY(32px)", transition: "opacity 0.65s ease, transform 0.65s ease" }}>
                    {/* Header row */}
                    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "2.5rem", flexWrap: "wrap", gap: "16px" }}>
                        <div>
                            <p style={{ color: "#ea580c", fontWeight: 700, fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "10px" }}>Client Reviews</p>
                            <h2 style={{ color: "#0f172a", fontWeight: 700, fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", lineHeight: 1.25, marginBottom: "10px" }}>
                                What Austin homeowners are saying
                            </h2>
                            <p style={{ color: "#475569", maxWidth: "440px", fontSize: "15px", margin: 0, lineHeight: "1.7" }}>
                                See what our customers say after we show up, get the job done, and leave things better than we found them.
                            </p>
                        </div>
                        {/* Chevrons */}
                        <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
                            <button
                                onClick={() => setReviewPage(p => Math.max(0, p - 1))}
                                disabled={reviewPage === 0}
                                style={{ width: "42px", height: "42px", borderRadius: "50%", border: "1.5px solid #e2e8f0", backgroundColor: "#fff", cursor: reviewPage === 0 ? "default" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", opacity: reviewPage === 0 ? 0.35 : 1, transition: "all .2s" }}
                                onMouseEnter={e => { if (reviewPage > 0) e.currentTarget.style.borderColor = "#1e3a5f"; }}
                                onMouseLeave={e => (e.currentTarget.style.borderColor = "#e2e8f0")}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                            </button>
                            <button
                                onClick={() => setReviewPage(p => Math.min(totalPages - 1, p + 1))}
                                disabled={reviewPage === totalPages - 1}
                                style={{ width: "42px", height: "42px", borderRadius: "50%", border: "1.5px solid #e2e8f0", backgroundColor: "#fff", cursor: reviewPage === totalPages - 1 ? "default" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", opacity: reviewPage === totalPages - 1 ? 0.35 : 1, transition: "all .2s" }}
                                onMouseEnter={e => { if (reviewPage < totalPages - 1) e.currentTarget.style.borderColor = "#1e3a5f"; }}
                                onMouseLeave={e => (e.currentTarget.style.borderColor = "#e2e8f0")}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                            </button>
                        </div>
                    </div>

                    {/* Sliding track */}
                    <div style={{ overflow: "hidden" }}>
                        <div style={{ display: "flex", transform: `translateX(-${reviewPage * 100}%)`, transition: "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)" }}>
                            {Array.from({ length: totalPages }).map((_, pageIdx) => {
                                const pageItems = testimonials.slice(pageIdx * reviewsPerPage, (pageIdx + 1) * reviewsPerPage);
                                return (
                                    <div key={pageIdx} style={{ minWidth: "100%", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
                                        {pageItems.map((review, i) => (
                                            <div key={i}
                                                style={{
                                                    gridColumn: i === 0 || i === 3 ? "span 2" : "span 1",
                                                    backgroundColor: "#fff",
                                                    borderRadius: "16px",
                                                    padding: "24px",
                                                    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                                                }}
                                            >
                                                <div style={{ display: "flex", gap: "3px", marginBottom: "14px" }}>
                                                    {Array(5).fill(0).map((_, j) => (
                                                        <svg key={j} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="#ea580c" stroke="none" aria-hidden="true">
                                                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                                <p style={{ color: "#374151", fontSize: "15px", lineHeight: "1.75", marginBottom: i === 0 || i === 3 ? "48px" : "28px" }}>
                                                    {review.text}
                                                </p>
                                                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                                    <div style={{ width: "44px", height: "44px", borderRadius: "50%", overflow: "hidden", position: "relative", flexShrink: 0 }}>
                                                        <Image src={review.image} alt={review.name} fill className="object-cover" />
                                                    </div>
                                                    <div>
                                                        <p style={{ fontWeight: 600, color: "#0f172a", margin: "0 0 2px 0", fontSize: "13px" }}>{review.name}</p>
                                                        <p style={{ color: "#94a3b8", fontSize: "12px", margin: 0 }}>{review.location}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Page dots */}
                    <div style={{ display: "flex", gap: "6px", marginTop: "28px", justifyContent: "center" }}>
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button key={i} onClick={() => setReviewPage(i)}
                                style={{ width: i === reviewPage ? "24px" : "8px", height: "8px", borderRadius: "4px", border: "none", cursor: "pointer", backgroundColor: i === reviewPage ? "#ea580c" : "rgba(15,23,42,0.15)", transition: "all .3s" }} />
                        ))}
                    </div>
                </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section ref={ctaRef} style={{ backgroundColor: "#1e3a5f" }}>
                <div className="flex flex-col lg:flex-row" style={{ minHeight: "420px" }}>
                    {/* Left: Google Map — full height */}
                    <div style={{ flex: 1, minHeight: "320px", position: "relative" }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.6!2d-97.8!3d30.33!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b4b5b5b5b5b5b%3A0x0!2s4820+Westlake+Dr%2C+Austin%2C+TX+78746!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0, display: "block", position: "absolute", inset: 0, filter: "grayscale(1) contrast(1.1) brightness(0.9)" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    {/* Right: text + CTAs */}
                    <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                        <div style={{ padding: "5rem 4rem", opacity: ctaVisible ? 1 : 0, transform: ctaVisible ? "translateY(0)" : "translateY(28px)", transition: "opacity 0.65s ease, transform 0.65s ease" }}>
                            <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", lineHeight: 1.2, marginBottom: "14px", letterSpacing: "-0.02em" }}>
                                Ready to get it done?
                            </h2>
                            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "16px", marginBottom: "32px", lineHeight: "1.7" }}>
                                Free estimates, same-day availability, and a team that shows up on time. Let's talk.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="#contact" onClick={e => { e.preventDefault(); scrollTo("contact"); }}
                                    style={{ backgroundColor: "#ea580c", color: "#fff", fontWeight: 800, padding: "14px 36px", borderRadius: "6px", textDecoration: "none", fontSize: "15px" }}>
                                    Get a Free Quote
                                </a>
                                <a href="tel:+15125550198"
                                    style={{ border: "2px solid rgba(255,255,255,0.3)", color: "#fff", fontWeight: 700, padding: "14px 36px", borderRadius: "6px", textDecoration: "none", fontSize: "15px", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                                    <PhoneIcon size={16} />
                                    (512) 555-0198
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer style={{ backgroundColor: "#0f172a", color: "rgba(255,255,255,0.55)", padding: "4rem 0 2rem" }}>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-10 pb-8" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                        <div style={{ flex: 2 }}>
                            <p style={{ fontWeight: 800, fontSize: "20px", color: "#fff", marginBottom: "10px", letterSpacing: "-0.02em" }}>
                                AllPro<span style={{ color: "#ea580c" }}>.</span>
                            </p>
                            <p style={{ fontSize: "13px", lineHeight: "1.7", marginBottom: "16px" }}>
                                AllPro started in 2012 when two Austin tradespeople got tired of watching homeowners get overcharged by companies that sent whoever was available. We built something different — a team of actual specialists, each one the best at their trade, all working under one name you can trust. Twelve years later, we're still the same crew. We just serve a lot more of Austin now.
                            </p>
                            <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                                {[
                                    { icon: <MapPinIcon size={12} />, text: "4820 Westlake Dr, Austin, TX 78746" },
                                    { icon: <PhoneIcon size={12} />, text: "(512) 555-0198" },
                                    { icon: <ClockIcon size={12} />, text: "Mon – Sat  7:00 AM – 7:00 PM" },
                                ].map((item, i) => (
                                    <span key={i} style={{ display: "flex", alignItems: "center", gap: "7px", fontSize: "12px" }}>
                                        <span style={{ color: "#ea580c" }}>{item.icon}</span>
                                        {item.text}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p style={{ fontWeight: 700, color: "#fff", fontSize: "14px", marginBottom: "14px" }}>Services</p>
                            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                {services.map(s => (
                                    <a key={s.id} href="#services" onClick={e => { e.preventDefault(); scrollTo("services"); setActiveService(services.indexOf(s)); }}
                                        style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", textDecoration: "none", transition: "color .2s" }}
                                        onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                                        onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}>
                                        {s.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p style={{ fontWeight: 700, color: "#fff", fontSize: "14px", marginBottom: "14px" }}>Quick Links</p>
                            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                {[
                                    { label: "About Us", id: "about" },
                                    { label: "Our Team", id: "team" },
                                    { label: "Reviews", id: "reviews" },
                                    { label: "Get a Free Quote", id: "contact" },
                                ].map(link => (
                                    <a key={link.id} href={`#${link.id}`} onClick={e => { e.preventDefault(); scrollTo(link.id); }}
                                        style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", textDecoration: "none", transition: "color .2s" }}
                                        onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                                        onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}>
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div style={{ paddingTop: "24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "8px", fontSize: "12px" }}>
                        <span>© 2025 AllPro Home Services · Austin, TX</span>
                        <span>
                            Sample page built by{" "}
                            <a href="/fix-your-page" style={{ color: "#fb923c", textDecoration: "none" }}>Fountain of Profit</a>
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
