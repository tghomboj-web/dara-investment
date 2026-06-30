"use client";

import { Settings, ScanLine, Send } from "lucide-react";

const steps = [
  {
    icon: Settings,
    step: "01",
    title: "Set Your Criteria",
    description:
      "Configure your investment filters: location, price range, property types, and score thresholds based on your tier.",
    accent: "#1e40af",
  },
  {
    icon: ScanLine,
    step: "02",
    title: "Daily Scans Run",
    description:
      "Our system scans Charlotte-area listings daily, evaluating each property against your configured criteria.",
    accent: "#3b82f6",
  },
  {
    icon: Send,
    step: "03",
    title: "Receive Your Report",
    description:
      "Get daily reports with new findings and top opportunities delivered via email or Telegram.",
    accent: "#1e40af",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{ padding: "100px 24px", background: "#ffffff" }}
      className="relative hiw-section"
    >
      <style>{`
        @media (max-width: 768px) {
          .hiw-section { padding: 52px 20px !important; }
          .hiw-header { margin-bottom: 28px !important; }
          .hiw-grid { grid-template-columns: 1fr !important; gap: 10px !important; }
          .hiw-card { padding: 20px 16px !important; }
          .hiw-card h3 { font-size: 0.95rem !important; margin-bottom: 8px !important; }
          .hiw-card p { font-size: 0.82rem !important; }
          .hiw-icon { margin-bottom: 16px !important; }
        }
      `}</style>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section header */}
        <div className="hiw-header" style={{ textAlign: "center", marginBottom: "56px" }}>
          <span style={{
            fontFamily: "'Space Mono', monospace",
            display: "inline-block", color: "#1e40af",
            fontSize: "0.65rem", fontWeight: 600,
            letterSpacing: "0.15em", textTransform: "uppercase",
            marginBottom: "14px",
          }}>
            HOW IT WORKS
          </span>
          <h2 style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
            fontWeight: 700, color: "#1a1f2c",
            marginBottom: "14px", lineHeight: 1.2,
            letterSpacing: "-0.02em",
          }}>
            Three <span className="gradient-text">Simple Steps</span>
          </h2>
          <p style={{ color: "#64748b", fontSize: "1rem", maxWidth: "500px", margin: "0 auto", lineHeight: 1.75 }}>
            Configure your criteria, receive daily scans, get objective findings.
          </p>
        </div>

        {/* Cards grid */}
        <div className="hiw-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="hiw-card" style={{
                background: "#ffffff",
                border: `1px solid #e2e8f0`,
                borderRadius: "12px",
                padding: "32px 24px",
                position: "relative",
                transition: "border-color 0.2s, box-shadow 0.2s",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "#1e40af";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 12px rgba(30, 64, 175, 0.08)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)";
              }}>
                {/* Step number watermark */}
                <div style={{
                  position: "absolute", top: "16px", right: "20px",
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "2rem", fontWeight: 700,
                  color: "rgba(30, 64, 175, 0.08)",
                  lineHeight: 1, userSelect: "none",
                }}>
                  {step.step}
                </div>
                {/* Icon */}
                <div className="hiw-icon" style={{
                  width: "44px", height: "44px", borderRadius: "10px",
                  background: "rgba(30, 64, 175, 0.1)",
                  border: `1px solid rgba(30, 64, 175, 0.2)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "20px",
                }}>
                  <Icon size={20} color="#1e40af" />
                </div>
                {/* Step label */}
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  color: "#1e40af", fontSize: "0.6rem",
                  fontWeight: 600, letterSpacing: "0.12em",
                  marginBottom: "8px",
                }}>
                  STEP {step.step}
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#1a1f2c", marginBottom: "10px" }}>
                  {step.title}
                </h3>
                <p style={{ color: "#64748b", fontSize: "0.88rem", lineHeight: 1.7 }}>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
