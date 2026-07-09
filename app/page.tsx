import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Handyman Brighton & Hove",

  description:
    "Professional handyman, CCTV installation, TV wall mounting, electrical, plumbing, decorating and smart home services across Brighton & Hove. Free quotes from SKFIX.",
};

export default function Home() {
  return (
    <main className="bg-[#0D0D0D]">
      <Header />
      <Hero />
      <TrustBar />
      <Services />
      <WhyChoose />
      <ContactCTA />
      <Footer />
    </main>
  );
}