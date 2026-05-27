"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Clock, Target, ExternalLink, CheckCircle } from "lucide-react";
import { getTalkById, talks, niveauKleur, getTrack } from "@/lib/talk-data";
import { getProgress, setLastVisited } from "@/lib/progress";
import VideoEmbed from "@/components/VideoEmbed";
import QuizBlock from "@/components/QuizBlock";

export default function TalkPagina() {
  const { id } = useParams<{ id: string }>();
  const talkId = parseInt(id, 10);
  const talk = getTalkById(talkId);

  const [viewed, setViewed] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState<"video" | "quiz">("video");

  useEffect(() => {
    if (!isNaN(talkId)) setLastVisited(talkId);
    const p = getProgress();
    setViewed(p.viewedTalks);
  }, [talkId]);

  if (!talk) {
    return (
      <div className="text-center py-20">
        <p className="text-slate-500">Talk niet gevonden.</p>
        <Link href="/" className="text-emerald-600 hover:underline mt-2 inline-block">Terug naar dashboard</Link>
      </div>
    );
  }

  const tr = getTrack(talk.track);
  const isViewed = viewed.includes(talk.id);
  const vorigeId = talkId > 1 ? talkId - 1 : null;
  const volgendeId = talkId < talks.length ? talkId + 1 : null;

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-slate-500">
        <Link href="/" className="hover:text-emerald-600 transition-colors">Dashboard</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-slate-700 font-medium">Talk {talk.id}</span>
      </div>

      {/* Header */}
      <div className={`${tr.bg} rounded-2xl border ${tr.border} p-6`}>
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full ${tr.badge} text-white`}>
            Talk {String(talk.id).padStart(2, "0")}
          </span>
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${niveauKleur[talk.niveau]}`}>
            {talk.niveau}
          </span>
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${tr.bg} ${tr.kleur} border ${tr.border}`}>
            {tr.label}
          </span>
          <span className="flex items-center gap-1 text-xs text-slate-500">
            <Clock className="w-3 h-3" />{talk.duur}
          </span>
          {isViewed && (
            <span className="flex items-center gap-1 text-xs text-green-600 font-medium">
              <CheckCircle className="w-3 h-3" />Bekeken
            </span>
          )}
        </div>
        <h1 className={`text-xl font-bold ${tr.kleur} leading-snug mb-1`}>{talk.titel}</h1>
        <p className="text-slate-600 text-sm">{talk.ondertitel}</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-slate-100 rounded-xl p-1">
        {(["video", "quiz"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
              activeTab === tab ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
            }`}
          >
            {tab === "video" ? "📺 Video" : "🧠 Quiz"}
          </button>
        ))}
      </div>

      {/* Video tab */}
      {activeTab === "video" && (
        <div className="space-y-6">
          <VideoEmbed youtubeId={talk.youtubeId} titel={talk.titel} />

          <div className="bg-white rounded-xl border border-slate-200 p-5">
            <h2 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Target className="w-4 h-4 text-emerald-500" />
              Leerdoelen
            </h2>
            <ul className="space-y-2">
              {talk.leerdoelen.map((doel, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className={`w-5 h-5 rounded-full ${tr.badge} text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold`}>
                    {i + 1}
                  </span>
                  {doel}
                </li>
              ))}
            </ul>
          </div>

          <a
            href={`https://www.youtube.com/watch?v=${talk.youtubeId}&list=PLmWCw1CzcFilPJdvw6scjHjbBripZWFps`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 text-sm font-medium transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            Bekijk op YouTube
          </a>
        </div>
      )}

      {/* Quiz tab */}
      {activeTab === "quiz" && (
        <div className="space-y-4">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-sm text-emerald-800">
            <strong>Tip:</strong> Bekijk eerst de video voordat je de quiz doet.
            Je hebt 3 van de 5 vragen goed nodig om de talk als bekeken te markeren.
          </div>
          <QuizBlock talkId={talk.id} vragen={talk.quiz} />
        </div>
      )}

      {/* Navigatie */}
      <div className="flex gap-3 pt-2 border-t border-slate-100">
        {vorigeId ? (
          <Link
            href={`/talk/${vorigeId}`}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 text-sm font-medium transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Talk {vorigeId}
          </Link>
        ) : <div />}
        <div className="flex-1" />
        {volgendeId && (
          <Link
            href={`/talk/${volgendeId}`}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl ${tr.badge} text-white text-sm font-semibold transition-opacity hover:opacity-90`}
          >
            Talk {volgendeId}
            <ChevronRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
