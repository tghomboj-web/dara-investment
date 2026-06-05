"use client";

import { AlertTriangle } from "lucide-react";

export default function Disclaimer() {
  return (
    <section
      id="disclaimer"
      style={{ padding: "60px 32px", position: "relative" }}
      className="bg-[#0a0a0f]"
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div
          style={{
            padding: "28px 32px",
            borderRadius: "16px",
            background: "rgba(251,191,36,0.05)",
            border: "1px solid rgba(251,191,36,0.15)",
            display: "flex",
            gap: "16px",
            alignItems: "flex-start",
          }}
        >
          <AlertTriangle size={24} color="#fbbf24" style={{ flexShrink: 0, marginTop: "2px" }} />
          <div>
            <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#fbbf24", marginBottom: "8px" }}>
              Disclaimer
            </h3>
            <p style={{ color: "#9ca3af", fontSize: "0.85rem", lineHeight: 1.7 }}>
              This report is for informational purposes only. Property data, scores, prices, estimates, 
              and links are provided from third-party/public sources and should be independently verified. 
              This is not legal, tax, financial, or investment advice. Investment Property Monitor is 
              provided for educational and informational use. Always conduct your own due diligence 
              before making investment decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
