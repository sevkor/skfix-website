"use client";

import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        {/* Logo */}
        <Link
  href="/"
  className="flex items-center transition hover:opacity-90"
>
  <Image
    src="/logo/skfix-logo-v2.png"
    alt="SKFIX Handyman & Smart Solutions"
    width={320}
    height={80}
    priority
    className="h-30 w-auto"
  />
</Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-white font-medium">

          <Link
            href="/"
            className="hover:text-yellow-400 transition"
          >
            Home
          </Link>

          <Link
            href="/services"
            className="hover:text-yellow-400 transition"
          >
            Services
          </Link>

          

          <Link
            href="/contact"
            className="hover:text-yellow-400 transition"
          >
            Contact
          </Link>

        </nav>

        {/* Contact Button */}
        <div className="flex items-center gap-4">

          <a
            href="https://wa.me/447853297424?text=Hi%20SKFIX,%20I'd%20like%20a%20free%20quote."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold transition hover:scale-105 hover:bg-yellow-300"
          >
            <Phone size={18} />
            Contact Now
          </a>

         <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden text-white"
>
  {menuOpen ? <X size={28} /> : <Menu size={28} />}
</button>

        </div>

      </div>
      {menuOpen && (
  <div className="md:hidden bg-[#111] border-t border-yellow-500/20">

    <nav className="flex flex-col px-6 py-6 space-y-5">

      <Link
        href="/"
        onClick={() => setMenuOpen(false)}
        className="text-white text-lg hover:text-yellow-400"
      >
        Home
      </Link>

      <Link
        href="/services"
        onClick={() => setMenuOpen(false)}
        className="text-white text-lg hover:text-yellow-400"
      >
        Services
      </Link>

      <Link
        href="/contact"
        onClick={() => setMenuOpen(false)}
        className="text-white text-lg hover:text-yellow-400"
      >
        Contact
      </Link>

      <a
        href="https://wa.me/447853297424?text=Hi%20SKFIX,%20I'd%20like%20a%20free%20quote."
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 bg-yellow-400 text-black text-center font-semibold py-3 rounded-lg"
      >
        WhatsApp
      </a>

    </nav>

  </div>
)}
    </header>
  );
}