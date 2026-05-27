"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Brain, Play, CheckCircle, ChevronRight, ExternalLink, Trophy, Zap, BookOpen } from "lucide-react";
import { talks, tracks, niveauKleur, getTrack, type TrackId } from "@/lib/talk-data";
import { getProgress } from "@/lib/progress";
import ProgressBar from "@/components/ProgressBar";

const ALLE_TRACKS = "alles";

export default function Dashboard() {
  const [viewed, setViewed] = useState<number[]>([]);
  const [quizScores, setQuizScores] = useState<Record<number, number>>({});
  const [lastVisited, setLastVisited] = useState<number | null>(null);
  const [actieveTrack, setActieveTrack] = useState<string>(ALLE_TRACKS);

  useEffect(() => {
    const p = getProgress();
    setViewed(p.viewedTalks);
    setQuizScores(p.quizScores);
    setLastVisited(p.lastVisited);
  }, []);

  const totaalPunten = Object.values(quizScores).reduce((a, b) => a + b, 0);
  const tracksVoltooid = tracks.filter((tr) =>
    talks.filter((t) => t.track === tr.id).every((t) => viewed.includes(t.id))
  ).length;

  const gefilterd = actieveTrack === ALLE_TRACKS
    ? talks
    : talks.filter((t) => t.track === actieveTrack);

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-700 rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative">
          <div className="flex items-center gap-2 mb-3">
            <Brain className="w-7 h-7 text-emerald-200" />
            <span className="text-emerald-200 text-sm font-medium">Officiële Anthropic conferentie · London 2026</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">Code with Claude 2026</h1>
          <p className="text-emerald-200 text-sm md:text-base max-w-2xl leading-relaxed mb-5">
            24 talks over Claude Code, agents, prompting, modellen en enterprise-gebruik.
            Bekijk de videos, test je kennis met quizzes en houd je voortgang bij.
          </p>
          <div className="flex flex-wrap gap-3">
            {lastVisited ? (
              <Link
                href={`/talk/${lastVisited}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-emerald-700 rounded-xl font-semibold text-sm hover:bg-emerald-50 transition-colors shadow-sm"
              >
                <Play className="w-4 h-4" />
                Ga verder — Talk {lastVisited}
              </Link>
            ) : (
              <Link
                href="/talk/1"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-emerald-700 rounded-xl font-semibold text-sm hover:bg-emerald-50 transition-colors shadow-sm"
              >
                <Play className="w-4 h-4" />
                Begin met Talk 1
              </Link>
            )}
            <a
              href="https://www.youtube.com/playlist?list=PLmWCw1CzcFilPJdvw6scjHjbBripZWFps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold text-sm transition-colors border border-white/20"
            >
              <ExternalLink className="w-4 h-4" />
              YouTube Playlist
            </a>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: <BookOpen className="w-5 h-5 text-emerald-500" />, waarde: `${viewed.length}/24`, label: "Talks bekeken", bg: "bg-emerald-50" },
          { icon: <Trophy className="w-5 h-5 text-amber-500" />, waarde: `${totaalPunten}/${24 * 5}`, label: "Quiz punten", bg: "bg-amber-50" },
          { icon: <CheckCircle className="w-5 h-5 text-green-500" />, waarde: `${Math.round((viewed.length / 24) * 100)}%`, label: "Voortgang", bg: "bg-green-50" },
          { icon: <Zap className="w-5 h-5 text-teal-500" />, waarde: `${tracksVoltooid}/${tracks.length}`, label: "Tracks voltooid", bg: "bg-teal-50" },
        ].map((stat, i) => (
          <div key={i} className={`${stat.bg} rounded-xl p-4 flex flex-col gap-1`}>
            {stat.icon}
            <div className="text-2xl font-bold text-slate-900 mt-1">{stat.waarde}</div>
            <div className="text-xs text-slate-500">{stat.label}</div>
          </div>
        ))}
      </div>

      <ProgressBar value={viewed.length} max={24} label="Totale voortgang" />

      {/* Track-tabs */}
      <div>
        <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-emerald-600" />
          De 24 Talks
        </h2>
        <div className="flex flex-wrap gap-2 mb-5">
          <button
            onClick={() => setActieveTrack(ALLE_TRACKS)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              actieveTrack === ALLE_TRACKS
                ? "bg-emerald-600 text-white"
                : "bg-white border border-slate-200 text-slate-600 hover:border-emerald-300"
            }`}
          >
            Alles ({talks.length})
          </button>
          {tracks.map((tr) => {
            const count = talks.filter((t) => t.track === tr.id).length;
            return (
              <button
                key={tr.id}
                onClick={() => setActieveTrack(tr.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  actieveTrack === tr.id
                    ? `${tr.badge} text-white`
                    : `bg-white border border-slate-200 ${tr.kleur} hover:${tr.border}`
                }`}
              >
                {tr.label} ({count})
              </button>
            );
          })}
        </div>

        {/* Kaarten grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {gefilterd.map((talk) => {
            const isViewed = viewed.includes(talk.id);
            const score = quizScores[talk.id];
            const tr = getTrack(talk.track);

            return (
              <div
                key={talk.id}
                className={`bg-white rounded-xl border-2 transition-all overflow-hidden hover:shadow-md ${
                  isViewed ? "border-green-200" : tr.border
                }`}
              >
                <div className={`h-1.5 ${tr.badge}`} />
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full ${tr.bg} ${tr.kleur}`}>
                        {String(talk.id).padStart(2, "0")}
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${niveauKleur[talk.niveau]}`}>
                        {talk.niveau}
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${tr.bg} ${tr.kleur}`}>
                        {tr.label}
                      </span>
                    </div>
                    {isViewed && <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />}
                  </div>

                  <h3 className="font-bold text-slate-900 text-sm leading-snug mb-1">{talk.titel}</h3>
                  <p className="text-xs text-slate-500 mb-3 leading-relaxed line-clamp-2">{talk.ondertitel}</p>

                  {score !== undefined && (
                    <div className="mb-3">
                      <ProgressBar value={score} max={5} label="Quiz" kleur={score >= 3 ? "green" : "amber"} />
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">{talk.duur}</span>
                    <Link
                      href={`/talk/${talk.id}`}
                      className={`inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg ${tr.badge} text-white hover:opacity-90 transition-opacity`}
                    >
                      {isViewed ? "Herhalen" : "Bekijk"}
                      <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-center text-xs text-slate-400 pt-4 border-t border-slate-100">
        <a
          href="https://www.youtube.com/playlist?list=PLmWCw1CzcFilPJdvw6scjHjbBripZWFps"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-500 hover:underline"
        >
          Code with Claude 2026 | London 2026
        </a>{" "}
        · Officiële Anthropic conferentie
      </div>
    </div>
  );
}
