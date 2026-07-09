import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="rounded-2xl border border-yellow-500/20 bg-black p-8 h-fit">

      <h2 className="text-3xl font-black text-white">
        Need urgent help?
      </h2>

      <p className="mt-4 text-gray-400 leading-7">
        Contact us directly using any of the methods below.
        We usually respond within a few hours.
      </p>

      <div className="mt-10 space-y-8">

        <a
          href="https://wa.me/447853297424"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 hover:text-yellow-400 transition"
        >
          <div className="rounded-xl bg-yellow-400 p-3 text-black">
            <Phone size={22} />
          </div>

          <div>
            <p className="font-bold text-white">
              Phone / WhatsApp
            </p>

            <p className="text-1xl font-bold text-white mt-1">
              +44 7853 297424
            </p>
          </div>
        </a>

        <a
          href="https://wa.me/447853297424"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 hover:text-yellow-400 transition"
        >
          <div className="rounded-xl bg-green-600 p-3 text-white">
            <MessageCircle size={22} />
          </div>

          <div>
            <p className="font-bold text-white">
              WhatsApp
            </p>

            <p className="text-gray-400">
              Chat with us instantly
            </p>
          </div>
        </a>

        <a
          href="mailto:sevkor.uk@gmail.com"
          className="flex items-start gap-4 hover:text-yellow-400 transition"
        >
          <div className="rounded-xl bg-yellow-400 p-3 text-black">
            <Mail size={22} />
          </div>

          <div>
            <p className="font-bold text-white">
              Email
            </p>

            <p className="text-gray-400">
              sevkor.uk@gmail.com
            </p>
          </div>
        </a>

        <div className="flex items-start gap-4">

          <div className="rounded-xl bg-yellow-400 p-3 text-black">
            <MapPin size={22} />
          </div>

          <div>
            <p className="font-bold text-white">
              Service Area
            </p>

            <p className="text-gray-400">
              Brighton, Hove & surrounding areas
            </p>
          </div>

        </div>

      </div>

      <div className="mt-12 rounded-xl bg-[#111] p-6">

        <h3 className="font-bold text-yellow-400">
          Why choose SKFIX?
        </h3>

        <ul className="mt-4 space-y-3 text-gray-400">

          <li>✔ Free quotes</li>

          <li>✔ Fast response</li>

          <li>✔ Professional workmanship</li>

          <li>✔ Domestic & Commercial</li>

        </ul>

      </div>

    </div>
  );
}