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
  title: "Atendimento Personalizado",
  desc: "Nossos serviços são diferenciados para atender às necessidades de clientes exigentes, garantindo uma excelente experiência de transporte.",
  image: carroSentra,
  bullets: [
    {
      title: "Profissionalismo",
      desc: " Nossos motoristas são experientes e treinados, estão comprometidos com a segurança e o bem-estar dos passageiros.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Abrangência",
      desc: "Todo o Vale do Itajaí, Oeste Catarinense, Litoral Norte e Sul, Paraná, Rio Grande do Sul e Aeroportos de Navegantes, Florianópolis, Joinville, Curitiba, dentre outros sob consulta",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Pontualidade",
      desc: "Valorizamos o tempo dos nossos clientes e nos esforçamos para garantir que todas as viagens sejam pontuais, proporcionando tranquilidade e eficiência",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const beneficioDois = {
  title: "Ambiente Profissional",
  desc: "Chegar a reuniões de negócios em um carro executivo transmite uma imagem profissional e corporativa. Isso pode ser crucial, iniciomente em contextos empresariais onde a primeira impressão é fundamental.",
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
