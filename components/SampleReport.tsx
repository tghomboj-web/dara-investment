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
      className="relative bg-[#0a0a0f]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      </div>

      <style>{`
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(99,102,241,0.3); }
          50% { box-shadow: 0 0 40px rgba(99,102,241,0.6); }
        }
        .listing-card {
          transition: all 0.3s ease;
        }
        .listing-card:hover {
          transform: translateX(8px);
          background: rgba(255,255,255,0.06) !important;
          border-color: rgba(99,102,241,0.3) !important;
        }
        .stat-pulse {
          animation: pulse-glow 0.6s ease;
        }
        .animate-slide-in {
          animation: slideInUp 0.5s ease forwards;
        }
        @keyframes dot-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
        .live-dot {
          animation: dot-pulse 2s infinite;
        }
      `}</style>

      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span
            style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              color: "#818cf8",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            <Sparkles size={14} />
            Live Preview
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
            Your <span className="gradient-text">Daily Report</span> in Action
          </h2>
          <p style={{ color: "#9ca3af", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
            Watch as new properties are discovered and scored in real-time
          </p>
        </div>

        {/* Animated Report Card */}
        <div
          className="card-glass"
          style={{
            borderRadius: "24px",
            border: "1px solid rgba(255,255,255,0.1)",
            overflow: "hidden",
            boxShadow: "0 0 60px rgba(99,102,241,0.15)",
          }}
        >
          {/* Report Header */}
          <div style={{ padding: "32px 40px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  animation: mounted ? "pulse-glow 3s ease infinite" : "none",
                }}
              >
                <FileText size={24} color="#fff" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#fff" }}>
                    Charlotte Investment Monitor
                  </h3>
                  <span 
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "4px",
                      padding: "3px 10px", borderRadius: "20px",
                      background: "rgba(74,222,128,0.15)", border: "1px solid rgba(74,222,128,0.3)",
                      color: "#4ade80", fontSize: "0.7rem", fontWeight: 600,
                    }}
                  >
                    <span className="live-dot" style={{ width: "6px", height: "6px", background: "#4ade80", borderRadius: "50%", display: "inline-block" }} />
                    LIVE
                  </span>
                </div>
                <p style={{ color: "#6b7280", fontSize: "0.9rem" }}>Daily Report — June 4, 2025</p>
              </div>
            </div>
            
            {/* Summary Stats with pulse */}
            <div style={{ display: "flex", gap: "32px", marginTop: "24px" }}>
              <div className={pulseStats ? "stat-pulse" : ""} style={{ transition: "all 0.3s ease" }}>
                <span style={{ color: "#6b7280", fontSize: "0.85rem" }}>New findings today</span>
                <p style={{ color: "#4ade80", fontWeight: 700, fontSize: "1.5rem" }}>12</p>
              </div>
              <div className={pulseStats ? "stat-pulse" : ""} style={{ transition: "all 0.3s ease" }}>
                <span style={{ color: "#6b7280", fontSize: "0.85rem" }}>Top findings (14 days)</span>
                <p style={{ color: "#818cf8", fontWeight: 700, fontSize: "1.5rem" }}>28</p>
              </div>
              <div>
                <span style={{ color: "#6b7280", fontSize: "0.85rem" }}>Score threshold</span>
                <p style={{ color: "#fff", fontWeight: 700, fontSize: "1.5rem" }}>70+</p>
              </div>
            </div>
          </div>

          {/* Animated New Findings */}
          <div style={{ padding: "32px 40px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
              <Activity size={18} color="#fbbf24" />
              <h4 style={{ fontSize: "1rem", fontWeight: 600, color: "#fff" }}>
                New Findings Today
              </h4>
              <span style={{ 
                marginLeft: "auto", padding: "4px 12px", borderRadius: "12px",
                background: "rgba(251,191,36,0.1)", color: "#fbbf24", fontSize: "0.75rem", fontWeight: 600 
              }}>
                Scanning 15 ZIP codes
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
                      <p style={{ color: "#fff", fontWeight: 500, fontSize: "0.95rem" }}>
                        {finding.address}
                      </p>
                      {index === 0 && (
                        <span style={{
                          padding: "2px 8px", borderRadius: "4px",
                          background: "rgba(74,222,128,0.2)", color: "#4ade80",
                          fontSize: "0.65rem", fontWeight: 700,
                        }}>
                          NEW
                        </span>
                      )}
                    </div>
                    <div style={{ display: "flex", gap: "16px", color: "#6b7280", fontSize: "0.8rem" }}>
                      <span>{finding.beds}bd · {finding.baths}ba · {finding.sqft} sqft</span>
                      <span style={{ color: finding.badge === "green" ? "#4ade80" : finding.badge === "yellow" ? "#fbbf24" : "#a78bfa" }}>
                        {finding.status}
                      </span>
                    </div>
                  </div>
                  
                  <div style={{ textAlign: "right" }}>
                    <p style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem" }}>{finding.price}</p>
                    <span
                      style={{
                        padding: "4px 10px",
                        borderRadius: "6px",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        background: finding.badge === "green" ? "rgba(74,222,128,0.15)" : finding.badge === "yellow" ? "rgba(251,191,36,0.15)" : "rgba(139,92,246,0.15)",
                        color: finding.badge === "green" ? "#4ade80" : finding.badge === "yellow" ? "#fbbf24" : "#a78bfa",
                      }}
                    >
                      Score {finding.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Animated Top Findings */}
          <div style={{ padding: "32px 40px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
              <TrendingUp size={18} color="#818cf8" />
              <h4 style={{ fontSize: "1rem", fontWeight: 600, color: "#fff" }}>
                Top Findings From Last 2 Weeks
              </h4>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
              {topFindings.map((finding, index) => (
                <div
                  key={finding.id}
                  className="listing-card"
                  style={{
                    padding: "20px",
                    borderRadius: "12px",
                    background: "rgba(99,102,241,0.08)",
                    border: "1px solid rgba(99,102,241,0.15)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    opacity: mounted ? 1 : 0,
                    transform: mounted ? "translateY(0)" : "translateY(10px)",
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                    <p style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem" }}>{finding.price}</p>
                    <span
                      style={{
                        padding: "4px 10px",
                        borderRadius: "6px",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        background: "rgba(74,222,128,0.15)",
                        color: "#4ade80",
                        border: "1px solid rgba(74,222,128,0.2)",
                      }}
                    >
                      Score {finding.score}
                    </span>
                  </div>
                  <p style={{ color: "#d1d5db", fontSize: "0.9rem", marginBottom: "8px", fontWeight: 500 }}>{finding.address}</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <Calendar size={12} color="#6b7280" />
                      <span style={{ color: "#6b7280", fontSize: "0.75rem" }}>{finding.daysListed}</span>
                    </div>
                    <span style={{ color: "#818cf8", fontSize: "0.75rem", fontWeight: 500 }}>
                      {finding.highlight}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <p style={{ color: "#6b7280", fontSize: "0.95rem", marginBottom: "16px" }}>
            Get real-time alerts for properties matching your criteria
          </p>
          <a
            href="/pro"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 28px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              color: "#fff",
              fontWeight: 600,
              fontSize: "0.95rem",
              textDecoration: "none",
              boxShadow: "0 0 40px rgba(99,102,241,0.35)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 0 60px rgba(99,102,241,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 0 40px rgba(99,102,241,0.35)";
            }}
          >
            Join the Beta
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
