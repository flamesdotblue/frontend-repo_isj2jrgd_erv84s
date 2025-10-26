import React from 'react';
import { Shield, ListChecks, Layers, Package } from 'lucide-react';

const items = [
  {
    title: 'Reliability & Sensor Fusion',
    icon: Layers,
    desc:
      'Combine BLE RSSI, connection state, and optional Wi‑Fi RSSI with smoothing and calibrated weights to reduce false decisions.',
    impact: 'High impact, high risk',
  },
  {
    title: 'Anti‑spoofing & Auth Flow',
    icon: Shield,
    desc:
      'Pairing, device binding, and challenge‑response tokens to resist replay and MAC spoofing without bypassing OS auth.',
    impact: 'High impact, high risk',
  },
  {
    title: 'Hysteresis & Debounce',
    icon: ListChecks,
    desc:
      'Stability controls in the evaluator/FSM to avoid flapping on noisy signals; grace periods and cool‑downs.',
    impact: 'High impact, medium risk',
  },
  {
    title: 'Packaging & Least Privilege',
    icon: Package,
    desc:
      'User‑level daemon, scoped permissions, and platform service manifests with minimal capabilities enabled.',
    impact: 'Medium impact, medium risk',
  },
];

export default function PlanSection() {
  return (
    <section id="plan" className="relative py-14 md:py-20 bg-[#0a0b0c] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Prioritized hardening plan</h2>
        <p className="mt-2 text-white/70 max-w-2xl">
          Build a dependable MVP, then iterate with security and reliability improvements that matter most.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map(({ title, icon: Icon, desc, impact }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="text-lg font-medium">{title}</h3>
                  <p className="text-xs text-white/50">{impact}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-white/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
