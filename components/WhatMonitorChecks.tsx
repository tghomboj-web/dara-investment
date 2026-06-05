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
      style={{ padding: "120px 32px", position: "relative" }}
      className="bg-[#0a0a0f]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
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
            What We Monitor
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
            What the <span className="gradient-text">Monitor Checks</span>
          </h2>
          <p style={{ color: "#9ca3af", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
            Objective criteria applied consistently across all monitored properties.
          </p>
        </div>

        {/* Checks grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
          }}
        >
          {checks.map((check, i) => {
            const Icon = check.icon;
            return (
              <div
                key={i}
                style={{
                  padding: "28px",
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "rgba(99,102,241,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                  }}
                >
                  <Icon size={20} color="#818cf8" />
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#fff", marginBottom: "8px" }}>
                  {check.title}
                </h3>
                <p style={{ color: "#6b7280", fontSize: "0.9rem", lineHeight: 1.6 }}>
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
