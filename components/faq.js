import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import SectionTitle from "../components/sectionTitle";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <SectionTitle pretitle="FAQ" title="Dúvidas Frequentes">
        Algumas dúvidas frequentes podem ser respondidas aqui.
      </SectionTitle>

      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left rounded-lg hover: focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 bg-trueGray-800 text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${open ? "transform rotate-180" : ""
                        } w-5 h-5 text-red-600`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Por que devo escolher um serviço de transporte executivo?",
    answer: "Os serviços de transporte executivo oferecem conforto, pontualidade e um ambiente profissional, tornando-os ideais para viagens de negócios ou eventos importantes.",
  },
  {
    question: "Quais são os principais benefícios em termos de conforto?",
    answer: "Carros espaçosos e bem-mantidos, interiores limpos e higienizados, e uma conversa (ou silêncio) agradável à gosto do cliente.",
  },
  {
    question: "Como a pontualidade é garantida?",
    answer: "Com uma frota vasta de carros e motoristas qualificados, e um cronograma de viagens bem planejado, garantimos a pontualidade do serviço.",
  },
  {
    question: "Os motoristas são treinados para atender às preferências do cliente?",
    answer: "Sim, nossos motoristas são preparados para oferecer um atendimento personalizado, respeitando as preferências e necessidades individuais dos passageiros.",
  },
  {
    question: "Por onde consigo agendar uma viagem?",
    answer: "Via WhatsApp, E-mail, Instagram ou Formulário. O que você achar melhor!",
  },
];

export default Faq;
