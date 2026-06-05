"use client";

import Link from "next/link";
import { Search, ArrowRight, CheckCircle } from "lucide-react";

const featurePills = [
  "Daily Monitoring",
  "Score-Based Filtering",
  "Charlotte ZIP Profiles",
  "Email + Telegram Alerts",
];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{ minHeight: "100vh", paddingTop: "100px", paddingBottom: "80px" }}
      className="relative flex items-center overflow-hidden bg-grid"
    >
      {/* Glow orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full blur-3xl animate-pulse-glow"
          style={{ top: "20%", left: "10%", width: "400px", height: "400px", background: "rgba(99,102,241,0.18)" }}
        />
        <div
          className="absolute rounded-full blur-3xl animate-pulse-glow"
          style={{ bottom: "15%", right: "10%", width: "350px", height: "350px", background: "rgba(139,92,246,0.15)", animationDelay: "1s" }}
        />
      </div>

      <div
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", width: "100%" }}
        className="grid lg:grid-cols-2 gap-16 items-center"
      >
        {/* Left — text content */}
        <div style={{ position: "relative", zIndex: 10 }}>
          {/* Beta Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "8px 16px", borderRadius: "999px",
            background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.3)",
            color: "#a5b4fc", fontSize: "0.85rem", fontWeight: 500,
            marginBottom: "32px",
          }}>
            <span style={{ width: "8px", height: "8px", background: "#4ade80", borderRadius: "50%", animation: "pulse 2s infinite" }} />
            Now in Beta — Charlotte Area
          </div>

          {/* Heading */}
          <h1 style={{
            fontSize: "clamp(2.2rem, 5vw, 3.75rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            color: "#fff",
            marginBottom: "28px",
          }}>
            Investment Property Monitor{" "}
            <span className="gradient-text">for Charlotte-Area</span>{" "}
            Investors
          </h1>

          {/* Description */}
          <p style={{
            color: "#9ca3af",
            fontSize: "1.1rem",
            lineHeight: 1.75,
            maxWidth: "520px",
            marginBottom: "36px",
          }}>
            Daily property findings based on objective investment criteria such as price, 
            score, listing status, price changes, and selected ZIP-code profiles.
          </p>

          {/* Feature Pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "36px" }}>
            {featurePills.map((feature) => (
              <div
                key={feature}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  padding: "8px 16px", borderRadius: "8px",
                  background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                  color: "#d1d5db", fontSize: "0.85rem", fontWeight: 500,
                }}
              >
                <CheckCircle size={14} color="#4ade80" />
                {feature}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginBottom: "36px" }}>
            <Link
              href="/pro"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "16px 28px", borderRadius: "14px",
                background: "linear-gradient(135deg,#6366f1,#9333ea)", color: "#fff",
                fontWeight: 600, fontSize: "1rem", textDecoration: "none",
                boxShadow: "0 0 40px rgba(99,102,241,0.35)",
              }}
            >
              <Search size={18} />
              Join Beta
            </Link>
            <Link
              href="#sample-report"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "16px 28px", borderRadius: "14px",
                border: "1px solid rgba(255,255,255,0.2)", color: "#fff",
                fontWeight: 600, fontSize: "1rem", textDecoration: "none",
                transition: "border-color 0.2s",
              }}
            >
              View Sample Report
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Trust badges */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
            {["Charlotte-area focused", "Email + Telegram alerts", "Daily monitoring"].map((t) => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: "6px", color: "#6b7280", fontSize: "0.875rem" }}>
                <span style={{ color: "#4ade80", fontWeight: 700, fontSize: "1rem" }}>✓</span>
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Right — Animated Preview Card */}
        <div className="hidden lg:flex flex-col gap-5" style={{ paddingTop: "16px" }}>
          <style>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
            }
            @keyframes glow-pulse {
              0%, 100% { box-shadow: 0 0 30px rgba(99,102,241,0.2); }
              50% { box-shadow: 0 0 50px rgba(99,102,241,0.4); }
            }
            @keyframes count-up {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes shimmer {
              0% { background-position: -200% 0; }
              100% { background-position: 200% 0; }
            }
            @keyframes tag-pulse {
              0%, 100% { opacity: 0.8; }
              50% { opacity: 1; }
            }
            .preview-card {
              animation: float 4s ease-in-out infinite, glow-pulse 3s ease-in-out infinite;
            }
            .stat-number {
              animation: count-up 0.8s ease-out forwards;
            }
            .stat-number:nth-child(2) { animation-delay: 0.2s; }
            .tag-shimmer {
              background: linear-gradient(90deg, rgba(74,222,128,0.1) 0%, rgba(74,222,128,0.2) 50%, rgba(74,222,128,0.1) 100%);
              background-size: 200% auto;
              animation: shimmer 3s linear infinite;
            }
          `}</style>
          
          <div
            className="card-glass rounded-2xl p-6 border border-white/10 preview-card"
            style={{
              background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.15))",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Live indicator */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
              <span 
                style={{
                  display: "inline-flex", alignItems: "center", gap: "4px",
                  padding: "3px 10px", borderRadius: "20px",
                  background: "rgba(74,222,128,0.15)", border: "1px solid rgba(74,222,128,0.3)",
                  color: "#4ade80", fontSize: "0.7rem", fontWeight: 600,
                }}
              >
                <span style={{ width: "6px", height: "6px", background: "#4ade80", borderRadius: "50%", animation: "dot-pulse 2s infinite" }} />
                LIVE
              </span>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <p style={{ color: "#818cf8", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>
                Daily Report Preview
              </p>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>
                Charlotte Investment Monitor
              </h3>
              <p style={{ color: "#9ca3af", fontSize: "0.9rem" }}>
                June 4, 2025
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                <span style={{ color: "#6b7280", fontSize: "0.85rem" }}>New findings today</span>
                <span className="stat-number" style={{ color: "#4ade80", fontWeight: 800, fontSize: "1.5rem" }}>12</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#6b7280", fontSize: "0.85rem" }}>Top findings (last 14 days)</span>
                <span className="stat-number" style={{ color: "#818cf8", fontWeight: 800, fontSize: "1.5rem", animationDelay: "0.2s" }}>28</span>
              </div>
            </div>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "16px" }}>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {["Score 70+", "Under $400K", "Recent listings"].map((tag, i) => (
                  <span
                    key={tag}
                    className="tag-shimmer"
                    style={{
                      padding: "4px 10px", borderRadius: "6px",
                      border: "1px solid rgba(74,222,128,0.3)",
                      color: "#4ade80", fontSize: "0.75rem", fontWeight: 500,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
