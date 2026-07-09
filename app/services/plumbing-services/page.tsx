import ServicePage from "@/components/service/ServicePage";
import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "Plumbing Services Brighton",

  description:
    "Professional plumbing services in Brighton & Hove. Repairs, installations, tap replacement, toilets, sinks and general plumbing by SKFIX.",
};
export default function Page() {
  return (
    <ServicePage
      title="Plumbing Services"
      description="Professional plumbing installation, maintenance and repairs."
    />
  );
}