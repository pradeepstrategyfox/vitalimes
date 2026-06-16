import React from "react";
import type { Product } from "@/lib/products";

/* A stylised packaging illustration so every product reads as a real SKU
   even without photography. Colour adapts to the product hue. */
export function ProductVisual({
  product,
  className = "",
}: {
  product: Product;
  className?: string;
}) {
  const palettes = {
    lemon: { jar: "#FFFCEF", cap: "#EFBC18", band: "#FBE56E", ink: "#8A5C15", fruit: "#F7D33C" },
    leaf: { jar: "#F3F8EF", cap: "#3A6429", band: "#BBD3AB", ink: "#2C4D20", fruit: "#92B97C" },
    charcoal: { jar: "#F4F1ED", cap: "#241F1B", band: "#6B9B54", ink: "#241F1B", fruit: "#3A322C" },
  } as const;
  const p = palettes[product.hue];
  const isOil = product.category === "Oils";
  const isWhole = product.shortName === "Black Lemon";

  return (
    <svg viewBox="0 0 240 280" className={className} aria-hidden>
      {/* soft pedestal shadow */}
      <ellipse cx="120" cy="258" rx="74" ry="12" fill={p.ink} opacity="0.12" />

      {isOil ? (
        /* dropper bottle */
        <g>
          <rect x="96" y="34" width="48" height="22" rx="5" fill={p.cap} />
          <rect x="108" y="14" width="24" height="24" rx="4" fill={p.cap} opacity="0.85" />
          <rect x="78" y="56" width="84" height="170" rx="20" fill={p.jar} stroke={p.ink} strokeOpacity="0.12" strokeWidth="2" />
          <rect x="78" y="120" width="84" height="78" rx="0" fill={p.band} opacity="0.5" />
          <ellipse cx="120" cy="150" rx="26" ry="30" fill={p.fruit} />
          <path d="M120 124 c3 -5 8 -7 14 -7" stroke="#3A6429" strokeWidth="4" fill="none" strokeLinecap="round" />
        </g>
      ) : isWhole ? (
        /* mesh-style pack of whole black lemons */
        <g>
          <rect x="64" y="60" width="112" height="160" rx="20" fill={p.jar} stroke={p.ink} strokeOpacity="0.15" strokeWidth="2" />
          <rect x="64" y="60" width="112" height="40" rx="20" fill={p.cap} />
          <rect x="64" y="84" width="112" height="16" fill={p.cap} />
          {[
            [100, 140], [148, 150], [110, 185], [156, 192],
          ].map(([cx, cy], i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r="20" fill={p.fruit} />
              <circle cx={cx} cy={cy} r="20" fill="#000" opacity="0.18" />
              <path d={`M${cx} ${cy - 20} c2 -3 5 -4 8 -4`} stroke="#2C4D20" strokeWidth="3" fill="none" strokeLinecap="round" />
            </g>
          ))}
        </g>
      ) : (
        /* stand-up powder pouch */
        <g>
          <path
            d="M70 70 q0 -16 16 -16 h68 q16 0 16 16 v150 q0 18 -18 18 h-64 q-18 0 -18 -18 z"
            fill={p.jar}
            stroke={p.ink}
            strokeOpacity="0.12"
            strokeWidth="2"
          />
          <path d="M82 54 h76 l-6 -12 h-64 z" fill={p.cap} opacity="0.85" />
          <rect x="70" y="150" width="100" height="60" fill={p.band} opacity="0.45" />
          <ellipse cx="120" cy="135" rx="30" ry="34" fill={p.fruit} />
          <ellipse cx="110" cy="124" rx="9" ry="13" fill="#fff" opacity="0.45" />
          <path d="M120 103 c3 -6 9 -8 16 -8" stroke="#3A6429" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M132 98 c10 -4 20 0 25 7 c-11 3 -21 1 -27 -3" fill="#4E7E3A" />
        </g>
      )}

      {/* brand band */}
      <text x="120" y={isOil ? "212" : "228"} textAnchor="middle" fontSize="11" fontWeight="700" fill={p.ink} fontFamily="serif">
        VITA LIMES
      </text>
    </svg>
  );
}
