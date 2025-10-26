import React from 'react';

const structure = `proximity-lock/
├─ README.md
├─ docs/
│  ├─ architecture.md
│  ├─ threat_model.md
│  └─ runbooks.md
├─ config/
│  ├─ default.yaml
│  └─ schemas/
├─ src/
│  ├─ probe/
│  │  ├─ __init__.py
│  │  ├─ bleak_adapter.py
│  │  └─ wifi_adapter.py
│  ├─ evaluator/
│  │  ├─ __init__.py
│  │  └─ fusion.py
│  ├─ fsm/
│  │  ├─ __init__.py
│  │  └─ state_manager.py
│  ├─ actions/
│  │  ├─ __init__.py
│  │  ├─ win_actions.py
│  │  ├─ mac_actions.py
│  │  └─ linux_actions.py
│  ├─ ui/
│  │  ├─ __init__.py
│  │  └─ tray.py
│  ├─ service.py
│  ├─ config_loader.py
│  └─ logger.py
├─ tests/
│  ├─ unit/
│  └─ integration/
├─ packaging/
│  ├─ windows/
│  ├─ mac/
│  └─ linux/
└─ ci/
   └─ pipeline.yml`;

export default function ProjectStructure() {
  return (
    <section id="structure" className="py-14 md:py-20 bg-[#0a0b0c] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Proposed codebase structure</h2>
        <p className="mt-2 text-white/70 max-w-2xl">
          Organize modules for probe adapters, evaluator, FSM, OS actions, service wrapper, UI, tests, CI, and packaging.
        </p>

        <div className="mt-6 rounded-xl border border-white/10 bg-black p-5 overflow-auto">
          <pre className="text-xs md:text-sm leading-relaxed text-emerald-200">
            <code>{structure}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
