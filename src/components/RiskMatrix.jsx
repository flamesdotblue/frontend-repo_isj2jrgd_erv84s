import React from 'react';

const threats = [
  { name: 'BLE spoof/replay', likelihood: 3, impact: 3, mitigation: 'Challenge‑response tokens, device binding' },
  { name: 'Signal flapping', likelihood: 3, impact: 2, mitigation: 'EMA smoothing, hysteresis, debounce' },
  { name: 'Stolen phone', likelihood: 2, impact: 3, mitigation: 'OS auth required for unlock; user grace + suspend' },
  { name: 'Daemon crash', likelihood: 2, impact: 3, mitigation: 'Supervisor restart, fail‑safe lock policy' },
  { name: 'Over‑permissive service', likelihood: 2, impact: 2, mitigation: 'Least privilege manifests, code signing' },
  { name: 'Privacy leakage', likelihood: 2, impact: 2, mitigation: 'Log redaction, local‑only by default' },
];

function Cell({ active }) {
  return (
    <div className={`h-10 w-10 rounded border border-white/10 ${active ? 'bg-emerald-500/30' : 'bg-white/5'}`} />
  );
}

export default function RiskMatrix() {
  return (
    <section className="py-14 md:py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Risk matrix</h2>
            <p className="mt-2 text-white/70 max-w-2xl">
              Top threats mapped by likelihood and impact with primary mitigations.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="grid grid-cols-4 gap-2">
              <div className="col-span-1" />
              <div className="col-span-3 text-xs text-white/60 grid grid-cols-3 text-center"> 
                <span>Impact 1</span><span>2</span><span>3</span>
              </div>

              {[1,2,3].map((lik) => (
                <React.Fragment key={lik}>
                  <div className="text-xs text-white/60 flex items-center">Likelihood {lik}</div>
                  {[1,2,3].map((imp) => (
                    <Cell key={`${lik}-${imp}`} active={lik*imp >= 6} />
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <ul className="space-y-3">
              {threats.map((t) => (
                <li key={t.name} className="text-sm">
                  <div className="font-medium">{t.name} <span className="text-white/50">(L{t.likelihood}×I{t.impact})</span></div>
                  <div className="text-white/70">Mitigation: {t.mitigation}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
