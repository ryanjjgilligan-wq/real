import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-6 py-32 text-center">
      <div className="font-display text-7xl text-gold-grad">404</div>
      <h1 className="mt-6 font-display text-4xl text-gold-50">
        Nothing here for you.
      </h1>
      <p className="mt-4 text-gold-100/70">
        The page you tried to reach is private, expired, or never existed.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Return home
      </Link>
    </div>
  );
}
