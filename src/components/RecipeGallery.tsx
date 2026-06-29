"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Clock, Users, Check } from "lucide-react";
import type { Recipe } from "@/lib/products";

export function RecipeGallery({
  recipes,
  productName,
}: {
  recipes: Recipe[];
  productName: string;
}) {
  const [active, setActive] = useState<Recipe | null>(null);

  return (
    <>
      <div className="grid gap-px overflow-hidden rounded-sm border border-pine-900/10 bg-pine-900/10 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((r, i) => (
          <button
            key={r.name}
            onClick={() => setActive(r)}
            className="group flex flex-col bg-paper p-7 text-left transition-colors duration-300 hover:bg-sage-50"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-3xl text-pine-900/15">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-clay-500">
                <Clock className="h-3.5 w-3.5" /> {r.time}
              </span>
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold leading-snug text-pine-900">
              {r.name}
            </h3>
            <p className="mt-1.5 text-sm italic-serif font-display text-clay-500">{r.tagline}</p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-widest text-pine-700 transition-all group-hover:gap-2.5">
              View recipe
              <span aria-hidden>→</span>
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-end justify-center bg-pine-950/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-md bg-paper sm:rounded-md"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 z-10 flex items-start justify-between gap-4 bg-pine-800 px-7 py-7 text-peach-50">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest2 text-clay-300">
                    Recipe · with {productName}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold">{active.name}</h3>
                  <p className="mt-1 text-sm italic-serif font-display text-peach-100/80">
                    {active.tagline}
                  </p>
                </div>
                <button
                  onClick={() => setActive(null)}
                  aria-label="Close"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-peach-50/10 text-peach-50 transition hover:bg-peach-50/20"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="px-7 py-7">
                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: Clock, label: active.time },
                    { icon: Users, label: active.serves },
                  ].map((m, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1.5 rounded-sm border border-pine-900/15 px-3.5 py-1.5 text-xs font-semibold text-pine-800"
                    >
                      <m.icon className="h-3.5 w-3.5 text-clay-500" /> {m.label}
                    </span>
                  ))}
                </div>

                <div className="mt-7 grid gap-8 sm:grid-cols-5">
                  <div className="sm:col-span-2">
                    <h4 className="text-[12px] font-semibold uppercase tracking-widest text-clay-500">
                      Ingredients
                    </h4>
                    <ul className="mt-4 space-y-2.5">
                      {active.ingredients.map((ing) => (
                        <li key={ing} className="flex items-start gap-2.5 text-sm text-ink/80">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-pine-600" />
                          {ing}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="sm:col-span-3">
                    <h4 className="text-[12px] font-semibold uppercase tracking-widest text-clay-500">
                      Method
                    </h4>
                    <ol className="mt-4 space-y-4">
                      {active.steps.map((s, i) => (
                        <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink/80">
                          <span className="font-display text-lg font-semibold text-pine-900/30">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="pt-0.5">{s}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div className="mt-8 border-t border-pine-900/10 pt-6">
                  <p className="text-[12px] font-semibold uppercase tracking-widest text-clay-500">
                    Tips & Variations
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">{active.tips}</p>
                  {active.nutrition && (
                    <p className="mt-3 text-xs font-medium uppercase tracking-wide text-pine-600">
                      {active.nutrition}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
