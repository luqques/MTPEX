import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${open ? "transform rotate-180" : ""
                        } w-5 h-5 text-red-600`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
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
    question: "Por que devo escolher um serviço de transporte executivo em vez de outras opções?",
    answer: "Os serviços de transporte executivo oferecem conforto, pontualidade e um ambiente profissional, tornando-os ideais para viagens de negócios ou eventos importantes.",
  },
  {
    question: "Quais são os principais benefícios em termos de conforto?",
    answer: "Carros espaçosos e bem-mantidos, interiores luxuosos, e atendimento personalizado garantem uma viagem confortável e agradável.",
  },
  {
    question: "Como posso garantir a pontualidade ao utilizar um serviço executivo?",
    answer:
      "As empresas priorizam a pontualidade, garantindo que motoristas estejam bem informados sobre rotas e horários, proporcionando uma experiência confiável.",
  },
  {
    question: "Os motoristas são treinados para atender às preferências do cliente?",
    answer:
      "Sim, motoristas executivos são treinados para oferecer um atendimento personalizado, respeitando as preferências e necessidades individuais dos passageiros.",
  },
];

export default Faq;
