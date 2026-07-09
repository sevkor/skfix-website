import { Phone, MessageCircle, Mail } from "lucide-react";

export default function ContactCTA() {
  return (
    <section
  id="contact-cta"
  className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-orange-500 py-24 px-6"
>
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-5xl font-black text-black">
          Need a Reliable Handyman?
        </h2>

        <p className="mt-8 text-xl text-black/80 leading-8 max-w-3xl mx-auto">
          Get in touch today for a free quote. We provide reliable handyman,
          CCTV, electrical, plumbing, decorating and smart home services
          across Brighton & Hove.
        </p>

        {/* Контакты */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-10 text-2xl font-bold">

          <a
            href="https://wa.me/447853297424"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-black transition hover:scale-105 hover:underline"
          >
            <Phone size={28} />
            <MessageCircle size={28} />
            +44 7853 297424
          </a>

          <a
            href="mailto:sevkor.uk@gmail.com"
            className="flex items-center gap-3 text-black transition hover:scale-105 hover:underline"
          >
            <Mail size={28} />
            sevkor.uk@gmail.com
          </a>

        </div>

        {/* Кнопки */}
        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <a
            href="/contact"
            className="rounded-full bg-black px-8 py-4 font-bold text-white transition hover:scale-105"
          >
            Get Free Quote
          </a>

          <a
            href="https://wa.me/447853297424"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-green-600 px-8 py-4 font-bold text-white transition hover:scale-105 hover:bg-green-700"
          >
            <MessageCircle size={22} />
            WhatsApp
          </a>

          <a
            href="tel:+447853297424"
            className="flex items-center gap-2 rounded-full border-2 border-black px-8 py-4 font-bold text-black transition hover:bg-black hover:text-white"
          >
            <Phone size={22} />
            Call Now
          </a>

        </div>

      </div>
    </section>
  );
}