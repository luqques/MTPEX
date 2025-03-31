import React, { useEffect, useRef, useState } from "react";
import Container from "./container";
import SectionTitle from "./sectionTitle";
import Styles from "../css/frota.module.css";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

import cruzeMidnight from "../public/img/cruze-midnight.png";
import sentraImage from "../public/img/sentra.jpg";
import cruzeImage from "../public/img/cruze.png";
import hrvImage from "../public/img/hr-v.png";
import civicImage from "../public/img/civic.png";

function Frota() {
    const [active, setActive] = useState(2);
    const itemsRef = useRef([]);

    useEffect(() => {
        const items = itemsRef.current;
        const next = document.getElementById(Styles.next);
        const prev = document.getElementById(Styles.prev);

        function loadShow() {
            if (!items || !items[active]) return;

            let stt = 0;
            items[active].style.transform = `none`;
            items[active].style.zIndex = 10;
            items[active].style.filter = 'none';
            items[active].style.opacity = 1;
            for (let i = active + 1; i < items.length; i++) {
                stt++;
                if (!items[i]) continue;
                items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-0.7deg)`;
                items[i].style.zIndex = stt;
                items[i].style.filter = 'blur(7px)';
                items[i].style.opacity = stt > 2 ? 0 : 0.5;
            }
            stt = 0;
            for (let i = active - 1; i >= 0; i--) {
                stt++;
                if (!items[i]) continue;
                items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(0.7deg)`;
                items[i].style.zIndex = stt;
                items[i].style.filter = 'blur(7px)';
                items[i].style.opacity = stt > 2 ? 0 : 0.5;
            }
        }

        loadShow();

        next.onclick = function () {
            setActive(active + 1 < items.length ? active + 1 : active);
            loadShow();
        }

        prev.onclick = function () {
            setActive(active - 1 >= 0 ? active - 1 : active);
            loadShow();
        }
    }, [active]);

    const cards = [
        { image: cruzeImage, title: "Chevrolet Cruze", description: "Motorista: Felipe Medeiros" },
        { image: cruzeMidnight, title: "Chevrolet Cruze Midnight", description: "Motorista: Angélica da Cunha" },
        { image: sentraImage, title: "Nissan Sentra", description: "Motorista: Márcio da Cunha" },
        { image: civicImage, title: "Honda Civic", description: "Motorista: William Douglas" },
        { image: hrvImage, title: "Honda HR-V", description: "Motorista: André Maurício" },
    ];

    return (
        <Container>
            <SectionTitle
                pretitle="Frota"
                title="Frota de Veículos">
                Todos os carros disponíveis para atendimento, garantindo qualidade, conforto e segurança para qualquer tipo de viagem.
            </SectionTitle>
            <div className="relative flex w-full overflow-hidden flex-wrap content-end justify-around pb-80 pt-10 sm:pb-[350px] md:pb-[380px] lg:pb-[460px] xl:pb-[550px] 2xl:pb-[630px]">
                {cards.map((card, index) => (
                    <div className={Styles.item} ref={el => itemsRef.current[index] = el} key={index}>
                        <Image src={card.image} alt={card.title} className="rounded-t-lg drop-shadow-2xl w-full md:w-full lg:w-full" />
                        <p className="max-w-1xl my-5 px-3 text-2xl font-bold leading-snug tracking-tight lg:leading-tight lg:text-4xl text-white">{card.title}</p>
                        {/* <p className="max-w-1xl py-4 text-sm md:text-lg lg:text-xl xl:text-xl leading-normal text-gray-300 z-10 px-3">{card.description}</p> */}
                    </div>
                ))}
                <div className="absolute bottom-0 left-0 right-0 flex place-content-evenly sm:bottom-10 md:justify-center md:bottom-10 lg:justify-center lg:bottom-10 xl:justify-center xl:bottom-10 2xl:justify-center 2xl:bottom-8 px-4">
                    <ChevronLeftIcon id={Styles.prev} className="w-8 h-8 text-red-600 cursor-pointer" />
                    <ChevronRightIcon id={Styles.next} className="w-8 h-8 text-red-600 cursor-pointer" />
                </div>
            </div>
        </Container>
    );
}

export default Frota;
