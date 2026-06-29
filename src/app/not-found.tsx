import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-pine-900 px-6 text-center text-peach-50">
      <p className="text-[12px] font-semibold uppercase tracking-widest2 text-clay-300">
        Page not found
      </p>
      <h1 className="mt-4 font-display text-7xl font-semibold">404</h1>
      <p className="mt-4 max-w-sm text-peach-100/70">
        This page has wandered off into the grove. Let&apos;s get you back to the fresh stuff.
      </p>
      <Link href="/" className="btn-clay mt-9">
        Back to home
      </Link>
    </main>
  );
}
