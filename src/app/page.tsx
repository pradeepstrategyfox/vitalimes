import Link from "next/link";
import {
  Leaf,
  ShieldCheck,
  Sparkles,
  Droplets,
  ArrowRight,
  Star,
  Quote,
  FlaskConical,
  Utensils,
  Sprout,
  HeartHandshake,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { RecipeGallery } from "@/components/RecipeGallery";
import {
  CornerLeaves,
  FloatingLemon,
  LemonHalf,
  WaveDivider,
} from "@/components/Decor";
import { products } from "@/lib/products";

const marquee = [
  "Amazon",
  "Flipkart",
  "MyStore",
  "IndiaMART",
  "Deyga Organics",
  "EN Gulf",
  "Raaha Restaurant",
  "Zaitoon",
  "Global Brand Resources",
];

const whyPoints = [
  {
    icon: Leaf,
    title: "100% Natural",
    text: "No preservatives, no artificial colour. Just real lemons, gently processed to keep nature intact.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    text: "Consistent, food-grade quality trusted by leading brands and restaurant chains across India.",
  },
  {
    icon: Droplets,
    title: "Locks in Freshness",
    text: "Advanced drying and pressing techniques preserve the aroma, vitamin C and zing of fresh fruit.",
  },
  {
    icon: Sparkles,
    title: "Endlessly Versatile",
    text: "From your kitchen to large-scale food, herbal and cosmetic formulations — one fruit, infinite uses.",
  },
];

const industries = [
  { icon: Utensils, title: "Food & Beverage", text: "Lemonades, buttermilk camps, lemon rice, teas and large-scale drink manufacturing." },
  { icon: FlaskConical, title: "Herbal & Wellness", text: "Black lemon and seed powders as natural actives in herbal formulations." },
  { icon: Sparkles, title: "Cosmetic & Personal Care", text: "Essential and seed oils for skincare, hair care and aromatherapy." },
  { icon: Sprout, title: "Food Processing", text: "Reliable bulk raw materials with consistent flavour, batch after batch." },
];

const testimonials = [
  {
    quote:
      "Vita Limes' Black Lemon is the backbone of our Mandi broth. The consistency and aroma are unmatched across all our branches.",
    name: "EN Gulf Restaurants",
    role: "Restaurant Chain",
  },
  {
    quote:
      "We rely on their Lemon Powder as a supplementary ingredient in our formulations. Pure, dependable and beautifully fresh.",
    name: "Deyga Organics",
    role: "Brand Partner",
  },
  {
    quote:
      "From buttermilk camps to bulk beverage runs, the powder dissolves instantly and tastes just like fresh lemon. A staple for us.",
    name: "Global Brand Resources",
    role: "Industrial Buyer",
  },
];

const stats = [
  { value: "6+", label: "Signature products" },
  { value: "100%", label: "Natural sourcing" },
  { value: "4.8★", label: "Average rating" },
  { value: "Pan-India", label: "Trusted supply" },
];

export default function Home() {
  const allRecipes = products.flatMap((p) =>
    p.recipes.slice(0, 1).map((r) => ({ ...r, _product: p.shortName }))
  );

  return (
    <main className="overflow-x-clip">
      <Navbar />

      {/* ============ HERO ============ */}
      <section className="hero-grad relative overflow-hidden">
        <CornerLeaves position="top-left" />
        <CornerLeaves position="top-right" />
        <CornerLeaves position="bottom-right" />

        <FloatingLemon className="absolute left-[6%] top-[55%] hidden h-14 w-14 animate-floaty opacity-90 lg:block" />
        <FloatingLemon className="absolute right-[10%] top-[28%] hidden h-10 w-10 animate-swaySlow opacity-80 lg:block" />

        <div className="container-vl relative z-10 grid items-center gap-10 py-16 md:py-24 lg:grid-cols-2 lg:py-28">
          <div>
            <Reveal>
              <span className="eyebrow">🍋 Vitalime Agrotech Pvt. Ltd.</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 font-display text-[2.6rem] font-bold leading-[1.04] tracking-tight text-leaf-900 sm:text-6xl lg:text-[4.1rem]">
                Pure Lemon,
                <br />
                <span className="relative inline-block text-lemon-500">
                  Perfected.
                  <svg viewBox="0 0 300 24" className="absolute -bottom-2 left-0 h-3 w-full text-lemon-300" preserveAspectRatio="none">
                    <path d="M2 14 C80 4 220 4 298 12" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-leaf-600">
                Premium value-added lemon products — from spray-dried{" "}
                <strong className="font-semibold text-leaf-800">Lemon Powder</strong> to
                sun-cured{" "}
                <strong className="font-semibold text-leaf-800">Black Lemon</strong>,
                essential oils and more. Crafted by nature, refined for your kitchen and beyond.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link href="#products" className="btn-primary">
                  Shop the range <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="#recipes" className="btn-outline">
                  Explore recipes
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-10 flex items-center gap-5">
                <div className="flex -space-x-2">
                  {["🍋", "🫙", "🌿", "🍵"].map((e, i) => (
                    <span
                      key={i}
                      className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-cream-50 bg-white text-lg shadow-sm"
                    >
                      {e}
                    </span>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-lemon-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-leaf-500">
                    Loved by <strong className="text-leaf-800">3,000+</strong> homes & businesses
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* hero visual */}
          <Reveal delay={0.1} className="relative">
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-lemon-200 via-lemon-100 to-leaf-100 blur-2xl" />
              <div className="absolute inset-6 rounded-full border border-dashed border-leaf-200" />
              <div className="absolute inset-0 animate-floaty">
                <LemonHalf className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl sm:h-80 sm:w-80" />
              </div>
              <FloatingLemon className="absolute -right-2 top-6 h-20 w-20 animate-sway" />
              <FloatingLemon className="absolute bottom-4 left-0 h-16 w-16 animate-swaySlow" />

              <div className="absolute -left-4 top-1/3 flex items-center gap-2 rounded-2xl bg-white/90 px-4 py-3 shadow-soft backdrop-blur">
                <span className="text-2xl">🍋</span>
                <div>
                  <p className="text-xs font-semibold text-leaf-900">Vitamin C Rich</p>
                  <p className="text-[11px] text-leaf-400">Naturally immune-boosting</p>
                </div>
              </div>
              <div className="absolute -right-4 bottom-10 flex items-center gap-2 rounded-2xl bg-white/90 px-4 py-3 shadow-soft backdrop-blur">
                <span className="text-2xl">🌿</span>
                <div>
                  <p className="text-xs font-semibold text-leaf-900">100% Natural</p>
                  <p className="text-[11px] text-leaf-400">No preservatives</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* marquee */}
        <div className="relative border-y border-leaf-100 bg-white/50 py-5">
          <p className="container-vl mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-leaf-400">
            Trusted by leading platforms & brands
          </p>
          <div className="relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
            <div className="flex shrink-0 animate-marquee items-center gap-12 pr-12">
              {[...marquee, ...marquee].map((m, i) => (
                <span key={i} className="whitespace-nowrap font-display text-xl font-semibold text-leaf-300">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ PRODUCTS ============ */}
      <section id="products" className="section-grad relative py-20 md:py-28">
        <CornerLeaves position="bottom-left" />
        <div className="container-vl relative z-10">
          <div className="flex flex-col items-end justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <div className="max-w-xl">
                <span className="eyebrow">Our Range</span>
                <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-leaf-900 sm:text-5xl">
                  One humble lemon,
                  <br /> a world of goodness
                </h2>
                <p className="mt-4 text-leaf-500">
                  Every product is crafted from premium hand-picked lemons — pure,
                  potent and ready for your kitchen, wellness ritual or formulation.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Link href="#recipes" className="btn-outline whitespace-nowrap">
                See what you can make <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.08}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BLACK LEMON SPOTLIGHT ============ */}
      <section className="relative overflow-hidden bg-leaf-900 py-20 text-cream-100 md:py-28">
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-lemon-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-leaf-500/20 blur-3xl" />
        <div className="container-vl relative z-10 grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-cream-50/20 bg-cream-50/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-lemon-300">
                ✦ Spotlight · Black Lemon
              </span>
              <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-cream-50 sm:text-5xl">
                Meet the legendary Loomi
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-cream-100/80">
                Sun-fermented until dark and intensely aromatic, our Black Lemon
                carries a smoky-sour depth treasured across Middle-Eastern and herbal
                kitchens — and trusted by leading Mandi restaurant chains.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { t: "Digestive support", d: "Traditionally aids digestion after rich meals." },
                  { t: "Antioxidant-rich", d: "Slow curing concentrates beneficial compounds." },
                  { t: "Bold complexity", d: "A smoky-citrus flavour fresh lemon can't match." },
                  { t: "Restaurant grade", d: "The secret behind authentic Mandi broth." },
                ].map((b) => (
                  <div key={b.t} className="rounded-2xl border border-cream-50/10 bg-cream-50/5 p-4">
                    <p className="font-semibold text-cream-50">{b.t}</p>
                    <p className="mt-1 text-sm text-cream-100/70">{b.d}</p>
                  </div>
                ))}
              </div>

              <Link href="/products/black-lemon" className="btn-lemon mt-9">
                Discover Black Lemon <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mx-auto aspect-square w-full max-w-sm">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-lemon-400/30 to-transparent blur-2xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-64 w-64 animate-floaty rounded-full bg-gradient-to-br from-charcoal-light to-charcoal shadow-2xl sm:h-72 sm:w-72">
                  <div className="absolute inset-6 rounded-full border border-cream-50/10" />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                    <span className="text-6xl">🌑</span>
                    <p className="mt-3 font-display text-xl font-semibold text-lemon-300">Black Lemon</p>
                    <p className="text-xs uppercase tracking-widest text-cream-100/50">Loomi · Sun-cured</p>
                  </div>
                </div>
              </div>
              <FloatingLemon className="absolute right-2 top-6 h-16 w-16 animate-sway" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ WHY VITA LIMES ============ */}
      <section className="relative bg-cream py-20 md:py-28">
        <div className="container-vl">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">Why Vita Limes</span>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-leaf-900 sm:text-5xl">
                Grounded in nature, refined by craft
              </h2>
              <p className="mt-4 text-leaf-500">
                We turn one of nature's most loved fruits into pure, dependable
                ingredients — without ever cutting corners.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyPoints.map((w, i) => (
              <Reveal key={w.title} delay={(i % 4) * 0.07}>
                <div className="group h-full rounded-3xl border border-leaf-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-lemon-100 to-leaf-50 text-leaf-700 transition-transform duration-300 group-hover:scale-110">
                    <w.icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-leaf-900">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-leaf-500">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-14 grid gap-4 rounded-3xl border border-leaf-100 bg-gradient-to-br from-leaf-50 to-cream p-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-display text-3xl font-bold text-leaf-800 sm:text-4xl">{s.value}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-leaf-400">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ STORY ============ */}
      <section id="story" className="relative overflow-hidden section-grad py-20 md:py-28">
        <CornerLeaves position="top-right" />
        <div className="container-vl relative z-10 grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-lemon-100 to-leaf-100 p-10 shadow-soft">
                <div className="grid grid-cols-2 gap-4">
                  {["🍋", "🌿", "🫙", "🧴"].map((e, i) => (
                    <div
                      key={i}
                      className="flex aspect-square items-center justify-center rounded-2xl bg-white/70 text-5xl shadow-sm"
                    >
                      {e}
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-6 -right-4 rounded-2xl bg-white px-5 py-4 shadow-soft">
                <p className="font-display text-2xl font-bold text-leaf-800">From farm</p>
                <p className="text-sm text-lemon-600">to formulation</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <span className="eyebrow">Our Story</span>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-leaf-900 sm:text-5xl">
                Built on quality, grown with purpose
              </h2>
              <p className="mt-5 leading-relaxed text-leaf-600">
                Vitalime Agrotech Private Limited is engaged in the manufacturing of
                value-added lemon-based products, widely used by commercial and
                industrial customers across India. From beverage units and buttermilk
                camps to herbal formulators and restaurant chains, our ingredients
                power the things people love.
              </p>
              <p className="mt-4 leading-relaxed text-leaf-600">
                We're committed to supplying high-quality lemon-derived raw materials
                to the food, herbal, cosmetic, personal care and industrial sectors —
                ensuring consistency, quality and customer satisfaction in every batch.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Food", "Herbal", "Cosmetic", "Personal Care", "Industrial"].map((t) => (
                  <span key={t} className="rounded-full border border-leaf-200 bg-white px-4 py-2 text-sm font-medium text-leaf-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ RECIPES ============ */}
      <section id="recipes" className="relative bg-cream py-20 md:py-28">
        <div className="container-vl">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">🍴 Recipe Gallery</span>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-leaf-900 sm:text-5xl">
                Endless ways to use your lemon
              </h2>
              <p className="mt-4 text-leaf-500">
                Tap any recipe to see ingredients, step-by-step method, serving size and
                chef's tips. Every product comes with its own collection of ideas.
              </p>
            </div>
          </Reveal>

          <div className="mt-14">
            <RecipeGallery recipes={allRecipes} productName="Vita Limes" />
          </div>

          <Reveal delay={0.1}>
            <p className="mt-10 text-center text-sm text-leaf-500">
              Looking for more?{" "}
              <Link href="#products" className="font-semibold text-leaf-700 underline-offset-4 hover:underline">
                Open any product
              </Link>{" "}
              for its full recipe collection.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ INDUSTRIES / B2B ============ */}
      <section id="industries" className="relative overflow-hidden section-grad py-20 md:py-28">
        <CornerLeaves position="bottom-left" />
        <CornerLeaves position="bottom-right" />
        <div className="container-vl relative z-10">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">B2B & Bulk</span>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-leaf-900 sm:text-5xl">
                Powering industries across India
              </h2>
              <p className="mt-4 text-leaf-500">
                Reliable, consistent and food-grade — Vita Limes is a trusted supply
                partner for businesses of every scale.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind, i) => (
              <Reveal key={ind.title} delay={(i % 4) * 0.07}>
                <div className="h-full rounded-3xl border border-leaf-100 bg-white p-7 shadow-soft">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-leaf-700 text-cream-50">
                    <ind.icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-leaf-900">{ind.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-leaf-500">{ind.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl bg-leaf-800 p-8 text-cream-50 sm:flex-row sm:p-10">
              <div className="flex items-center gap-4">
                <HeartHandshake className="h-10 w-10 shrink-0 text-lemon-300" />
                <div>
                  <p className="font-display text-2xl font-semibold">Need bulk or private label?</p>
                  <p className="text-sm text-cream-100/80">Let's build something fresh together.</p>
                </div>
              </div>
              <a href="mailto:hello@vitalimes.com" className="btn-lemon whitespace-nowrap">
                Partner with us <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="relative bg-cream py-20 md:py-28">
        <div className="container-vl">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">Loved & Trusted</span>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-leaf-900 sm:text-5xl">
                Don't just take our word for it
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 0.08}>
                <figure className="flex h-full flex-col rounded-3xl border border-leaf-100 bg-white p-7 shadow-soft">
                  <Quote className="h-8 w-8 text-lemon-300" />
                  <blockquote className="mt-4 flex-1 text-leaf-700">“{t.quote}”</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-leaf-100 pt-5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-leaf-100 text-lg">🍋</span>
                    <div>
                      <p className="font-semibold text-leaf-900">{t.name}</p>
                      <p className="text-xs text-leaf-400">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ NEWSLETTER CTA ============ */}
      <section className="relative overflow-hidden py-10 md:py-16">
        <div className="container-vl">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-lemon-300 via-lemon-200 to-lemon-100 px-7 py-14 text-center shadow-soft sm:px-12 sm:py-20">
            <FloatingLemon className="absolute -left-6 -top-6 h-28 w-28 animate-sway opacity-60" />
            <FloatingLemon className="absolute -bottom-8 -right-4 h-32 w-32 animate-swaySlow opacity-60" />
            <div className="relative z-10 mx-auto max-w-xl">
              <h2 className="font-display text-3xl font-bold leading-tight text-leaf-900 sm:text-4xl">
                Get a squeeze of freshness in your inbox
              </h2>
              <p className="mt-3 text-leaf-700">
                Recipes, wellness tips and early access to new launches — straight from
                the grove.
              </p>
              <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-full border border-leaf-200 bg-white/90 px-5 py-3.5 text-sm text-leaf-800 placeholder:text-leaf-400 focus:border-leaf-500 focus:outline-none"
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </form>
              <p className="mt-3 text-xs text-leaf-600">No spam — just good, fresh things. 🍋</p>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider color="#16290F" />
      <Footer />
    </main>
  );
}
