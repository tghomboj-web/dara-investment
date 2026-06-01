"use client";

import { TrendingUp, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <TrendingUp size={15} className="text-white" />
          </div>
          <span className="font-bold text-white">
            <span className="gradient-text">Dara</span> Investment
          </span>
        </div>

        <p className="text-gray-600 text-sm text-center">
          © {new Date().getFullYear()} Dara Investment. All rights reserved.
        </p>

        <a
          href="https://t.me/YOUR_CHANNEL"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <Send size={14} />
          Join Telegram Channel
        </a>
      </div>
    </footer>
  );
}
