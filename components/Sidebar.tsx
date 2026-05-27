"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Brain, LayoutDashboard, TrendingUp, Menu, X, ExternalLink } from "lucide-react";
import { tracks, talks } from "@/lib/talk-data";
import { getProgress } from "@/lib/progress";

function SidebarContent({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname();
  const [viewed, setViewed] = useState<number[]>([]);

  useEffect(() => {
    const p = getProgress();
    setViewed(p.viewedTalks);
  }, [pathname]);

  function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    const active = pathname === href;
    return (
      <Link
        href={href}
        onClick={onClose}
        className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
          active ? "bg-emerald-50 text-emerald-700" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
        }`}
      >
        {children}
      </Link>
    );
  }

  return (
    <aside className="w-60 h-full flex flex-col bg-white border-r border-slate-200">
      {/* Logo */}
      <div className="px-4 py-4 border-b border-slate-100 flex items-center justify-between">
        <Link href="/" onClick={onClose} className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-emerald-600" />
          <span className="font-bold text-slate-900 text-sm leading-tight">
            Code with Claude<br />
            <span className="text-emerald-600 font-semibold text-xs">London 2026</span>
          </span>
        </Link>
        {onClose && (
          <button onClick={onClose} className="md:hidden p-1 text-slate-400 hover:text-slate-600">
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Hoofdnav */}
      <nav className="px-3 py-3 border-b border-slate-100 space-y-1">
        <NavLink href="/"><LayoutDashboard className="w-4 h-4" /> Dashboard</NavLink>
        <NavLink href="/voortgang"><TrendingUp className="w-4 h-4" /> Voortgang</NavLink>
      </nav>

      {/* Tracks */}
      <nav className="px-3 py-3 flex-1 overflow-y-auto">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">Tracks</p>
        <div className="space-y-3">
          {tracks.map((track) => {
            const trackTalks = talks.filter((t) => t.track === track.id);
            const viewedCount = trackTalks.filter((t) => viewed.includes(t.id)).length;
            return (
              <div key={track.id}>
                <div className="flex items-center justify-between px-3 mb-1">
                  <span className={`text-xs font-semibold ${track.kleur}`}>{track.label}</span>
                  <span className="text-xs text-slate-400">{viewedCount}/{trackTalks.length}</span>
                </div>
                <div className="space-y-0.5">
                  {trackTalks.map((talk) => {
                    const isViewed = viewed.includes(talk.id);
                    const active = pathname === `/talk/${talk.id}`;
                    return (
                      <Link
                        key={talk.id}
                        href={`/talk/${talk.id}`}
                        onClick={onClose}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-colors ${
                          active
                            ? "bg-emerald-50 text-emerald-700 font-medium"
                            : "text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                        }`}
                      >
                        <span className={`w-4 h-4 rounded-full ${track.badge} text-white text-xs flex items-center justify-center font-bold flex-shrink-0`}>
                          {talk.id}
                        </span>
                        <span className="truncate flex-1">{talk.titel}</span>
                        {isViewed && <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-slate-100">
        <a
          href="https://www.youtube.com/playlist?list=PLmWCw1CzcFilPJdvw6scjHjbBripZWFps"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-emerald-600 transition-colors"
        >
          <ExternalLink className="w-3 h-3" />
          YouTube Playlist
        </a>
      </div>
    </aside>
  );
}

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-3 left-3 z-50 p-2 bg-white rounded-lg border border-slate-200 shadow-sm text-slate-600"
        aria-label="Menu openen"
      >
        <Menu className="w-5 h-5" />
      </button>

      {open && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="relative z-10 h-full">
            <SidebarContent onClose={() => setOpen(false)} />
          </div>
        </div>
      )}

      <div className="hidden md:flex h-full sticky top-0">
        <SidebarContent />
      </div>
    </>
  );
}
