"use client";

import Link from "next/link";
import { Send, ArrowRight, Home, DollarSign, MapPin } from "lucide-react";

const floatingCards = [
  {
    icon: Home,
    title: "3BR Single Family",
    detail: "Phoenix, AZ 85001",
    price: "$285,000",
    badge: "Cap Rate 8.2%",
    color: "from-indigo-500/20 to-purple-500/20",
    border: "border-indigo-500/30",
    delay: "0s",
  },
  {
    icon: DollarSign,
    title: "Duplex Investment",
    detail: "Tampa, FL 33601",
    price: "$340,000",
    badge: "Cash Flow +$1,200/mo",
    color: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/30",
    delay: "1.5s",
  },
  {
    icon: MapPin,
    title: "Multi-Family 4 Units",
    detail: "Dallas, TX 75201",
    price: "$520,000",
    badge: "ROI 12.4%",
    color: "from-pink-500/20 to-red-500/20",
    border: "border-pink-500/30",
    delay: "0.8s",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{ minHeight: "100vh", paddingTop: "100px", paddingBottom: "80px" }}
      className="relative flex items-center overflow-hidden bg-grid"
    >
      {/* Glow orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full blur-3xl animate-pulse-glow"
          style={{ top: "20%", left: "10%", width: "400px", height: "400px", background: "rgba(99,102,241,0.18)" }}
        />
        <div
          className="absolute rounded-full blur-3xl animate-pulse-glow"
          style={{ bottom: "15%", right: "10%", width: "350px", height: "350px", background: "rgba(139,92,246,0.15)", animationDelay: "1s" }}
        />
      </div>

      <div
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", width: "100%" }}
        className="grid lg:grid-cols-2 gap-16 items-center"
      >
        {/* Left — text content */}
        <div style={{ position: "relative", zIndex: 10 }}>
          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "8px 16px", borderRadius: "999px",
            background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.3)",
            color: "#a5b4fc", fontSize: "0.85rem", fontWeight: 500,
            marginBottom: "32px",
          }}>
            <span style={{ width: "8px", height: "8px", background: "#4ade80", borderRadius: "50%", animation: "pulse 2s infinite" }} />
            Live property alerts — updated daily
          </div>

          {/* Heading */}
          <h1 style={{
            fontSize: "clamp(2.2rem, 5vw, 3.75rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            color: "#fff",
            marginBottom: "28px",
          }}>
            Find Your Next{" "}
            <span className="gradient-text">Investment Property</span>{" "}
            Before Anyone Else
          </h1>

          {/* Description */}
          <p style={{
            color: "#9ca3af",
            fontSize: "1.1rem",
            lineHeight: 1.75,
            maxWidth: "480px",
            marginBottom: "40px",
          }}>
            Our algorithm scans thousands of listings daily and delivers
            high-yield investment properties straight to your Telegram — filtered
            by your exact criteria.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginBottom: "36px" }}>
            <a
              href="https://t.me/YOUR_CHANNEL"
              target="_blank"
              rel="noopener noreferrer"
              id="free"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "16px 28px", borderRadius: "14px",
                background: "#229ED9", color: "#fff",
                fontWeight: 600, fontSize: "1rem", textDecoration: "none",
              }}
            >
              <Send size={18} />
              Join Free Telegram Channel
            </a>
            <Link
              href="/pro"
              className="glow-purple"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "16px 28px", borderRadius: "14px",
                background: "linear-gradient(135deg,#6366f1,#9333ea)",
                color: "#fff", fontWeight: 600, fontSize: "1rem",
                textDecoration: "none",
              }}
            >
              Get Pro Alerts
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Trust badges */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
            {["No credit card to join free", "Cancel anytime", "Daily alerts"].map((t) => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: "6px", color: "#6b7280", fontSize: "0.875rem" }}>
                <span style={{ color: "#4ade80", fontWeight: 700, fontSize: "1rem" }}>✓</span>
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Right — property cards */}
        <div className="hidden lg:flex flex-col gap-5" style={{ paddingTop: "16px" }}>
          {floatingCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className={`card-glass rounded-2xl p-5 border ${card.border} animate-float`}
                style={{
                  animationDelay: card.delay,
                  marginLeft: i === 1 ? "56px" : i === 2 ? "28px" : "0px",
                  background: `linear-gradient(135deg, ${
                    i === 0 ? "rgba(99,102,241,0.12), rgba(139,92,246,0.12)"
                    : i === 1 ? "rgba(139,92,246,0.12), rgba(236,72,153,0.12)"
                    : "rgba(236,72,153,0.12), rgba(239,68,68,0.12)"
                  })`,
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.08)" }}>
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{card.title}</p>
                      <p className="text-gray-400 text-xs">{card.detail}</p>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full font-medium whitespace-nowrap" style={{ background: "rgba(74,222,128,0.15)", color: "#4ade80", border: "1px solid rgba(74,222,128,0.3)" }}>
                    {card.badge}
                  </span>
                </div>
                <p className="text-2xl font-bold text-white">{card.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
