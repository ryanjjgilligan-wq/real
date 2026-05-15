import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-display text-3xl tracking-tight text-gold-grad">
              LuxePatron
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-gold-100/60">
              An invitation-only membership platform connecting discerning
              patrons with the world's most coveted creators, operators, and
              minds. Membership begins at $500 per month.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-gold-100/40">
              Platform
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gold-100/70">
              <li><Link href="/explore">Explore creators</Link></li>
              <li><Link href="/#how">How it works</Link></li>
              <li><Link href="/dashboard">Patron portal</Link></li>
              <li><Link href="/login">Sign in</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-gold-100/40">
              House
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gold-100/70">
              <li>Concierge · 24/7</li>
              <li>Press</li>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>
        <div className="hairline mt-12" />
        <div className="mt-6 flex items-center justify-between text-xs text-gold-100/40">
          <div>© {new Date().getFullYear()} LuxePatron. All rights reserved.</div>
          <div>Made for the few.</div>
        </div>
      </div>
    </footer>
  );
}
