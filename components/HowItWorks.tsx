"use client";

import { Bot, Filter, Bell, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Bot,
    step: "01",
    title: "Algorithm Scans Listings",
    description:
      "Our automated system connects to multiple property APIs and scans thousands of listings every day across target markets.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
  },
  {
    icon: Filter,
    step: "02",
    title: "Smart Filtering Applied",
    description:
      "Properties are filtered by investment criteria — cap rate, cash flow, price range, property type, and your chosen zip codes.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    icon: Bell,
    step: "03",
    title: "Alerts Sent to Telegram",
    description:
      "Qualifying properties are instantly formatted and delivered to your Telegram — free channel or your private personalized feed.",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "You Make the Move",
    description:
      "Review deals on your schedule, analyze the numbers, and act fast before the market does. Every day is a new opportunity.",
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
            The Process
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
            How <span className="gradient-text">Dara Investment</span> Works
          </h2>
          <p style={{ color: "#9ca3af", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
            From API scan to your Telegram in minutes — fully automated, every single day.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
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
