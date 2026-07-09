import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Handyman Services Brighton",

  description:
    "Explore all SKFIX services including CCTV installation, TV wall mounting, electrical, plumbing, decorating, smart home installation and property maintenance across Brighton & Hove.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white">
      <section className="max-w-7xl mx-auto px-6 pt-40 pb-24">
        <p className="uppercase tracking-[4px] text-yellow-400 font-semibold">
          SKFIX Services
        </p>

        <h1 className="text-5xl md:text-6xl font-black mt-6">
          Professional Services
        </h1>

        <p className="mt-6 max-w-3xl text-xl text-gray-300">
          Choose the service you need. We provide reliable handyman,
          electrical, CCTV, networking and smart home solutions across
          Brighton & Hove.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="rounded-xl border border-yellow-500/20 bg-black p-6 hover:border-yellow-400 transition"
            >
              <h2 className="text-2xl font-bold text-white">
                {service.title}
              </h2>

              <p className="mt-3 text-gray-400">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}