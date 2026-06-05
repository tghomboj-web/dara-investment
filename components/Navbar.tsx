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
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/10"
          : "bg-[#0a0a0f]/60 backdrop-blur-sm"
      }`}
      style={{ zIndex: 100 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between" style={{ height: "72px" }}>
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <Home size={18} className="text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight">
            <span style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Investment Property</span> Monitor
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/pro"
            className="text-sm font-semibold px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 transition-all duration-200 glow-purple"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            Join Beta
          </Link>
        </div>

        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0f0f1a] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-white text-sm"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/pro"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-semibold px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 w-full"
            style={{ textDecoration: "none", color: "#fff", display: "block", textAlign: "center" }}
          >
            Join Beta
          </Link>
        </div>
      )}
    </nav>
  );
}
