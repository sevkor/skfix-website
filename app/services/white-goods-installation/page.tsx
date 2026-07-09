import ServicePage from "@/components/service/ServicePage";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "White Goods Installation Brighton",

  description:
    "Professional white goods installation in Brighton & Hove. Washing machines, dishwashers, cookers and other household appliances.",
};
export default function Page() {
  return (
    <ServicePage
      title="White Goods Installation"
      description="Installation of washing machines, dishwashers, ovens and other household appliances."
    />
  );
}