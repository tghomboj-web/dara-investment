"use client";

import { useState } from "react";
import { X, Plus, Trash2, Send, CheckCircle } from "lucide-react";

interface PaidSignupFormProps {
  onClose: () => void;
}

const propertyTypes = [
  "Single Family",
  "Duplex",
  "Triplex",
  "Quadplex",
  "Multi-Family (5+)",
  "Condo/Townhouse",
  "Commercial",
];

export default function PaidSignupForm({ onClose }: PaidSignupFormProps) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto card-glass rounded-2xl border border-white/10 p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <X size={16} />
        </button>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
              <CheckCircle size={32} className="text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">You&apos;re on the list!</h3>
            <p className="text-gray-400 max-w-sm">
              We&apos;ve received your preferences. You&apos;ll receive your first personalized
              property alert via Telegram within 24 hours.
            </p>
            <button
              onClick={onClose}
              className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-sm"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">Set Up Your Pro Alerts</h2>
              <p className="text-gray-400 text-sm">
                Customize your criteria and we&apos;ll send daily Telegram alerts matching your deal profile.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-400 mb-1.5 font-medium uppercase tracking-wide">Full Name *</label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  placeholder="John Smith"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1.5 font-medium uppercase tracking-wide">Email Address *</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1.5 font-medium uppercase tracking-wide">Telegram Username *</label>
                <input
                  required
                  type="text"
                  value={form.telegramUsername}
                  onChange={(e) => updateField("telegramUsername", e.target.value)}
                  placeholder="@yourhandle"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1.5 font-medium uppercase tracking-wide">Phone Number</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
                />
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="text-sm font-semibold text-white mb-4">Investment Criteria</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5 font-medium uppercase tracking-wide">Min Price ($)</label>
                  <input
                    type="number"
                    value={form.minPrice}
                    onChange={(e) => updateField("minPrice", e.target.value)}
                    placeholder="50,000"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5 font-medium uppercase tracking-wide">Max Price ($)</label>
                  <input
                    type="number"
                    value={form.maxPrice}
                    onChange={(e) => updateField("maxPrice", e.target.value)}
                    placeholder="500,000"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5 font-medium uppercase tracking-wide">Min Cap Rate (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={form.minCapRate}
                    onChange={(e) => updateField("minCapRate", e.target.value)}
                    placeholder="6.0"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-xs text-gray-400 mb-1.5 font-medium uppercase tracking-wide">Max Days on Market</label>
                <input
                  type="number"
                  value={form.maxDaysOnMarket}
                  onChange={(e) => updateField("maxDaysOnMarket", e.target.value)}
                  placeholder="90"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 transition-colors sm:max-w-[180px]"
                />
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="text-sm font-semibold text-white mb-3">Property Types</p>
              <div className="flex flex-wrap gap-2">
                {propertyTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => togglePropertyType(type)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-150 ${
                      form.propertyTypes.includes(type)
                        ? "bg-indigo-500/20 border-indigo-500/50 text-indigo-300"
                        : "bg-white/5 border-white/10 text-gray-400 hover:border-white/20"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-semibold text-white">Target Zip Codes</p>
                <span className="text-xs text-gray-500">{form.zipCodes.length}/10</span>
              </div>
              <div className="space-y-2">
                {form.zipCodes.map((zip, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={zip}
                      onChange={(e) => updateZip(i, e.target.value)}
                      placeholder={`Zip code ${i + 1}`}
                      maxLength={5}
                      className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
                    />
                    {form.zipCodes.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeZip(i)}
                        className="w-9 h-9 flex items-center justify-center rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              {form.zipCodes.length < 10 && (
                <button
                  type="button"
                  onClick={addZip}
                  className="mt-2 flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <Plus size={14} />
                  Add another zip code
                </button>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-semibold text-sm transition-all duration-200 disabled:opacity-60 glow-purple"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Start My Pro Alerts — $29/mo
                </>
              )}
            </button>

            <p className="text-xs text-center text-gray-600">
              By submitting, you agree to our Terms of Service. Cancel anytime.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
