"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Home, Send, CheckCircle, Check, Plus, Trash2 } from "lucide-react";

export interface TierConfig {
  tier: string;
  name: string;
  price: string;
  period: string;
  tagline: string;
  features: string[];
  showPriceRange?: boolean;
  showPropertyType?: boolean;
  showZipCodes?: boolean;
  maxZips?: number;
  showStrategy?: boolean;
  showAvmFilter?: boolean;
  showAdvanced?: boolean;
}

const propertyTypes = [
  "Single Family", "Duplex", "Triplex", "Quadplex", "Condo/Townhouse",
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(0,212,170,0.04)",
  border: "1px solid rgba(0,212,170,0.15)",
  borderRadius: "8px",
  padding: "12px 14px",
  color: "#f0f4f8",
  fontSize: "0.9rem",
  outline: "none",
  fontFamily: "inherit",
  transition: "border-color 0.2s",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "'Space Mono', monospace",
  fontSize: "0.6rem",
  color: "#4a5e72",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  marginBottom: "6px",
};

const sectionStyle: React.CSSProperties = {
  borderTop: "1px solid rgba(0,212,170,0.08)",
  paddingTop: "32px",
  marginTop: "32px",
};

const strategies = ["Balanced", "Rental Income", "Fix & Flip", "Value Gap"];

