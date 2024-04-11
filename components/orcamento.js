import React from "react";
import Container from "./container";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/solid";

const Orcamento = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-red-900 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Pronto para viajar conosco?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Clique no botão para acessar nosso formulário para agendar sua viagem ou solicitar seu orçamento!
          </p>
          <p className="mt-2 font-normal text-white text-opacity-50 lg:text-xs">
            Em breve retornamos o contato via WhatsApp ou E-mail!
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto hover:opacity-90 transition-opacity">
          <a
            href="https://form.jotform.com/240986659907072 "
            target="_blank"
            rel="noopener"
            className="flex justify-center py-3 mx-auto text-lg font-medium text-center text-red-800 bg-white rounded-md px-7 lg:px-10 lg:py-5">
            <ClipboardDocumentListIcon className="pe-3 w-10" />
            Solicite aqui
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Orcamento;
