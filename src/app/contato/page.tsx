import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entre em contato | Verbum Capital Assessor de Investimentos",
  description: "Nossa equipe de atendimento está preparada para te atender.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Entre em contato"
        description="Nossa equipe de atendimento está preparada para te atender. Entre em contato através do formulário, pelo telefone (11) 2952-8558 ou pelo email contato@verbumcapital.com.br"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
