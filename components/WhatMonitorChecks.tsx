"use client";

import { DollarSign, Percent, Clock, MapPin, Home, TrendingUp, AlertCircle, Shield } from "lucide-react";

const checks = [
  {
    icon: DollarSign,
    title: "Price Range",
    description: "Min/max price filters to match your budget and investment capacity.",
  },
  {
    icon: Percent,
    title: "Score Threshold",
    description: "Minimum investment score (0-100) based on multiple data points.",
  },
  {
    icon: Clock,
    title: "Listing Status",
    description: "New listings, price drops, back on market, and days on market.",
  },
  {
    icon: MapPin,
    title: "ZIP-Code Profiles",
    description: "Monitor specific Charlotte-area ZIP codes you define.",
  },
  {
    icon: Home,
    title: "Property Characteristics",
    description: "Property type, beds, baths, square footage, and year built.",
  },
  {
    icon: TrendingUp,
    title: "Market Signals",
    description: "AVM estimates, rent estimates, payment ratios, and market trends.",
  },
  {
    icon: AlertCircle,
    title: "Deal Alerts",
    description: "Price-drop thresholds and below-estimate opportunities.",
  },
  {
    icon: Shield,
    title: "Data Quality",
    description: "Filters to exclude low-confidence estimates and missing data.",
  },
];

export default function WhatMonitorChecks() {
  return (
    <section
      id="what-we-check"
      style={{ padding: "100px 32px", position: "relative" }}
      className="bg-[#080c10]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="section-divider absolute top-0 left-0 right-0" />
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span style={{
            fontFamily: "'Space Mono', monospace",
            display: "inline-block", color: "#00d4aa",
            fontSize: "0.65rem", fontWeight: 700,
            letterSpacing: "0.15em", textTransform: "uppercase",
            marginBottom: "14px",
          }}>
            WHAT WE MONITOR
          </span>
          <h2 style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
            fontWeight: 700, color: "#f0f4f8",
            marginBottom: "14px", lineHeight: 1.2, letterSpacing: "-0.02em",
          }}>
            What the <span className="gradient-text">Monitor Checks</span>
          </h2>
          <p style={{ color: "#8b9eb0", fontSize: "1rem", maxWidth: "480px", margin: "0 auto", lineHeight: 1.75 }}>
            Objective criteria applied consistently across all monitored properties.
          </p>
        </div>

        {/* Checks grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "16px" }}>
          {checks.map((check, i) => {
            const Icon = check.icon;
            const isAmber = i % 4 === 1 || i % 4 === 2;
            const accent = isAmber ? "#f59e0b" : "#00d4aa";
            return (
              <div key={i} style={{
                padding: "24px",
                borderRadius: "10px",
                background: "#0d1117",
                border: `1px solid ${accent}15`,
                transition: "border-color 0.25s, box-shadow 0.25s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = `${accent}30`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${accent}0a`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = `${accent}15`;
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}>
                <div style={{
                  width: "38px", height: "38px", borderRadius: "8px",
                  background: `${accent}10`,
                  border: `1px solid ${accent}20`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "14px",
                }}>
                  <Icon size={17} color={accent} />
                </div>
                <h3 style={{ fontSize: "0.9rem", fontWeight: 600, color: "#f0f4f8", marginBottom: "6px" }}>
                  {check.title}
                </h3>
                <p style={{ color: "#8b9eb0", fontSize: "0.82rem", lineHeight: 1.65 }}>
                  {check.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
