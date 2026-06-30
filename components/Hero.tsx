"use client";

import Link from "next/link";
import { ArrowRight, FileText, Home } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{ paddingTop: "120px", paddingBottom: "80px", background: "#ffffff" }}
      className="relative"
    >
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", width: "100%" }}
        className="grid lg:grid-cols-2 gap-16 items-center"
      >
        {/* Left — text content */}
        <div style={{ position: "relative", zIndex: 10 }}>
          {/* Market badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "6px 12px", borderRadius: "6px",
            background: "#f1f5f9", border: "1px solid #e2e8f0",
            marginBottom: "24px",
          }}>
            <span style={{
              fontFamily: "'Space Mono', monospace",
              color: "#1e40af", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em"
            }}>INITIAL MARKET</span>
            <span style={{ width: "1px", height: "12px", background: "#cbd5e1" }} />
            <span style={{ color: "#64748b", fontSize: "0.75rem" }}>Charlotte, NC</span>
          </div>

          {/* Heading */}
          <h1 style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            lineHeight: 1.15,
            color: "#1a1f2c",
            marginBottom: "20px",
            letterSpacing: "-0.02em",
          }}>
            Turn Daily Property Data Into{" "}
            <span className="gradient-text">Actionable Investment Opportunities</span>
          </h1>

          {/* Description */}
          <p style={{
            color: "#475569",
            fontSize: "1.05rem",
            lineHeight: 1.75,
            maxWidth: "520px",
            marginBottom: "32px",
          }}>
            Intelligent property monitoring built for real estate investors. Objective scoring, market signals, and daily reports delivered to your inbox.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
            <Link
              href="/free"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "14px 28px", borderRadius: "8px",
                background: "#1e40af", color: "#ffffff",
                fontWeight: 600, fontSize: "0.95rem", textDecoration: "none",
                letterSpacing: "0.01em",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "#1e3a8a";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "#1e40af";
              }}
            >
              Start Free
              <ArrowRight size={16} />
            </Link>
            <Link
              href="#sample-report"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "14px 24px", borderRadius: "8px",
                border: "1px solid #e2e8f0", color: "#475569",
                fontWeight: 500, fontSize: "0.95rem", textDecoration: "none",
                transition: "all 0.2s",
                background: "#ffffff",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "#1e40af";
                (e.currentTarget as HTMLElement).style.color = "#1e40af";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
                (e.currentTarget as HTMLElement).style.color = "#475569";
              }}
            >
              View Sample Report
            </Link>
          </div>

          <p style={{ color: "#64748b", fontSize: "0.82rem" }}>
            No credit card required for Free tier. Cancel anytime.
          </p>
        </div>

        {/* Right — Report Preview Card */}
        <div style={{ position: "relative" }}>
          <div style={{
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
          }}>
            {/* Header */}
            <div style={{
              padding: "16px 20px",
              borderBottom: "1px solid #f1f5f9",
              display: "flex", alignItems: "center", justifyContent: "space-between",
              background: "#fcfcfd",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{
                  width: "32px", height: "32px", borderRadius: "6px",
                  background: "rgba(30, 64, 175, 0.1)",
                  border: "1px solid rgba(30, 64, 175, 0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <FileText size={14} color="#1e40af" />
                </div>
                <div>
                  <p style={{ color: "#1a1f2c", fontWeight: 600, fontSize: "0.9rem" }}>Daily Report</p>
                  <p style={{ fontFamily: "'Space Mono', monospace", color: "#64748b", fontSize: "0.65rem" }}>June 30, 2026</p>
                </div>
              </div>
              <span style={{ fontFamily: "'Space Mono', monospace", color: "#64748b", fontSize: "0.62rem" }}>
                ILLUSTRATIVE
              </span>
            </div>

            {/* Sample Finding */}
            <div style={{ padding: "20px", background: "#ffffff" }}>
              <div style={{
                padding: "14px",
                borderRadius: "8px",
                background: "#f8f9fa",
                border: "1px solid #e2e8f0",
              }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "10px" }}>
                  <div style={{
                    width: "28px", height: "28px", borderRadius: "6px",
                    background: "rgba(16, 185, 129, 0.1)",
                    border: "1px solid rgba(16, 185, 129, 0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <Home size={12} color="#10b981" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ color: "#1a1f2c", fontWeight: 600, fontSize: "0.85rem", marginBottom: "2px" }}>
                      4521 Oakwood Ave, Charlotte
                    </p>
                    <p style={{ color: "#64748b", fontSize: "0.75rem" }}>
                      New Listing · Score 78
                    </p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ color: "#1a1f2c", fontWeight: 600, fontSize: "0.85rem" }}>$285,000</p>
                    <p style={{ fontFamily: "'Space Mono', monospace", color: "#64748b", fontSize: "0.65rem" }}>
                      AVM: $292K
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "12px", fontSize: "0.7rem", color: "#64748b" }}>
                  <span>3bd · 2ba · 1,850 sqft</span>
                  <span style={{ color: "#e2e8f0" }}>|</span>
                  <a href="#" style={{ color: "#1e40af", textDecoration: "none" }}>Verify on Zillow</a>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div style={{ padding: "16px 20px", background: "#f8f9fa", borderTop: "1px solid #e2e8f0" }}>
              <div style={{ display: "flex", gap: "32px" }}>
                <div>
                  <p style={{ color: "#64748b", fontSize: "0.7rem", marginBottom: "2px" }}>New findings</p>
                  <p style={{ fontFamily: "'Space Mono', monospace", color: "#1e40af", fontWeight: 600, fontSize: "1.1rem" }}>12</p>
                </div>
                <div>
                  <p style={{ color: "#64748b", fontSize: "0.7rem", marginBottom: "2px" }}>Top finds (14d)</p>
                  <p style={{ fontFamily: "'Space Mono', monospace", color: "#f59e0b", fontWeight: 600, fontSize: "1.1rem" }}>28</p>
                </div>
                <div>
                  <p style={{ color: "#64748b", fontSize: "0.7rem", marginBottom: "2px" }}>Score threshold</p>
                  <p style={{ fontFamily: "'Space Mono', monospace", color: "#1a1f2c", fontWeight: 600, fontSize: "1.1rem" }}>65+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
