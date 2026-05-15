import Link from "next/link";

export const metadata = { title: "Sign in · LuxePatron" };

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md px-6 py-24">
      <div className="text-center">
        <div className="font-display text-4xl text-gold-grad">LuxePatron</div>
        <p className="mt-3 text-sm text-gold-100/60">
          Sign in to your patron portal or apply as a creator.
        </p>
      </div>

      <form className="mt-12 space-y-5">
        <label className="block">
          <div className="text-[11px] uppercase tracking-[0.18em] text-gold-100/60">
            Email
          </div>
          <input
            type="email"
            required
            placeholder="you@domain.com"
            className="mt-1.5 w-full rounded-xl border border-white/10 bg-ink-800/40 px-4 py-3 text-gold-50 placeholder:text-gold-100/30 focus:border-gold-300/50 focus:outline-none"
          />
        </label>
        <button type="button" className="btn-primary w-full">
          Send magic link
        </button>
      </form>

      <div className="mt-12 text-center text-xs uppercase tracking-[0.2em] text-gold-100/40">
        New here? <Link href="/explore" className="text-gold-200 underline-offset-4 hover:underline">Browse creators</Link>
      </div>
    </div>
  );
}
