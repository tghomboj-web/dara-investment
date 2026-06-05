"use client";

import { FileText, Home, TrendingUp, MapPin, DollarSign, Calendar, Star, ArrowRight } from "lucide-react";

const newFindings = [
  {
    icon: Home,
    address: "4521 Oakwood Ave, Charlotte, NC 28205",
    beds: 3,
    baths: 2,
    sqft: 1650,
    price: "$285,000",
    score: 78,
    status: "New Listing",
    badge: "green",
  },
  {
    icon: Home,
    address: "8923 Park Ridge Dr, Charlotte, NC 28210",
    beds: 4,
    baths: 2.5,
    sqft: 2100,
    price: "$340,000",
    score: 72,
    status: "Price Drop",
    badge: "yellow",
  },
  {
    icon: Home,
    address: "1567 Maple Creek Rd, Charlotte, NC 28215",
    beds: 3,
    baths: 2,
    sqft: 1480,
    price: "$265,000",
    score: 69,
    status: "Back on Market",
    badge: "purple",
  },
];

const topFindings = [
  {
    icon: TrendingUp,
    address: "2314 Riverbend Rd, Charlotte, NC 28214",
    price: "$320,000",
    score: 84,
    daysListed: "12 days ago",
    highlight: "High rental demand area",
  },
  {
    icon: TrendingUp,
    address: "7896 Hunters Pointe, Charlotte, NC 28269",
    price: "$295,000",
    score: 81,
    daysListed: "8 days ago",
    highlight: "Recent comparable sales up 8%",
  },
];

export default function SampleReport() {
  return (
    <section
      id="sample-report"
      style={{ padding: "120px 32px" }}
      className="relative bg-[#0a0a0f]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      </div>

      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
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
            Sample Report
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
            What Your <span className="gradient-text">Daily Report</span> Looks Like
          </h2>
          <p style={{ color: "#9ca3af", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
            Clean, objective property cards with key data points — no fluff, just facts.
          </p>
        </div>

        {/* Report Card */}
        <div
          className="card-glass"
          style={{
            borderRadius: "24px",
            border: "1px solid rgba(255,255,255,0.1)",
            overflow: "hidden",
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
                }}
              >
                <FileText size={24} color="#fff" />
              </div>
              <div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#fff" }}>
                  Charlotte Investment Monitor
                </h3>
                <p style={{ color: "#6b7280", fontSize: "0.9rem" }}>Daily Report — June 4, 2025</p>
              </div>
            </div>
            
            {/* Summary Stats */}
            <div style={{ display: "flex", gap: "32px", marginTop: "24px" }}>
              <div>
                <span style={{ color: "#6b7280", fontSize: "0.85rem" }}>New findings today</span>
                <p style={{ color: "#4ade80", fontWeight: 700, fontSize: "1.5rem" }}>12</p>
              </div>
              <div>
                <span style={{ color: "#6b7280", fontSize: "0.85rem" }}>Top findings (last 14 days)</span>
                <p style={{ color: "#818cf8", fontWeight: 700, fontSize: "1.5rem" }}>28</p>
              </div>
              <div>
                <span style={{ color: "#6b7280", fontSize: "0.85rem" }}>Score threshold</span>
                <p style={{ color: "#fff", fontWeight: 700, fontSize: "1.5rem" }}>70+</p>
              </div>
            </div>
          </div>

          {/* New Findings */}
          <div style={{ padding: "32px 40px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
              <Star size={18} color="#fbbf24" />
              <h4 style={{ fontSize: "1rem", fontWeight: 600, color: "#fff" }}>New Findings Today</h4>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {newFindings.map((finding, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "16px 20px",
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "10px",
                      background: "rgba(99,102,241,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <finding.icon size={20} color="#818cf8" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ color: "#fff", fontWeight: 500, fontSize: "0.95rem", marginBottom: "4px" }}>
                      {finding.address}
                    </p>
                    <div style={{ display: "flex", gap: "16px", color: "#6b7280", fontSize: "0.8rem" }}>
                      <span>{finding.beds}bd · {finding.baths}ba · {finding.sqft} sqft</span>
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem" }}>{finding.price}</p>
                    <span
                      style={{
                        padding: "4px 10px",
                        borderRadius: "6px",
                        fontSize: "0.75rem",
                        fontWeight: 600,
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

          {/* Top Findings */}
          <div style={{ padding: "32px 40px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
              <TrendingUp size={18} color="#818cf8" />
              <h4 style={{ fontSize: "1rem", fontWeight: 600, color: "#fff" }}>Top Findings From Last 2 Weeks</h4>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
              {topFindings.map((finding, i) => (
                <div
                  key={i}
                  style={{
                    padding: "20px",
                    borderRadius: "12px",
                    background: "rgba(99,102,241,0.08)",
                    border: "1px solid rgba(99,102,241,0.15)",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                    <p style={{ color: "#fff", fontWeight: 600, fontSize: "0.95rem" }}>{finding.price}</p>
                    <span
                      style={{
                        padding: "4px 10px",
                        borderRadius: "6px",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        background: "rgba(74,222,128,0.15)",
                        color: "#4ade80",
                      }}
                    >
                      Score {finding.score}
                    </span>
                  </div>
                  <p style={{ color: "#9ca3af", fontSize: "0.85rem", marginBottom: "8px" }}>{finding.address}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <Calendar size={12} color="#6b7280" />
                    <span style={{ color: "#6b7280", fontSize: "0.75rem" }}>{finding.daysListed}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <p style={{ color: "#6b7280", fontSize: "0.95rem", marginBottom: "16px" }}>
            Want reports like this delivered to your inbox?
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
