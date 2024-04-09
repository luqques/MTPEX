import Image from "next/image";
import Container from "./container";
import SectionTitle from "./sectionTitle";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import carroSentra from "../public/img/c4-lounge.jpg";

const Frota = () => {
    return (
        <Container>
            <SectionTitle
                pretitle="Frota"
                title="Frota de Veículos">
                Todos os carros disponíveis para atendimento, garantindo qualidade, conforto e segurança para qualquer tipo de viagem.
            </SectionTitle>
            <Carousel>
                <div>
                    Carrossel
                    <Image
                        src={carroSentra}
                        width="300"
                        height="auto"
                        alt="Benefício"
                        className={"object-cover"}
                        placeholder="blur"
                        blurDataURL={carroSentra.blurDataURL}
                    />
                </div>
                <div>
                    Imagem 2
                    <Image
                        src={carroSentra}
                        width="300"
                        height="auto"
                        alt="Benefício"
                        className={"object-cover"}
                        placeholder="blur"
                        blurDataURL={carroSentra.blurDataURL}
                    />
                </div>
                <div>
                    Imagem 3
                    <Image
                        src={carroSentra}
                        width="521"
                        height="auto"
                        alt="Benefício"
                        className={"object-cover"}
                        placeholder="blur"
                        blurDataURL={carroSentra.blurDataURL}
                    />
                </div>
            </Carousel>
        </Container>
    )
}

export default Frota;
