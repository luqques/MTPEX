import Container from "./container";
import SectionTitle from "./sectionTitle";
import React from "react";
import Card from "./card.js";
import Carrossel from "./carrossel.js"
import Image from "next/image";
import c4Lounge from "../public/img/c4-lounge.jpg";

function Frota() {
    let cards = [
      {
        key: uuidv4(),
        content: (
          <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg" />
        )
      },
      {
        key: uuidv4(),
        content: (
          <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" />
        )
      },
      {
        key: uuidv4(),
        content: (
          <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" />
        )
      },
      {
        key: uuidv4(),
        content: (
          <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
        )
      },
      {
        key: uuidv4(),
        content: (
          <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
        )
      }
    ];
    return (
        <Container>
            <SectionTitle
                pretitle="Frota"
                title="Frota de Veículos">
                Todos os carros disponíveis para atendimento, garantindo qualidade, conforto e segurança para qualquer tipo de viagem.
            </SectionTitle>
            <div className="">
                <Carrossel
                cards={cards}
                height="500px"
                width="30%"
                margin="0 auto"
                offset={2}
                showArrows={false}
                />
            </div>
        </Container>
    );
  }

export default Frota;
