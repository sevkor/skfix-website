import ServicePage from "@/components/service/ServicePage";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Property Maintenance Brighton",

  description:
    "Property maintenance services in Brighton & Hove. Repairs, installations, handyman services and general home maintenance by SKFIX.",
};
export default function Page() {
  return (
    <ServicePage
      title="Property Maintenance"
      description="General property repairs, maintenance and handyman services."
    />
  );
}