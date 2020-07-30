import React from 'react';
import styled from 'styled-components';
import corazonRojo from '../img/corazon-rojo.png';

const Descripcion = () => {
    return(
        <Texto>
            <p>Soy un estudiante <span>autodidacta</span> gallego.</p>
            <p>Dos años atrás empecé a trastear Java después de verle las 'tripas' a un videojuego, lo que me 
            llevaría a descubrir el desarrollo Web.</p>
            <p>Me encantó poder <span>marcar la diferencia</span> mediante código y un objetivo.</p>
            <CorazonRojo src={corazonRojo} alt="corazón rojo" />
            <p>Busco un lugar interesante donde pueda seguir formándome y abrirme a nuevos desafíos.</p>
            <br/>
            <p>Me considero <span>responsable</span>, organizado, trabajo en equipo y social, habiendo participado en 
            la planificación y ejecución de más de <span>140 eventos</span> de ocio a nivel regional.</p>
            <br/>
            <p>Para cualquier duda, puesta a prueba (o saludarme!) contáctame vía email o twitter.</p>           
        </Texto>
    )
}
const Texto = styled.div`
    padding-top: 10%;
    padding-bottom: 10%;

    img {
        display: block;
        margin: 28px auto;
    }
    span {
        color: yellow;
    }
`
const CorazonRojo = styled.img``
export { Descripcion }