import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-ink-900/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-2xl tracking-tight text-gold-grad">
            LuxePatron
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-gold-100/80 md:flex">
          <Link href="/explore" className="hover:text-gold-100 transition">
            Explore
          </Link>
          <Link href="/#how" className="hover:text-gold-100 transition">
            How it works
          </Link>
          <Link href="/#creators" className="hover:text-gold-100 transition">
            For creators
          </Link>
          <Link href="/dashboard" className="hover:text-gold-100 transition">
            Patron portal
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/login" className="hidden text-sm text-gold-100/70 hover:text-gold-100 md:block">
            Sign in
          </Link>
          <Link href="/explore" className="btn-primary text-sm">
            Request access
          </Link>
        </div>
      </div>
    </header>
  );
}
