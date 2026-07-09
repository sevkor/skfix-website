import Link from "next/link";
import {
  Camera,
  Monitor,
  Zap,
  Wrench,
  House,
  Network,
  Paintbrush,
  Hammer,
  WashingMachine,
} from "lucide-react";

import { services } from "@/data/services";

const icons = {
  "cctv-installation": Camera,
  "tv-wall-mounting": Monitor,
  "electrical-services": Zap,
  "plumbing-services": Wrench,
  "home-networking": Network,
  "smart-home-installation": House,
  "white-goods-installation": WashingMachine,
  "painting-decorating": Paintbrush,
  "property-maintenance": Hammer,
};

export default function Services() {
  return (
    <section
  id="services"
  className="bg-[#0D0D0D] py-24 px-6"
>
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-yellow-400 font-semibold">
            Professional Services
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            How Can We Help?
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Professional property maintenance, smart home and installation
            services across Brighton & Hove.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => {
            const Icon =
              icons[service.slug as keyof typeof icons];

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
className="group rounded-2xl border border-yellow-500/20 bg-black p-8 transition duration-300 hover:border-yellow-400 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(250,204,21,0.15)]"              >
                <Icon
                  size={42}
                  className="text-yellow-400 mb-6"
                />

                <h3 className="text-2xl font-bold text-white mb-4">
  {service.title}
</h3>

<p className="text-gray-400 leading-7">
  {service.description}
</p>

<div className="mt-6 flex items-center text-yellow-400 font-semibold group">
  <span>View Service</span>

  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</div>
              </Link>
            );
          })}

        </div>
      </div>
    </section>
  );
}