"use client";

import Link from "next/link";
import { Search, ArrowRight, CheckCircle, Home } from "lucide-react";

const featurePills = [
  "Daily Monitoring",
  "Score-Based Filtering",
  "Charlotte ZIP Profiles",
  "Email + Telegram Alerts",
];

const scrollingProperties = [
  { address: "4521 Oakwood Ave, Charlotte", beds: 3, baths: 2, price: "$285,000", score: 78, status: "Just Listed", badge: "green" },
  { address: "8923 Park Ridge Dr, Charlotte", beds: 4, baths: 2.5, price: "$340,000", score: 72, status: "Price Drop", badge: "yellow" },
  { address: "1567 Maple Creek Rd, Charlotte", beds: 3, baths: 2, price: "$265,000", score: 69, status: "Back on Market", badge: "purple" },
  { address: "2314 Riverbend Rd, Charlotte", beds: 3, baths: 2, price: "$320,000", score: 84, status: "New Listing", badge: "green" },
  { address: "7896 Hunters Pointe, Charlotte", beds: 4, baths: 3, price: "$295,000", score: 81, status: "Just Listed", badge: "green" },
  { address: "5432 Mountain View, Charlotte", beds: 3, baths: 2.5, price: "$310,000", score: 75, status: "Price Drop", badge: "yellow" },
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

        {/* Right — Scrolling Property Ticker */}
        <div className="hidden lg:flex flex-col gap-5" style={{ paddingTop: "16px", width: "380px" }}>
          <style>{`
            @keyframes scroll-up {
              0% { transform: translateY(0); }
              100% { transform: translateY(-50%); }
            }
            @keyframes fade-edge {
              0%, 100% { opacity: 0.3; }
              50% { opacity: 1; }
            }
            .property-scroll {
              animation: scroll-up 20s linear infinite;
            }
            .property-scroll:hover {
              animation-play-state: paused;
            }
            .property-card {
              transition: all 0.3s ease;
            }
            .property-card:hover {
              transform: scale(1.02);
              background: rgba(255,255,255,0.08) !important;
            }
          `}</style>
          
          <div
            className="card-glass rounded-2xl border border-white/10 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.1))",
              backdropFilter: "blur(20px)",
              height: "320px",
            }}
          >
            {/* Header */}
            <div style={{ padding: "16px 20px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <p style={{ color: "#818cf8", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    Live Monitor
                  </p>
                  <p style={{ color: "#fff", fontSize: "0.9rem", fontWeight: 600 }}>Charlotte Area</p>
                </div>
                <span 
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "4px",
                    padding: "3px 8px", borderRadius: "12px",
                    background: "rgba(74,222,128,0.15)", border: "1px solid rgba(74,222,128,0.3)",
                    color: "#4ade80", fontSize: "0.65rem", fontWeight: 600,
                  }}
                >
                  <span style={{ width: "5px", height: "5px", background: "#4ade80", borderRadius: "50%", animation: "dot-pulse 2s infinite" }} />
                  LIVE
                </span>
              </div>
            </div>

            {/* Scrolling Properties */}
            <div style={{ height: "240px", overflow: "hidden", position: "relative" }}>
              {/* Fade overlay top */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "30px", background: "linear-gradient(to bottom, rgba(10,10,15,0.8), transparent)", zIndex: 10, pointerEvents: "none" }} />
              
              {/* Fade overlay bottom */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "30px", background: "linear-gradient(to top, rgba(10,10,15,0.8), transparent)", zIndex: 10, pointerEvents: "none" }} />
              
              <div className="property-scroll" style={{ padding: "10px 16px" }}>
                {[...scrollingProperties, ...scrollingProperties].map((property, i) => (
                  <div
                    key={i}
                    className="property-card"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "12px",
                      marginBottom: "10px",
                      borderRadius: "10px",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "8px",
                        background: property.badge === "green" ? "rgba(74,222,128,0.15)" : property.badge === "yellow" ? "rgba(251,191,36,0.15)" : "rgba(139,92,246,0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Home size={16} color={property.badge === "green" ? "#4ade80" : property.badge === "yellow" ? "#fbbf24" : "#a78bfa"} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ color: "#fff", fontWeight: 500, fontSize: "0.8rem", marginBottom: "2px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {property.address}
                      </p>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ color: "#6b7280", fontSize: "0.7rem" }}>{property.beds}bd · {property.baths}ba</span>
                        <span style={{ color: property.badge === "green" ? "#4ade80" : property.badge === "yellow" ? "#fbbf24" : "#a78bfa", fontSize: "0.65rem", fontWeight: 600 }}>
                          {property.status}
                        </span>
                      </div>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <p style={{ color: "#fff", fontWeight: 700, fontSize: "0.85rem" }}>{property.price}</p>
                      <span style={{ color: "#818cf8", fontSize: "0.7rem", fontWeight: 600 }}>Score {property.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer stats */}
            <div style={{ padding: "10px 16px", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#6b7280", fontSize: "0.7rem" }}>12 new today</span>
              <span style={{ color: "#4ade80", fontSize: "0.7rem", fontWeight: 600 }}>Scanning 15 ZIPs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
