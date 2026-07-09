import ServicePage from "@/components/service/ServicePage";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Smart Home Installation Brighton",

  description:
    "Smart home installation in Brighton & Hove. Smart devices, automation, video doorbells, lighting and home technology by SKFIX.",
};
export default function Page() {
  return (
    <ServicePage
      title="Smart Home Installation"
      description="Modern smart home automation and device integration."
    />
  );
}