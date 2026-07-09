import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",

  description:
    "Read the SKFIX Privacy Policy and learn how we collect, use and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#0D0D0D] text-white min-h-screen py-24 px-6">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-black text-yellow-400">
          Privacy Policy
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
              Who We Are
            </h2>

            <p>
              This website is operated by <strong>Sergii Korotetskyi</strong>,
              a self-employed handyman trading as <strong>SKFIX</strong>.
              We provide handyman, property maintenance, CCTV,
              electrical, plumbing, decorating and smart home services
              across Brighton & Hove.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Information We Collect
            </h2>

            <p>
              When you contact us using our website, we may collect:
            </p>

            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Property address</li>
              <li>Postcode</li>
              <li>Project description</li>
              <li>Photos you choose to upload</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              How We Use Your Information
            </h2>

            <p>
              Your information is used only to respond to enquiries,
              prepare quotations, arrange appointments,
              complete requested work and provide customer support.
              We do not sell your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Website Analytics
            </h2>

            <p>
              We use Google Analytics and Microsoft Clarity to
              understand how visitors use our website and to improve
              the user experience. These services may collect anonymous
              usage information through cookies.
            </p>
          </section>
                    <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Cloudflare Turnstile
            </h2>

            <p>
              We use Cloudflare Turnstile to protect our contact form
              from spam and automated abuse. This service helps us
              verify that requests are submitted by real users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Data Storage
            </h2>

            <p>
              We retain your information only for as long as necessary
              to respond to your enquiry, provide our services and meet
              our legal or accounting obligations. We take reasonable
              steps to keep your information secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Your Rights
            </h2>

            <p>
              Under UK data protection law, you have the right to
              request access to your personal information, ask us to
              correct inaccurate data, request deletion of your data
              where appropriate, or object to certain processing
              activities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Contact
            </h2>

            <p>
              If you have any questions about this Privacy Policy or
              how your information is handled, please contact:
            </p>

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