"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Search, ShoppingBag, ChevronDown } from "lucide-react";
import { Logo } from "./Decor";
import { products } from "@/lib/products";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/#products" },
  { label: "Recipes", href: "/#recipes" },
  { label: "Our Story", href: "/#story" },
  { label: "B2B", href: "/#industries" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-leaf-800 text-cream-50">
        <div className="container-vl flex items-center justify-center gap-2 py-2 text-center text-[11px] font-medium tracking-wide sm:text-xs">
          <span className="animate-floaty">🍋</span>
          <span>
            100% Natural Lemon Goodness · Free shipping across India on orders over ₹699
          </span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-leaf-100 bg-cream/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="container-vl flex h-[68px] items-center justify-between gap-4">
          <Link href="/" aria-label="Vita Limes home" onClick={() => setOpen(false)}>
            <Logo />
          </Link>

          {/* desktop links */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) =>
              l.label === "Shop" ? (
                <div
                  key={l.label}
                  className="relative"
                  onMouseEnter={() => setShopOpen(true)}
                  onMouseLeave={() => setShopOpen(false)}
                >
                  <Link
                    href={l.href}
                    className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-leaf-800 transition hover:bg-leaf-50"
                  >
                    {l.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </Link>
                  {shopOpen && (
                    <div className="absolute left-0 top-full w-64 pt-2">
                      <div className="card-soft overflow-hidden p-2">
                        {products.map((p) => (
                          <Link
                            key={p.slug}
                            href={`/products/${p.slug}`}
                            className="flex items-center justify-between rounded-2xl px-3 py-2.5 text-sm text-leaf-800 transition hover:bg-leaf-50"
                          >
                            <span className="font-medium">{p.shortName}</span>
                            <span className="text-xs text-lemon-600">₹{p.price}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={l.label}
                  href={l.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-leaf-800 transition hover:bg-leaf-50"
                >
                  {l.label}
                </Link>
              )
            )}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              aria-label="Search"
              className="hidden h-10 w-10 items-center justify-center rounded-full text-leaf-700 transition hover:bg-leaf-50 sm:flex"
            >
              <Search className="h-[18px] w-[18px]" />
            </button>
            <button
              aria-label="Cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-leaf-700 transition hover:bg-leaf-50"
            >
              <ShoppingBag className="h-[18px] w-[18px]" />
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-lemon-400 text-[10px] font-bold text-leaf-900">
                2
              </span>
            </button>
            <Link href="/#products" className="btn-lemon ml-1 hidden !px-5 !py-2.5 md:inline-flex">
              Shop Now
            </Link>
            <button
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-leaf-800 transition hover:bg-leaf-50 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* mobile menu */}
        {open && (
          <div className="border-t border-leaf-100 bg-cream/95 backdrop-blur-md lg:hidden">
            <div className="container-vl flex flex-col gap-1 py-4">
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-leaf-800 transition hover:bg-leaf-50"
                >
                  {l.label}
                </Link>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2">
                {products.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/products/${p.slug}`}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl border border-leaf-100 bg-white px-3 py-2.5 text-sm font-medium text-leaf-800"
                  >
                    {p.shortName}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
