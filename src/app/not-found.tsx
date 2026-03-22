import Link from "next/link";

export default function NotFound() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32 text-center">
      <h1 className="font-serif text-5xl text-green-800 mb-4">404</h1>
      <p className="text-gray-500 text-lg mb-8">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-green-700 text-white px-7 py-3.5 rounded-xl font-semibold text-[15px] hover:bg-green-800 transition-colors"
      >
        ← Back to home
      </Link>
    </section>
  );
}
