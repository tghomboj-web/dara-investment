"use client";

import React from "react";
import Link from "next/link";
import { Check, Send, ArrowRight, Star } from "lucide-react";

const freePlan = {
  name: "Free",
  price: "$0",
  period: "forever",
  description: "Join our curated Telegram channel and get daily investment property alerts.",
  cta: "Join Free Channel",
  ctaIcon: Send,
  features: [
    "Daily property alerts via Telegram",
    "Algorithm-selected opportunities",
    "Default zip codes & criteria",
    "Instant Telegram access",
    "Community channel format",
  ],
  missing: [
    "Custom zip codes",
    "Price range filters",
    "Property type selection",
    "Cap rate targets",
    "Private Telegram notifications",
  ],
};

const proPlan = {
  name: "Pro",
  price: "$29",
  period: "/month",
  description: "Fully personalized alerts sent directly to your Telegram number every day.",
  cta: "Get Pro Access",
  ctaIcon: ArrowRight,
  features: [
    "Everything in Free",
    "Custom zip codes (up to 10)",
    "Min/Max price range filters",
    "Property type preference",
    "Target cap rate & ROI",
    "Max days on market filter",
    "Private daily Telegram alerts",
    "Priority email support",
  ],
  missing: [],
};

const featureRowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  fontSize: "0.9rem",
  marginBottom: "16px",
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

      <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <span style={{
            display: "inline-block", color: "#818cf8",
            fontSize: "0.75rem", fontWeight: 700,
            letterSpacing: "0.15em", textTransform: "uppercase",
            marginBottom: "16px",
          }}>
            Simple Pricing
          </span>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800,
            color: "#fff", marginBottom: "20px", lineHeight: 1.2,
          }}>
            Choose Your <span className="gradient-text">Alert Plan</span>
          </h2>
          <p style={{ color: "#9ca3af", fontSize: "1.1rem", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
            Start free and upgrade when you&apos;re ready for a personalized deal flow.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px", alignItems: "start" }}>

          {/* Free card */}
          <div className="card-glass" style={{ borderRadius: "24px", padding: "48px 40px", border: "1px solid rgba(255,255,255,0.1)" }}>
            <div style={{ marginBottom: "36px" }}>
              <span style={{ fontSize: "0.75rem", color: "#9ca3af", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                {freePlan.name}
              </span>
              <div style={{ display: "flex", alignItems: "flex-end", gap: "6px", marginTop: "12px", marginBottom: "12px" }}>
                <span style={{ fontSize: "3.5rem", fontWeight: 900, color: "#fff", lineHeight: 1 }}>{freePlan.price}</span>
                <span style={{ color: "#6b7280", fontSize: "0.9rem", paddingBottom: "6px" }}>{freePlan.period}</span>
              </div>
              <p style={{ color: "#9ca3af", fontSize: "0.9rem", lineHeight: 1.7 }}>{freePlan.description}</p>
            </div>

            <a
              href="https://t.me/YOUR_CHANNEL"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                width: "100%", padding: "16px 24px", borderRadius: "14px",
                border: "1px solid rgba(255,255,255,0.2)", color: "#fff",
                fontWeight: 600, fontSize: "0.95rem", textDecoration: "none",
                marginBottom: "36px", transition: "border-color 0.2s",
              }}
            >
              <Send size={16} />
              {freePlan.cta}
            </a>

            <div>
              {freePlan.features.map((f, i) => (
                <div key={i} style={featureRowStyle}>
                  <Check size={16} style={{ color: "#4ade80", flexShrink: 0 }} />
                  <span style={{ color: "#d1d5db" }}>{f}</span>
                </div>
              ))}
              {freePlan.missing.map((f, i) => (
                <div key={i} style={featureRowStyle}>
                  <span style={{ width: "16px", flexShrink: 0, color: "#374151", textAlign: "center" }}>—</span>
                  <span style={{ color: "#4b5563" }}>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pro card */}
          <div
            className="card-glass glow-purple"
            style={{ borderRadius: "24px", padding: "48px 40px", border: "1px solid rgba(99,102,241,0.4)", position: "relative" }}
          >
            <div style={{ position: "absolute", top: "-18px", left: "50%", transform: "translateX(-50%)" }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                padding: "6px 16px", borderRadius: "999px",
                background: "linear-gradient(135deg,#6366f1,#9333ea)",
                color: "#fff", fontSize: "0.75rem", fontWeight: 700,
              }}>
                <Star size={11} fill="white" />
                Most Popular
              </span>
            </div>

            <div style={{ marginBottom: "36px" }}>
              <span style={{ fontSize: "0.75rem", color: "#818cf8", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                {proPlan.name}
              </span>
              <div style={{ display: "flex", alignItems: "flex-end", gap: "6px", marginTop: "12px", marginBottom: "12px" }}>
                <span style={{ fontSize: "3.5rem", fontWeight: 900, color: "#fff", lineHeight: 1 }}>{proPlan.price}</span>
                <span style={{ color: "#6b7280", fontSize: "0.9rem", paddingBottom: "6px" }}>{proPlan.period}</span>
              </div>
              <p style={{ color: "#9ca3af", fontSize: "0.9rem", lineHeight: 1.7 }}>{proPlan.description}</p>
            </div>

            <Link
              href="/pro"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                width: "100%", padding: "16px 24px", borderRadius: "14px",
                background: "linear-gradient(135deg,#6366f1,#9333ea)",
                color: "#fff", fontWeight: 600, fontSize: "0.95rem",
                textDecoration: "none", marginBottom: "36px",
              }}
            >
              {proPlan.cta}
              <ArrowRight size={16} />
            </Link>

            <div>
              {proPlan.features.map((f, i) => (
                <div key={i} style={featureRowStyle}>
                  <Check size={16} style={{ color: "#818cf8", flexShrink: 0 }} />
                  <span style={{ color: "#e5e7eb" }}>{f}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
