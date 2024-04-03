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
  desc: "Na MTPEX, a segurança é nossa principal preocupação. Investimos em medidas abrangentes de segurança para garantir a tranquilidade de nossos clientes.",
  image: carroSentra,
  bullets: [
    {
      title: "Atendimento Personalizado",
      desc: "Desde a preferência de música, temperatura até uma conversa agradável, estamos aqui para garantir que cada momento da sua viagem seja verdadeiramente único e satisfatório.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Flexibilidade",
      desc: "Na MTPEX, entendemos que sua agenda pode ser imprevisível, especialmente durante viagens de negócios. Por isso, oferecemos uma flexibilidade excepcional em nossas reservas. Seja qual for o horário que melhor se adequa a você, estamos prontos para atender.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Acessibilidade",
      desc: "Nossos veículos são equipados para atender às necessidades de mobilidade de todos os passageiros, garantindo uma experiência inclusiva e confortável para todos os nossos clientes.",
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
