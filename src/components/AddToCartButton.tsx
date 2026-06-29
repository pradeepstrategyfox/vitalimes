"use client";

import { useState } from "react";
import { ShoppingBag, Check } from "lucide-react";

export function AddToCartButton({
  className = "",
  label = "Add to cart",
}: {
  className?: string;
  label?: string;
}) {
  const [added, setAdded] = useState(false);

  return (
    <button
      type="button"
      onClick={() => {
        if (added) return;
        setAdded(true);
        setTimeout(() => setAdded(false), 1800);
      }}
      aria-live="polite"
      className={`group/btn inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 text-[12px] font-semibold uppercase tracking-widest transition-all duration-300 ${
        added
          ? "bg-pine-700 text-peach-50"
          : "bg-pine-800 text-peach-50 hover:bg-clay-500"
      } ${className}`}
    >
      {added ? (
        <>
          <Check className="h-4 w-4" /> Added
        </>
      ) : (
        <>
          <ShoppingBag className="h-4 w-4" /> {label}
        </>
      )}
    </button>
  );
}
