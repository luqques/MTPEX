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
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: carroSentra,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};

export { beneficioUm, beneficioDois };
