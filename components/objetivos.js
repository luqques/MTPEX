import React from "react";
import Container from "./container";
import SectionTitle from "./sectionTitle";

function Objetivos() {
    return (
        <Container>
            <SectionTitle
                pretitle="Objetivos"
                title="Missão, Valores, etc">
                Missão, valores, etc.
            </SectionTitle>
            <div>Fazer cards clicáveis que abram um modal descrevendo a missão, valores, etc</div>
        </Container>
    );
}

export default Objetivos;
