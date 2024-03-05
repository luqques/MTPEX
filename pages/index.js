import Head from "next/head";
import Principal from "../components/principal";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { beneficioDois, beneficioUm, } from "../components/data";
import Video from "../components/video";
import Beneficios from "../components/beneficios";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>Márcio MTPEX</title>
        <meta
          name="description"
          content="Márcio MTPEX"
        />
        <link rel="icon" href="../public/img/mtpex-logo.png" />
      </Head>

      <Navbar />
      <Principal />
      <SectionTitle
        pretitle="Benefícios da MTPEX"
        title="Por que você deve usar nossos serviços">
        Os serviços de transporte executivo são conhecidos pelo alto padrão de conforto e elegância.
        Carros bem-mantidos, espaçosos e com interior luxuoso proporcionam uma viagem agradável,
        especialmente em comparação com outros meios de transporte.
      </SectionTitle>
      <Beneficios data={beneficioUm} />
      <Beneficios imgPos="right" data={beneficioDois} />
      <SectionTitle
        pretitle="Veja o vídeo"
        title="Assista como trabalhamos">
        Os serviços de transporte executivo são conhecidos pelo alto padrão de conforto e elegância.
        Carros bem-mantidos, espaçosos e com interior luxuoso proporcionam uma viagem agradável,
        especialmente em comparação com outros meios de transporte.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Comentários"
        title="Alguns comentários de clientes">
        Os serviços de transporte executivo são conhecidos pelo alto padrão de conforto e elegância.
        Carros bem-mantidos, espaçosos e com interior luxuoso proporcionam uma viagem agradável,
        especialmente em comparação com outros meios de transporte.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Perguntas frequentes">
        Algumas perguntas frequentes podem ser respondidas aqui.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;
