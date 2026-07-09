import Link from "next/link";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer
  id="footer"
  className="bg-black border-t border-yellow-500/20 text-white"
>
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-black text-yellow-400">
              SKFIX
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
              Professional Handyman, CCTV, Smart Home,
              Electrical, Plumbing and Property Maintenance
              services across Brighton & Hove.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Navigation
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <Link href="/" className="hover:text-yellow-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-yellow-400 transition">
                  Services
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-yellow-400 transition">
                  Contact
                </Link>
              </li>

              <li>
                <Link href="/privacy-policy" className="hover:text-yellow-400 transition">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/terms-and-conditions" className="hover:text-yellow-400 transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
  <Link
    href="/cookies-policy"
    className="hover:text-yellow-400 transition"
  >
    Cookies Policy
  </Link>
</li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Contact
            </h3>

            <div className="space-y-4">

              <a
                href="https://wa.me/447853297424"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition"
              >
                <Phone size={20} />
                <MessageCircle size={20} />
                +44 7853 297424
              </a>

              <a
                href="mailto:sevkor.uk@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition"
              >
                <Mail size={20} />
                sevkor.uk@gmail.com
              </a>

            </div>
          </div>

        </div>

        <div className="mt-16 border-t border-yellow-500/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">

          <p>
            © 2026 SKFIX. All rights reserved.
          </p>

          <p className="mt-4 md:mt-0">
            Designed & Developed by SKFIX
          </p>

        </div>

      </div>
    </footer>
  );
}