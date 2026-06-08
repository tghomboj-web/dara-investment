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
        background: scrolled ? "rgba(8,12,16,0.96)" : "rgba(8,12,16,0.6)",
        backdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(0,212,170,0.15)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between" style={{ height: "68px" }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: "34px", height: "34px", borderRadius: "8px",
            background: "rgba(0,212,170,0.1)",
            border: "1px solid rgba(0,212,170,0.3)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Home size={16} color="#00d4aa" />
          </div>
          <span style={{ fontSize: "0.95rem", fontWeight: 600, letterSpacing: "-0.01em", color: "#f0f4f8" }}>
            <span style={{ color: "#00d4aa" }}>IPM</span>
            <span style={{ color: "#4a5e72", margin: "0 6px" }}>·</span>
            <span style={{ color: "#8b9eb0", fontSize: "0.85rem", fontWeight: 400 }}>Charlotte</span>
          </span>
        </div>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: "0.85rem", fontWeight: 500,
                color: "#8b9eb0", textDecoration: "none",
                transition: "color 0.2s",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#00d4aa")}
              onMouseLeave={e => (e.currentTarget.style.color = "#8b9eb0")}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/pro"
            style={{
              fontSize: "0.85rem", fontWeight: 600,
              padding: "8px 20px", borderRadius: "8px",
              background: "rgba(0,212,170,0.1)",
              border: "1px solid rgba(0,212,170,0.35)",
              color: "#00d4aa", textDecoration: "none",
              letterSpacing: "0.02em",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = "rgba(0,212,170,0.18)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(0,212,170,0.2)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "rgba(0,212,170,0.1)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            Get Started
          </Link>
        </div>

        <button
          className="md:hidden"
          style={{ color: "#8b9eb0", background: "none", border: "none", cursor: "pointer" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div style={{
          background: "#0d1117",
          borderTop: "1px solid rgba(0,212,170,0.1)",
          padding: "16px 24px",
          display: "flex", flexDirection: "column", gap: "16px",
        }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ color: "#8b9eb0", textDecoration: "none", fontSize: "0.9rem" }}
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/pro"
            onClick={() => setMenuOpen(false)}
            style={{
              textAlign: "center", padding: "10px 20px", borderRadius: "8px",
              background: "rgba(0,212,170,0.1)", border: "1px solid rgba(0,212,170,0.3)",
              color: "#00d4aa", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600,
            }}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
