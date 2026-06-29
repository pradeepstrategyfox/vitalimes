import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sprout, FlaskConical, ShieldCheck, Gem, Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { RecipeGallery } from "@/components/RecipeGallery";
import { products } from "@/lib/products";

const heroStats = [
  { value: "324", unit: "hectares", label: "under lemon cultivation" },
  { value: "250+", unit: "farmers", label: "in our direct network" },
  { value: "5 MT", unit: "daily", label: "lemons procured fresh" },
];

const journey = [
  {
    n: "01",
    title: "Direct Sourcing",
    text: "We buy straight from 250+ farmers in Kovilpatti — fair prices, no middlemen, same-day procurement.",
    img: "/img/roots-1.jpg",
  },
  {
    n: "02",
    title: "Scientific Processing",
    text: "Around 5 metric tonnes of lemons a day are transformed using careful, modern processing methods.",
    img: "/img/roots-2.jpg",
  },
  {
    n: "03",
    title: "Stringent Quality",
    text: "Every batch passes strict quality control before it becomes a finished, value-added product.",
    img: "/img/roots-3.jpg",
  },
  {
    n: "04",
    title: "Value Added",
    text: "Six refined products reach food, wellness, cosmetic and industrial customers across India.",
    img: "/img/roots-4.jpg",
  },
];

const bigNumbers = [
  { value: "324", label: "Hectares of lemon cultivation across Kovilpatti" },
  { value: "250+", label: "Farmers in our direct procurement network" },
  { value: "5 MT", label: "Lemons sourced from farmers every single day" },
  { value: "6", label: "Value-added lemon products, and growing" },
];

const valuePillars = [
  { icon: Sprout, title: "Direct from farmers", text: "A direct procurement network that gives growers a stable market and fair, dependable pricing." },
  { icon: FlaskConical, title: "Scientific processing", text: "Modern, careful methods that preserve the goodness of the fruit in every product." },
  { icon: ShieldCheck, title: "Stringent quality control", text: "Rigorous checks at every stage, so quality stays consistent batch after batch." },
  { icon: Gem, title: "Value-added innovation", text: "Turning a humble lemon into high-value products for domestic and international markets." },
];

const industries = [
  "Food & Beverage",
  "Spice Manufacturers",
  "Ayurvedic & Siddha Medicine",
  "Nutraceutical Companies",
  "Cosmetic Manufacturers",
  "Industrial Customers",
];

const marquee = ["Amazon", "Flipkart", "MyStore", "IndiaMART", "Food & Beverage", "Ayurveda & Siddha", "Nutraceuticals", "Cosmetics"];

