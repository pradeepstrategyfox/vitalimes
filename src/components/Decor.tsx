import React from "react";

/* ---------- Logo ---------- */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span className="relative inline-flex h-10 w-10 items-center justify-center">
        <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden>
          <defs>
            <linearGradient id="lemlogo" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FBE56E" />
              <stop offset="100%" stopColor="#EFBC18" />
            </linearGradient>
          </defs>
          <ellipse cx="24" cy="26" rx="15" ry="13" fill="url(#lemlogo)" />
          <ellipse cx="24" cy="26" rx="15" ry="13" fill="none" stroke="#D49A0C" strokeOpacity="0.35" strokeWidth="1.2" />
          <path d="M24 13c4 0 7-3 12-3-2 4-5 6-9 6" fill="#4E7E3A" />
          <path d="M24 14c-3 0-6-2-9-1 2 3 5 4 8 4" fill="#6B9B54" />
          <path d="M16 24c3-2 8-2 11 0" stroke="#fff" strokeOpacity="0.6" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-semibold tracking-tight text-leaf-800">
          Vita Limes
        </span>
        <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-lemon-600">
          Agrotech
        </span>
      </span>
    </span>
  );
}

/* ---------- A single lemon-and-leaf sprig ---------- */
export function LemonSprig({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 180" className={className} aria-hidden>
      <path
        d="M70 0 C70 40 72 70 80 95"
        stroke="#3A6429"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      {/* leaves */}
      <g fill="#4E7E3A">
        <path d="M72 30 C50 24 36 32 30 50 C54 54 70 46 72 30 Z" />
        <path d="M74 56 C96 50 110 58 116 76 C92 80 76 72 74 56 Z" />
        <path d="M76 84 C56 80 42 90 38 108 C60 110 76 100 76 84 Z" />
      </g>
      <g fill="#6B9B54" opacity="0.55">
        <path d="M72 30 C58 28 48 33 44 44" stroke="#2C4D20" strokeWidth="0.8" fill="none" />
      </g>
      {/* lemon fruit */}
      <g>
        <ellipse cx="84" cy="128" rx="22" ry="26" fill="#F7D33C" />
        <ellipse cx="84" cy="128" rx="22" ry="26" fill="none" stroke="#D49A0C" strokeOpacity="0.4" strokeWidth="1.4" />
        <ellipse cx="76" cy="118" rx="6" ry="9" fill="#FBE56E" opacity="0.8" />
        <path d="M84 102 c2 -4 6 -6 10 -6" stroke="#3A6429" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

/* ---------- Corner cluster: anchored, gently swaying ---------- */
export function CornerLeaves({
  position = "top-left",
}: {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}) {
  const base = "pointer-events-none absolute z-0 hidden select-none md:block";
  const map: Record<string, string> = {
    "top-left": `${base} -left-10 -top-12 origin-top-left`,
    "top-right": `${base} -right-10 -top-12 origin-top-right scale-x-[-1]`,
    "bottom-left": `${base} -left-12 -bottom-12 origin-bottom-left -scale-y-100`,
    "bottom-right": `${base} -right-12 -bottom-12 origin-bottom-right -scale-y-100 scale-x-[-1]`,
  };
  return (
    <div className={map[position]} aria-hidden>
      <div className="animate-sway origin-top">
        <LemonSprig className="h-44 w-36 opacity-90 lg:h-56 lg:w-44" />
      </div>
    </div>
  );
}

/* ---------- Small floating lemon ---------- */
export function FloatingLemon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden>
      <defs>
        <radialGradient id="lemfloat" cx="38%" cy="34%" r="70%">
          <stop offset="0%" stopColor="#FFFBE0" />
          <stop offset="55%" stopColor="#F7D33C" />
          <stop offset="100%" stopColor="#EFBC18" />
        </radialGradient>
      </defs>
      <ellipse cx="40" cy="42" rx="28" ry="32" fill="url(#lemfloat)" />
      <ellipse cx="40" cy="42" rx="28" ry="32" fill="none" stroke="#D49A0C" strokeOpacity="0.3" strokeWidth="1.5" />
      <path d="M40 10 c3 -4 8 -5 13 -5" stroke="#3A6429" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M48 8 c8 -3 16 0 20 6 c-9 3 -17 1 -22 -3" fill="#4E7E3A" />
      <ellipse cx="30" cy="30" rx="7" ry="11" fill="#FFFBE0" opacity="0.7" />
    </svg>
  );
}

/* ---------- Decorative wavy divider ---------- */
export function WaveDivider({ flip = false, color = "#FDFBF0" }: { flip?: boolean; color?: string }) {
  return (
    <div className={`pointer-events-none w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="h-12 w-full md:h-20">
        <path
          d="M0,40 C240,80 480,0 720,32 C960,64 1200,16 1440,48 L1440,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

/* ---------- Lemon half illustration (for spotlight) ---------- */
export function LemonHalf({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <defs>
        <radialGradient id="half" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF7C2" />
          <stop offset="100%" stopColor="#F7D33C" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="86" fill="#EFBC18" />
      <circle cx="100" cy="100" r="80" fill="url(#half)" />
      <circle cx="100" cy="100" r="68" fill="#FFFDF0" opacity="0.65" />
      {Array.from({ length: 10 }).map((_, i) => {
        const a = (i / 10) * Math.PI * 2;
        const x1 = 100 + Math.cos(a) * 12;
        const y1 = 100 + Math.sin(a) * 12;
        const x2 = 100 + Math.cos(a) * 66;
        const y2 = 100 + Math.sin(a) * 66;
        return (
          <g key={i}>
            <path
              d={`M${x1},${y1} L${x2},${y2}`}
              stroke="#EFBC18"
              strokeWidth="2"
              opacity="0.5"
            />
            <ellipse
              cx={100 + Math.cos(a + Math.PI / 10) * 40}
              cy={100 + Math.sin(a + Math.PI / 10) * 40}
              rx="12"
              ry="20"
              fill="#FDF1A6"
              opacity="0.85"
              transform={`rotate(${(a * 180) / Math.PI + 90} ${100 + Math.cos(a + Math.PI / 10) * 40} ${100 + Math.sin(a + Math.PI / 10) * 40})`}
            />
          </g>
        );
      })}
      <circle cx="100" cy="100" r="12" fill="#FBE56E" />
    </svg>
  );
}
