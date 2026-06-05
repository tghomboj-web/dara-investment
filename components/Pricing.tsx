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
          background: "rgba(99,102,241,0.08)",
          borderRadius: "50%", filter: "blur(80px)",
        }} />
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <span style={{
            display: "inline-block", color: "#818cf8",
            fontSize: "0.75rem", fontWeight: 700,
            letterSpacing: "0.15em", textTransform: "uppercase",
            marginBottom: "16px",
          }}>
            Subscription Tiers
          </span>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800,
            color: "#fff", marginBottom: "20px", lineHeight: 1.2,
          }}>
            Choose Your <span className="gradient-text">Monitor Level</span>
          </h2>
          <p style={{ color: "#9ca3af", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
            Four levels of control. Start free, upgrade as your investment strategy evolves.
          </p>
        </div>

        {/* Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", alignItems: "stretch" }}>
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`card-glass ${tier.popular ? "glow-purple" : ""}`}
              style={{
                borderRadius: "20px",
                padding: "36px 28px",
                border: tier.popular ? "1px solid rgba(99,102,241,0.4)" : "1px solid rgba(255,255,255,0.1)",
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
                    background: "linear-gradient(135deg,#6366f1,#9333ea)",
                    color: "#fff", fontSize: "0.7rem", fontWeight: 700,
                  }}>
                    <Star size={10} fill="white" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier badge */}
              <span style={{
                fontSize: "0.65rem", color: "#6b7280", fontWeight: 700,
                letterSpacing: "0.15em", textTransform: "uppercase",
                marginBottom: "8px",
              }}>
                {tier.tier}
              </span>

              {/* Name & Price */}
              <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#fff", marginBottom: "4px" }}>
                {tier.name}
              </h3>
              <div style={{ display: "flex", alignItems: "flex-end", gap: "4px", marginBottom: "12px" }}>
                <span style={{ fontSize: "2.5rem", fontWeight: 900, color: "#fff", lineHeight: 1 }}>{tier.price}</span>
                <span style={{ color: "#6b7280", fontSize: "0.85rem", paddingBottom: "4px" }}>{tier.period}</span>
              </div>
              <p style={{ color: "#9ca3af", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: "24px", minHeight: "40px" }}>
                {tier.description}
              </p>

              {/* CTA */}
              <Link
                href="/pro"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                  width: "100%", padding: "12px 20px", borderRadius: "10px",
                  background: tier.ctaStyle === "primary" ? "linear-gradient(135deg,#6366f1,#9333ea)" : "transparent",
                  border: tier.ctaStyle === "outline" ? "1px solid rgba(255,255,255,0.2)" : "none",
                  color: "#fff", fontWeight: 600, fontSize: "0.9rem",
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
                    <Check size={14} style={{ color: "#4ade80", flexShrink: 0, marginTop: "3px" }} />
                    <span style={{ color: "#d1d5db" }}>{f}</span>
                  </div>
                ))}
                {tier.notIncluded?.map((f, i) => (
                  <div key={`no-${i}`} style={featureRowStyle}>
                    <span style={{ width: "14px", flexShrink: 0, color: "#374151", textAlign: "center", marginTop: "3px" }}>—</span>
                    <span style={{ color: "#4b5563" }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p style={{ textAlign: "center", color: "#4b5563", fontSize: "0.8rem", marginTop: "48px" }}>
          All tiers include daily monitoring. Upgrade or downgrade anytime. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
