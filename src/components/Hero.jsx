import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/mwBbOy4jrazr59EO/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient vignette that does not block interaction with the 3D scene */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col items-start justify-center">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Proximity-Based Auto Lock/Wake
        </h1>
        <p className="mt-3 md:mt-4 text-sm md:text-lg text-white/80 max-w-2xl">
          Security-first, Bluetooth-powered session control. Ship an MVP quickly, then harden with
          prioritized improvements.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href="#plan"
            className="inline-flex items-center justify-center rounded-md bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-5 py-2 transition-colors"
          >
            View Hardening Plan
          </a>
          <a
            href="#structure"
            className="inline-flex items-center justify-center rounded-md border border-white/20 hover:border-white/40 text-white font-medium px-5 py-2 transition-colors"
          >
            Codebase Structure
          </a>
        </div>
      </div>
    </section>
  );
}
