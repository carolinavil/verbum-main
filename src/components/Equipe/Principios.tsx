"use client";

import { useState } from "react";

const Principios = () => {
  const [open, setOpen] = useState(null);

  const handleToggle = (id) => {
    setOpen(open === id ? null : id);
  };

  return (
    <div className="mx-auto pt-32 sm:pt-16 grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-rows-1">
      <div className="max-w-7xl">
        <h2 className="text-3xl pb-10 font-bold tracking-tight text-gray-900 sm:text-4xl">
          Princípios e Valores
        </h2>

        {[
          {
            id: 1,
            title: "Caráter - Morais e Éticos",
            content:
              "Nossos princípios fundamentais se baseiam na integridade e na ética, influenciando nossas escolhas e ações diárias. Priorizamos comportamentos que promovem confiança, respeito e responsabilidade em todas as situações, tanto pessoais quanto profissionais.",
          },
          {
            id: 2,
            title: "Discrição e Sigilo",
            content:
              "Comprometemo-nos a manter informações confidenciais e a proteger os interesses financeiros dos nossos clientes com máxima discrição e sigilo.",
          },
          {
            id: 3,
            title: "Atenção e amparo às necessidades específicas",
            content:
              "Nosso compromisso é oferecer um serviço personalizado, compreendendo e atendendo às necessidades individuais de cada cliente, proporcionando orientação e suporte especializado em todas as etapas do processo de investimento.",
          },
          {
            id: 4,
            title: "Essência centrada na confiança",
            content:
              "Nossa essência é centrada na confiança, um valor fundamental que permeia todas as nossas interações e decisões. Buscamos construir e manter relações sólidas e transparentes com nossos clientes, baseadas na confiança mútua, integridade e compromisso em alcançar seus objetivos financeiros.",
          },
          {
            id: 5,
            title:
              "Agregar valor ao investir em benefício e satisfação do cliente, fortalecer o relacionamento e a fidelidade",
            content:
              "Buscamos fortalecer o relacionamento e a fidelidade através de uma abordagem centrada no cliente, oferecendo soluções personalizadas, suporte contínuo e resultados consistentes que atendam às suas necessidades e expectativas.",
          },
          {
            id: 6,
            title: "Orientação ao mercado",
            content:
              "Nossa orientação ao mercado é fundamental para fornecer aos clientes as melhores oportunidades de investimento. Mantemos uma abordagem proativa, acompanhando de perto as tendências e as condições do mercado, para oferecer orientação informada e estratégias adaptáveis que maximizem os resultados para os nossos clientes.",
          },
          {
            id: 7,
            title: "Alertas de volatilidade e riscos de mercado",
            content:
              "Priorizamos a transparência e a gestão de riscos em nossos serviços, fornecendo alertas proativos sobre volatilidade e riscos de mercado aos nossos clientes. Nosso compromisso é manter os investidores informados e capacitados para tomar decisões conscientes, protegendo seus interesses financeiros diante de condições de mercado desafiadoras.",
          },
        ].map((item) => (
          <div key={item.id} className="border-b border-gray-200">
            <button
              className="w-full flex justify-between items-center py-4 text-left text-gray-700 hover:text-primary focus:outline-none"
              onClick={() => handleToggle(item.id)}
            >
              <p className="hover:text-primary focus:text-primary font-semibold">
                {item.title}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`${
                  open === item.id ? "rotate-180" : ""
                } h-5 w-5 transition-transform`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            {open === item.id && (
              <div className="text-body-color">
                <p className="py-4">{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Principios;
