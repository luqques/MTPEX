import Head from "next/head";
import Inicio from "../components/inicio";
import Navbar from "../components/navbar";
import { beneficioUm, } from "../components/data";
import Beneficios from "../components/beneficios";
import Footer from "../components/footer";
// import Avaliacoes from "../components/avaliacoes";
import Faq from "../components/faq";
import Frota from "../components/frota";
import Orcamento from "../components/orcamento";
// import Video from "../components/video";

const Home = () => {
  return (
    <>
      <Head>
        <title>MTPEX</title>
        <meta
          name="description"
          content="MTPEX"
        />
        <link rel="icon" href="../public/favicon.ico" />
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

      {/* <a id="frota" />
      <Frota /> */}

      {/* <a id="avaliacoes" />
      <Avaliacoes /> */}

      <a id="duvidas" />
      <Faq />

      <a id="agendamento" />
      <Orcamento />

      <Footer />
    </>
  );
}

export default Home;
