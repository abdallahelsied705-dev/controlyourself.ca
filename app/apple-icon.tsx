import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// "Prime-time sunset" home-screen icon, unique to controlyourself.ca.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(120px 120px at 30% 20%, #c2410c, #0c0a09)",
        }}
      >
        <div
          style={{
            width: 104,
            height: 88,
            borderRadius: 16,
            border: "7px solid #f97316",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              width: 0,
              height: 0,
              borderTop: "16px solid transparent",
              borderBottom: "16px solid transparent",
              borderLeft: "26px solid #fdba74",
              marginLeft: 6,
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
