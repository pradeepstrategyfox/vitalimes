import Link from "next/link";
import { products } from "@/lib/products";
import { Instagram, Facebook, Linkedin, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-pine-950 text-peach-100">
      <div className="container-vl py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-display text-3xl font-semibold text-peach-50">
              Vita <span className="italic-serif">Limes</span>
            </p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest2 text-clay-300">
              By Vitalime Agrotech Pvt. Ltd.
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-peach-100/70">
              Transforming the lemons of Kovilpatti into value-added products, and
              building a fairer, more sustainable value chain for the farmers who grow them.
            </p>
            <div className="mt-7 flex gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-peach-100/15 text-peach-100 transition hover:border-clay-400 hover:bg-clay-500 hover:text-peach-50"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-semibold uppercase tracking-widest2 text-peach-100/50">
              Products
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-peach-100/80">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link href={`/products/${p.slug}`} className="transition hover:text-clay-300">
                    {p.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-semibold uppercase tracking-widest2 text-peach-100/50">
              Company
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-peach-100/80">
              {[
                { label: "Our Story", href: "/#story" },
                { label: "B2B Sales", href: "/#b2b" },
                { label: "Future Products", href: "/#future" },
                { label: "Recipes", href: "/#recipes" },
                { label: "In Numbers", href: "/#numbers" },
              ].map((x) => (
                <li key={x.label}>
                  <Link href={x.href} className="transition hover:text-clay-300">
                    {x.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-[11px] font-semibold uppercase tracking-widest2 text-peach-100/50">
              Reach the grove
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-peach-100/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-clay-300" />
                <span>Kovilpatti, Thoothukudi District, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-clay-300" />
                <a href="mailto:hello@vitalimes.com" className="hover:text-clay-300">
                  hello@vitalimes.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-clay-300" />
                <span>+91 00000 00000</span>
              </li>
            </ul>
            <a
              href="mailto:hello@vitalimes.com"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-clay-300 hover:text-clay-400"
            >
              Partner with us <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-peach-100/10 pt-8 text-xs text-peach-100/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Vitalime Agrotech Private Limited. All rights reserved.</p>
          <p>Also on Amazon · Flipkart · MyStore · IndiaMART</p>
        </div>
      </div>
    </footer>
  );
}
