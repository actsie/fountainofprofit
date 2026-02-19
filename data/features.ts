import { FileTextIcon, WaypointsIcon, ZapIcon, PackageIcon } from "lucide-react";
import { IFeature } from "../types";

export const features: IFeature[] = [
    {
        title: "Send us the job posting",
        description:
            "Share the role you're hiring for. We read it as an auditor — mapping out every task and responsibility listed.",
        icon: FileTextIcon,
        cardBg: "bg-[#dbd2ff]/40",
        iconBg: "bg-purple-500",
    },
    {
        title: "We map what's automatable",
        description:
            "Every role has tasks that repeat. We identify which ones AI handles well — scheduling, data entry, reporting, routing, follow-ups — and which ones still need a human.",
        icon: WaypointsIcon,
        cardBg: "bg-[#edf9f8]/40",
        iconBg: "bg-[#5bbfba]",
    },
    {
        title: "We build it in 30 days",
        description:
            "Automations are implemented, tested, and documented. Working systems, not slide decks. If we said we'd automate it, it runs by day 30.",
        icon: ZapIcon,
        cardBg: "bg-[#e1e1f8]/40",
        iconBg: "bg-indigo-500",
    },
    {
        title: "Full handoff. You own everything.",
        description:
            "Your systems, your documentation, your call on what comes next. Most clients still hire — but the person they bring on focuses on work that actually needs them, not the busywork.",
        icon: PackageIcon,
        cardBg: "bg-[#ede8f6]/40",
        iconBg: "bg-[#c98dc0]",
    },
];
