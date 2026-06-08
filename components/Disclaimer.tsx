"use client";

import { AlertTriangle } from "lucide-react";

export default function Disclaimer() {
  return (
    <section
      id="disclaimer"
      style={{ padding: "60px 32px", position: "relative" }}
      className="bg-[#080c10]"
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div
          style={{
            padding: "20px 24px",
            borderRadius: "8px",
            background: "rgba(245,158,11,0.04)",
            border: "1px solid rgba(245,158,11,0.15)",
            display: "flex",
            gap: "14px",
            alignItems: "flex-start",
          }}
        >
          <AlertTriangle size={16} color="#f59e0b" style={{ flexShrink: 0, marginTop: "3px" }} />
          <p style={{ color: "#8b9eb0", fontSize: "0.82rem", lineHeight: 1.7 }}>
            <span style={{ fontFamily: "'Space Mono', monospace", color: "#f59e0b", fontSize: "0.7rem", marginRight: "8px" }}>DISCLAIMER</span>
            This report is for informational purposes only. Property data, scores, prices, estimates, 
            and links are provided from third-party/public sources and should be independently verified. 
            Not legal, tax, financial, or investment advice. Always conduct your own due diligence.
          </p>
        </div>
      </div>
    </section>
  );
}
