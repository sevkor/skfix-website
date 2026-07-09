import Link from "next/link";
import ScrollDown from "./ScrollDown";

export default function Hero() {
  return (
    <section
  id="hero"
  className="relative overflow-hidden bg-[#0D0D0D] pt-40 pb-32 px-6"
>

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-3xl" />

      </div>

      <div className="relative max-w-6xl mx-auto text-center">

        <p className="uppercase tracking-[6px] text-yellow-400 font-semibold">

          Brighton • Hove • East Sussex

        </p>

        <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight text-white">

          Professional
          <br />

          <span className="text-yellow-400">

            Handyman & Smart

          </span>

          <br />

          Home Solutions

        </h1>

        <p className="mt-10 max-w-3xl mx-auto text-xl leading-9 text-gray-400">

          Reliable handyman services, CCTV installation, TV wall mounting,
          home networking, electrical work, plumbing, decorating and
          property maintenance across Brighton & Hove.

        </p>

        {/* Buttons */}

        <div className="mt-14 flex flex-col sm:flex-row justify-center gap-5">

          <Link
            href="/contact"
            className="rounded-xl bg-yellow-400 px-10 py-5 font-bold text-black transition hover:bg-yellow-300"
          >
            Get My Free Quote
          </Link>

          <Link
            href="https://wa.me/447853297424"
            target="_blank"
            className="rounded-xl border border-yellow-400 px-10 py-5 font-bold text-white transition hover:bg-yellow-400 hover:text-black"
          >
            Contact Now
          </Link>

        </div>
                {/* Direct Contact Message */}

        <div className="mt-12 max-w-4xl mx-auto">

          <p className="text-lg md:text-xl text-gray-300 leading-9">

            <span className="font-bold text-yellow-400">
              Speak directly with your handyman.
            </span>{" "}

            At SKFIX, you communicate directly with the professional who will
            carry out your project from start to finish. No call centres, no
            unnecessary intermediaries—just honest advice, transparent pricing
            and quality workmanship.

          </p>

        </div>

        <ScrollDown />

      </div>

    </section>
  );
}