"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { TrendingUp, CheckCircle, XCircle, Trophy, RotateCcw, Star } from "lucide-react";
import { talks, tracks, getTrack } from "@/lib/talk-data";
import { getProgress, resetProgress } from "@/lib/progress";
import ProgressBar from "@/components/ProgressBar";

export default function VoortgangPagina() {
  const [viewed, setViewed] = useState<number[]>([]);
  const [quizScores, setQuizScores] = useState<Record<number, number>>({});

  useEffect(() => {
    const p = getProgress();
    setViewed(p.viewedTalks);
    setQuizScores(p.quizScores);
  }, []);

  function handleReset() {
    if (confirm("Weet je zeker dat je alle voortgang wilt wissen?")) {
      resetProgress();
      setViewed([]);
      setQuizScores({});
    }
  }

  const totaalPunten = Object.values(quizScores).reduce((a, b) => a + b, 0);
  const maxPunten = talks.length * 5;
  const gemiddelde = Object.keys(quizScores).length > 0
    ? Math.round((totaalPunten / (Object.keys(quizScores).length * 5)) * 100)
    : 0;
  const alleGezien = viewed.length === talks.length;

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-1">
            <TrendingUp className="w-6 h-6 text-emerald-600" />
            Voortgang
          </h1>
          <p className="text-slate-500 text-sm">Jouw voortgang door Code with Claude 2026 · London</p>
        </div>
        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-500 hover:border-red-200 hover:text-red-600 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Voortgang resetten
        </button>
      </div>

      {alleGezien && (
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-300 rounded-2xl p-6 text-center">
          <Trophy className="w-12 h-12 text-amber-500 mx-auto mb-3" />
          <h2 className="text-xl font-bold text-amber-900 mb-1">Alle 24 talks bekeken!</h2>
          <p className="text-amber-700 text-sm mb-3">
            Je hebt de volledige Code with Claude 2026 conferentie doorlopen.
          </p>
          <div className="flex justify-center gap-1">
            {[1,2,3,4,5].map((i) => (
              <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
            ))}
          </div>
        </div>
      )}

      {/* Voortgangsbalken */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-4">
        <h2 className="font-bold text-slate-900 text-sm">Overzicht</h2>
        <ProgressBar value={viewed.length} max={talks.length} label="Talks bekeken" />
        <ProgressBar value={totaalPunten} max={maxPunten} label="Quiz punten" kleur="amber" />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { waarde: `${viewed.length}/${talks.length}`, label: "Talks bekeken", kleur: "bg-emerald-50 text-emerald-700" },
          { waarde: `${totaalPunten}/${maxPunten}`, label: "Quiz punten", kleur: "bg-amber-50 text-amber-700" },
          { waarde: `${gemiddelde}%`, label: "Quiz gemiddelde", kleur: "bg-green-50 text-green-700" },
          { waarde: `${tracks.filter(tr => talks.filter(t => t.track === tr.id).every(t => viewed.includes(t.id))).length}/${tracks.length}`, label: "Tracks voltooid", kleur: "bg-teal-50 text-teal-700" },
        ].map((s, i) => (
          <div key={i} className={`${s.kleur} rounded-xl p-4`}>
            <div className="text-2xl font-bold mb-1">{s.waarde}</div>
            <div className="text-xs opacity-75">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Per track */}
      {tracks.map((tr) => {
        const trackTalks = talks.filter((t) => t.track === tr.id);
        const viewedCount = trackTalks.filter((t) => viewed.includes(t.id)).length;
        return (
          <div key={tr.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className={`px-5 py-3 ${tr.bg} border-b ${tr.border} flex items-center justify-between`}>
              <h3 className={`font-bold text-sm ${tr.kleur}`}>{tr.label}</h3>
              <span className="text-xs text-slate-500">{viewedCount}/{trackTalks.length} bekeken</span>
            </div>
            <div className="divide-y divide-slate-100">
              {trackTalks.map((talk) => {
                const isViewed = viewed.includes(talk.id);
                const score = quizScores[talk.id];
                return (
                  <div key={talk.id} className="px-5 py-3 flex items-center gap-4">
                    <span className={`w-7 h-7 rounded-full ${tr.badge} text-white text-xs font-bold flex items-center justify-center flex-shrink-0`}>
                      {talk.id}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-900 truncate">{talk.titel}</p>
                    </div>
                    <div className="flex-shrink-0 text-xs">
                      {score !== undefined
                        ? <span className={`font-semibold ${score >= 3 ? "text-green-600" : "text-amber-600"}`}>{score}/5</span>
                        : <span className="text-slate-300">—/5</span>}
                    </div>
                    <div className="flex-shrink-0">
                      {isViewed
                        ? <CheckCircle className="w-4 h-4 text-green-500" />
                        : <XCircle className="w-4 h-4 text-slate-200" />}
                    </div>
                    <Link
                      href={`/talk/${talk.id}`}
                      className={`flex-shrink-0 text-xs font-medium px-2.5 py-1 rounded-lg ${tr.bg} ${tr.kleur} hover:opacity-80 transition-opacity`}
                    >
                      {isViewed ? "Herhalen" : "Bekijk"}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
