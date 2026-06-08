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
      {/* Ambient glows — teal + amber */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute rounded-full blur-3xl animate-pulse-glow"
          style={{ top: "15%", left: "-5%", width: "500px", height: "500px", background: "rgba(0,212,170,0.09)" }} />
        <div className="absolute rounded-full blur-3xl animate-pulse-glow"
          style={{ bottom: "10%", right: "-5%", width: "420px", height: "420px", background: "rgba(245,158,11,0.07)", animationDelay: "1.5s" }} />
        <div className="absolute rounded-full blur-3xl"
          style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "700px", height: "300px", background: "rgba(0,212,170,0.03)" }} />
      </div>

      <div
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", width: "100%" }}
        className="grid lg:grid-cols-2 gap-16 items-center"
      >
        {/* Left — text content */}
        <div style={{ position: "relative", zIndex: 10 }}>
          {/* Beta Badge — terminal-style */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            padding: "6px 14px 6px 10px", borderRadius: "6px",
            background: "rgba(0,212,170,0.06)", border: "1px solid rgba(0,212,170,0.2)",
            marginBottom: "32px",
          }}>
            <span style={{
              fontFamily: "'Space Mono', monospace",
              color: "#00d4aa", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em"
            }}>BETA</span>
            <span style={{ width: "1px", height: "14px", background: "rgba(0,212,170,0.25)" }} />
            <span style={{ color: "#8b9eb0", fontSize: "0.8rem" }}>Charlotte Area · Free during beta</span>
          </div>

          {/* Heading */}
          <h1 style={{
            fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "#f0f4f8",
            marginBottom: "24px",
            letterSpacing: "-0.02em",
          }}>
            Daily Investment<br />
            Property Monitor{" "}
            <span className="gradient-text">for Charlotte</span>
          </h1>

          {/* Description */}
          <p style={{
            color: "#8b9eb0",
            fontSize: "1.05rem",
            lineHeight: 1.8,
            maxWidth: "500px",
            marginBottom: "36px",
          }}>
            Objective daily scans across Charlotte-area ZIPs. Every property scored 
            by price, listing status, and market signals — then delivered to your inbox.
          </p>

          {/* Feature Pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "36px" }}>
            {featurePills.map((feature) => (
              <div
                key={feature}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  padding: "6px 14px", borderRadius: "6px",
                  background: "rgba(0,212,170,0.06)", border: "1px solid rgba(0,212,170,0.15)",
                  color: "#8b9eb0", fontSize: "0.8rem", fontWeight: 500,
                }}
              >
                <CheckCircle size={13} color="#00d4aa" />
                {feature}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "36px" }}>
            <Link
              href="/pro"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "14px 28px", borderRadius: "8px",
                background: "#00d4aa", color: "#080c10",
                fontWeight: 700, fontSize: "0.95rem", textDecoration: "none",
                letterSpacing: "0.01em",
                boxShadow: "0 0 30px rgba(0,212,170,0.3)",
                transition: "all 0.2s ease",
              }}
            >
              <Search size={16} />
              Join Beta — Free
            </Link>
            <Link
              href="#sample-report"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "14px 24px", borderRadius: "8px",
                border: "1px solid rgba(0,212,170,0.2)", color: "#8b9eb0",
                fontWeight: 500, fontSize: "0.95rem", textDecoration: "none",
                transition: "all 0.2s",
              }}
            >
              View Sample Report
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Trust line */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
            {["Charlotte-area focused", "Email + Telegram alerts", "Daily monitoring"].map((t) => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: "6px", color: "#4a5e72", fontSize: "0.82rem" }}>
                <span style={{ color: "#00d4aa", fontWeight: 700, fontSize: "0.9rem" }}>✓</span>
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Right — Scrolling Property Ticker */}
        <div className="hidden lg:flex flex-col gap-5" style={{ paddingTop: "16px", width: "380px" }}>
          <style>{`
            .property-scroll { animation: scroll-up 22s linear infinite; }
            .property-scroll:hover { animation-play-state: paused; }
            .p-card { transition: all 0.25s ease; }
            .p-card:hover { background: rgba(0,212,170,0.06) !important; border-color: rgba(0,212,170,0.25) !important; }
          `}</style>
          
          <div style={{
            background: "#0d1117",
            border: "1px solid rgba(0,212,170,0.15)",
            borderRadius: "12px",
            overflow: "hidden",
            height: "320px",
            boxShadow: "0 0 40px rgba(0,212,170,0.08)",
          }}>
            {/* Header */}
            <div style={{
              padding: "12px 18px",
              borderBottom: "1px solid rgba(0,212,170,0.1)",
              display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontFamily: "'Space Mono', monospace", color: "#00d4aa", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em" }}>
                  DAILY MONITOR
                </span>
                <span style={{ color: "#4a5e72", fontSize: "0.65rem" }}>·</span>
                <span style={{ color: "#4a5e72", fontSize: "0.65rem" }}>Charlotte</span>
              </div>
              <span style={{ fontFamily: "'Space Mono', monospace", color: "#4a5e72", fontSize: "0.6rem" }}>
                12 new today
              </span>
            </div>

            {/* Scrolling Properties */}
            <div style={{ height: "262px", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "28px", background: "linear-gradient(to bottom, #0d1117, transparent)", zIndex: 10, pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "28px", background: "linear-gradient(to top, #0d1117, transparent)", zIndex: 10, pointerEvents: "none" }} />
              
              <div className="property-scroll" style={{ padding: "8px 12px" }}>
                {[...scrollingProperties, ...scrollingProperties].map((property, i) => (
                  <div key={i} className="p-card" style={{
                    display: "flex", alignItems: "center", gap: "10px",
                    padding: "10px 10px", marginBottom: "6px", borderRadius: "8px",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.04)",
                    cursor: "pointer",
                  }}>
                    <div style={{
                      width: "32px", height: "32px", borderRadius: "6px", flexShrink: 0,
                      background: property.badge === "green" ? "rgba(0,212,170,0.1)" : property.badge === "yellow" ? "rgba(245,158,11,0.1)" : "rgba(0,212,170,0.06)",
                      border: `1px solid ${property.badge === "green" ? "rgba(0,212,170,0.2)" : property.badge === "yellow" ? "rgba(245,158,11,0.2)" : "rgba(0,212,170,0.1)"}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Home size={14} color={property.badge === "yellow" ? "#f59e0b" : "#00d4aa"} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ color: "#f0f4f8", fontWeight: 500, fontSize: "0.78rem", marginBottom: "2px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {property.address}
                      </p>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ color: "#4a5e72", fontSize: "0.68rem" }}>{property.beds}bd · {property.baths}ba</span>
                        <span style={{ color: property.badge === "yellow" ? "#f59e0b" : "#00d4aa", fontSize: "0.62rem", fontWeight: 600 }}>
                          {property.status}
                        </span>
                      </div>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <p style={{ color: "#f0f4f8", fontWeight: 600, fontSize: "0.82rem" }}>{property.price}</p>
                      <span style={{ fontFamily: "'Space Mono', monospace", color: "#00d4aa", fontSize: "0.62rem" }}>
                        {property.score}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
