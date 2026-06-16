import Link from "next/link";
import { FloatingLemon } from "@/components/Decor";

export default function NotFound() {
  return (
    <main className="hero-grad flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <FloatingLemon className="h-24 w-24 animate-floaty" />
      <h1 className="mt-6 font-display text-6xl font-bold text-leaf-900">404</h1>
      <p className="mt-3 max-w-sm text-leaf-500">
        This page seems to have rolled off the table. Let's get you back to the fresh stuff.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to home
      </Link>
    </main>
  );
}
