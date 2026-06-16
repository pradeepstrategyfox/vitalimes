import Link from "next/link";
import { Star, ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/products";
import { ProductVisual } from "./ProductVisual";

export function ProductCard({ product }: { product: Product }) {
  const off = Math.round(((product.mrp - product.price) / product.mrp) * 100);
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-leaf-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow"
    >
      <div className="relative aspect-[4/3.4] overflow-hidden bg-gradient-to-br from-cream-50 to-leaf-50">
        <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(120px_120px_at_70%_30%,rgba(247,211,60,0.35),transparent)]" />
        {product.badge && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-leaf-700 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-cream-50">
            {product.badge}
          </span>
        )}
        {off > 0 && (
          <span className="absolute right-4 top-4 z-10 rounded-full bg-lemon-400 px-2.5 py-1 text-[10px] font-bold text-leaf-900">
            {off}% OFF
          </span>
        )}
        <ProductVisual
          product={product}
          className="absolute inset-0 m-auto h-[88%] w-[88%] transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-1.5 text-xs font-medium text-lemon-600">
          <Star className="h-3.5 w-3.5 fill-lemon-400 text-lemon-400" />
          {product.rating}
          <span className="text-leaf-300">·</span>
          <span className="text-leaf-400">{product.reviews} reviews</span>
        </div>
        <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-leaf-900">
          {product.shortName}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-leaf-500">
          {product.description}
        </p>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-xl font-bold text-leaf-900">₹{product.price}</span>
              <span className="text-sm text-leaf-300 line-through">₹{product.mrp}</span>
            </div>
            <span className="text-xs text-leaf-400">{product.unit}</span>
          </div>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-leaf-50 text-leaf-700 transition-all duration-300 group-hover:bg-lemon-400 group-hover:text-leaf-900">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
