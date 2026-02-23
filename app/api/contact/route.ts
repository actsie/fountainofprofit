import { NextRequest, NextResponse } from "next/server";

const FORMSPREE_URL = "https://formspree.io/f/maqdlqvy";
const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/1475381110736162990/5A1g6AgVl8srYSHrgygtNgIKSG2Z0gIec9um20XBKgUVJbSBmCn4lSehpuozDowRJ2Wa";

export async function POST(req: NextRequest) {
    const body = await req.json();

    // Submit to Formspree
    const formspreeRes = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(body),
    });

    if (!formspreeRes.ok) {
        return NextResponse.json({ error: "Submission failed" }, { status: 500 });
    }

    // Post to Discord
    const lines = [
        `**New scoping call request**`,
        `**Name:** ${body.name}`,
        `**Email:** ${body.email}`,
        `**Company:** ${body.company}`,
        body.website ? `**Website:** ${body.website}` : null,
        body.linkedin ? `**LinkedIn:** ${body.linkedin}` : null,
        body.jdUrl ? `**JD URL:** ${body.jdUrl}` : null,
        body.jdText ? `**JD (pasted):**\n${body.jdText.slice(0, 500)}${body.jdText.length > 500 ? "..." : ""}` : null,
        body.techStack ? `**Tech stack:** ${body.techStack}` : null,
        body.notes ? `**Notes:** ${body.notes}` : null,
    ].filter(Boolean).join("\n");

    await fetch(DISCORD_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: lines }),
    });

    return NextResponse.json({ ok: true });
}
