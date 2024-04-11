import React, { useEffect, useRef, useState } from "react";
import Container from "./container";
import SectionTitle from "./sectionTitle";
import Styles from "../css/frota.module.css";
import Image from "next/image";
import c4LoungeImage from "../public/img/c4-lounge.jpg";
import { ChevronLeftIcon, ChevronRightIcon  } from "@heroicons/react/24/solid";

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
                items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
                items[i].style.zIndex = stt;
                items[i].style.filter = 'blur(5px)';
                items[i].style.opacity = stt > 2 ? 0 : 0.6;
            }
            stt = 0;
            for (let i = active - 1; i >= 0; i--) {
                stt++;
                if (!items[i]) continue;
                items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
                items[i].style.zIndex = stt;
                items[i].style.filter = 'blur(5px)';
                items[i].style.opacity = stt > 2 ? 0 : 0.6;
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

    return (
        <Container>
            <SectionTitle
                pretitle="Frota"
                title="Frota de Veículos">
                Todos os carros disponíveis para atendimento, garantindo qualidade, conforto e segurança para qualquer tipo de viagem.
            </SectionTitle>
            <div className={Styles.slider}>
                {[...Array(5)].map((_, index) => (
                    <div className={Styles.item} ref={el => itemsRef.current[index] = el} key={index}>
                        <Image src={c4LoungeImage} alt="C4 Lounge" />
                        <h1>Slide {index + 1}</h1>
                        Todos os carros disponíveis para atendimento, garantindo qualidade, conforto e segurança para qualquer tipo de viagem.
                    </div>
                ))}
                <div className="w-20"><ChevronLeftIcon id={Styles.prev}/></div>
                <div className=" w-20"><ChevronRightIcon id={Styles.next}/></div>
            </div>
        </Container>
    );
}

export default Frota;
