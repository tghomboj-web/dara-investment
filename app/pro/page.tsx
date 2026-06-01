"use client";

import { useState } from "react";
import { Plus, Trash2, Send, CheckCircle, ArrowLeft, TrendingUp } from "lucide-react";
import Link from "next/link";

const propertyTypes = [
  "Single Family",
  "Duplex",
  "Triplex",
  "Quadplex",
  "Multi-Family (5+)",
  "Condo/Townhouse",
  "Commercial",
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "12px",
  padding: "14px 16px",
  color: "#fff",
  fontSize: "0.95rem",
  outline: "none",
  transition: "border-color 0.2s",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.72rem",
  color: "#9ca3af",
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  marginBottom: "8px",
};

const sectionDividerStyle: React.CSSProperties = {
  borderTop: "1px solid rgba(255,255,255,0.08)",
  paddingTop: "36px",
  marginTop: "36px",
};

export default function ProPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    telegramUsername: "",
    phone: "",
    minPrice: "",
    maxPrice: "",
    minCapRate: "",
    maxDaysOnMarket: "",
    propertyTypes: [] as string[],
    zipCodes: [""],
  });

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const togglePropertyType = (type: string) => {
    setForm((prev) => ({
      ...prev,
      propertyTypes: prev.propertyTypes.includes(type)
        ? prev.propertyTypes.filter((t) => t !== type)
        : [...prev.propertyTypes, type],
    }));
  };

  const addZip = () => {
    if (form.zipCodes.length < 10) {
      setForm((prev) => ({ ...prev, zipCodes: [...prev.zipCodes, ""] }));
    }
  };

  const updateZip = (index: number, value: string) => {
    const zips = [...form.zipCodes];
    zips[index] = value;
    setForm((prev) => ({ ...prev, zipCodes: zips }));
  };

  const removeZip = (index: number) => {
    setForm((prev) => ({
      ...prev,
      zipCodes: prev.zipCodes.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0f", color: "#fff" }}>
      {/* Background glows */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
        <div style={{ position: "absolute", top: "10%", left: "5%", width: "500px", height: "500px", background: "rgba(99,102,241,0.12)", borderRadius: "50%", filter: "blur(100px)" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "5%", width: "400px", height: "400px", background: "rgba(139,92,246,0.1)", borderRadius: "50%", filter: "blur(100px)" }} />
      </div>

      {/* Navbar */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(10,10,15,0.9)", backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "0 32px",
      }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", height: "68px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
            <div style={{ width: "34px", height: "34px", borderRadius: "10px", background: "linear-gradient(135deg,#6366f1,#9333ea)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <TrendingUp size={16} color="#fff" />
            </div>
            <span style={{ fontWeight: 700, fontSize: "1.1rem", color: "#fff" }}>
              <span style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6,#ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Dara</span> Investment
            </span>
          </Link>
          <Link
            href="/"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#9ca3af", fontSize: "0.9rem", textDecoration: "none" }}
          >
            <ArrowLeft size={15} />
            Back to home
          </Link>
        </div>
      </nav>

      {/* Page content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "780px", margin: "0 auto", padding: "64px 32px 100px" }}>

        {submitted ? (
          <div style={{ textAlign: "center", paddingTop: "80px" }}>
            <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "rgba(74,222,128,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 28px" }}>
              <CheckCircle size={40} color="#4ade80" />
            </div>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#fff", marginBottom: "16px" }}>You&apos;re on the list!</h2>
            <p style={{ color: "#9ca3af", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "420px", margin: "0 auto 36px" }}>
              We&apos;ve received your preferences. You&apos;ll receive your first personalized property alert via Telegram within 24 hours.
            </p>
            <Link
              href="/"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "14px 28px", borderRadius: "14px",
                background: "linear-gradient(135deg,#6366f1,#9333ea)",
                color: "#fff", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none",
              }}
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </div>
        ) : (
          <>
            {/* Page header */}
            <div style={{ marginBottom: "56px" }}>
              <span style={{ display: "inline-block", color: "#818cf8", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "16px" }}>
                Pro Plan — $29/mo
              </span>
              <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 800, color: "#fff", lineHeight: 1.2, marginBottom: "16px" }}>
                Set Up Your <span style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6,#ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Pro Alerts</span>
              </h1>
              <p style={{ color: "#9ca3af", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "520px" }}>
                Customize your investment criteria below and we&apos;ll send you matching properties directly to your Telegram every day.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Contact info */}
              <div style={{ marginBottom: "12px" }}>
                <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "#6b7280", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "24px" }}>
                  Contact Information
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input required type="text" value={form.name} onChange={(e) => updateField("name", e.target.value)} placeholder="John Smith" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address *</label>
                    <input required type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} placeholder="john@example.com" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Telegram Username *</label>
                    <input required type="text" value={form.telegramUsername} onChange={(e) => updateField("telegramUsername", e.target.value)} placeholder="@yourhandle" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone Number</label>
                    <input type="tel" value={form.phone} onChange={(e) => updateField("phone", e.target.value)} placeholder="+1 (555) 000-0000" style={inputStyle} />
                  </div>
                </div>
              </div>

              {/* Investment criteria */}
              <div style={sectionDividerStyle}>
                <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "#6b7280", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "24px" }}>
                  Investment Criteria
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "20px", marginBottom: "20px" }}>
                  <div>
                    <label style={labelStyle}>Min Price ($)</label>
                    <input type="number" value={form.minPrice} onChange={(e) => updateField("minPrice", e.target.value)} placeholder="50,000" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Max Price ($)</label>
                    <input type="number" value={form.maxPrice} onChange={(e) => updateField("maxPrice", e.target.value)} placeholder="500,000" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Min Cap Rate (%)</label>
                    <input type="number" step="0.1" value={form.minCapRate} onChange={(e) => updateField("minCapRate", e.target.value)} placeholder="6.0" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Max Days on Market</label>
                    <input type="number" value={form.maxDaysOnMarket} onChange={(e) => updateField("maxDaysOnMarket", e.target.value)} placeholder="90" style={inputStyle} />
                  </div>
                </div>
              </div>

              {/* Property types */}
              <div style={sectionDividerStyle}>
                <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "#6b7280", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "20px" }}>
                  Property Types
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {propertyTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => togglePropertyType(type)}
                      style={{
                        padding: "10px 18px",
                        borderRadius: "10px",
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        border: form.propertyTypes.includes(type)
                          ? "1px solid rgba(99,102,241,0.6)"
                          : "1px solid rgba(255,255,255,0.1)",
                        background: form.propertyTypes.includes(type)
                          ? "rgba(99,102,241,0.2)"
                          : "rgba(255,255,255,0.04)",
                        color: form.propertyTypes.includes(type) ? "#a5b4fc" : "#9ca3af",
                        cursor: "pointer",
                        transition: "all 0.15s",
                      }}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Zip codes */}
              <div style={sectionDividerStyle}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                  <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "#6b7280", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    Target Zip Codes
                  </p>
                  <span style={{ fontSize: "0.8rem", color: "#4b5563" }}>{form.zipCodes.length}/10</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {form.zipCodes.map((zip, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <input
                        type="text"
                        value={zip}
                        onChange={(e) => updateZip(i, e.target.value)}
                        placeholder={`Zip code ${i + 1}`}
                        maxLength={5}
                        style={{ ...inputStyle, flex: 1 }}
                      />
                      {form.zipCodes.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeZip(i)}
                          style={{
                            width: "40px", height: "40px", borderRadius: "10px", flexShrink: 0,
                            background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)",
                            color: "#f87171", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                          }}
                        >
                          <Trash2 size={15} />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                {form.zipCodes.length < 10 && (
                  <button
                    type="button"
                    onClick={addZip}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "6px",
                      marginTop: "14px", color: "#818cf8", fontSize: "0.875rem",
                      background: "none", border: "none", cursor: "pointer", padding: 0,
                    }}
                  >
                    <Plus size={15} />
                    Add another zip code
                  </button>
                )}
              </div>

              {/* Submit */}
              <div style={{ marginTop: "48px" }}>
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
                    width: "100%", padding: "18px 24px", borderRadius: "14px",
                    background: "linear-gradient(135deg,#6366f1,#9333ea)",
                    color: "#fff", fontWeight: 700, fontSize: "1rem",
                    border: "none", cursor: loading ? "not-allowed" : "pointer",
                    opacity: loading ? 0.7 : 1,
                    boxShadow: "0 0 40px rgba(99,102,241,0.35)",
                  }}
                >
                  {loading ? (
                    <>
                      <div style={{ width: "18px", height: "18px", border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Start My Pro Alerts — $29/mo
                    </>
                  )}
                </button>
                <p style={{ textAlign: "center", color: "#4b5563", fontSize: "0.8rem", marginTop: "16px" }}>
                  By submitting, you agree to our Terms of Service. Cancel anytime.
                </p>
              </div>
            </form>
          </>
        )}
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        input::placeholder { color: #4b5563; }
        input:focus { border-color: rgba(99,102,241,0.5) !important; }
      `}</style>
    </div>
  );
}
