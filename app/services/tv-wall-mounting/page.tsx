import ServicePage from "@/components/service/ServicePage";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "TV Wall Mounting Brighton",

  description:
    "Professional TV wall mounting service in Brighton & Hove. Secure installation, cable management and setup for all TV sizes.",
};
export default function Page() {
  return (
    <ServicePage
      title="TV Wall Mounting"
      description="Professional TV wall mounting with clean cable management across Brighton & Hove."
    />
  );
}