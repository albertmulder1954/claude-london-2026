"use client";

import { useState, useEffect } from "react";
import { CheckCircle, XCircle, RotateCcw } from "lucide-react";
import { setQuizScore, getProgress } from "@/lib/progress";
import type { QuizVraag } from "@/lib/talk-data";

interface QuizBlockProps {
  talkId: number;
  vragen: QuizVraag[];
}

type Fase = "start" | "bezig" | "klaar";

export default function QuizBlock({ talkId, vragen }: QuizBlockProps) {
  const [fase, setFase] = useState<Fase>("start");
  const [huidig, setHuidig] = useState(0);
  const [gekozen, setGekozen] = useState<number | null>(null);
  const [antwoorden, setAntwoorden] = useState<(number | null)[]>(Array(vragen.length).fill(null));
  const [bevestigd, setBevestigd] = useState(false);
  const [vorigeScore, setVorigeScore] = useState<number | undefined>(undefined);

  useEffect(() => {
    const p = getProgress();
    const s = p.quizScores[talkId];
    if (s !== undefined) setVorigeScore(s);
  }, [talkId]);

  const grens = Math.ceil(vragen.length * 0.6);

  function start() {
    setFase("bezig");
    setHuidig(0);
    setGekozen(null);
    setAntwoorden(Array(vragen.length).fill(null));
    setBevestigd(false);
  }

  function kies(i: number) {
    if (bevestigd) return;
    setGekozen(i);
  }

  function bevestig() {
    if (gekozen === null) return;
    const nieuw = [...antwoorden];
    nieuw[huidig] = gekozen;
    setAntwoorden(nieuw);
    setBevestigd(true);
    setTimeout(() => {
      if (huidig + 1 < vragen.length) {
        setHuidig(huidig + 1);
        setGekozen(null);
        setBevestigd(false);
      } else {
        const score = nieuw.filter((a, i) => a === vragen[i].correct).length;
        setQuizScore(talkId, score);
        setVorigeScore(score);
        setFase("klaar");
      }
    }, 1200);
  }

  const score = antwoorden.filter((a, i) => a === vragen[i].correct).length;
  const geslaagd = score >= grens;

  if (fase === "start") {
    return (
      <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
        <p className="text-slate-600 text-sm mb-4">
          {vragen.length} vragen · minimaal {grens} goed om de talk als bekeken te markeren
        </p>
        {vorigeScore !== undefined && (
          <p className="text-xs text-slate-400 mb-4">Vorige score: {vorigeScore}/{vragen.length}</p>
        )}
        <button
          onClick={start}
          className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold text-sm transition-colors"
        >
          Start quiz
        </button>
      </div>
    );
  }

  if (fase === "klaar") {
    return (
      <div className="space-y-4">
        <div className={`rounded-xl p-6 text-center border-2 ${geslaagd ? "bg-green-50 border-green-200" : "bg-amber-50 border-amber-200"}`}>
          {geslaagd
            ? <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-2" />
            : <XCircle className="w-10 h-10 text-amber-500 mx-auto mb-2" />}
          <p className={`text-2xl font-bold mb-1 ${geslaagd ? "text-green-700" : "text-amber-700"}`}>
            {score}/{vragen.length}
          </p>
          <p className={`text-sm font-medium ${geslaagd ? "text-green-600" : "text-amber-600"}`}>
            {geslaagd ? "Talk gemarkeerd als bekeken!" : `Nog niet gehaald — probeer opnieuw (min. ${grens} goed)`}
          </p>
        </div>

        <div className="space-y-3">
          {vragen.map((v, i) => {
            const goed = antwoorden[i] === v.correct;
            return (
              <div key={i} className={`bg-white rounded-xl border p-4 ${goed ? "border-green-200" : "border-red-200"}`}>
                <div className="flex items-start gap-2 mb-2">
                  {goed
                    ? <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    : <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />}
                  <p className="text-sm font-medium text-slate-800">{v.vraag}</p>
                </div>
                {!goed && (
                  <p className="text-xs text-slate-500 ml-6">
                    Juist: <span className="font-medium text-green-700">{v.opties[v.correct]}</span>
                  </p>
                )}
                <p className="text-xs text-slate-500 ml-6 mt-1 italic">{v.uitleg}</p>
              </div>
            );
          })}
        </div>

        <button
          onClick={start}
          className="w-full flex items-center justify-center gap-2 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-600 hover:bg-slate-50 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Opnieuw proberen
        </button>
      </div>
    );
  }

  const vraag = vragen[huidig];

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-4">
      <div className="flex gap-1 mb-2">
        {vragen.map((_, i) => (
          <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${
            i < huidig
              ? antwoorden[i] === vragen[i].correct ? "bg-green-400" : "bg-red-400"
              : i === huidig ? "bg-emerald-500" : "bg-slate-200"
          }`} />
        ))}
      </div>

      <p className="text-xs text-slate-400">Vraag {huidig + 1} van {vragen.length}</p>
      <p className="font-semibold text-slate-900 text-sm leading-relaxed">{vraag.vraag}</p>

      <div className="space-y-2">
        {vraag.opties.map((optie, i) => {
          let klasse = "w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl border text-sm transition-all ";
          if (!bevestigd) {
            klasse += gekozen === i
              ? "border-emerald-500 bg-emerald-50 text-emerald-900"
              : "border-slate-200 hover:border-emerald-300 text-slate-700";
          } else {
            if (i === vraag.correct) klasse += "border-green-400 bg-green-50 text-green-900";
            else if (i === gekozen) klasse += "border-red-400 bg-red-50 text-red-900";
            else klasse += "border-slate-200 text-slate-400";
          }
          return (
            <button key={i} onClick={() => kies(i)} className={klasse}>
              <span className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold flex-shrink-0">
                {String.fromCharCode(65 + i)}
              </span>
              {optie}
            </button>
          );
        })}
      </div>

      {bevestigd && (
        <p className="text-xs text-slate-500 italic bg-slate-50 rounded-lg p-3">{vraag.uitleg}</p>
      )}

      {!bevestigd && (
        <button
          onClick={bevestig}
          disabled={gekozen === null}
          className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl font-semibold text-sm transition-colors"
        >
          Bevestig antwoord
        </button>
      )}
    </div>
  );
}
