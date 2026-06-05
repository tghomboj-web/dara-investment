"use client";

import { Settings, ScanLine, Send } from "lucide-react";

const steps = [
  {
    icon: Settings,
    step: "01",
    title: "Choose Your Profile",
    description:
      "Set your investment criteria: price range, score threshold, property types, and target ZIP codes in the Charlotte area.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
  },
  {
    icon: ScanLine,
    step: "02",
    title: "Monitor Scans Selected ZIPs",
    description:
      "Our system runs daily scans across your selected Charlotte-area ZIP codes, checking listings against your criteria.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    icon: Send,
    step: "03",
    title: "Receive New Findings & Opportunities",
    description:
      "Get daily reports with new findings and recent opportunities delivered to your email or Telegram.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{ padding: "120px 32px" }}
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <span
            style={{
              display: "inline-block",
              color: "#818cf8",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            How It Works
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#fff",
              marginBottom: "20px",
              lineHeight: 1.2,
            }}
          >
            Three Simple <span className="gradient-text">Steps</span>
          </h2>
          <p style={{ color: "#9ca3af", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
            Set your criteria, monitor daily scans, receive findings — all automated and objective.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "28px",
          }}
        >
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className={`card-glass border ${step.border} group hover:scale-105 transition-transform duration-300`}
                style={{
                  borderRadius: "20px",
                  padding: "40px 32px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "24px",
                    fontSize: "3.5rem",
                    fontWeight: 900,
                    color: "rgba(255,255,255,0.04)",
                    userSelect: "none",
                    lineHeight: 1,
                  }}
                >
                  {step.step}
                </div>
                <div
                  className={`${step.bg}`}
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "28px",
                  }}
                >
                  <Icon size={24} className={step.color} />
                </div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff", marginBottom: "14px" }}>
                  {step.title}
                </h3>
                <p style={{ color: "#9ca3af", fontSize: "0.9rem", lineHeight: 1.75 }}>
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
