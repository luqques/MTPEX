import Image from "next//legacy/image";
import Container from "./container";
import bannerSentra from "../public/img/banner-sentra-na-estrada.jpg";
import whatsappIcon from "../public/img/whatsapp-icon.png";

const Inicio = () => {
  return (
    <Container className="flex flex-wrap">
      <div className="flex items-center w-full lg:w-1/2 z-10">
        <div className="max-w-2xl mb-8">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
            Tranquilidade em cada viagem executiva
          </h1>
          <p className="py-5 text-xl leading-normal lg:text-xl xl:text-2xl text-gray-300">
            A MTPEX é sua parceira confiável em viagens executivas,
            oferecendo um serviço diferenciado para empresas que buscam segurança, conforto e pontualidade em todas as suas jornadas.
          </p>

          <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
            <a
              href="https://api.whatsapp.com/send?phone=554784453397"
              target="_blank"
              className="flex px-8 py-4 text-lg font-medium text-center text-white bg-green-500 rounded-md hover:bg-green-700 transition-colors">
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
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="">
          <Image
            src={bannerSentra}
            alt="Banner"
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
