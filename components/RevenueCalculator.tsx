"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp, Clock, DollarSign, FileText } from "lucide-react";

const AMOUNT_BANDS = [
  { label: "Under $10K", midpoint: 7500 },
  { label: "$10K – $25K", midpoint: 17500 },
  { label: "$25K – $50K", midpoint: 37500 },
  { label: "$50K – $100K", midpoint: 75000 },
  { label: "Over $100K", midpoint: 125000 },
] as const;

const WIN_RATE = 0.7;
const MANUAL_HOURS = 3;
const SYDRA_HOURS = 0.25;
const HOURLY_RATE = 65;

function formatDollars(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${Math.round(n / 1_000)}K`;
  return `$${n.toLocaleString()}`;
}

function formatHours(n: number): string {
  if (n >= 1000) return `${Math.round(n / 1000)}K hrs`;
  return `${Math.round(n)} hrs`;
}

interface RevenueCalculatorProps {
  compact?: boolean;
}

export function RevenueCalculator({ compact = false }: RevenueCalculatorProps) {
  const [monthlyCases, setMonthlyCases] = useState(10);
  const [bandIndex, setBandIndex] = useState(2); // default $25K–$50K

  const results = useMemo(() => {
    const annual = monthlyCases * 12;
    const avgAmount = AMOUNT_BANDS[bandIndex].midpoint;
    const recovery = Math.round(annual * WIN_RATE * avgAmount);
    const hoursSaved = annual * (MANUAL_HOURS - SYDRA_HOURS);
    const laborSaved = Math.round(hoursSaved * HOURLY_RATE);
    return { annual, recovery, hoursSaved, laborSaved };
  }, [monthlyCases, bandIndex]);

  if (compact) {
    return (
      <div className="w-full">
        <p className="font-body text-[10px] uppercase tracking-widest text-white/50 mb-4">
          Estimate your upside
        </p>

        {/* Inputs */}
        <div className="space-y-4 mb-6">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="font-body text-xs text-white/70 font-light">
                Monthly OON cases
              </label>
              <span className="font-heading text-lg text-white leading-none">{monthlyCases}</span>
            </div>
            <input
              type="range"
              min={1}
              max={100}
              value={monthlyCases}
              onChange={(e) => setMonthlyCases(Number(e.target.value))}
              className="w-full h-1 bg-white/20 appearance-none cursor-pointer accent-kronos-cyan [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-pointer"
              aria-label="Monthly out-of-network cases"
            />
            <div className="flex justify-between mt-1">
              <span className="font-body text-[9px] text-white/30">1</span>
              <span className="font-body text-[9px] text-white/30">100</span>
            </div>
          </div>

          <div>
            <label className="font-body text-xs text-white/70 font-light block mb-1.5">
              Avg disputed amount
            </label>
            <select
              value={bandIndex}
              onChange={(e) => setBandIndex(Number(e.target.value))}
              className="w-full bg-white/10 border border-white/20 text-white font-body text-xs py-2 px-3 appearance-none cursor-pointer focus:outline-none focus:border-white/50"
              aria-label="Average disputed amount per case"
            >
              {AMOUNT_BANDS.map((band, i) => (
                <option key={band.label} value={i} className="bg-[#003D1A] text-white">
                  {band.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Outputs */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/10 border border-white/15 p-4">
            <p className="font-body text-[9px] uppercase tracking-widest text-white/50 mb-1">
              Est. annual recovery
            </p>
            <p className="font-heading text-2xl sm:text-3xl text-white leading-none">
              {formatDollars(results.recovery)}
            </p>
            <p className="font-body text-[9px] text-white/40 mt-1">at 70% win rate</p>
          </div>
          <div className="bg-white/10 border border-white/15 p-4">
            <p className="font-body text-[9px] uppercase tracking-widest text-white/50 mb-1">
              Labor hours saved
            </p>
            <p className="font-heading text-2xl sm:text-3xl text-white leading-none">
              {formatHours(results.hoursSaved)}
            </p>
            <p className="font-body text-[9px] text-white/40 mt-1">vs manual submission</p>
          </div>
        </div>
      </div>
    );
  }

  // Full mode
  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
      <header className="mb-10 sm:mb-14">
        <p className="text-xs tracking-widest uppercase text-gray-400 mb-4">
          Recovery Calculator
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-900">
          How much are you leaving on the table?
        </h2>
        <p className="font-body text-sm text-gray-500 font-light mt-4 max-w-2xl">
          Adjust the inputs to estimate your annual IDR recovery potential and the time your billing team spends on manual submissions.
        </p>
      </header>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        {/* Left: Inputs */}
        <div>
          {/* Monthly cases slider */}
          <div className="mb-8 sm:mb-10">
            <div className="flex items-end justify-between mb-3">
              <label
                htmlFor="monthly-cases"
                className="font-heading text-lg sm:text-xl text-gray-900"
              >
                Monthly out-of-network cases
              </label>
              <span className="font-heading text-4xl sm:text-5xl text-kronos-cyan leading-none">
                {monthlyCases}
              </span>
            </div>
            <input
              id="monthly-cases"
              type="range"
              min={1}
              max={100}
              value={monthlyCases}
              onChange={(e) => setMonthlyCases(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-200 appearance-none cursor-pointer accent-kronos-cyan [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-kronos-cyan [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-sm"
            />
            <div className="flex justify-between mt-2">
              <span className="font-body text-[10px] text-gray-400">1 / month</span>
              <span className="font-body text-[10px] text-gray-400">100 / month</span>
            </div>
          </div>

          {/* Amount select */}
          <div className="mb-8 sm:mb-10">
            <label
              htmlFor="avg-amount"
              className="font-heading text-lg sm:text-xl text-gray-900 block mb-3"
            >
              Average disputed amount per case
            </label>
            <div className="grid grid-cols-1 gap-2">
              {AMOUNT_BANDS.map((band, i) => (
                <button
                  key={band.label}
                  onClick={() => setBandIndex(i)}
                  className={`flex items-center justify-between px-4 py-3 border text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan ${
                    bandIndex === i
                      ? "border-kronos-cyan bg-kronos-cyan/8 text-gray-900"
                      : "border-gray-200 bg-white text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`}
                  aria-pressed={bandIndex === i}
                >
                  <span className="font-body text-sm font-light">{band.label}</span>
                  {bandIndex === i && (
                    <span className="font-heading text-xs text-kronos-cyan">Selected</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Assumptions note */}
          <p className="font-body text-[10px] text-gray-400 font-light leading-relaxed border-t border-gray-100 pt-4">
            Assumes 70% win rate (CMS IDR data), 3 hrs manual submission vs 15 min with Sydra, $65/hr billing specialist rate. Recovery estimate based on disputed amount midpoints. Not a guarantee of results.
          </p>
        </div>

        {/* Right: Outputs */}
        <div className="space-y-3 sm:space-y-4">
          <div className="bg-gray-50 border border-gray-100 border-l-4 border-l-kronos-cyan p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-kronos-cyan/10 flex items-center justify-center flex-shrink-0 mt-1">
                <TrendingUp className="w-4 h-4 text-kronos-cyan" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <div className="flex-1">
                <p className="font-body text-[10px] uppercase tracking-widest text-gray-400 mb-1">
                  Annual recovery potential
                </p>
                <p className="font-heading text-4xl sm:text-5xl text-kronos-cyan leading-none mb-1">
                  {formatDollars(results.recovery)}
                </p>
                <p className="font-body text-xs text-gray-400 font-light">
                  {results.annual} cases × 70% win rate × {AMOUNT_BANDS[bandIndex].label}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-gray-50 border border-gray-100 p-5 sm:p-6">
              <div className="w-8 h-8 bg-kronos-cyan/10 flex items-center justify-center mb-3">
                <FileText className="w-3.5 h-3.5 text-kronos-cyan" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <p className="font-body text-[9px] uppercase tracking-widest text-gray-400 mb-1">
                Annual cases
              </p>
              <p className="font-heading text-3xl text-gray-900 leading-none">
                {results.annual}
              </p>
              <p className="font-body text-[9px] text-gray-400 mt-1">eligible to file</p>
            </div>

            <div className="bg-gray-50 border border-gray-100 p-5 sm:p-6">
              <div className="w-8 h-8 bg-kronos-cyan/10 flex items-center justify-center mb-3">
                <Clock className="w-3.5 h-3.5 text-kronos-cyan" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <p className="font-body text-[9px] uppercase tracking-widest text-gray-400 mb-1">
                Hours saved
              </p>
              <p className="font-heading text-3xl text-gray-900 leading-none">
                {formatHours(results.hoursSaved)}
              </p>
              <p className="font-body text-[9px] text-gray-400 mt-1">vs manual</p>
            </div>

            <div className="bg-gray-50 border border-gray-100 p-5 sm:p-6">
              <div className="w-8 h-8 bg-kronos-cyan/10 flex items-center justify-center mb-3">
                <DollarSign className="w-3.5 h-3.5 text-kronos-cyan" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <p className="font-body text-[9px] uppercase tracking-widest text-gray-400 mb-1">
                Labor saved
              </p>
              <p className="font-heading text-3xl text-gray-900 leading-none">
                {formatDollars(results.laborSaved)}
              </p>
              <p className="font-body text-[9px] text-gray-400 mt-1">in billing time</p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#003D1A] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="font-heading text-xl sm:text-2xl text-white leading-tight mb-1">
                Ready to start recovering?
              </p>
              <p className="font-body text-xs text-white/60 font-light">
                Get a free revenue review — no commitment.
              </p>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center gap-3 bg-white text-[#003D1A] py-3 px-6 uppercase tracking-widest text-xs font-bold hover:bg-white/90 hover:gap-5 transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#003D1A]"
            >
              Free Revenue Review
              <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
