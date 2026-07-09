import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";


export const metadata: Metadata = {
  title: "Contact Us",

  description:
    "Contact SKFIX for a free quote on handyman, CCTV installation, electrical, plumbing, decorating and property maintenance services in Brighton & Hove.",
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#0D0D0D] pt-23 pb-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[4px] text-yellow-400 font-semibold">
              Contact SKFIX
            </p>

            <h1 className="text-5xl md:text-6xl font-black text-white mt-4">
              Get My Free Quote
            </h1>

            <p className="text-gray-400 text-xl mt-6 max-w-3xl mx-auto">
              Tell us about your project and we'll provide a free,
              no-obligation quotation.
            </p>

          </div>

          <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">

            <ContactForm />

            <ContactInfo />

          </div>

        </div>

      </main>

      <Footer />

    </>
  );
}