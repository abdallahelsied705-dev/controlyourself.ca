import { ImageResponse } from "next/og";

export const alt = "IPTV Canada – 50,000+ live channels in up to 4K, from C$6.63/month";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Code-generated social preview so the brand/colours match the site
// ("prime-time sunset" warm orange/azure theme), unique to controlyourself.ca.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          background:
            "radial-gradient(900px 500px at 15% 0%, #c2410c 0%, transparent 55%), radial-gradient(800px 500px at 100% 100%, #0369a1 0%, transparent 55%), #0c0a09",
          color: "#f4ece4",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 26,
            fontWeight: 700,
            color: "#fdba74",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: 16, height: 16, borderRadius: 16, background: "#e11d48" }} />
          Streaming live across Canada
        </div>

        <div style={{ display: "flex", marginTop: 26, fontSize: 118, fontWeight: 800, lineHeight: 1.02 }}>
          <span style={{ color: "#fb923c" }}>IPTV</span>
          <span style={{ color: "#ffffff", marginLeft: 24 }}>Canada</span>
        </div>

        <div style={{ display: "flex", marginTop: 18, fontSize: 40, color: "#d8ccc0", fontWeight: 600 }}>
          50,000+ Live Channels · Up to 4K · No Contract
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20, marginTop: 44 }}>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              fontWeight: 700,
              color: "#0c0a09",
              background: "linear-gradient(90deg,#fb923c,#ea580c)",
              padding: "16px 34px",
              borderRadius: 999,
            }}
          >
            From C$6.63 / month
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#7dd3fc", fontWeight: 700 }}>
            Free 24-hour trial
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
