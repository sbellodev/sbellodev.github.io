import React from 'react';
import styled from 'styled-components';
import corazonRojo from '../img/corazon-rojo.png';
import corazonAzul from '../img/corazon-azul.png';
import corazonVerde from '../img/corazon-verde.png';
import corazonAmarillo from '../img/corazon-amarillo.png';
import corazonVioleta from '../img/corazon-violeta.png';

const Destrezas = () => {
    return (
        <Lista>
            <Tecnologias>
                <Seccion>Destreza</Seccion>
                <p>JS React</p>
                <p>CSS</p>
                <p>PHP</p>
                <p>Bootstrap</p>
                <p>Java</p>
            </Tecnologias>
            <NivelDeHabilidad>
                
                    <div>Empty</div>
                
                <div>
                    <Nivel src={corazonVerde} alt="corazón verde" />
                    <Nivel src={corazonVerde} alt="corazón verde" />
                    <Nivel src={corazonVerde} alt="corazón verde" />
                </div>
                <div>
                    <Nivel src={corazonAmarillo} alt="corazón amarillo" />
                    <Nivel src={corazonAmarillo} alt="corazón amarillo" />
                </div>
                <div>
                    <Nivel src={corazonRojo} alt="corazón rojo" />
                    <Nivel src={corazonRojo} alt="corazón rojo" />
                </div>
                <div>
                    <Nivel src={corazonVioleta} alt="corazón violeta"/>
                    <Nivel src={corazonVioleta} alt="corazón violeta"/>
                </div>
                <div>
                    <Nivel src={corazonAzul} alt="corazón azul" />
                </div>
            </NivelDeHabilidad>
        </Lista>
    )
}
const Lista = styled.div`
    display: flex;
    padding-top: 10%;
    justify-content: center;

    @media only screen and (max-width: 320px) {
        p {
            font-size: 30px;
        }
    }
`
const Seccion = styled.h2`
    line-height: 28px;`
const Tecnologias = styled.div`
    display: grid;
    align-content: stretch;
    h2, p {
        height: 35px;
        line-height: 16px;
    }
`
const NivelDeHabilidad = styled.div`
    display: grid;
    align-content: stretch;
    color: black;
     > div {
        height: 35px;
        align-content: center;   
    }
`
const Nivel = styled.img`
    width: 30px;
    padding-right: 5px;

    @media only screen and (max-width: 600px) {
        width: 25px;
    }
    @media only screen and (max-width: 320px) {
        width: 22px;
    }
`
export { Destrezas }