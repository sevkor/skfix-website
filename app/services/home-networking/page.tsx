import ServicePage from "@/components/service/ServicePage";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home Networking Brighton",

  description:
    "Home networking services in Brighton & Hove. Wi-Fi improvement, Ethernet installation, network setup and troubleshooting by SKFIX.",
};
export default function Page() {
  return (
    <ServicePage
      title="Home Networking"
      description="Fast wired and Wi-Fi networking solutions for homes and offices."
    />
  );
}