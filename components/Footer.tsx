"use client";

import { Home, Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #e2e8f0", padding: "48px 24px 32px", background: "#fcfcfd" }}>
      <div className="max-w-7xl mx-auto">
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "24px", marginBottom: "32px" }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{
              width: "30px", height: "30px", borderRadius: "6px",
              background: "rgba(30, 64, 175, 0.08)", border: "1px solid rgba(30, 64, 175, 0.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Home size={14} color="#1e40af" />
            </div>
            <span style={{ fontSize: "0.85rem", color: "#64748b", letterSpacing: "0.01em" }}>
              <span style={{ fontFamily: "'Space Mono', monospace", color: "#1e40af", fontSize: "0.8rem", fontWeight: 600 }}>IPM</span>
              {" · "}Investment Property Monitor
            </span>
          </div>

          {/* Links */}
          <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
            {["#how-it-works", "#sample-report", "#pricing"].map((href, i) => (
              <a key={href} href={href} style={{ fontSize: "0.82rem", color: "#475569", textDecoration: "none" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#1e40af")}
                onMouseLeave={e => (e.currentTarget.style.color = "#475569")}>
                {["How It Works", "Sample Report", "Pricing"][i]}
              </a>
            ))}
            <a href="#pricing" style={{
              fontSize: "0.82rem", fontWeight: 600, color: "#ffffff", textDecoration: "none",
              padding: "6px 14px", borderRadius: "6px",
              border: "1px solid #1e40af",
              background: "#1e40af",
            }}>Start Free</a>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "12px" }}>
          <p style={{ fontFamily: "'Space Mono', monospace", color: "#64748b", fontSize: "0.65rem" }}>
            © {new Date().getFullYear()} Investment Property Monitor · Charlotte, NC
          </p>
          <p style={{ color: "#64748b", fontSize: "0.72rem", maxWidth: "500px", textAlign: "right" }}>
            For informational purposes only. Property data, estimates, and scores should be independently verified. Not legal, financial, or investment advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
