import Head from "next/head";
import Inicio from "../components/inicio";
import Navbar from "../components/navbar";
import { beneficioUm, } from "../components/data";
import Beneficios from "../components/beneficios";
import Footer from "../components/footer";
import Avaliacoes from "../components/avaliacoes";
import Faq from "../components/faq";
// import Cta from "../components/cta";
// import Video from "../components/video";

const Home = () => {
  return (
    <>
      <Head>
        <title>Márcio MTPEX</title>
        <meta
          name="description"
          content="Márcio MTPEX"
        />
        <link rel="icon" href="../public/img/mtpex-logo-3.png" />
      </Head>

      <Navbar />

      <a id="inicio" />
      <Inicio />

      <a id="beneficios" />
      <Beneficios data={beneficioUm} />
      {/* <Beneficios imgPos="right" data={beneficioDois} /> */}

      {/* <SectionTitle
        pretitle="Veja o vídeo"
        title="Assista como trabalhamos">
        Os serviços de transporte executivo são conhecidos pelo alto padrão de conforto e elegância.
        Carros bem-mantidos, espaçosos e com interior luxuoso proporcionam uma viagem agradável,
        especialmente em comparação com outros meios de transporte.
      </SectionTitle>
      <Video /> */}
      {/* <SectionTitle
        pretitle="Avaliações"
        title="Alguns comentários de clientes">
        Os serviços de transporte executivo são conhecidos pelo alto padrão de conforto e elegância.
        Carros bem-mantidos, espaçosos e com interior luxuoso proporcionam uma viagem agradável,
        especialmente em comparação com outros meios de transporte.
      </SectionTitle> */}

      <a id="avaliacoes" />
      <Avaliacoes />

      <a id="duvidas" />
      <Faq />
      {/* <Cta /> */}
      <Footer />
    </>
  );
}

export default Home;
