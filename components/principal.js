import Image from "next/image";
import Container from "./container";
import sentraImg from "../public/img/nissan-sentra-2023.png";
import whatsappIcon from "../public/img/whatsapp-icon.png";

const Principal = () => {
  return (
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Sua viagem com mais confiança
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              A Márcio MTPEX fornece serviços de viagens executivas para empresas que desejam ter
              confiança nas suas idas e vindas.
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
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={sentraImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Sentra imagem"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Principal;
