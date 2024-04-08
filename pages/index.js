import Head from "next/head";
import Principal from "../components/principal";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { beneficioDois, beneficioUm, } from "../components/data";
import Video from "../components/video";
import Beneficios from "../components/beneficios";
import Footer from "../components/footer";
import Comentarios from "../components/comentarios";
import Cta from "../components/cta";
import Faq from "../components/faq";

const Home = () => {
  return (
    <>
      <Head>
        <title>Márcio MTPEX</title>
        <meta
          name="description"
          content="Márcio MTPEX"
        />
        <link rel="icon" href="../public/img/mtpex-logo-4.png" />
      </Head>

      <Navbar />
      <Principal />
      <SectionTitle
        pretitle="Benefícios da MTPEX"
        title="Por que escolher a MTPEX?">
        Os serviços de transporte executivo são reconhecidos pelo seu padrão superior de conforto e elegância.
        Na MTPEX, elevamos essa experiência a um novo patamar.
        Nossos veículos são cuidadosamente mantidos,
        oferecendo espaços amplos e interiores confortáveis que garantem uma viagem verdadeiramente agradável.
        Viaje conosco e descubra a diferença em cada viagem.
      </SectionTitle>
      <Beneficios data={beneficioUm} />
      <Beneficios imgPos="right" data={beneficioDois} />
      {/* <SectionTitle
        pretitle="Veja o vídeo"
        title="Assista como trabalhamos">
        Os serviços de transporte executivo são conhecidos pelo alto padrão de conforto e elegância.
        Carros bem-mantidos, espaçosos e com interior luxuoso proporcionam uma viagem agradável,
        especialmente em comparação com outros meios de transporte.
      </SectionTitle>
      <Video /> */}
      <SectionTitle
        pretitle="Comentários"
        title="Alguns comentários de clientes">
        Os serviços de transporte executivo são conhecidos pelo alto padrão de conforto e elegância.
        Carros bem-mantidos, espaçosos e com interior luxuoso proporcionam uma viagem agradável,
        especialmente em comparação com outros meios de transporte.
      </SectionTitle>
      <Comentarios />
      <SectionTitle pretitle="FAQ" title="Perguntas frequentes">
        Algumas perguntas frequentes podem ser respondidas aqui.
      </SectionTitle>
      <Faq />
      {/* <Cta /> */}
      <Footer />
    </>
  );
}

export default Home;
