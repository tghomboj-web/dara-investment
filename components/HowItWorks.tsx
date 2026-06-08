"use client";

import { Settings, ScanLine, Send } from "lucide-react";

const steps = [
  {
    icon: Settings,
    step: "01",
    title: "Choose Your Profile",
    description:
      "Set your investment criteria: price range, score threshold, property types, and target ZIP codes in the Charlotte area.",
    accent: "#00d4aa",
  },
  {
    icon: ScanLine,
    step: "02",
    title: "Monitor Scans Selected ZIPs",
    description:
      "Our system runs daily scans across your selected Charlotte-area ZIP codes, checking listings against your criteria.",
    accent: "#f59e0b",
  },
  {
    icon: Send,
    step: "03",
    title: "Receive Daily Findings",
    description:
      "Get daily reports with new findings and recent opportunities delivered to your email or Telegram.",
    accent: "#00d4aa",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{ padding: "120px 32px" }}
      className="relative hiw-section"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="section-divider absolute bottom-0 left-0 right-0" />
      </div>

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
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Section header */}
        <div className="hiw-header" style={{ textAlign: "center", marginBottom: "72px" }}>
          <span style={{
            fontFamily: "'Space Mono', monospace",
            display: "inline-block", color: "#00d4aa",
            fontSize: "0.65rem", fontWeight: 700,
            letterSpacing: "0.15em", textTransform: "uppercase",
            marginBottom: "16px",
          }}>
            HOW IT WORKS
          </span>
          <h2 style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
            fontWeight: 700, color: "#f0f4f8",
            marginBottom: "16px", lineHeight: 1.2,
            letterSpacing: "-0.02em",
          }}>
            Three <span className="gradient-text">Simple Steps</span>
          </h2>
          <p style={{ color: "#8b9eb0", fontSize: "1rem", maxWidth: "480px", margin: "0 auto", lineHeight: 1.75 }}>
            Set your criteria, run daily scans, receive findings — automated and objective.
          </p>
        </div>

        {/* Cards grid */}
        <div className="hiw-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="hiw-card" style={{
                background: "#0d1117",
                border: `1px solid ${step.accent}22`,
                borderRadius: "12px",
                padding: "36px 28px",
                position: "relative",
                transition: "border-color 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = `${step.accent}44`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${step.accent}12`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = `${step.accent}22`;
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}>
                {/* Step number watermark */}
                <div style={{
                  position: "absolute", top: "16px", right: "20px",
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "2.5rem", fontWeight: 700,
                  color: `${step.accent}0d`,
                  lineHeight: 1, userSelect: "none",
                }}>
                  {step.step}
                </div>
                {/* Icon */}
                <div className="hiw-icon" style={{
                  width: "44px", height: "44px", borderRadius: "10px",
                  background: `${step.accent}12`,
                  border: `1px solid ${step.accent}25`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "24px",
                }}>
                  <Icon size={20} color={step.accent} />
                </div>
                {/* Step label */}
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  color: step.accent, fontSize: "0.62rem",
                  fontWeight: 700, letterSpacing: "0.12em",
                  marginBottom: "10px",
                }}>
                  STEP {step.step}
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#f0f4f8", marginBottom: "12px" }}>
                  {step.title}
                </h3>
                <p style={{ color: "#8b9eb0", fontSize: "0.88rem", lineHeight: 1.75 }}>
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
