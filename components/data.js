import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import carroSentra from "../public/img/carro-sentra.png";

const beneficioUm = {
  title: "Segurança",
  desc: "Empresas de transporte executivo investem em medidas de segurança, incluindo motoristas treinados, carros bem-mantidos e rastreamento em tempo real. Isso proporciona uma viagem mais segura em comparação com outras opções de transporte.",
  image: carroSentra,
  bullets: [
    {
      title: "Atendimento Personalizado",
      desc: "O atendimento ao cliente é uma prioridade nesse tipo de serviço. Motoristas estão preparados para oferecer um atendimento personalizado, respeitando suas preferências e necessidades, tornando a experiência mais agradável.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Flexibilidade de Reservas",
      desc: "A maioria das empresas oferece flexibilidade na reserva, permitindo que você agende os serviços de acordo com sua agenda. Isso é especialmente útil para viagens de negócios, onde os horários podem ser imprevisíveis.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Ambiente Profissional",
      desc: "Chegar a reuniões de negócios em um carro executivo transmite uma imagem profissional e corporativa. Isso pode ser crucial, principalmente em contextos empresariais onde a primeira impressão é fundamental.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const beneficioDois = {
  title: "Ambiente Profissional",
  desc: "Chegar a reuniões de negócios em um carro executivo transmite uma imagem profissional e corporativa. Isso pode ser crucial, principalmente em contextos empresariais onde a primeira impressão é fundamental.",
  image: carroSentra,
  bullets: [
    {
      title: "Evita Preocupações com Logística",
      desc: "Ao utilizar um serviço de transporte executivo, você elimina preocupações com estacionamento, rotas e outros detalhes logísticos. Isso permite que você se concentre no que realmente importa, seja trabalho ou lazer.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Pontualidade",
      desc: "Empresas de transporte executivo valorizam a pontualidade. Motoristas profissionais são treinados para garantir que você chegue ao seu destino no horário certo.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Conforto e Elegância",
      desc: "Os serviços de transporte executivo são conhecidos pelo alto padrão de conforto e elegância.",
      icon: <SunIcon />,
    },
  ],
};

export { beneficioUm, beneficioDois };
