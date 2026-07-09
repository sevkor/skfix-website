import ServicePage from "@/components/service/ServicePage";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Painting & Decorating Brighton",

  description:
    "Painting and decorating services in Brighton & Hove. Interior decorating, touch-ups, repairs and property improvements by SKFIX.",
};
export default function Page() {
  return (
    <ServicePage
      title="Painting & Decorating"
      description="Interior and exterior painting, decorating and finishing services."
    />
  );
}