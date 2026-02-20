import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";
export const alt = "Automation Factory";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
    const logoBuffer = readFileSync(join(process.cwd(), "public/assets/auto-factory.png"));
    const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "radial-gradient(ellipse 150% 120% at 50% 100%, #ffffff 0%, #edf9f8 40%, #e0dafc 65%, #ede8f6 85%, #e4dcff 100%)",
                }}
            >
                <img
                    src={logoSrc}
                    width={72}
                    height={72}
                    style={{ borderRadius: 18 }}
                />
                <div
                    style={{
                        marginTop: 32,
                        fontSize: 28,
                        fontWeight: 500,
                        color: "#9ca3af",
                        letterSpacing: "-0.5px",
                    }}
                >
                    You&apos;re scaling.
                </div>
                <div
                    style={{
                        marginTop: 8,
                        fontSize: 64,
                        fontWeight: 800,
                        color: "#1f2937",
                        letterSpacing: "-2px",
                        textAlign: "center",
                        maxWidth: 900,
                        lineHeight: 1.1,
                    }}
                >
                    Half of it should be automated.
                </div>
            </div>
        ),
        { ...size }
    );
}
