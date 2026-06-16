import Link from "next/link";
import { Logo, LemonSprig } from "./Decor";
import { products } from "@/lib/products";
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-leaf-900 text-cream-100">
      <div className="pointer-events-none absolute -left-8 -top-8 opacity-20">
        <LemonSprig className="h-48 w-40 animate-swaySlow" />
      </div>
      <div className="pointer-events-none absolute -right-6 bottom-0 rotate-180 opacity-20">
        <LemonSprig className="h-48 w-40 animate-sway" />
      </div>

      <div className="container-vl relative z-10 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="[&_*]:!text-cream-50">
              <Logo />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream-100/80">
              Vitalime Agrotech Private Limited crafts premium value-added lemon
              products — from spray-dried lemon powder to sun-cured black lemon.
              100% natural, consistently pure, and trusted across India.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-cream-50/10 text-cream-50 transition hover:bg-lemon-400 hover:text-leaf-900"
                  aria-label="social"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-cream-50">Shop</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-cream-100/80">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link href={`/products/${p.slug}`} className="transition hover:text-lemon-300">
                    {p.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-cream-50">Company</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-cream-100/80">
              {["Our Story", "Recipes", "B2B & Bulk", "Quality & Sourcing", "Contact"].map((x) => (
                <li key={x}>
                  <Link href="/#story" className="transition hover:text-lemon-300">
                    {x}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-cream-50">Reach Us</h4>
            <ul className="mt-4 space-y-3 text-sm text-cream-100/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-lemon-300" />
                <span>Vitalime Agrotech Pvt. Ltd., India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-lemon-300" />
                <a href="mailto:hello@vitalimes.com" className="hover:text-lemon-300">
                  hello@vitalimes.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-lemon-300" />
                <span>+91 00000 00000</span>
              </li>
            </ul>
            <p className="mt-5 text-xs uppercase tracking-wider text-cream-100/60">
              Also available on
            </p>
            <p className="mt-1 text-sm text-cream-100/80">
              Amazon · Flipkart · MyStore · IndiaMART
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream-50/10 pt-7 text-xs text-cream-100/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Vitalime Agrotech Private Limited. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-lemon-300">Privacy Policy</a>
            <a href="#" className="hover:text-lemon-300">Terms of Service</a>
            <a href="#" className="hover:text-lemon-300">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
