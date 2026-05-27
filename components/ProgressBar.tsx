interface ProgressBarProps {
  value: number;
  max: number;
  label?: string;
  kleur?: "emerald" | "green" | "amber";
}

export default function ProgressBar({ value, max, label, kleur = "emerald" }: ProgressBarProps) {
  const pct = max === 0 ? 0 : Math.round((value / max) * 100);
  const barKleur =
    kleur === "green" ? "bg-green-500" : kleur === "amber" ? "bg-amber-500" : "bg-emerald-600";

  return (
    <div>
      {label && (
        <div className="flex justify-between text-xs text-slate-500 mb-1">
          <span>{label}</span>
          <span>{value}/{max} ({pct}%)</span>
        </div>
      )}
      <div className="w-full bg-slate-100 rounded-full h-2">
        <div
          className={`${barKleur} h-2 rounded-full transition-all duration-500`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
