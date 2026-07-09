import ServicePage from "@/components/service/ServicePage";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "CCTV Installation Brighton",

  description:
    "Professional CCTV installation for homes and businesses in Brighton & Hove. Supply, installation, setup and maintenance by SKFIX.",
};
export default function Page() {
  return (
    <ServicePage
      title="CCTV Installation"
      description="Professional CCTV installation for homes and businesses across Brighton, Hove and surrounding areas."
    />
  );
}