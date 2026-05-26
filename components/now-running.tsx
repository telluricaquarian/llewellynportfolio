"use client";

import { useEffect, useState } from "react";

type Agent = {
  id: string;
  name: string;
  schedule: string;
  status: "ok" | "error" | "unknown";
  last_run: string;
  summary: string;
  mode: "agent" | "script";
};

type Status = {
  updated_at: string;
  updated_at_local: string;
  stack: string;
  agents: Agent[];
  totals: { agents_live: number; skills_loaded: number };
};

const StatusPill = ({ status }: { status: Agent["status"] }) => {
  const base =
    "inline-block px-2 py-[3px] text-[10px] font-mono tracking-[0.15em] bg-black text-white uppercase";
  if (status === "ok") return <span className={base}>● Live</span>;
  if (status === "error")
    return <span className={`${base} bg-red-600`}>● Error</span>;
  return <span className={`${base} opacity-50`}>○ Idle</span>;
};

export default function NowRunning() {
  const [data, setData] = useState<Status | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    fetch("/hermes-status.json", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then(setData)
      .catch(() => setErr("status feed unavailable"));
  }, []);

  return (
    <section className="relative w-full px-6 md:px-12 py-16 md:py-24">
      {/* Header: matches About / Contact styling */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="font-mono text-sm md:text-base tracking-wider text-indigo-500">
          ── Now Running
        </h2>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-black" />
          <span className="w-10 h-px bg-black" />
        </div>
      </div>

      {/* Disclaimer */}
      <p className="font-mono text-xs md:text-sm text-indigo-500/80 max-w-xl mb-12">
        Live status from my agent stack. Refreshes hourly. No theatre — this is
        the real cron board.
      </p>

      {err && <p className="font-mono text-xs text-black/50">{err}</p>}

      {data && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* Left: Agents */}
            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] text-black/50 mb-6">
                AGENTS
              </p>
              <div className="space-y-6">
                {data.agents.map((agent, i) => (
                  <div
                    key={agent.id}
                    className={`border-l-2 pl-4 py-1 ${
                      i === 0 ? "border-black" : "border-black/20"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="font-mono text-sm font-bold uppercase tracking-wide">
                        {agent.name}
                      </span>
                      <StatusPill status={agent.status} />
                    </div>
                    <p className="font-mono text-[11px] text-black/60">
                      {agent.schedule} · {agent.mode}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Today */}
            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] text-black/50 mb-6">
                TODAY
              </p>
              <div className="space-y-6">
                {data.agents.map((agent) => (
                  <div key={`today-${agent.id}`}>
                    <p className="font-mono text-sm font-bold uppercase tracking-wide mb-1">
                      {agent.name}
                    </p>
                    <div className="font-mono text-[10px] text-black/30 mb-1.5">
                      ──────────────
                    </div>
                    <p className="font-mono text-xs text-indigo-500">
                      {agent.summary}
                    </p>
                    <p className="font-mono text-[10px] text-black/40 mt-1">
                      last run · {agent.last_run ? new Date(agent.last_run).toLocaleString("en-AU", { hour: "2-digit", minute: "2-digit", day: "2-digit", month: "short" }) : "—"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer rule + stats */}
          <div className="mt-16 pt-6 border-t border-black/30 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 font-mono text-[10px] tracking-[0.2em] text-black/60 uppercase">
            <span>{data.totals.agents_live} Agents Live</span>
            <span>{data.totals.skills_loaded} Skills</span>
            <span>{data.stack}</span>
            <span>Updated · {data.updated_at_local}</span>
          </div>
        </>
      )}
    </section>
  );
}
