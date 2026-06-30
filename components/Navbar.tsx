"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search, Home } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Sample Report", href: "#sample-report" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(255,255,255,0.96)" : "rgba(255,255,255,0.85)",
        backdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid #e2e8f0" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between" style={{ height: "68px" }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <div style={{
            width: "34px", height: "34px", borderRadius: "8px",
            background: "rgba(30, 64, 175, 0.1)",
            border: "1px solid rgba(30, 64, 175, 0.2)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Home size={16} color="#1e40af" />
          </div>
          <span style={{ fontSize: "0.95rem", fontWeight: 600, letterSpacing: "-0.01em", color: "#1a1f2c" }}>
            <span style={{ color: "#1e40af" }}>IPM</span>
            <span style={{ color: "#94a3b8", margin: "0 6px" }}>·</span>
            <span style={{ color: "#64748b", fontSize: "0.85rem", fontWeight: 400 }}>Charlotte</span>
          </span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: "0.85rem", fontWeight: 500,
                color: "#475569", textDecoration: "none",
                transition: "color 0.2s",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#1e40af")}
              onMouseLeave={e => (e.currentTarget.style.color = "#475569")}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#pricing"
            style={{
              fontSize: "0.85rem", fontWeight: 600,
              padding: "8px 20px", borderRadius: "8px",
              background: "#1e40af",
              border: "1px solid #1e40af",
              color: "#ffffff", textDecoration: "none",
              letterSpacing: "0.02em",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = "#1e3a8a";
              (e.currentTarget as HTMLElement).style.borderColor = "#1e3a8a";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "#1e40af";
              (e.currentTarget as HTMLElement).style.borderColor = "#1e40af";
            }}
          >
            Start Free
          </a>
        </div>

        <button
          className="md:hidden"
          style={{ color: "#475569", background: "none", border: "none", cursor: "pointer" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div style={{
          background: "#ffffff",
          borderTop: "1px solid #e2e8f0",
          padding: "16px 24px",
          display: "flex", flexDirection: "column", gap: "16px",
        }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ color: "#475569", textDecoration: "none", fontSize: "0.9rem" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setMenuOpen(false)}
            style={{
              textAlign: "center", padding: "10px 20px", borderRadius: "8px",
              background: "#1e40af", border: "1px solid #1e40af",
              color: "#ffffff", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600,
              display: "block",
            }}
          >
            Start Free
          </a>
        </div>
      )}
    </nav>
  );
}
