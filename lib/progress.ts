const STORAGE_KEY = "cl26-progress";

export interface Progress {
  viewedTalks: number[];
  quizScores: Record<number, number>;
  lastVisited: number | null;
}

const defaultProgress: Progress = {
  viewedTalks: [],
  quizScores: {},
  lastVisited: null,
};

export function getProgress(): Progress {
  if (typeof window === "undefined") return defaultProgress;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress;
    return { ...defaultProgress, ...JSON.parse(raw) };
  } catch {
    return defaultProgress;
  }
}

function saveProgress(p: Progress) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

export function setQuizScore(talkId: number, score: number) {
  const p = getProgress();
  p.quizScores[talkId] = score;
  if (score >= 3 && !p.viewedTalks.includes(talkId)) {
    p.viewedTalks.push(talkId);
  }
  saveProgress(p);
}

export function setLastVisited(talkId: number) {
  const p = getProgress();
  p.lastVisited = talkId;
  saveProgress(p);
}

export function resetProgress() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}
