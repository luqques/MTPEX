import React, { useState } from "react";
import Image from "next/image";
import Container from "./container";
//import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import SectionTitle from "./sectionTitle";
import c4Lounge from "../public/img/c4-lounge.jpg";

const CARDS = 10;
const MAX_VISIBILITY = 3;

const Card = ({ title, content }) => {
    <div className="card">
        <h2>{title}</h2>
        <p>{content}</p>
        <Image src={c4Lounge} alt="Imagem do carro" width={300} height={200} />
    </div>
};

const Carousel = ({ children }) => {
    const [active, setActive] = useState(2);
    const count = React.Children.count(children);

    return (
        <div className="carousel">
            {active > 0 && <button className="nav left" onClick={() =>
                setActive(i => i - 1)}> seta esquerda </button>}
            {React.Children.map(children, (child, i) => (
                <div className="card-container" style={{
                    '--active': i == active ? 1 : 0,
                    '--offset': (active - i) / 3,
                    '--direction': Math.sign(active - i),
                    '--abs-offset': Math.abs(active - i) / 3,
                    'pointer-events': active === i ? 'auto' : 'none',
                    'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
                    'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
                }}>
                    {child}
                </div>
            ))}
            {active < count - 1 && <button className="nav right" onClick={() => setActive(i => 1)}> seta direita </button>}
        </div>
    );
};

const Frota = () => {
    return (
        <Container>
            <SectionTitle
                pretitle="Frota"
                title="Frota de Veículos">
                Todos os carros disponíveis para atendimento, garantindo qualidade, conforto e segurança para qualquer tipo de viagem.
            </SectionTitle>
            <Carousel>
                {[...new Array(CARDS)].map((_, i) => (
                    <Card 
                        key={i}
                        title={'Card ' + (i + 1)}
                        content='teste de card'
                    />
                ))}
            </Carousel>
        </Container>
    )
}

export default Frota;
