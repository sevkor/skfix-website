import ServicePage from "@/components/service/ServicePage";
import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "Electrical Services Brighton",

  description:
    "Reliable electrical services in Brighton & Hove. Socket replacement, lighting installation, small electrical repairs and home improvements by SKFIX.",
};

export default function Page() {
  return (
    <ServicePage
      title="Electrical Services"
      description="Reliable electrical installations, repairs and upgrades for your home."
    />
  );
}