export default function SignupPage({ config }: { config: TierConfig }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    telegram: "",
    minPrice: "",
    maxPrice: "",
    propertyTypes: [] as string[],
    zipCodes: [""],
    strategy: "",
    minAvmDiscount: "",
    minRentRatio: "",
    minSqft: "",
    maxSqft: "",
    maxHoa: "",
    yearBuiltMin: "",
  });

  const update = (field: string, value: string) =>
    setForm((p) => ({ ...p, [field]: value }));

  const togglePropType = (t: string) =>
    setForm((p) => ({
      ...p,
      propertyTypes: p.propertyTypes.includes(t)
        ? p.propertyTypes.filter((x) => x !== t)
        : [...p.propertyTypes, t],
    }));

  const addZip = () => {
    if (form.zipCodes.length < (config.maxZips ?? 1))
      setForm((p) => ({ ...p, zipCodes: [...p.zipCodes, ""] }));
  };
  const updateZip = (i: number, v: string) => {
    const z = [...form.zipCodes]; z[i] = v;
    setForm((p) => ({ ...p, zipCodes: z }));
  };
  const removeZip = (i: number) =>
    setForm((p) => ({ ...p, zipCodes: p.zipCodes.filter((_, j) => j !== i) }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  const isPaid = config.price !== "$0";

  return (
    <div style={{ minHeight: "100vh", background: "#080c10", color: "#f0f4f8" }}>
      {/* Ambient glow */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "10%", left: "5%", width: "500px", height: "500px", background: "rgba(0,212,170,0.06)", borderRadius: "50%", filter: "blur(100px)" }} />
        <div style={{ position: "absolute", bottom: "15%", right: "5%", width: "400px", height: "400px", background: "rgba(245,158,11,0.04)", borderRadius: "50%", filter: "blur(100px)" }} />
      </div>

      {/* Navbar */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(8,12,16,0.95)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(0,212,170,0.12)",
        padding: "0 32px",
      }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <div style={{ width: "30px", height: "30px", borderRadius: "6px", background: "rgba(0,212,170,0.1)", border: "1px solid rgba(0,212,170,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Home size={14} color="#00d4aa" />
            </div>
            <span style={{ fontSize: "0.85rem", color: "#8b9eb0" }}>
              <span style={{ fontFamily: "'Space Mono', monospace", color: "#00d4aa", fontSize: "0.8rem" }}>IPM</span>
              {" · "}Charlotte
            </span>
          </Link>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#4a5e72", fontSize: "0.85rem", textDecoration: "none" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#00d4aa")}
            onMouseLeave={e => (e.currentTarget.style.color = "#4a5e72")}>
            <ArrowLeft size={14} />
            Back
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "860px", margin: "0 auto", padding: "60px 32px 100px" }}>

        {submitted ? (
          <div style={{ textAlign: "center", paddingTop: "80px" }}>
            <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "rgba(0,212,170,0.12)", border: "1px solid rgba(0,212,170,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
              <CheckCircle size={34} color="#00d4aa" />
            </div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#f0f4f8", marginBottom: "12px" }}>
              You&apos;re all set!
            </h2>
            <p style={{ color: "#8b9eb0", fontSize: "0.95rem", lineHeight: 1.75, maxWidth: "400px", margin: "0 auto 36px" }}>
              We&apos;ve received your preferences. Your first daily report will arrive within 24 hours via email{config.tier !== "Free" ? " and Telegram" : " and Telegram"}.
            </p>
            <Link href="/" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "12px 24px", borderRadius: "8px",
              background: "#00d4aa", color: "#080c10",
              fontWeight: 700, fontSize: "0.9rem", textDecoration: "none",
            }}>
              <ArrowLeft size={14} />
              Back to Home
            </Link>
          </div>
        ) : (
          <>
            {/* Page header */}
            <div style={{ marginBottom: "52px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <span style={{ fontFamily: "'Space Mono', monospace", color: "#00d4aa", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.12em" }}>
                  {config.tier.toUpperCase()}
                </span>
                <span style={{ color: "#4a5e72", fontSize: "0.7rem" }}>·</span>
                <span style={{ fontFamily: "'Space Mono', monospace", color: isPaid ? "#f59e0b" : "#4a5e72", fontSize: "0.62rem", fontWeight: 700 }}>
                  {config.price}{config.period}
                </span>
              </div>
              <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, color: "#f0f4f8", lineHeight: 1.15, marginBottom: "14px", letterSpacing: "-0.02em" }}>
                Set Up Your{" "}
                <span style={{ background: "linear-gradient(120deg, #00d4aa, #00f5d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {config.name} Monitor
                </span>
              </h1>
              <p style={{ color: "#8b9eb0", fontSize: "0.95rem", lineHeight: 1.75, maxWidth: "500px" }}>
                {config.tagline}
              </p>

              {/* Feature pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "20px" }}>
                {config.features.map((f, i) => (
                  <span key={i} style={{
                    display: "inline-flex", alignItems: "center", gap: "6px",
                    padding: "4px 12px", borderRadius: "999px",
                    background: "rgba(0,212,170,0.06)", border: "1px solid rgba(0,212,170,0.15)",
                    color: "#8b9eb0", fontSize: "0.78rem",
                  }}>
                    <Check size={11} color="#00d4aa" />
                    {f}
                  </span>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Contact */}
              <div>
                <p style={labelStyle}>Contact Information</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginTop: "12px" }}>
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input required type="text" value={form.name} onChange={e => update("name", e.target.value)} placeholder="Jane Smith" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address *</label>
                    <input required type="email" value={form.email} onChange={e => update("email", e.target.value)} placeholder="jane@example.com" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Telegram Username *</label>
                    <input required type="text" value={form.telegram} onChange={e => update("telegram", e.target.value)} placeholder="@yourhandle" style={inputStyle} />
                  </div>
                </div>
              </div>

              {/* Price range */}
              {config.showPriceRange && (
                <div style={sectionStyle}>
                  <p style={labelStyle}>Price Range</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "12px" }}>
                    <div>
                      <label style={labelStyle}>Min Price ($)</label>
                      <input type="number" value={form.minPrice} onChange={e => update("minPrice", e.target.value)} placeholder="100,000" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Max Price ($)</label>
                      <input type="number" value={form.maxPrice} onChange={e => update("maxPrice", e.target.value)} placeholder="500,000" style={inputStyle} />
                    </div>
                  </div>
                </div>
              )}

              {/* Property types */}
              {config.showPropertyType && (
                <div style={sectionStyle}>
                  <p style={labelStyle}>Property Types</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "12px" }}>
                    {propertyTypes.map((t) => (
                      <button key={t} type="button" onClick={() => togglePropType(t)} style={{
                        padding: "8px 16px", borderRadius: "8px", fontSize: "0.85rem", fontWeight: 500,
                        cursor: "pointer", transition: "all 0.15s",
                        border: form.propertyTypes.includes(t) ? "1px solid rgba(0,212,170,0.5)" : "1px solid rgba(0,212,170,0.1)",
                        background: form.propertyTypes.includes(t) ? "rgba(0,212,170,0.12)" : "rgba(0,212,170,0.03)",
                        color: form.propertyTypes.includes(t) ? "#00d4aa" : "#4a5e72",
                      }}>
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* ZIP codes */}
              {config.showZipCodes && (
                <div style={sectionStyle}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                    <p style={labelStyle}>Target ZIP Codes</p>
                    <span style={{ fontFamily: "'Space Mono', monospace", color: "#4a5e72", fontSize: "0.62rem" }}>
                      {form.zipCodes.length}/{config.maxZips}
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {form.zipCodes.map((z, i) => (
                      <div key={i} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                        <input type="text" value={z} onChange={e => updateZip(i, e.target.value)} placeholder={`ZIP code ${i + 1}`} maxLength={5} style={{ ...inputStyle, flex: 1 }} />
                        {form.zipCodes.length > 1 && (
                          <button type="button" onClick={() => removeZip(i)} style={{ width: "38px", height: "38px", borderRadius: "8px", flexShrink: 0, background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", color: "#f87171", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Trash2 size={13} />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                  {form.zipCodes.length < (config.maxZips ?? 1) && (
                    <button type="button" onClick={addZip} style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "12px", color: "#00d4aa", fontSize: "0.82rem", background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                      <Plus size={13} />
                      Add ZIP code
                    </button>
                  )}
                </div>
              )}

              {/* Investment strategy */}
              {config.showStrategy && (
                <div style={sectionStyle}>
                  <p style={labelStyle}>Investment Strategy</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "12px" }}>
                    {strategies.map((s) => (
                      <button key={s} type="button" onClick={() => update("strategy", s)} style={{
                        padding: "8px 16px", borderRadius: "8px", fontSize: "0.85rem", fontWeight: 500,
                        cursor: "pointer", transition: "all 0.15s",
                        border: form.strategy === s ? "1px solid rgba(245,158,11,0.5)" : "1px solid rgba(0,212,170,0.1)",
                        background: form.strategy === s ? "rgba(245,158,11,0.1)" : "rgba(0,212,170,0.03)",
                        color: form.strategy === s ? "#f59e0b" : "#4a5e72",
                      }}>
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* AVM / Rent ratio */}
              {config.showAvmFilter && (
                <div style={sectionStyle}>
                  <p style={labelStyle}>Market Filters</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "12px" }}>
                    <div>
                      <label style={labelStyle}>Min AVM Discount (%)</label>
                      <input type="number" value={form.minAvmDiscount} onChange={e => update("minAvmDiscount", e.target.value)} placeholder="e.g. 10" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Min Rent/Price Ratio (%)</label>
                      <input type="number" step="0.1" value={form.minRentRatio} onChange={e => update("minRentRatio", e.target.value)} placeholder="e.g. 0.8" style={inputStyle} />
                    </div>
                  </div>
                </div>
              )}

              {/* Advanced filters */}
              {config.showAdvanced && (
                <div style={sectionStyle}>
                  <p style={labelStyle}>Advanced Filters</p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "16px", marginTop: "12px" }}>
                    <div>
                      <label style={labelStyle}>Min Sqft</label>
                      <input type="number" value={form.minSqft} onChange={e => update("minSqft", e.target.value)} placeholder="800" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Max Sqft</label>
                      <input type="number" value={form.maxSqft} onChange={e => update("maxSqft", e.target.value)} placeholder="3000" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Max HOA ($/mo)</label>
                      <input type="number" value={form.maxHoa} onChange={e => update("maxHoa", e.target.value)} placeholder="200" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Min Year Built</label>
                      <input type="number" value={form.yearBuiltMin} onChange={e => update("yearBuiltMin", e.target.value)} placeholder="1980" style={inputStyle} />
                    </div>
                  </div>
                </div>
              )}

              {/* Submit */}
              <div style={{ marginTop: "48px" }}>
                <button type="submit" disabled={loading} style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
                  width: "100%", padding: "16px 24px", borderRadius: "8px",
                  background: "#00d4aa", color: "#080c10",
                  fontWeight: 700, fontSize: "0.95rem", border: "none",
                  cursor: loading ? "not-allowed" : "pointer",
                  opacity: loading ? 0.7 : 1,
                  boxShadow: "0 0 30px rgba(0,212,170,0.25)",
                  transition: "all 0.2s",
                }}>
                  {loading ? (
                    <>
                      <div style={{ width: "16px", height: "16px", border: "2px solid rgba(8,12,16,0.3)", borderTopColor: "#080c10", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
                      Setting up your monitor...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      {isPaid ? `Start ${config.name} — ${config.price}${config.period}` : "Start Free Monitor"}
                    </>
                  )}
                </button>
                <p style={{ textAlign: "center", fontFamily: "'Space Mono', monospace", color: "#4a5e72", fontSize: "0.65rem", marginTop: "14px" }}>
                  {isPaid ? "Cancel anytime. No contracts." : "Free forever. No credit card required."}
                </p>
              </div>
            </form>
          </>
        )}
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        input::placeholder { color: #2a3a4a; }
        input:focus { border-color: rgba(0,212,170,0.4) !important; outline: none; }
        select:focus { border-color: rgba(0,212,170,0.4) !important; outline: none; }
      `}</style>
    </div>
  );
}
