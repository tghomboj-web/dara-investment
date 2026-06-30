"use client";

import { Home, FileText, ArrowRight, ExternalLink } from "lucide-react";

const newFindings = [
  {
    address: "4521 Oakwood Ave, Charlotte, NC 28205",
    listPrice: "$285,000",
    estimatedValue: "$292,000",
    score: 78,
    signal: "New Listing",
    surfacedDate: "June 30, 2026",
    beds: 3,
    baths: 2,
    sqft: 1650,
  },
  {
    address: "8923 Park Ridge Dr, Charlotte, NC 28210",
    listPrice: "$340,000",
    estimatedValue: "$348,000",
    score: 72,
    signal: "Price Drop",
    surfacedDate: "June 30, 2026",
    beds: 4,
    baths: 2.5,
    sqft: 2100,
  },
  {
    address: "1567 Maple Creek Rd, Charlotte, NC 28215",
    listPrice: "$265,000",
    estimatedValue: "$271,000",
    score: 69,
    signal: "Back on Market",
    surfacedDate: "June 29, 2026",
    beds: 3,
    baths: 2,
    sqft: 1480,
  },
];

const topFindings = [
  {
    address: "2314 Riverbend Rd, Charlotte, NC 28214",
    listPrice: "$320,000",
    estimatedValue: "$335,000",
    score: 84,
    signal: "Strong AVM Discount",
    surfacedDate: "June 16, 2026",
    beds: 3,
    baths: 2,
    sqft: 1850,
  },
  {
    address: "7896 Hunters Pointe, Charlotte, NC 28269",
    listPrice: "$295,000",
    estimatedValue: "$312,000",
    score: 81,
    signal: "High Rental Ratio",
    surfacedDate: "June 20, 2026",
    beds: 4,
    baths: 3,
    sqft: 2200,
  },
];

