import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] flex items-center justify-center px-6">
      <div className="text-center max-w-xl">

        <h1 className="text-7xl font-black text-yellow-400">
          404
        </h1>

        <h2 className="mt-6 text-3xl font-bold text-white">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-400 leading-7">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex rounded-full bg-yellow-400 px-8 py-4 font-bold text-black transition hover:bg-yellow-300"
        >
          Back to Home
        </Link>

      </div>
    </main>
  );
}