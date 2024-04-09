import Image from "next/image";
import React from "react";
import SectionTitle from "../components/sectionTitle";
import Container from "./container";

const Beneficios = (props) => {
  const { data } = props;
  return (
    <>
      <SectionTitle
        pretitle="Benefícios da MTPEX"
        title="Por que escolher a MTPEX?">
        Os serviços de transporte executivo são reconhecidos pelo seu padrão superior de conforto e elegância.
        Na MTPEX, elevamos essa experiência a um novo patamar.
        Nossos veículos são cuidadosamente mantidos,
        oferecendo espaços amplos e interiores confortáveis que garantem uma viagem verdadeiramente agradável.
        Viaje conosco e descubra a diferença em cada viagem.
      </SectionTitle>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${props.imgPos === "right" ? "lg:order-1" : ""
            }`}>
          <div>
            <Image
              src={data.image}
              width="521"
              height="auto"
              alt="Benefício"
              className={"object-cover"}
              placeholder="blur"
              blurDataURL={data.image.src}
            />
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${data.imgPos === "right" ? "lg:justify-end" : ""
            }`}>
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                {data.title}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                {data.desc}
              </p>
            </div>

            <div className="w-full mt-5">
              {data.bullets.map((item, index) => (
                <Beneficio key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Beneficio>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

function Beneficio(props) {
  return (
    <>
      <div className="flex items-start mt-8 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-red-600 rounded-md w-11 h-11 ">
          {React.cloneElement(props.icon, {
            className: "w-7 h-7 text-indigo-50",
          })}
        </div>
        <div>
          <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
            {props.title}
          </h4>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            {props.children}
          </p>
        </div>
      </div>
    </>
  );
}

export default Beneficios;