export default function SampleReport() {
  const formatDate = () => {
    const today = new Date();
    return today.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  };

  return (
    <section
      id="sample-report"
      style={{ padding: "100px 24px", background: "#f8f9fa" }}
      className="relative"
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
            SAMPLE REPORT
          </span>
          <h2 style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
            fontWeight: 700, color: "#1a1f2c",
            marginBottom: "14px", lineHeight: 1.2, letterSpacing: "-0.02em",
          }}>
            Daily Investment <span className="gradient-text">Property Report</span>
          </h2>
          <p style={{ color: "#64748b", fontSize: "1rem", maxWidth: "500px", margin: "0 auto", lineHeight: 1.75 }}>
            Illustrative example of the daily report delivered via email and Telegram. All data shown is sample data for demonstration purposes.
          </p>
        </div>

        {/* Report Card */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "12px",
            border: "1px solid #e2e8f0",
            overflow: "hidden",
            boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
          }}
        >
          {/* Report Header */}
          <div style={{
            padding: "20px 24px",
            borderBottom: "1px solid #f1f5f9",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            background: "#fcfcfd",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{
                width: "36px", height: "36px", borderRadius: "8px",
                background: "rgba(30, 64, 175, 0.1)",
                border: "1px solid rgba(30, 64, 175, 0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <FileText size={16} color="#1e40af" />
              </div>
              <div>
                <p style={{ color: "#1a1f2c", fontWeight: 600, fontSize: "0.95rem" }}>Investment Property Monitor</p>
                <p style={{ fontFamily: "'Space Mono', monospace", color: "#64748b", fontSize: "0.68rem" }}>
                  Daily Report · {formatDate()}
                </p>
              </div>
            </div>
            <span style={{
              fontFamily: "'Space Mono', monospace",
              color: "#64748b", fontSize: "0.62rem", fontWeight: 600,
              padding: "4px 10px", borderRadius: "4px",
              background: "#f1f5f9",
            }}>
              ILLUSTRATIVE
            </span>
          </div>

          {/* Summary Stats */}
          <div style={{
            padding: "16px 24px",
            background: "#f8f9fa",
            borderBottom: "1px solid #e2e8f0",
            display: "flex",
            gap: "48px",
            flexWrap: "wrap",
          }}>
            <div>
              <p style={{ color: "#64748b", fontSize: "0.7rem", marginBottom: "2px" }}>New findings today</p>
              <p style={{ fontFamily: "'Space Mono', monospace", color: "#1e40af", fontWeight: 700, fontSize: "1.3rem" }}>3</p>
            </div>
            <div>
              <p style={{ color: "#64748b", fontSize: "0.7rem", marginBottom: "2px" }}>Top finds (14 days)</p>
              <p style={{ fontFamily: "'Space Mono', monospace", color: "#f59e0b", fontWeight: 700, fontSize: "1.3rem" }}>2</p>
            </div>
            <div>
              <p style={{ color: "#64748b", fontSize: "0.7rem", marginBottom: "2px" }}>Score threshold</p>
              <p style={{ fontFamily: "'Space Mono', monospace", color: "#1a1f2c", fontWeight: 700, fontSize: "1.3rem" }}>65+</p>
            </div>
            <div>
              <p style={{ color: "#64748b", fontSize: "0.7rem", marginBottom: "2px" }}>ZIPs monitored</p>
              <p style={{ fontFamily: "'Space Mono', monospace", color: "#1a1f2c", fontWeight: 700, fontSize: "1.3rem" }}>5</p>
            </div>
          </div>

          {/* New Findings Section */}
          <div style={{ padding: "24px", borderBottom: "1px solid #e2e8f0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
              <div style={{
                width: "4px", height: "16px", borderRadius: "2px",
                background: "#1e40af",
              }} />
              <h3 style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1a1f2c", letterSpacing: "0.02em" }}>
                NEW FINDINGS TODAY
              </h3>
            </div>

            {newFindings.map((finding, index) => (
              <div
                key={index}
                style={{
                  padding: "14px 16px",
                  borderRadius: "8px",
                  background: index === 0 ? "#f8f9fa" : "#ffffff",
                  border: "1px solid #e2e8f0",
                  marginBottom: "10px",
                  display: "flex",
                  gap: "16px",
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ color: "#1a1f2c", fontWeight: 600, fontSize: "0.88rem", marginBottom: "4px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {finding.address}
                  </p>
                  <div style={{ display: "flex", gap: "12px", fontSize: "0.72rem", color: "#64748b" }}>
                    <span>Signal: <span style={{ color: "#1e40af", fontWeight: 500 }}>{finding.signal}</span></span>
                    <span>Surfaced: {finding.surfacedDate}</span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
                  <div>
                    <p style={{ color: "#64748b", fontSize: "0.65rem", marginBottom: "1px" }}>List Price</p>
                    <p style={{ color: "#1a1f2c", fontWeight: 600, fontSize: "0.9rem" }}>{finding.listPrice}</p>
                  </div>
                  <div>
                    <p style={{ color: "#64748b", fontSize: "0.65rem", marginBottom: "1px" }}>Est. Value</p>
                    <p style={{ color: "#1a1f2c", fontWeight: 500, fontSize: "0.85rem" }}>{finding.estimatedValue}</p>
                  </div>
                  <div>
                    <p style={{ color: "#64748b", fontSize: "0.65rem", marginBottom: "1px" }}>Score</p>
                    <p style={{ fontFamily: "'Space Mono', monospace", color: "#1e40af", fontWeight: 700, fontSize: "0.95rem" }}>{finding.score}</p>
                  </div>
                  <div>
                    <a
                      href="#"
                      style={{
                        display: "inline-flex", alignItems: "center", gap: "4px",
                        color: "#1e40af", fontSize: "0.72rem", textDecoration: "none",
                        padding: "6px 10px", borderRadius: "4px",
                        background: "rgba(30, 64, 175, 0.06)",
                        border: "1px solid rgba(30, 64, 175, 0.15)",
                      }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(30, 64, 175, 0.1)"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(30, 64, 175, 0.06)"}
                    >
                      <ExternalLink size={11} />
                      Verify
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Top Findings Section */}
          <div style={{ padding: "24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
              <div style={{
                width: "4px", height: "16px", borderRadius: "2px",
                background: "#f59e0b",
              }} />
              <h3 style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1a1f2c", letterSpacing: "0.02em" }}>
                TOP FINDINGS — LAST 14 DAYS
              </h3>
            </div>

            {topFindings.map((finding, index) => (
              <div
                key={index}
                style={{
                  padding: "14px 16px",
                  borderRadius: "8px",
                  background: index === 0 ? "#f8f9fa" : "#ffffff",
                  border: "1px solid #e2e8f0",
                  marginBottom: "10px",
                  display: "flex",
                  gap: "16px",
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ color: "#1a1f2c", fontWeight: 600, fontSize: "0.88rem", marginBottom: "4px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {finding.address}
                  </p>
                  <div style={{ display: "flex", gap: "12px", fontSize: "0.72rem", color: "#64748b" }}>
                    <span>Signal: <span style={{ color: "#f59e0b", fontWeight: 500 }}>{finding.signal}</span></span>
                    <span>Surfaced: {finding.surfacedDate}</span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
                  <div>
                    <p style={{ color: "#64748b", fontSize: "0.65rem", marginBottom: "1px" }}>List Price</p>
                    <p style={{ color: "#1a1f2c", fontWeight: 600, fontSize: "0.9rem" }}>{finding.listPrice}</p>
                  </div>
                  <div>
                    <p style={{ color: "#64748b", fontSize: "0.65rem", marginBottom: "1px" }}>Est. Value</p>
                    <p style={{ color: "#1a1f2c", fontWeight: 500, fontSize: "0.85rem" }}>{finding.estimatedValue}</p>
                  </div>
                  <div>
                    <p style={{ color: "#64748b", fontSize: "0.65rem", marginBottom: "1px" }}>Score</p>
                    <p style={{ fontFamily: "'Space Mono', monospace", color: "#f59e0b", fontWeight: 700, fontSize: "0.95rem" }}>{finding.score}</p>
                  </div>
                  <div>
                    <a
                      href="#"
                      style={{
                        display: "inline-flex", alignItems: "center", gap: "4px",
                        color: "#1e40af", fontSize: "0.72rem", textDecoration: "none",
                        padding: "6px 10px", borderRadius: "4px",
                        background: "rgba(30, 64, 175, 0.06)",
                        border: "1px solid rgba(30, 64, 175, 0.15)",
                      }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(30, 64, 175, 0.1)"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(30, 64, 175, 0.06)"}
                    >
                      <ExternalLink size={11} />
                      Verify
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <p style={{ color: "#64748b", fontSize: "0.9rem", marginBottom: "20px" }}>
            Get daily reports with properties matching your investment criteria.
          </p>
          <a
            href="/free"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "14px 28px", borderRadius: "8px",
              background: "#1e40af", color: "#ffffff",
              fontWeight: 600, fontSize: "0.95rem", textDecoration: "none",
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
          </a>
        </div>
      </div>
    </section>
  );
}
