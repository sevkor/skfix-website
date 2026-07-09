import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies Policy",

  description:
    "Learn how SKFIX uses cookies to improve your experience and protect the website.",
};
export default function CookiesPolicyPage() {
  return (
    <main className="bg-[#0D0D0D] text-white min-h-screen py-24 px-6">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-black text-yellow-400">
          Cookies Policy
        </h1>

        <p className="mt-4 text-gray-400">
          Last updated: July 2026
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center rounded-full border border-yellow-400 px-5 py-2.5 text-yellow-400 font-semibold transition hover:bg-yellow-400 hover:text-black"
        >
          ← Back
        </Link>

        <div className="mt-12 space-y-10 leading-8 text-gray-300">

          <section>

            <h2 className="text-2xl font-bold text-white mb-4">
              What Are Cookies?
            </h2>

            <p>
              Cookies are small text files stored on your device when you
              visit a website. They help websites function correctly,
              improve performance and provide information about how the
              website is used.
            </p>

          </section>

          <section>

            <h2 className="text-2xl font-bold text-white mb-4">
              How We Use Cookies
            </h2>

            <p>
              SKFIX uses cookies to improve your experience, analyse
              website traffic and help protect our contact form from
              spam and automated abuse.
            </p>

          </section>

          <section>

            <h2 className="text-2xl font-bold text-white mb-4">
              Cookies We Use
            </h2>

            <ul className="list-disc ml-6 mt-4 space-y-2">

              <li>
                Essential cookies required for the website to operate.
              </li>

              <li>
                Google Analytics to understand website usage.
              </li>

              <li>
                Microsoft Clarity to improve user experience.
              </li>

              <li>
                Cloudflare Turnstile to protect the contact form.
              </li>

            </ul>

          </section>
                    <section>

            <h2 className="text-2xl font-bold text-white mb-4">
              Managing Cookies
            </h2>

            <p>
              Most web browsers allow you to control or disable cookies
              through your browser settings. Please note that disabling
              certain cookies may affect the functionality of this
              website.
            </p>

          </section>

          <section>

            <h2 className="text-2xl font-bold text-white mb-4">
              Contact
            </h2>

            <div className="mt-6 rounded-2xl border border-yellow-500/20 bg-black p-6">

              <p>
                <strong>Sergii Korotetskyi</strong>
              </p>

              <p>
                Self-employed, trading as <strong>SKFIX</strong>
              </p>

              <p className="mt-4">
                Email:{" "}
                <a
                  href="mailto:sevkor.uk@gmail.com"
                  className="text-yellow-400 hover:underline"
                >
                  sevkor.uk@gmail.com
                </a>
              </p>

              <p>
                Phone:{" "}
                <a
                  href="tel:+447853297424"
                  className="text-yellow-400 hover:underline"
                >
                  +44 7853 297424
                </a>
              </p>

            </div>

          </section>

        </div>

      </div>

    </main>
  );
}