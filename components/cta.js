import React from "react";
import Container from "./container";

const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-red-900 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Pronto para a viagem?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Junte-se a nós!
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="https://github.com/web3templates"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-red-800 bg-white rounded-md px-7 lg:px-10 lg:py-5 ">
            Agendar viagem
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Cta;
