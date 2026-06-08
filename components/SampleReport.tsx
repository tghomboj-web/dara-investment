"use client";

import { useState, useEffect } from "react";
import { FileText, Home, TrendingUp, Calendar, Star, ArrowRight, Activity, Sparkles } from "lucide-react";

const initialFindings = [
  {
    id: 1,
    address: "4521 Oakwood Ave, Charlotte, NC 28205",
    beds: 3,
    baths: 2,
    sqft: 1650,
    price: "$285,000",
    score: 78,
    status: "Just Listed",
    badge: "green",
    delay: 0,
  },
  {
    id: 2,
    address: "8923 Park Ridge Dr, Charlotte, NC 28210",
    beds: 4,
    baths: 2.5,
    sqft: 2100,
    price: "$340,000",
    score: 72,
    status: "Price Drop",
    badge: "yellow",
    delay: 200,
  },
  {
    id: 3,
    address: "1567 Maple Creek Rd, Charlotte, NC 28215",
    beds: 3,
    baths: 2,
    sqft: 1480,
    price: "$265,000",
    score: 69,
    status: "Back on Market",
    badge: "purple",
    delay: 400,
  },
];

const topFindings = [
  {
    id: 1,
    address: "2314 Riverbend Rd, Charlotte, NC 28214",
    price: "$320,000",
    score: 84,
    daysListed: "12 days ago",
    highlight: "High rental demand area",
  },
  {
    id: 2,
    address: "7896 Hunters Pointe, Charlotte, NC 28269",
    price: "$295,000",
    score: 81,
    daysListed: "8 days ago",
    highlight: "Recent comparable sales up 8%",
  },
];

