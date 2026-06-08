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
    description: "Free alerts only. Basic daily monitoring with standard criteria.",
    cta: "Join Free",
    ctaStyle: "outline",
    features: [
      "Daily email digest",
      "Standard score threshold",
      "Default Charlotte ZIPs",
      "Limited findings per day",
    ],
    notIncluded: [
      "Custom filters",
      "Telegram alerts",
      "Price range selection",
      "Property type filters",
    ],
  },
  {
    name: "Basic",
    tier: "Tier 1",
    price: "$9",
    period: "/month",
    description: "Essential filters for starting investors.",
    cta: "Get Basic",
    ctaStyle: "primary",
    popular: false,
    features: [
      "Everything in Free",
      "Price range filter",
      "Property type selection",
      "Beds/baths filter",
      "Minimum score (45+)",
      "Deal signals: new listings, price drops",
      "Notification preferences (Email, Telegram, SMS)",
      "Up to 5 ZIP codes",
    ],
    notIncluded: [],
  },
  {
    name: "Smart",
    tier: "Tier 2",
    price: "$19",
    period: "/month",
    description: "Smart investment controls for serious investors.",
    cta: "Get Smart",
    ctaStyle: "primary",
    popular: true,
    features: [
      "Everything in Basic",
      "Investment strategy: Balanced, Rental, Flip, Value-gap",
      "Minimum AVM discount (10%+ below estimate)",
      "Rent/payment ratio filter",
      "Max days on market (30/60/90)",
      "Price-drop alert threshold",
      "Recent finds window (7/14/30 days)",
      "Up to 10 ZIP codes",
    ],
    notIncluded: [],
  },
  {
    name: "Pro",
    tier: "Tier 3",
    price: "$39",
    period: "/month",
    description: "Advanced controls for professional investors.",
    cta: "Get Pro",
    ctaStyle: "primary",
    popular: false,
    features: [
      "Everything in Smart",
      "Square footage range",
      "Year built range",
      "Lot size filter",
      "Maximum HOA filter",
      "Exclude missing AVM/rent data",
      "Exclude low-confidence estimates",
      "Data-quality flags",
      "Separate rental and flip scores",
      "Up to 15 ZIP codes",
      "Priority support",
    ],
    notIncluded: [],
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

export default function Pricing() {
  return (
    <section
      id="pricing"
      style={{ padding: "120px 32px", position: "relative" }}
    >
      {/* Background glow */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: "600px", height: "600px",
          background: "rgba(0,212,170,0.05)",
          borderRadius: "50%", filter: "blur(80px)",
        }} />
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <span style={{
            fontFamily: "'Space Mono', monospace",
            display: "inline-block", color: "#00d4aa",
            fontSize: "0.65rem", fontWeight: 700,
            letterSpacing: "0.15em", textTransform: "uppercase",
            marginBottom: "16px",
          }}>
            PRICING
          </span>
          <h2 style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", fontWeight: 700,
            color: "#f0f4f8", marginBottom: "16px", lineHeight: 1.2, letterSpacing: "-0.02em",
          }}>
            Choose Your <span className="gradient-text">Monitor Level</span>
          </h2>
          <p style={{ color: "#8b9eb0", fontSize: "1rem", maxWidth: "520px", margin: "0 auto", lineHeight: 1.75 }}>
            Four levels of control. Start free, upgrade as your strategy evolves.
          </p>
        </div>

        {/* Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", alignItems: "stretch" }}>
          {tiers.map((tier) => (
            <div
              key={tier.name}
              style={{
                background: "#0d1117",
                borderRadius: "12px",
                padding: "32px 24px",
                border: tier.popular ? "1px solid rgba(0,212,170,0.35)" : "1px solid rgba(0,212,170,0.1)",
                boxShadow: tier.popular ? "0 0 40px rgba(0,212,170,0.1)" : "none",
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {tier.popular && (
                <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)" }}>
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: "4px",
                    padding: "4px 12px", borderRadius: "999px",
                    background: "#0d1117",
                    border: "1px solid rgba(0,212,170,0.4)",
                    color: "#00d4aa", fontSize: "0.65rem", fontWeight: 700,
                    fontFamily: "'Space Mono', monospace",
                  }}>
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier badge */}
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.6rem", color: "#4a5e72", fontWeight: 700,
                letterSpacing: "0.15em", textTransform: "uppercase",
                marginBottom: "8px",
              }}>
                {tier.tier}
              </span>

              {/* Name & Price */}
              <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#f0f4f8", marginBottom: "4px" }}>
                {tier.name}
              </h3>
              <div style={{ display: "flex", alignItems: "flex-end", gap: "4px", marginBottom: "12px" }}>
                <span style={{ fontSize: "2.5rem", fontWeight: 900, color: "#fff", lineHeight: 1 }}>{tier.price}</span>
                <span style={{ color: "#4a5e72", fontSize: "0.85rem", paddingBottom: "4px" }}>{tier.period}</span>
              </div>
              <p style={{ color: "#8b9eb0", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: "24px", minHeight: "40px" }}>
                {tier.description}
              </p>

              {/* CTA */}
              <Link
                href="/pro"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                  width: "100%", padding: "12px 20px", borderRadius: "10px",
                  background: tier.ctaStyle === "primary" ? "#00d4aa" : "transparent",
                  border: tier.ctaStyle === "outline" ? "1px solid rgba(0,212,170,0.2)" : "none",
                  color: tier.ctaStyle === "primary" ? "#080c10" : "#8b9eb0",
                  fontWeight: 700, fontSize: "0.85rem",
                  textDecoration: "none", marginBottom: "24px",
                }}
              >
                {tier.cta}
                <ArrowRight size={14} />
              </Link>

              {/* Features */}
              <div style={{ flex: 1 }}>
                {tier.features.map((f, i) => (
                  <div key={i} style={featureRowStyle}>
                    <Check size={13} style={{ color: "#00d4aa", flexShrink: 0, marginTop: "3px" }} />
                    <span style={{ color: "#8b9eb0" }}>{f}</span>
                  </div>
                ))}
                {tier.notIncluded?.map((f, i) => (
                  <div key={`no-${i}`} style={featureRowStyle}>
                    <span style={{ width: "14px", flexShrink: 0, color: "#374151", textAlign: "center", marginTop: "3px" }}>—</span>
                    <span style={{ color: "#2a3a4a" }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p style={{ textAlign: "center", color: "#4a5e72", fontSize: "0.78rem", fontFamily: "'Space Mono', monospace", marginTop: "48px" }}>
          All tiers include daily monitoring. Upgrade or downgrade anytime. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
