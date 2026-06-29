import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/products";
import { AddToCartButton } from "./AddToCartButton";

export function ProductCard({ product, index }: { product: Product; index?: number }) {
  const num = String((index ?? 0) + 1).padStart(2, "0");
  return (
    <div className="group flex flex-col">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-sage-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pine-950/55 via-transparent to-transparent" />
          <span className="absolute left-4 top-4 font-display text-sm text-peach-50/80">{num}</span>
          {product.badge && (
            <span className="absolute right-4 top-4 rounded-sm bg-clay-500 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-peach-50">
              {product.badge}
            </span>
          )}
          <div className="absolute inset-x-4 bottom-4 flex items-end justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-peach-100/80">
                {product.category}
              </p>
              <p className="font-display text-2xl font-semibold text-peach-50">
                ₹{product.price}
                <span className="ml-1 text-sm font-normal text-peach-100/70">/ {product.unit}</span>
              </p>
            </div>
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-peach-50 text-pine-900 transition-all duration-300 group-hover:bg-clay-500 group-hover:text-peach-50">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </div>
        </div>
      </Link>

      <div className="mt-4 flex flex-1 flex-col">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-display text-xl font-semibold text-pine-900 transition-colors group-hover:text-clay-600">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 font-display text-sm italic-serif text-clay-500">{product.tagline}</p>
        <p className="mt-2 text-sm leading-relaxed text-ink/65 line-clamp-2">{product.description}</p>

        <div className="mt-5 flex items-center gap-3">
          <AddToCartButton />
          <Link
            href={`/products/${product.slug}`}
            className="text-[12px] font-semibold uppercase tracking-widest text-pine-700 transition-colors hover:text-clay-500"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
