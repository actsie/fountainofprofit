import { IPricingPlan } from "@/types";
import { PhoneCallIcon, ZapIcon, RepeatIcon } from "lucide-react";

export const pricing: IPricingPlan[] = [
    {
        icon: PhoneCallIcon,
        name: "Scoping Call",
        description: "Free 45-minute call. We review the posting and tell you what can be automated.",
        price: 0,
        linkText: "Book the call",
        linkUrl: "#",
        features: [
            "Review the job posting together",
            "Identify automatable vs. human tasks",
            "No pitch, no pressure",
            "Honest assessment upfront",
        ],
    },
    {
        icon: ZapIcon,
        name: "The Sprint",
        type: "popular",
        description: "One month. We build the automations, document everything, and hand it off.",
        price: 4500,
        linkText: "Start the sprint",
        linkUrl: "#",
        features: [
            "Full role workflow audit",
            "Automation build + implementation",
            "Documentation and handoff",
            "2 weeks post-handoff support",
            "You own everything we build",
        ],
    },
    {
        icon: RepeatIcon,
        name: "Ongoing Ops",
        type: "enterprise",
        description: "Monthly retainer to maintain, extend, and add new automations as your team grows.",
        price: 1500,
        linkText: "Talk to us",
        linkUrl: "#",
        features: [
            "Everything in The Sprint",
            "Maintain existing automations",
            "Add new workflows monthly",
            "Slack access for quick questions",
            "Quarterly automation review",
        ],
    },
];
