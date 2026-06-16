"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Clock, Users, Check, Sparkles, Flame } from "lucide-react";
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
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((r) => (
          <button
            key={r.name}
            onClick={() => setActive(r)}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-leaf-100 bg-white p-6 text-left shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-lemon-200 hover:shadow-glow"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-lemon-100 to-leaf-50 text-4xl transition-transform duration-300 group-hover:scale-110">
                {r.emoji}
              </span>
              <span className="rounded-full bg-leaf-50 px-3 py-1 text-[11px] font-semibold text-leaf-600">
                {r.time}
              </span>
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold leading-snug text-leaf-900">
              {r.name}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-leaf-500">{r.tagline}</p>
            <div className="mt-5 flex items-center gap-4 text-xs text-leaf-400">
              <span className="flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5" /> {r.serves}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" /> {r.time}
              </span>
            </div>
            <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-leaf-700 transition group-hover:gap-2">
              View recipe →
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-end justify-center bg-leaf-900/40 p-0 backdrop-blur-sm sm:items-center sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-cream-50 sm:rounded-3xl"
              initial={{ y: 40, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", damping: 26, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 z-10 flex items-start justify-between gap-4 bg-gradient-to-br from-lemon-200 to-lemon-100 px-7 py-6">
                <div>
                  <span className="text-5xl">{active.emoji}</span>
                  <h3 className="mt-3 font-display text-2xl font-bold text-leaf-900">
                    {active.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-leaf-700">{active.tagline}</p>
                </div>
                <button
                  onClick={() => setActive(null)}
                  aria-label="Close"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/70 text-leaf-800 transition hover:bg-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="px-7 py-6">
                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: Clock, label: active.time },
                    { icon: Users, label: active.serves },
                    { icon: Sparkles, label: `with ${productName}` },
                  ].map((m, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1.5 rounded-full border border-leaf-100 bg-white px-3.5 py-1.5 text-xs font-semibold text-leaf-700"
                    >
                      <m.icon className="h-3.5 w-3.5 text-lemon-600" /> {m.label}
                    </span>
                  ))}
                </div>

                <div className="mt-7 grid gap-7 sm:grid-cols-5">
                  <div className="sm:col-span-2">
                    <h4 className="font-display text-base font-semibold text-leaf-900">
                      Ingredients
                    </h4>
                    <ul className="mt-3 space-y-2.5">
                      {active.ingredients.map((ing) => (
                        <li key={ing} className="flex items-start gap-2.5 text-sm text-leaf-700">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-leaf-500" />
                          {ing}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="sm:col-span-3">
                    <h4 className="font-display text-base font-semibold text-leaf-900">Method</h4>
                    <ol className="mt-3 space-y-3.5">
                      {active.steps.map((s, i) => (
                        <li key={i} className="flex gap-3 text-sm leading-relaxed text-leaf-700">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-leaf-700 text-xs font-bold text-cream-50">
                            {i + 1}
                          </span>
                          {s}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div className="mt-7 rounded-2xl border border-lemon-200 bg-lemon-50 p-5">
                  <p className="flex items-center gap-2 text-sm font-semibold text-leaf-800">
                    <Flame className="h-4 w-4 text-lemon-600" /> Tips & Variations
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-leaf-700">{active.tips}</p>
                  {active.nutrition && (
                    <p className="mt-3 text-xs font-medium uppercase tracking-wide text-leaf-500">
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
