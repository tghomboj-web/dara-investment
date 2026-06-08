"use client";

import { Home, Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(0,212,170,0.1)", padding: "48px 24px 32px" }}>
      <div className="max-w-7xl mx-auto">
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "24px", marginBottom: "32px" }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{
              width: "30px", height: "30px", borderRadius: "6px",
              background: "rgba(0,212,170,0.08)", border: "1px solid rgba(0,212,170,0.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Home size={14} color="#00d4aa" />
            </div>
            <span style={{ fontSize: "0.85rem", color: "#8b9eb0", letterSpacing: "0.01em" }}>
              <span style={{ fontFamily: "'Space Mono', monospace", color: "#00d4aa", fontSize: "0.8rem" }}>IPM</span>
              {" · "}Investment Property Monitor
            </span>
          </div>

          {/* Links */}
          <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
            {["#how-it-works", "#sample-report", "#pricing"].map((href, i) => (
              <a key={href} href={href} style={{ fontSize: "0.82rem", color: "#4a5e72", textDecoration: "none" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#00d4aa")}
                onMouseLeave={e => (e.currentTarget.style.color = "#4a5e72")}>
                {["How It Works", "Sample Report", "Pricing"][i]}
              </a>
            ))}
            <a href="#pricing" style={{
              fontSize: "0.82rem", fontWeight: 600, color: "#00d4aa", textDecoration: "none",
              padding: "6px 14px", borderRadius: "6px",
              border: "1px solid rgba(0,212,170,0.25)",
              background: "rgba(0,212,170,0.06)",
            }}>Get Started</a>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)", paddingTop: "24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "12px" }}>
          <p style={{ fontFamily: "'Space Mono', monospace", color: "#4a5e72", fontSize: "0.65rem" }}>
            © {new Date().getFullYear()} Investment Property Monitor · Charlotte, NC
          </p>
          <p style={{ color: "#4a5e72", fontSize: "0.72rem", maxWidth: "500px", textAlign: "right" }}>
            For informational purposes only. Not legal, financial, or investment advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
