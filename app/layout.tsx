import { Inter, Urbanist } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const inter = Inter({
    variable: "--font-sans",
    subsets: ["latin"],
});

const urbanist = Urbanist({
    variable: "--font-urbanist",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Fountain of Profit",
        template: "%s | Fountain of Profit",
    },
    description:
        "Automate the repeatable parts of the role before you hire. We review what you're hiring for, build the automatable layer in 30 days, and hand it off.",
    keywords: [
        "AI automation",
        "hire automation",
        "workflow automation",
        "automate before hiring",
        "SDR automation",
        "ops automation",
    ],
    authors: [{ name: "Fountain of Profit" }],
    creator: "Fountain of Profit",
    applicationName: "Fountain of Profit",
    appleWebApp: {
        title: "Fountain of Profit",
        capable: true,
        statusBarStyle: "default",
    },
    openGraph: {
        title: "Fountain of Profit – Automate the role before you hire",
        description:
            "The role you're hiring for has real judgment work at the center. Around it is prep, cleanup, and repetition. We automate that layer in 30 days.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Fountain of Profit – Automate the role before you hire",
        description:
            "Faster ramp. Tighter execution. Less busywork.",
    },
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
