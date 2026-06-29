import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Star,
  Check,
  ShoppingBag,
  Heart,
  Truck,
  Sprout,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { RecipeGallery } from "@/components/RecipeGallery";
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
      <div className="bg-pine-900 pt-[78px]">
        <div className="container-vl flex items-center gap-2 py-4 text-[13px] text-peach-100/70">
          <Link href="/" className="hover:text-peach-50">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/#products" className="hover:text-peach-50">Products</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-peach-50">{product.shortName}</span>
        </div>
      </div>

      {/* ===== HERO / DETAILS ===== */}
      <section className="bg-sage-100 py-12 md:py-16">
        <div className="container-vl grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-editorial">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {product.badge && (
                <span className="absolute left-5 top-5 rounded-sm bg-clay-500 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-peach-50">
                  {product.badge}
                </span>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-full flex-col justify-center">
              <p className="eyebrow">
                <span className="h-px w-8 bg-clay-500" /> {product.category}
              </p>
              <h1 className="display mt-5 font-display text-4xl font-semibold leading-[1.05] text-pine-900 sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-3 font-display text-xl italic-serif text-clay-500">
                {product.tagline}
              </p>

              <div className="mt-5 flex items-center gap-3">
                <div className="flex items-center gap-0.5 text-clay-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.round(product.rating) ? "fill-current" : ""}`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-pine-800">{product.rating}</span>
                <span className="text-sm text-ink/50">({product.reviews} reviews)</span>
              </div>

              <p className="mt-6 text-[15px] leading-relaxed text-ink/75">{product.description}</p>

              <div className="mt-7 flex items-end gap-3">
                <span className="font-display text-4xl font-semibold text-pine-900">
                  ₹{product.price}
                </span>
                <span className="mb-1 text-lg text-ink/40 line-through">₹{product.mrp}</span>
                {off > 0 && (
                  <span className="mb-1.5 rounded-sm bg-pine-800 px-2.5 py-1 text-xs font-bold text-peach-50">
                    Save {off}%
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-ink/50">
                Per {product.unit} · Inclusive of all taxes
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <button className="btn-clay flex-1 sm:flex-none">
                  <ShoppingBag className="h-4 w-4" /> Add to cart
                </button>
                <button
                  aria-label="Wishlist"
                  className="flex h-12 w-12 items-center justify-center rounded-sm border border-pine-900/20 text-pine-700 transition hover:border-clay-500 hover:text-clay-500"
                >
                  <Heart className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  { icon: Truck, t: "Free shipping", s: "Over ₹699" },
                  { icon: Sprout, t: "Direct sourced", s: "From Kovilpatti" },
                  { icon: ShieldCheck, t: "Quality assured", s: "Strict control" },
                ].map((r) => (
                  <div key={r.t} className="flex items-center gap-2.5 border-t border-pine-900/15 pt-3">
                    <r.icon className="h-5 w-5 shrink-0 text-clay-500" />
                    <div className="leading-tight">
                      <p className="text-xs font-semibold text-pine-900">{r.t}</p>
                      <p className="text-[11px] text-ink/50">{r.s}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== ABOUT + BENEFITS ===== */}
      <section className="bg-paper py-16 md:py-24">
        <div className="container-vl grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <p className="eyebrow">
                <span className="h-px w-8 bg-clay-500" /> About this product
              </p>
              <h2 className="display mt-5 font-display text-3xl font-semibold leading-[1.1] text-pine-900 sm:text-4xl">
                Why you&apos;ll <em>love</em> it
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-ink/75">
                {product.longDescription}
              </p>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {product.highlights.map((h) => (
                  <span
                    key={h}
                    className="flex items-center gap-1.5 rounded-sm border border-pine-900/15 px-4 py-2 text-sm font-medium text-pine-800"
                  >
                    <Check className="h-4 w-4 text-pine-600" /> {h}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="divide-y divide-pine-900/10 border-y border-pine-900/10">
              {product.benefits.map((b, i) => (
                <div key={b.title} className="flex gap-5 py-6">
                  <span className="font-display text-2xl font-semibold text-pine-900/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-pine-900">{b.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/65">{b.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== HOW TO USE ===== */}
      <section className="bg-pine-900 py-16 text-peach-100 md:py-24">
        <div className="container-vl">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow !text-clay-300">
                <span className="h-px w-8 bg-clay-400" /> How to use it
              </p>
              <h2 className="display mt-5 font-display text-3xl font-semibold leading-[1.1] text-peach-50 sm:text-4xl">
                Three simple ways to <em>enjoy</em> it
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-peach-50/15 bg-peach-50/10 md:grid-cols-3">
            {product.howToUse.map((h, i) => (
              <Reveal key={h.step} delay={i * 0.08}>
                <div className="h-full bg-pine-900/60 p-8">
                  <span className="font-display text-5xl font-semibold text-clay-400/50">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-peach-50">{h.step}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-peach-100/70">{h.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap items-center gap-2.5">
              <span className="text-sm text-peach-100/60">Used across:</span>
              {product.industries.map((ind) => (
                <span
                  key={ind}
                  className="rounded-sm border border-peach-50/15 px-3.5 py-1.5 text-xs font-medium text-peach-100/80"
                >
                  {ind}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== RECIPES ===== */}
      <section className="bg-peach-100 py-16 md:py-24">
        <div className="container-vl">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow">
                <span className="h-px w-8 bg-clay-500" /> The lemon kitchen
              </p>
              <h2 className="display mt-5 font-display text-3xl font-semibold leading-[1.1] text-pine-900 sm:text-4xl">
                Make something with <em>{product.shortName}</em>
              </h2>
            </div>
          </Reveal>
          <div className="mt-12">
            <RecipeGallery recipes={product.recipes} productName={product.shortName} />
          </div>
        </div>
      </section>

      {/* ===== RELATED ===== */}
      <section className="bg-paper py-16 md:py-24">
        <div className="container-vl">
          <div className="flex items-end justify-between gap-4">
            <Reveal>
              <h2 className="display font-display text-3xl font-semibold leading-[1.1] text-pine-900 sm:text-4xl">
                You may also <em>love</em>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <Link
                href="/#products"
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-widest text-clay-500 hover:text-clay-600"
              >
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.08}>
                <ProductCard product={p} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
