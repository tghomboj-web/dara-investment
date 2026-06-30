"use client";

import React from "react";
import Link from "next/link";
import { Check, ArrowRight, Star } from "lucide-react";

const tiers = [
  {
    name: "Free",
    tier: "Tier 0",
    price: "$0",
    period: "forever",
    description: "Default Charlotte monitoring with standard filters. Limited daily findings.",
    cta: "Start Free",
    ctaHref: "/free",
    ctaStyle: "outline",
    features: [
      "Default Charlotte ZIP codes (5 areas)",
      "Standard score threshold (65+)",
      "Up to 5 findings per day",
      "Daily email digest",
    ],
  },
  {
    name: "Basic",
    tier: "Tier 1",
    price: "$9",
    period: "/month",
    description: "Add custom location, property type, and price range filters.",
    cta: "Choose This Plan",
    ctaHref: "/basic",
    ctaStyle: "primary",
    popular: false,
    features: [
      "Everything in Free",
      "Custom price range filter",
      "Property type selection",
      "Beds/baths filter",
      "Up to 5 custom ZIP codes",
    ],
  },
  {
    name: "Smart",
    tier: "Tier 2",
    price: "$19",
    period: "/month",
    description: "Investment strategy filters with AVM discount and rental metrics.",
    cta: "Choose This Plan",
    ctaHref: "/smart",
    ctaStyle: "primary",
    popular: true,
    features: [
      "Everything in Basic",
      "Investment strategy selection",
      "Minimum AVM discount filter",
      "Rent/payment ratio filter",
      "Max days on market filter",
      "Up to 10 custom ZIP codes",
    ],
  },
  {
    name: "Pro",
    tier: "Tier 3",
    price: "$39",
    period: "/month",
    description: "Advanced property, financial, and data-quality filters.",
    cta: "Choose This Plan",
    ctaHref: "/pro",
    ctaStyle: "primary",
    popular: false,
    features: [
      "Everything in Smart",
      "Square footage range",
      "Year built range",
      "Lot size & HOA filters",
      "Data-quality & confidence flags",
      "Up to 15 custom ZIP codes",
    ],
  },
];

const featureRowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  gap: "10px",
  fontSize: "0.85rem",
  marginBottom: "12px",
  lineHeight: 1.5,
};

