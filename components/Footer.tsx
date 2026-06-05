"use client";

import { Home } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <Home size={15} className="text-white" />
            </div>
            <span className="font-bold text-white">
              <span className="gradient-text">Investment Property</span> Monitor
            </span>
          </div>

          <p className="text-gray-600 text-sm text-center">
            © {new Date().getFullYear()} Investment Property Monitor. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="#pricing" className="text-sm text-gray-400 hover:text-white transition-colors">
              Pricing
            </a>
            <a href="/pro" className="text-sm text-gray-400 hover:text-white transition-colors">
              Join Beta
            </a>
          </div>
        </div>

        {/* Provider info */}
        <div className="text-center border-t border-white/5 pt-6">
          <p className="text-gray-500 text-xs">
            Investment Property Monitor is provided for informational purposes only. 
            Not legal, tax, financial, or investment advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
