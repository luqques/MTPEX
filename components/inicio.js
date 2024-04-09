import Image from "next/image";
import Container from "./container";
import sentraImg from "../public/img/banner-sentra-na-estrada.jpg";
import whatsappIcon from "../public/img/whatsapp-icon.png";

const Inicio = () => {
  return (
    <Container className="flex flex-wrap">
      <div className="flex items-center w-full lg:w-1/2 z-10">
        <div className="max-w-2xl mb-8">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            Tranquilidade em cada jornada executiva
          </h1>
          <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            A Márcio MTPEX é sua parceira confiável em viagens executivas,
            oferecendo serviços personalizados para empresas que buscam segurança e comodidade em todas as suas jornadas.
          </p>

          <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
            <a
              href="https://api.whatsapp.com/send?phone=554784453397"
              target="_blank"
              className="flex px-8 py-4 text-lg font-medium text-center text-white bg-green-500 rounded-md ">
              Agende sua viagem!
              <Image
                src={whatsappIcon}
                width="40"
                height="20"
                className="ps-3"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-[-10] overflow-hidden opacity-30">
        <div className="relative w-full h-full">
          <Image
            src={sentraImg}
            alt="Sentra 2023"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority={true}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-trueGray-900" />
        </div>
      </div>
    </Container>
  );
}

export default Inicio;
