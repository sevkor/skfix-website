import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",

  description:
    "Read the Terms & Conditions for services provided by SKFIX.",
};
export default function TermsPage() {
  return (
    <main className="bg-[#0D0D0D] text-white min-h-screen py-24 px-6">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-black text-yellow-400">
          Terms & Conditions
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
              About Us
            </h2>

            <p>
              SKFIX is operated by <strong>Sergii Korotetskyi</strong>,
              a self-employed handyman providing property maintenance,
              CCTV installation, smart home, decorating, electrical,
              plumbing and general handyman services across Brighton &
              Hove and surrounding areas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Quotations
            </h2>

            <p>
              All quotations are provided free of charge unless agreed
              otherwise. Estimates are based on the information
              available at the time and may change if additional work
              or unforeseen issues are discovered during the job.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Bookings
            </h2>

            <p>
              Appointments are arranged by mutual agreement. If you
              need to cancel or reschedule, please provide as much
              notice as possible.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Pricing & Payment
            </h2>

            <p>
              Payment is due on completion of the agreed work unless
              another arrangement has been confirmed in advance.
              Materials supplied specifically for a project may require
              payment before installation.
            </p>
          </section>
                    <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Customer Responsibilities
            </h2>

            <p>
              Customers are responsible for providing safe access to the
              property and ensuring that the work area is reasonably clear
              before work begins.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Workmanship
            </h2>

            <p>
              We aim to carry out all work with reasonable care and
              professional standards. If you believe there is an issue with
              completed work, please contact us as soon as possible so we can
              discuss an appropriate solution.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Liability
            </h2>

            <p>
              We are not responsible for delays or additional work caused by
              hidden defects, existing installations, structural issues or
              circumstances beyond our reasonable control. Nothing in these
              Terms excludes liability where it cannot legally be excluded.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Changes to These Terms
            </h2>

            <p>
              These Terms & Conditions may be updated from time to time.
              Any changes will be published on this page with the latest
              revision date.
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