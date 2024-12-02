import InvestSectionTwo from "@/components/Investimentos/InvestSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investimentos | Verbum Capital Assessor de Investimentos",
  description: "Soluções oferecidas em parceria com a Necton",
  // other metadata
};

const Compliance = () => {
  return (
    <>
      <Breadcrumb
        pageName="Investimentos"
        description="Soluções oferecidas pela assessoria vinculada à Necton"
      />
      <InvestSectionTwo />
    </>
  );
};

export default Compliance;
