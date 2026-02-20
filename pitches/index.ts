export type PitchConfig = {
    company: string;
    hero: {
        badge: string;
        headlineLine1: string;
        headlineLine2: string;
        headlineAccent: string;
        subtext: string;
        subtextTagline: string;
        ctaPrimary: string;
        ctaSecondary: string;
    };
    cta: {
        headlineLine1: string;
        headlineAccent: string;
        headlineLine2: string;
        subtext: string;
        ctaPrimary: string;
        ctaSecondary: string;
    };
};

export const pitches: Record<string, PitchConfig> = {
    "sdr-jaimeson": {
        company: "Jaimeson — SDR pitch",
        hero: {
            badge: "Built for SDR teams",
            headlineLine1: "You're hiring an SDR.",
            headlineLine2: "Half the workflow should be",
            headlineAccent: "automated.",
            subtext: `Account research, CRM cleanup, personalization drafts, and follow-up sequencing — these repeat every day and bury whoever you hire. We automate that layer in 30 days so your SDR ships faster and spends their time on the relationships that actually close.`,
            subtextTagline: "Faster ramp. Tighter execution. Less busywork.",
            ctaPrimary: "Send us the SDR job posting",
            ctaSecondary: "See how it works",
        },
        cta: {
            headlineLine1: "See what we'd automate in your",
            headlineAccent: "SDR workflow",
            headlineLine2: "before you hire",
            subtext: `Send us the job posting. We'll map what's automatable and what needs a human — free, no commitment.`,
            ctaPrimary: "Book a free scoping call",
            ctaSecondary: "See how it works",
        },
    },
};