export default function SampleReport() {
  const [mounted, setMounted] = useState(false);
  const [animatedFindings, setAnimatedFindings] = useState<number[]>([]);
  const [pulseStats, setPulseStats] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    initialFindings.forEach((finding) => {
      setTimeout(() => {
        setAnimatedFindings((prev) => [...prev, finding.id]);
      }, finding.delay + 500);
    });

    const pulseInterval = setInterval(() => {
      setPulseStats(true);
      setTimeout(() => setPulseStats(false), 600);
    }, 4000);

    return () => clearInterval(pulseInterval);
  }, []);

  return (
    <section
      id="sample-report"
      style={{ padding: "120px 32px" }}
      className="relative bg-[#080c10] sr-section"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="section-divider absolute top-0 left-0 right-0" />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .sr-section { padding: 52px 20px !important; }
          .sr-header { margin-bottom: 32px !important; }
          .sr-card-head { padding: 16px !important; }
          .sr-card-body { padding: 14px 16px !important; }
          .sr-stat-row { gap: 20px !important; margin-top: 14px !important; }
          .sr-top-grid { grid-template-columns: 1fr !important; gap: 10px !important; }
          .sr-cta { margin-top: 28px !important; }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(0,212,170,0.2); }
          50% { box-shadow: 0 0 40px rgba(0,212,170,0.45); }
        }
        .listing-card {
          transition: all 0.3s ease;
        }
        .listing-card:hover {
          transform: translateX(6px);
          background: rgba(0,212,170,0.04) !important;
          border-color: rgba(0,212,170,0.25) !important;
        }
        .stat-pulse {
          animation: pulse-glow 0.6s ease;
        }
        .animate-slide-in {
          animation: slideInUp 0.5s ease forwards;
        }
      `}</style>

      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {/* Section header */}
        <div className="sr-header" style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={{
            fontFamily: "'Space Mono', monospace",
            display: "inline-flex", alignItems: "center", gap: "8px",
            color: "#00d4aa", fontSize: "0.65rem", fontWeight: 700,
            letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "14px",
          }}>
            <Sparkles size={12} />
            SAMPLE REPORT
          </span>
          <h2 style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
            fontWeight: 700, color: "#f0f4f8",
            marginBottom: "14px", lineHeight: 1.2, letterSpacing: "-0.02em",
          }}>
            Your <span className="gradient-text">Daily Report</span> in Action
          </h2>
          <p style={{ color: "#8b9eb0", fontSize: "1rem", maxWidth: "520px", margin: "0 auto", lineHeight: 1.75 }}>
            See how properties are discovered, scored, and delivered each morning.
          </p>
        </div>

        {/* Animated Report Card */}
        <div
          style={{
            background: "#0d1117",
            borderRadius: "12px",
            border: "1px solid rgba(0,212,170,0.15)",
            overflow: "hidden",
            boxShadow: "0 0 60px rgba(0,212,170,0.07)",
          }}
        >
          {/* Report Header */}
          <div className="sr-card-head" style={{ padding: "28px 36px", borderBottom: "1px solid rgba(0,212,170,0.08)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "12px" }}>
              <div style={{
                width: "42px", height: "42px", borderRadius: "10px",
                background: "rgba(0,212,170,0.1)",
                border: "1px solid rgba(0,212,170,0.25)",
                display: "flex", alignItems: "center", justifyContent: "center",
                animation: mounted ? "pulse-glow 4s ease infinite" : "none",
              }}>
                <FileText size={20} color="#00d4aa" />
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#f0f4f8", marginBottom: "3px" }}>
                  Charlotte Investment Monitor
                </h3>
                <p style={{ fontFamily: "'Space Mono', monospace", color: "#4a5e72", fontSize: "0.68rem" }}>Daily Report — June 4, 2025</p>
              </div>
            </div>
            
            {/* Summary Stats with pulse */}
            <div className="sr-stat-row" style={{ display: "flex", gap: "32px", marginTop: "20px", flexWrap: "wrap" }}>
              <div className={pulseStats ? "stat-pulse" : ""} style={{ transition: "all 0.3s ease" }}>
                <span style={{ color: "#4a5e72", fontSize: "0.75rem", display: "block", marginBottom: "2px" }}>New findings today</span>
                <p style={{ fontFamily: "'Space Mono', monospace", color: "#00d4aa", fontWeight: 700, fontSize: "1.4rem" }}>12</p>
              </div>
              <div className={pulseStats ? "stat-pulse" : ""} style={{ transition: "all 0.3s ease" }}>
                <span style={{ color: "#4a5e72", fontSize: "0.75rem", display: "block", marginBottom: "2px" }}>Top findings (14 days)</span>
                <p style={{ fontFamily: "'Space Mono', monospace", color: "#f59e0b", fontWeight: 700, fontSize: "1.4rem" }}>28</p>
              </div>
              <div>
                <span style={{ color: "#4a5e72", fontSize: "0.75rem", display: "block", marginBottom: "2px" }}>Score threshold</span>
                <p style={{ fontFamily: "'Space Mono', monospace", color: "#f0f4f8", fontWeight: 700, fontSize: "1.4rem" }}>70+</p>
              </div>
            </div>
          </div>

          {/* Animated New Findings */}
          <div className="sr-card-body" style={{ padding: "24px 36px", borderBottom: "1px solid rgba(0,212,170,0.08)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "18px" }}>
              <Activity size={15} color="#f59e0b" />
              <h4 style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", fontWeight: 700, color: "#f0f4f8", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                New Findings Today
              </h4>
              <span style={{ 
                marginLeft: "auto", padding: "3px 10px", borderRadius: "6px",
                background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.2)",
                color: "#f59e0b", fontSize: "0.65rem", fontWeight: 600,
                fontFamily: "'Space Mono', monospace",
              }}>
                15 ZIPs
              </span>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {initialFindings.map((finding, index) => (
                <div
                  key={finding.id}
                  className={`listing-card ${animatedFindings.includes(finding.id) ? "animate-slide-in" : ""}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "16px 20px",
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    opacity: animatedFindings.includes(finding.id) ? 1 : 0,
                    transform: animatedFindings.includes(finding.id) ? "translateY(0)" : "translateY(20px)",
                    cursor: "pointer",
                  }}
                >
                  {/* Animated Icon */}
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "10px",
                      background: finding.badge === "green" ? "rgba(74,222,128,0.15)" : finding.badge === "yellow" ? "rgba(251,191,36,0.15)" : "rgba(139,92,246,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <Home 
                      size={20} 
                      color={finding.badge === "green" ? "#4ade80" : finding.badge === "yellow" ? "#fbbf24" : "#a78bfa"}
                    />
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
                      <p style={{ color: "#f0f4f8", fontWeight: 500, fontSize: "0.9rem" }}>
                        {finding.address}
                      </p>
                      {index === 0 && (
                        <span style={{
                          padding: "2px 8px", borderRadius: "4px",
                          background: "rgba(0,212,170,0.15)", color: "#00d4aa",
                          fontFamily: "'Space Mono', monospace",
                          fontSize: "0.6rem", fontWeight: 700,
                        }}>
                          NEW
                        </span>
                      )}
                    </div>
                    <div style={{ display: "flex", gap: "16px", color: "#4a5e72", fontSize: "0.75rem" }}>
                      <span>{finding.beds}bd · {finding.baths}ba · {finding.sqft} sqft</span>
                      <span style={{ color: finding.badge === "yellow" ? "#f59e0b" : "#00d4aa" }}>
                        {finding.status}
                      </span>
                    </div>
                  </div>
                  
                  <div style={{ textAlign: "right" }}>
                    <p style={{ color: "#f0f4f8", fontWeight: 700, fontSize: "1rem" }}>{finding.price}</p>
                    <span style={{
                      fontFamily: "'Space Mono', monospace",
                      padding: "3px 8px", borderRadius: "5px",
                      fontSize: "0.65rem", fontWeight: 700,
                      background: finding.badge === "yellow" ? "rgba(245,158,11,0.12)" : "rgba(0,212,170,0.12)",
                      color: finding.badge === "yellow" ? "#f59e0b" : "#00d4aa",
                    }}>
                      {finding.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Animated Top Findings */}
          <div className="sr-card-body" style={{ padding: "24px 36px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "18px" }}>
              <TrendingUp size={15} color="#00d4aa" />
              <h4 style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", fontWeight: 700, color: "#f0f4f8", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Top Findings — Last 14 Days
              </h4>
            </div>
            
            <div className="sr-top-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
              {topFindings.map((finding, index) => (
                <div
                  key={finding.id}
                  className="listing-card"
                  style={{
                    padding: "18px",
                    borderRadius: "10px",
                    background: "rgba(0,212,170,0.04)",
                    border: "1px solid rgba(0,212,170,0.12)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    opacity: mounted ? 1 : 0,
                    transform: mounted ? "translateY(0)" : "translateY(10px)",
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                    <p style={{ color: "#f0f4f8", fontWeight: 700, fontSize: "1rem" }}>{finding.price}</p>
                    <span style={{
                      fontFamily: "'Space Mono', monospace",
                      padding: "3px 8px", borderRadius: "5px",
                      fontSize: "0.65rem", fontWeight: 700,
                      background: "rgba(0,212,170,0.12)",
                      color: "#00d4aa",
                    }}>
                      {finding.score}
                    </span>
                  </div>
                  <p style={{ color: "#8b9eb0", fontSize: "0.85rem", marginBottom: "10px", fontWeight: 500 }}>{finding.address}</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <Calendar size={11} color="#4a5e72" />
                      <span style={{ fontFamily: "'Space Mono', monospace", color: "#4a5e72", fontSize: "0.65rem" }}>{finding.daysListed}</span>
                    </div>
                    <span style={{ color: "#00d4aa", fontSize: "0.72rem", fontWeight: 500 }}>
                      {finding.highlight}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="sr-cta" style={{ textAlign: "center", marginTop: "48px" }}>
          <p style={{ color: "#4a5e72", fontSize: "0.9rem", marginBottom: "20px" }}>
            Get daily alerts for properties matching your criteria.
          </p>
          <a
            href="/free"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "13px 28px", borderRadius: "8px",
              background: "#00d4aa", color: "#080c10",
              fontWeight: 700, fontSize: "0.9rem", textDecoration: "none",
              boxShadow: "0 0 30px rgba(0,212,170,0.3)",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 0 50px rgba(0,212,170,0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 0 30px rgba(0,212,170,0.3)";
            }}
          >
            Get Started — Free
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
