"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { products } from "@/lib/products";

const navLinks = [
  { label: "Our Story", href: "/#story" },
  { label: "Products", href: "/#products" },
  { label: "The Value Chain", href: "/#value-chain" },
  { label: "Recipes", href: "/#recipes" },
  { label: "Contact", href: "/#contact" },
];

function Wordmark({ light }: { light: boolean }) {
  return (
    <span className="flex flex-col leading-none">
      <span
        className={`font-display text-[26px] font-semibold tracking-tight ${
          light ? "text-peach-50" : "text-pine-900"
        }`}
      >
        Vita <span className="italic-serif">Limes</span>
      </span>
      <span
        className={`mt-1 text-[9px] font-semibold uppercase tracking-widest2 ${
          light ? "text-peach-100/80" : "text-clay-500"
        }`}
      >
        By Vitalime Agrotech
      </span>
    </span>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const light = !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-pine-900/10 bg-paper/95 backdrop-blur-md"
          : "bg-gradient-to-b from-pine-950/45 to-transparent"
      }`}
    >
      <nav className="container-vl flex h-[78px] items-center justify-between gap-4">
        <Link href="/" aria-label="Vita Limes home" onClick={() => setOpen(false)}>
          <Wordmark light={light} />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className={`text-[13px] font-semibold uppercase tracking-widest transition-colors ${
                light ? "text-peach-50/90 hover:text-peach-50" : "text-pine-800 hover:text-clay-500"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/#products"
            aria-label="Cart"
            className={`relative flex h-10 w-10 items-center justify-center rounded-full transition ${
              light ? "text-peach-50 hover:bg-white/10" : "text-pine-800 hover:bg-pine-900/5"
            }`}
          >
            <ShoppingBag className="h-[19px] w-[19px]" />
            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-clay-500 text-[10px] font-bold text-peach-50">
              2
            </span>
          </Link>
          <Link
            href="/#products"
            className={`hidden md:inline-flex ${light ? "btn-ghost text-peach-50" : "btn-clay"}`}
          >
            Shop
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className={`flex h-10 w-10 items-center justify-center rounded-full lg:hidden ${
              light ? "text-peach-50" : "text-pine-900"
            }`}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-pine-900/10 bg-paper lg:hidden">
          <div className="container-vl flex flex-col py-4">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-pine-900/5 py-3.5 text-sm font-semibold uppercase tracking-widest text-pine-800"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-4 grid grid-cols-2 gap-2">
              {products.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  onClick={() => setOpen(false)}
                  className="rounded-sm border border-pine-900/10 px-3 py-2.5 text-sm font-medium text-pine-800"
                >
                  {p.shortName}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
