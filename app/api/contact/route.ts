import { NextRequest, NextResponse } from "next/server";

const FORMSPREE_URL = "https://formspree.io/f/maqdlqvy";

export async function POST(req: NextRequest) {
    const body = await req.json();

    // 1. Submit to Formspree
    const formspreeRes = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(body),
    });

    if (!formspreeRes.ok) {
        return NextResponse.json({ error: "Submission failed" }, { status: 500 });
    }

    // 2. Formspree succeeded — fire discord-notify (Sheets + Discord)
    const host = req.headers.get("host");
    const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
    await fetch(`${protocol}://${host}/api/discord-notify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });

    return NextResponse.json({ ok: true });
}
