import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Star,
  Check,
  ShoppingBag,
  Heart,
  Truck,
  Leaf,
  ShieldCheck,
  ChevronRight,
  Minus,
  Plus,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { RecipeGallery } from "@/components/RecipeGallery";
import { ProductVisual } from "@/components/ProductVisual";
import { CornerLeaves, FloatingLemon, WaveDivider } from "@/components/Decor";
import { products, getProduct } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product · Vita Limes" };
  return {
    title: `${product.name} · Vita Limes`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const off = Math.round(((product.mrp - product.price) / product.mrp) * 100);
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <main className="overflow-x-clip">
      <Navbar />

      {/* breadcrumb */}
      <div className="border-b border-leaf-100 bg-cream">
        <div className="container-vl flex items-center gap-1.5 py-4 text-sm text-leaf-400">
          <Link href="/" className="hover:text-leaf-700">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/#products" className="hover:text-leaf-700">Shop</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="font-medium text-leaf-700">{product.shortName}</span>
        </div>
      </div>

      {/* ====== HERO / DETAILS ====== */}
      <section className="hero-grad relative overflow-hidden py-12 md:py-16">
        <CornerLeaves position="top-right" />
        <div className="container-vl relative z-10 grid gap-12 lg:grid-cols-2">
          {/* visual */}
          <Reveal>
            <div className="relative">
              <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-leaf-100 bg-gradient-to-br from-cream-50 to-leaf-50 shadow-soft">
                <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(220px_220px_at_70%_30%,rgba(247,211,60,0.4),transparent)]" />
                {product.badge && (
                  <span className="absolute left-5 top-5 z-10 rounded-full bg-leaf-700 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-cream-50">
                    {product.badge}
                  </span>
                )}
                <div className="absolute inset-0 flex animate-floaty items-center justify-center p-10">
                  <ProductVisual product={product} className="h-full w-full" />
                </div>
                <FloatingLemon className="absolute bottom-6 left-6 h-14 w-14 animate-sway" />
              </div>
              <div className="mt-4 grid grid-cols-4 gap-3">
                {product.highlights.map((h) => (
                  <div
                    key={h}
                    className="rounded-2xl border border-leaf-100 bg-white px-2 py-3 text-center text-[11px] font-semibold leading-tight text-leaf-700"
                  >
                    {h}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* details */}
          <Reveal delay={0.08}>
            <div>
              <span className="eyebrow">{product.category}</span>
              <h1 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight text-leaf-900 sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-2 font-display text-lg italic text-lemon-600">{product.tagline}</p>

              <div className="mt-4 flex items-center gap-3">
                <div className="flex items-center gap-1 text-lemon-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.round(product.rating) ? "fill-current" : ""}`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-leaf-700">{product.rating}</span>
                <span className="text-sm text-leaf-400">({product.reviews} reviews)</span>
              </div>

              <p className="mt-5 leading-relaxed text-leaf-600">{product.description}</p>

              <div className="mt-7 flex items-end gap-3">
                <span className="font-display text-4xl font-bold text-leaf-900">₹{product.price}</span>
                <span className="mb-1 text-lg text-leaf-300 line-through">₹{product.mrp}</span>
                {off > 0 && (
                  <span className="mb-1.5 rounded-full bg-lemon-400 px-2.5 py-1 text-xs font-bold text-leaf-900">
                    Save {off}%
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-leaf-400">{product.unit} · Inclusive of all taxes</p>

              {/* quantity + cart */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-4 rounded-full border border-leaf-200 bg-white px-4 py-2.5">
                  <button aria-label="Decrease" className="text-leaf-500 transition hover:text-leaf-800">
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-5 text-center font-semibold text-leaf-900">1</span>
                  <button aria-label="Increase" className="text-leaf-500 transition hover:text-leaf-800">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <button className="btn-primary flex-1 sm:flex-none">
                  <ShoppingBag className="h-4 w-4" /> Add to cart
                </button>
                <button
                  aria-label="Wishlist"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-leaf-200 bg-white text-leaf-600 transition hover:border-lemon-300 hover:text-lemon-600"
                >
                  <Heart className="h-5 w-5" />
                </button>
              </div>

              {/* reassurance */}
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {[
                  { icon: Truck, t: "Free shipping", s: "Over ₹699" },
                  { icon: Leaf, t: "100% Natural", s: "No additives" },
                  { icon: ShieldCheck, t: "Quality assured", s: "Food grade" },
                ].map((r) => (
                  <div key={r.t} className="flex items-center gap-2.5 rounded-2xl bg-leaf-50 px-4 py-3">
                    <r.icon className="h-5 w-5 shrink-0 text-leaf-600" />
                    <div className="leading-tight">
                      <p className="text-xs font-semibold text-leaf-900">{r.t}</p>
                      <p className="text-[11px] text-leaf-400">{r.s}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-xs text-leaf-400">
                Also available on{" "}
                <span className="font-medium text-leaf-600">Amazon · Flipkart · MyStore · IndiaMART</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ====== ABOUT + BENEFITS ====== */}
      <section className="section-grad relative py-16 md:py-24">
        <div className="container-vl grid gap-14 lg:grid-cols-2">
          <Reveal>
            <div>
              <span className="eyebrow">About this product</span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-leaf-900 sm:text-4xl">
                Why you'll love it
              </h2>
              <p className="mt-5 leading-relaxed text-leaf-600">{product.longDescription}</p>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {product.highlights.map((h) => (
                  <span
                    key={h}
                    className="flex items-center gap-1.5 rounded-full border border-leaf-200 bg-white px-4 py-2 text-sm font-medium text-leaf-700"
                  >
                    <Check className="h-4 w-4 text-leaf-500" /> {h}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="space-y-4">
              {product.benefits.map((b, i) => (
                <div
                  key={b.title}
                  className="flex gap-4 rounded-3xl border border-leaf-100 bg-white p-6 shadow-soft"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-lemon-200 to-lemon-100 font-display text-lg font-bold text-leaf-800">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-leaf-900">{b.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-leaf-500">{b.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ====== HOW TO USE ====== */}
      <section className="relative overflow-hidden bg-leaf-900 py-16 text-cream-100 md:py-24">
        <div className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-lemon-400/10 blur-3xl" />
        <div className="container-vl relative z-10">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-cream-50/20 bg-cream-50/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-lemon-300">
                How to use
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-cream-50 sm:text-4xl">
                Three simple ways to enjoy it
              </h2>
            </div>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {product.howToUse.map((h, i) => (
              <Reveal key={h.step} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-cream-50/10 bg-cream-50/5 p-7">
                  <span className="font-display text-5xl font-bold text-lemon-400/40">0{i + 1}</span>
                  <h3 className="mt-3 font-display text-xl font-semibold text-cream-50">{h.step}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream-100/75">{h.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-2.5">
              <span className="text-sm text-cream-100/60">Used across:</span>
              {product.industries.map((ind) => (
                <span
                  key={ind}
                  className="rounded-full border border-cream-50/15 px-3.5 py-1.5 text-xs font-medium text-cream-100/80"
                >
                  {ind}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ====== RECIPES ====== */}
      <section className="relative bg-cream py-16 md:py-24">
        <CornerLeaves position="bottom-left" />
        <div className="container-vl relative z-10">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">🍴 Recipe Gallery</span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-leaf-900 sm:text-4xl">
                Make something delicious with {product.shortName}
              </h2>
              <p className="mt-4 text-leaf-500">
                Tap a recipe for the full ingredient list, step-by-step method, serving
                size and tips.
              </p>
            </div>
          </Reveal>
          <div className="mt-12">
            <RecipeGallery recipes={product.recipes} productName={product.shortName} />
          </div>
        </div>
      </section>

      {/* ====== RELATED ====== */}
      <section className="section-grad relative py-16 md:py-24">
        <div className="container-vl">
          <div className="flex items-end justify-between gap-4">
            <Reveal>
              <h2 className="font-display text-3xl font-bold leading-tight text-leaf-900 sm:text-4xl">
                You may also love
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <Link href="/#products" className="btn-outline whitespace-nowrap">
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.08}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider color="#16290F" />
      <Footer />
    </main>
  );
}