export default function Home() {
  const featuredRecipes = products.flatMap((p) => p.recipes.slice(0, 1)).slice(0, 6);

  return (
    <main className="overflow-x-clip">
      <Navbar />

      {/* ===================== 1. HERO ===================== */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/img/hero.jpg"
            alt="Lemon groves of Kovilpatti"
            fill
            priority
            sizes="100vw"
            className="animate-kenburns object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-pine-950/55 via-pine-950/35 to-pine-950/85" />
        </div>

        <div className="container-vl relative z-10 pb-14 pt-32">
          <Reveal>
            <p className="eyebrow !text-peach-200">
              <span className="h-px w-8 bg-clay-400" /> Vitalime Agrotech · Kovilpatti, Tamil Nadu
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="display mt-6 max-w-4xl font-display text-[2.9rem] font-semibold leading-[1.02] tracking-tight text-peach-50 sm:text-6xl lg:text-[5rem]">
              From the lemon <em>groves</em> of Kovilpatti
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-peach-100/85">
              We transform lemons into value-added products — sourced directly from the
              farmers who grow them, and crafted for the kitchens, apothecaries and
              industries of India and beyond.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link href="#products" className="btn-clay">
                Explore our products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#story" className="btn-ghost text-peach-50">
                Read our story
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-16 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-sm border border-peach-50/15 bg-peach-50/10 sm:grid-cols-3">
              {heroStats.map((s) => (
                <div key={s.label} className="bg-pine-950/30 px-6 py-5 backdrop-blur-sm">
                  <p className="font-display text-3xl font-semibold text-peach-50">
                    {s.value}{" "}
                    <span className="text-sm font-normal uppercase tracking-widest text-clay-300">
                      {s.unit}
                    </span>
                  </p>
                  <p className="mt-1 text-sm text-peach-100/75">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== marquee strip ===================== */}
      <div className="border-y border-pine-900/10 bg-pine-900 py-4 text-peach-100">
        <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
          <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
            {[...marquee, ...marquee].map((m, i) => (
              <span key={i} className="flex items-center gap-10 whitespace-nowrap text-[13px] font-semibold uppercase tracking-widest text-peach-100/60">
                {m} <span className="text-clay-400">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ===================== 2. FOUNDER'S MESSAGE ===================== */}
      <section id="story" className="bg-sage-100 py-20 md:py-28">
        <div className="container-vl grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-editorial">
                <Image
                  src="/img/founder.jpg"
                  alt="A farmer in the lemon-growing region of Kovilpatti"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-5 left-5 right-10 bg-clay-500 px-6 py-5 text-peach-50 sm:right-16">
                <p className="font-display text-lg font-semibold">A homegrown enterprise</p>
                <p className="text-sm text-peach-100/85">Built with the farmers of Thoothukudi</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <p className="eyebrow">
                <span className="h-px w-8 bg-clay-500" /> A message from our founder
              </p>
              <h2 className="display mt-5 font-display text-4xl font-semibold leading-[1.08] text-pine-900 sm:text-5xl">
                Creating value where it <em>matters</em> most
              </h2>
              <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-ink/75">
                <p>
                  In the Kovilpatti region of Thoothukudi District, lemon cultivation is
                  carried out across roughly 324 hectares. We have built a direct
                  procurement network with more than 250 farmers here, sourcing
                  high-quality lemons straight from their groves.
                </p>
                <p>
                  Each day we procure around five metric tonnes of lemons directly from
                  farmers and process them into a range of value-added products. This gives
                  farmers a stable market and fair pricing, while raising the economic value
                  of lemon cultivation across the region.
                </p>
                <p>
                  Our mission is simple — to create sustainable value for farmers, customers
                  and the agricultural ecosystem by transforming lemons into innovative,
                  high-value products.
                </p>
              </div>
              <div className="mt-8 border-t border-pine-900/10 pt-5">
                <p className="font-display text-xl font-semibold text-pine-900">
                  Vitalime Agrotech Private Limited
                </p>
                <p className="text-sm uppercase tracking-widest text-clay-500">Founder &amp; Team</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== 3. SUSTAINABILITY FULL-BLEED ===================== */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/img/sustainability.jpg"
            alt="Hands holding a young seedling"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-pine-950/55" />
        </div>
        <div className="container-vl relative z-10 py-24 text-center">
          <Reveal>
            <p className="eyebrow justify-center !text-peach-200">Sustainability at our core</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display mx-auto mt-6 max-w-4xl font-display text-3xl font-semibold leading-[1.18] text-peach-50 sm:text-5xl">
              We&apos;re a <em>homegrown</em> company with the farmer
              <br className="hidden sm:block" /> and the land at our <em>heart</em>
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-peach-100/85">
              By creating steady, large-scale demand for lemons, we encourage more farmers
              to take up cultivation and help existing growers expand — strengthening rural
              livelihoods across Kovilpatti.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===================== 4. THE JOURNEY / ROOTS ===================== */}
      <section className="bg-peach-100 py-20 md:py-28">
        <div className="container-vl">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow">
                <span className="h-px w-8 bg-clay-500" /> From grove to product
              </p>
              <h2 className="display mt-5 font-display text-4xl font-semibold leading-[1.08] text-pine-900 sm:text-5xl">
                Where we <em>started</em>, and how we <em>work</em>
              </h2>
              <p className="mt-5 text-ink/70">
                Every Vita Limes product follows the same honest path — from a farmer&apos;s
                hand in Kovilpatti to a finished product on your shelf.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((j, i) => (
              <Reveal key={j.n} delay={(i % 4) * 0.08}>
                <div className="group">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                    <Image
                      src={j.img}
                      alt={j.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 font-display text-sm text-peach-50/90">
                      {j.n}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-pine-900">{j.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{j.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== 5. OUR NETWORK ===================== */}
      <section id="numbers" className="relative overflow-hidden bg-pine-900 py-20 text-peach-100 md:py-28">
        <Image
          src="/img/network.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-15"
        />
        <div className="container-vl relative z-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow !text-clay-300">
                <span className="h-px w-8 bg-clay-400" /> Our network
              </p>
              <h2 className="display mt-5 font-display text-4xl font-semibold leading-[1.08] text-peach-50 sm:text-5xl">
                Rooted in Kovilpatti, <em>reaching</em> across India
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
              <p className="text-lg leading-relaxed text-peach-100/80">
                Our consistent, large-scale procurement has measurably increased demand for
                lemon production in the region — and our finished products travel from these
                groves to customers across the country and overseas.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-peach-50/15 bg-peach-50/10 sm:grid-cols-2 lg:grid-cols-4">
            {bigNumbers.map((n) => (
              <Reveal key={n.label}>
                <div className="h-full bg-pine-900/60 px-7 py-10 backdrop-blur-sm">
                  <p className="font-display text-5xl font-semibold text-peach-50 lg:text-6xl">
                    {n.value}
                  </p>
                  <div className="mt-4 h-px w-10 bg-clay-400" />
                  <p className="mt-4 text-sm leading-relaxed text-peach-100/75">{n.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== 6. PRODUCTS ===================== */}
      <section id="products" className="bg-paper py-20 md:py-28">
        <div className="container-vl">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <div className="max-w-xl">
                <p className="eyebrow">
                  <span className="h-px w-8 bg-clay-500" /> Our key products
                </p>
                <h2 className="display mt-5 font-display text-4xl font-semibold leading-[1.08] text-pine-900 sm:text-5xl">
                  One lemon, <em>six</em> ways to use it
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-xs text-ink/65">
                Each product is crafted from the same hand-picked Kovilpatti lemons — pure,
                potent and ready for your kitchen, ritual or formulation.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.08}>
                <ProductCard product={p} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== 7. APPLICATIONS ===================== */}
      <section className="relative overflow-hidden bg-sage-100 py-20 md:py-28">
        <div className="container-vl grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <p className="eyebrow">
                <span className="h-px w-8 bg-clay-500" /> Trusted across industries
              </p>
              <h2 className="display mt-5 font-display text-4xl font-semibold leading-[1.08] text-pine-900 sm:text-5xl">
                Put to work in <em>every</em> corner of the market
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-ink/70">
                Our value-added lemon products are widely used by the food and beverage
                industry, spice manufacturers, Ayurvedic and Siddha medicine producers,
                nutraceutical companies, cosmetic manufacturers and industrial customers
                across India.
              </p>
              <ul className="mt-8 grid gap-px overflow-hidden rounded-sm border border-pine-900/10 bg-pine-900/10 sm:grid-cols-2">
                {industries.map((ind) => (
                  <li
                    key={ind}
                    className="flex items-center gap-3 bg-sage-50 px-5 py-4 text-sm font-semibold text-pine-800"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-clay-500" />
                    {ind}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-editorial">
              <Image
                src="/img/applications.jpg"
                alt="Lemon used across food and wellness applications"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== 8. VALUE CHAIN / WHY US ===================== */}
      <section id="value-chain" className="bg-paper py-20 md:py-28">
        <div className="container-vl">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow justify-center">Why Vita Limes</p>
              <h2 className="display mt-5 font-display text-4xl font-semibold leading-[1.08] text-pine-900 sm:text-5xl">
                Strengthening the lemon <em>value chain</em>
              </h2>
              <p className="mt-5 text-ink/70">
                Through direct sourcing, scientific processing and stringent quality control,
                we raise farmers&apos; incomes while supplying high-quality lemon products to
                markets at home and abroad.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative aspect-[5/4] overflow-hidden rounded-sm shadow-editorial">
                <Image
                  src="/img/quality.jpg"
                  alt="Fresh quality lemons"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <div className="grid gap-px overflow-hidden rounded-sm border border-pine-900/10 bg-pine-900/10 sm:grid-cols-2">
              {valuePillars.map((p, i) => (
                <Reveal key={p.title} delay={(i % 2) * 0.08}>
                  <div className="h-full bg-paper p-7">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-pine-800 text-peach-50">
                      <p.icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-semibold text-pine-900">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/65">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 9. RECIPES ===================== */}
      <section id="recipes" className="bg-peach-100 py-20 md:py-28">
        <div className="container-vl">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow">
                <span className="h-px w-8 bg-clay-500" /> The lemon kitchen
              </p>
              <h2 className="display mt-5 font-display text-4xl font-semibold leading-[1.08] text-pine-900 sm:text-5xl">
                A world of ways to <em>use</em> your lemon
              </h2>
              <p className="mt-5 text-ink/70">
                Tap any recipe for ingredients, a step-by-step method, serving size and tips.
                Every product opens up its own collection of ideas.
              </p>
            </div>
          </Reveal>
          <div className="mt-12">
            <RecipeGallery recipes={featuredRecipes} productName="Vita Limes" />
          </div>
        </div>
      </section>

      {/* ===================== 10. MISSION / CTA ===================== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/img/cta.jpg" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-pine-950/72" />
        </div>
        <div className="container-vl relative z-10 py-24 md:py-32">
          <div className="max-w-3xl">
            <Quote className="h-10 w-10 text-clay-400" />
            <Reveal>
              <p className="display mt-6 font-display text-3xl font-medium leading-[1.25] text-peach-50 sm:text-[2.6rem]">
                We exist to transform lemons into innovative, high-value products — creating
                sustainable value for <em>farmers</em>, <em>customers</em> and the whole
                agricultural ecosystem.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="#products" className="btn-clay">
                  Shop the range <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="mailto:hello@vitalimes.com" className="btn-ghost text-peach-50">
                  Partner with us
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
