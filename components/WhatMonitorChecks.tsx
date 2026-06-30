"use client";

import { DollarSign, Percent, Clock, MapPin, Home, TrendingUp, Shield, Check } from "lucide-react";

const categories = [
  {
    name: "Location & Property Type",
    icon: MapPin,
    items: ["ZIP code selection", "Property type filters", "Custom search profiles"],
    tierNote: "Basic tier and above",
  },
  {
    name: "Price & Listing Activity",
    icon: DollarSign,
    items: ["Price range filters", "New listings", "Price drops", "Days on market"],
    tierNote: "Basic tier and above",
  },
  {
    name: "Investment Score & Signals",
    icon: Percent,
    items: ["Minimum score threshold", "AVM discount filters", "Deal signal detection"],
    tierNote: "Smart tier and above",
  },
  {
    name: "Rental & Valuation Metrics",
    icon: TrendingUp,
    items: ["Rent estimates", "Rent/payment ratio filters", "Comparable sales data"],
    tierNote: "Smart tier and above",
  },
  {
    name: "Property Characteristics",
    icon: Home,
    items: ["Beds, baths, square footage", "Year built range", "Lot size filters"],
    tierNote: "Pro tier only",
  },
  {
    name: "Data Quality & Confidence",
    icon: Shield,
    items: ["Low-confidence estimate filtering", "Missing data exclusion", "Data quality flags"],
    tierNote: "Pro tier only",
  },
];

export default function WhatMonitorChecks() {
  return (
    <section
      id="what-we-check"
      style={{ padding: "100px 24px", position: "relative" }}
      className="bg-[#ffffff]"
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span style={{
            fontFamily: "'Space Mono', monospace",
            display: "inline-block", color: "#1e40af",
            fontSize: "0.65rem", fontWeight: 600,
            letterSpacing: "0.15em", textTransform: "uppercase",
            marginBottom: "14px",
          }}>
            FILTERS & CRITERIA
          </span>
          <h2 style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
            fontWeight: 700, color: "#1a1f2c",
            marginBottom: "14px", lineHeight: 1.2, letterSpacing: "-0.02em",
          }}>
            What the <span className="gradient-text">Monitor Evaluates</span>
          </h2>
          <p style={{ color: "#64748b", fontSize: "1rem", maxWidth: "500px", margin: "0 auto", lineHeight: 1.75 }}>
            Objective criteria applied to every monitored property. Filter availability depends on your subscription tier.
          </p>
        </div>

        {/* Category Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px" }}>
          {categories.map((category, i) => {
            const Icon = category.icon;
            return (
              <div key={i} style={{
                padding: "24px",
                borderRadius: "12px",
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "#1e40af";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 12px rgba(30, 64, 175, 0.08)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)";
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                  <div style={{
                    width: "36px", height: "36px", borderRadius: "8px",
                    background: "rgba(30, 64, 175, 0.1)",
                    border: "1px solid rgba(30, 64, 175, 0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon size={16} color="#1e40af" />
                  </div>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 600, color: "#1a1f2c" }}>
                    {category.name}
                  </h3>
                </div>

                <ul style={{ listStyle: "none", padding: 0, margin: 0, marginBottom: "16px" }}>
                  {category.items.map((item, idx) => (
                    <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "8px", fontSize: "0.85rem", color: "#475569" }}>
                      <Check size={14} color="#1e40af" style={{ flexShrink: 0, marginTop: "2px" }} />
                      {item}
                    </li>
                  ))}
                </ul>

                <div style={{
                  padding: "8px 12px",
                  borderRadius: "6px",
                  background: category.tierNote.includes("Pro") ? "rgba(245, 158, 11, 0.08)" : "rgba(30, 64, 175, 0.08)",
                  border: category.tierNote.includes("Pro") ? "1px solid rgba(245, 158, 11, 0.15)" : "1px solid rgba(30, 64, 175, 0.15)",
                }}>
                  <p style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    color: category.tierNote.includes("Pro") ? "#f59e0b" : "#1e40af",
                    margin: 0,
                  }}>
                    {category.tierNote}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tier note */}
        <div style={{
          marginTop: "40px",
          padding: "16px 20px",
          borderRadius: "8px",
          background: "#f8f9fa",
          border: "1px solid #e2e8f0",
          textAlign: "center",
        }}>
          <p style={{ color: "#64748b", fontSize: "0.85rem", margin: 0 }}>
            Filter availability varies by subscription tier. <a href="#pricing" style={{ color: "#1e40af", fontWeight: 500, textDecoration: "none" }}>View pricing details</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