const comparisonFeatures = [
  { name: "ZIP Codes", free: "5 default", basic: "5 custom", smart: "10 custom", pro: "15 custom" },
  { name: "Daily Findings", free: "Up to 5", basic: "Up to 20", smart: "Up to 50", pro: "Unlimited" },
  { name: "Email Alerts", free: "✓", basic: "✓", smart: "✓", pro: "✓" },
  { name: "Telegram Alerts", free: "✗", basic: "✓", smart: "✓", pro: "✓" },
  { name: "Price Range Filter", free: "✗", basic: "✓", smart: "✓", pro: "✓" },
  { name: "Property Type Filter", free: "✗", basic: "✓", smart: "✓", pro: "✓" },
  { name: "Beds/Baths Filter", free: "✗", basic: "✓", smart: "✓", pro: "✓" },
  { name: "Investment Strategy", free: "✗", basic: "✗", smart: "✓", pro: "✓" },
  { name: "AVM Discount Filter", free: "✗", basic: "✗", smart: "✓", pro: "✓" },
  { name: "Rent/Payment Ratio", free: "✗", basic: "✗", smart: "✓", pro: "✓" },
  { name: "Days on Market Filter", free: "✗", basic: "✗", smart: "✓", pro: "✓" },
  { name: "Sqft/Year Built/Lot Size", free: "✗", basic: "✗", smart: "✗", pro: "✓" },
  { name: "Data Quality Filters", free: "✗", basic: "✗", smart: "✗", pro: "✓" },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      style={{ padding: "100px 24px", position: "relative", background: "#f8f9fa" }}
      className="pricing-section"
    >
      <style>{`
        @media (max-width: 768px) {
          .pricing-section { padding: 52px 20px !important; }
          .pricing-header { margin-bottom: 32px !important; }
          .pricing-grid { grid-template-columns: 1fr !important; gap: 12px !important; }
          .pricing-card { padding: 22px 18px !important; }
          .comparison-table { overflow-x: auto !important; }
          .comparison-table table { min-width: 600px !important; }
        }
      `}</style>
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div className="pricing-header" style={{ textAlign: "center", marginBottom: "64px" }}>
          <span style={{
            fontFamily: "'Space Mono', monospace",
            display: "inline-block", color: "#1e40af",
            fontSize: "0.65rem", fontWeight: 600,
            letterSpacing: "0.15em", textTransform: "uppercase",
            marginBottom: "14px",
          }}>
            SUBSCRIPTION LEVELS
          </span>
          <h2 style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700,
            color: "#1a1f2c", marginBottom: "14px", lineHeight: 1.2, letterSpacing: "-0.02em",
          }}>
            Choose Your <span className="gradient-text">Monitor Level</span>
          </h2>
          <p style={{ color: "#64748b", fontSize: "1rem", maxWidth: "520px", margin: "0 auto", lineHeight: 1.75 }}>
            Start with the Free tier to see sample findings. Upgrade to add custom filters and expand your search.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", alignItems: "stretch", marginBottom: "64px" }}>
          {tiers.map((tier) => (
            <div
              key={tier.name}
              style={{
                background: "#ffffff",
                borderRadius: "12px",
                padding: "28px 24px",
                border: tier.popular ? "2px solid #1e40af" : "1px solid #e2e8f0",
                boxShadow: tier.popular ? "0 4px 20px rgba(30, 64, 175, 0.1)" : "0 1px 3px rgba(0,0,0,0.04)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
              className="pricing-card"
            >
              {tier.popular && (
                <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)" }}>
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: "4px",
                    padding: "4px 12px", borderRadius: "999px",
                    background: "#1e40af",
                    color: "#ffffff", fontSize: "0.65rem", fontWeight: 600,
                    fontFamily: "'Space Mono', monospace",
                  }}>
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier badge */}
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.6rem", color: "#64748b", fontWeight: 600,
                letterSpacing: "0.15em", textTransform: "uppercase",
                marginBottom: "8px",
              }}>
                {tier.tier}
              </span>

              {/* Name & Price */}
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#1a1f2c", marginBottom: "4px" }}>
                {tier.name}
              </h3>
              <div style={{ display: "flex", alignItems: "flex-end", gap: "4px", marginBottom: "12px" }}>
                <span style={{ fontSize: "2.2rem", fontWeight: 900, color: "#1a1f2c", lineHeight: 1 }}>{tier.price}</span>
                <span style={{ color: "#64748b", fontSize: "0.85rem", paddingBottom: "4px" }}>{tier.period}</span>
              </div>
              <p style={{ color: "#64748b", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: "20px", minHeight: "48px" }}>
                {tier.description}
              </p>

              {/* CTA */}
              <Link
                href={tier.ctaHref}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                  width: "100%", padding: "12px 20px", borderRadius: "8px",
                  background: tier.ctaStyle === "primary" ? "#1e40af" : "transparent",
                  border: tier.ctaStyle === "outline" ? "1px solid #e2e8f0" : "none",
                  color: tier.ctaStyle === "primary" ? "#ffffff" : "#475569",
                  fontWeight: 600, fontSize: "0.85rem",
                  textDecoration: "none", marginBottom: "20px",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={e => {
                  if (tier.ctaStyle === "primary") {
                    (e.currentTarget as HTMLElement).style.background = "#1e3a8a";
                  } else {
                    (e.currentTarget as HTMLElement).style.borderColor = "#1e40af";
                    (e.currentTarget as HTMLElement).style.color = "#1e40af";
                  }
                }}
                onMouseLeave={e => {
                  if (tier.ctaStyle === "primary") {
                    (e.currentTarget as HTMLElement).style.background = "#1e40af";
                  } else {
                    (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
                    (e.currentTarget as HTMLElement).style.color = "#475569";
                  }
                }}
              >
                {tier.cta}
                <ArrowRight size={14} />
              </Link>

              {/* Features */}
              <div style={{ flex: 1 }}>
                {tier.features.map((f, i) => (
                  <div key={i} style={featureRowStyle}>
                    <Check size={13} style={{ color: "#1e40af", flexShrink: 0, marginTop: "3px" }} />
                    <span style={{ color: "#475569" }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="comparison-table" style={{ marginTop: "48px", background: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", overflow: "hidden" }}>
          <div style={{ padding: "20px 24px", borderBottom: "1px solid #e2e8f0", background: "#fcfcfd" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#1a1f2c", margin: 0 }}>Feature Comparison</h3>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "700px" }}>
              <thead>
                <tr style={{ background: "#f8f9fa" }}>
                  <th style={{ textAlign: "left", padding: "14px 24px", fontSize: "0.85rem", fontWeight: 600, color: "#64748b", borderBottom: "1px solid #e2e8f0" }}>Feature</th>
                  <th style={{ textAlign: "center", padding: "14px 16px", fontSize: "0.85rem", fontWeight: 600, color: "#1a1f2c", borderBottom: "1px solid #e2e8f0" }}>Free</th>
                  <th style={{ textAlign: "center", padding: "14px 16px", fontSize: "0.85rem", fontWeight: 600, color: "#1a1f2c", borderBottom: "1px solid #e2e8f0" }}>Basic</th>
                  <th style={{ textAlign: "center", padding: "14px 16px", fontSize: "0.85rem", fontWeight: 600, color: "#1e40af", borderBottom: "1px solid #e2e8f0" }}>Smart</th>
                  <th style={{ textAlign: "center", padding: "14px 16px", fontSize: "0.85rem", fontWeight: 600, color: "#1a1f2c", borderBottom: "1px solid #e2e8f0" }}>Pro</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #f1f5f9" }}>
                    <td style={{ padding: "14px 24px", fontSize: "0.85rem", color: "#475569", fontWeight: 500 }}>{feature.name}</td>
                    <td style={{ padding: "14px 16px", fontSize: "0.85rem", color: "#64748b", textAlign: "center" }}>{feature.free}</td>
                    <td style={{ padding: "14px 16px", fontSize: "0.85rem", color: "#64748b", textAlign: "center" }}>{feature.basic}</td>
                    <td style={{ padding: "14px 16px", fontSize: "0.85rem", color: "#1e40af", fontWeight: 500, textAlign: "center" }}>{feature.smart}</td>
                    <td style={{ padding: "14px 16px", fontSize: "0.85rem", color: "#64748b", textAlign: "center" }}>{feature.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Note */}
        <p style={{ textAlign: "center", color: "#64748b", fontSize: "0.82rem", marginTop: "32px", lineHeight: 1.6 }}>
          All tiers include daily monitoring. Upgrade or downgrade anytime. Cancel anytime. Free tier limited to 5 findings per day.
        </p>
      </div>
    </section>
  );
}
