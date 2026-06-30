"use client";

import { AlertTriangle } from "lucide-react";

export default function Disclaimer() {
  return (
    <section
      id="disclaimer"
      style={{ padding: "60px 24px", position: "relative", background: "#f8f9fa" }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div
          style={{
            padding: "20px 24px",
            borderRadius: "8px",
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            display: "flex",
            gap: "14px",
            alignItems: "flex-start",
          }}
        >
          <AlertTriangle size={16} color="#f59e0b" style={{ flexShrink: 0, marginTop: "3px" }} />
          <p style={{ color: "#64748b", fontSize: "0.82rem", lineHeight: 1.7, margin: 0 }}>
            <span style={{ fontFamily: "'Space Mono', monospace", color: "#f59e0b", fontSize: "0.7rem", marginRight: "8px" }}>DISCLAIMER</span>
            This platform is provided for informational purposes only. Property data, listing status, prices, estimates, scores, and external links should be independently verified. Nothing presented constitutes legal, tax, financial, or investment advice.
          </p>
        </div>
      </div>
    </section>
  );
}
