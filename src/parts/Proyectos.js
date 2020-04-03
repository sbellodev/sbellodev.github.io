import React from 'react';
import styled from 'styled-components';

const Proyectos = () => {
    return (
        <Lista>
            <h2>Experiencia y Contribuciones</h2>
            <section>
                <p><span>Actual!</span> - 9 meses contribuyendo en <a href="https://smashbrosspain.com" rel="noopener noreferrer">Smashbrosspain </a></p>
                <p><span>Actual!</span> - Organizador de eventos de ocio en<a href="http://gamingtroop.es/" rel="noopener noreferrer"> Gaming Troop</a></p>
                <p>2 meses trabajando en Diariomotor</p>
            </section>
            <br/>
            <h2>Proyectos</h2>
            <section>
                <p><a href="https://debello.github.io/Nueva-web/" rel="noopener noreferrer">Este portafolio</a></p>
                <p><a href="https://debello.github.io/todolist/" rel="noopener noreferrer">To do List</a>(Antiguo)</p>
                <p><a href="https://debello.github.io/kanban_bello/" rel="noopener noreferrer">Kanban</a>(Antiguo)</p>
                <p><a href="https://github.com/debello/API-Clima" rel="noopener noreferrer">API Clima</a>(Antiguo)</p>
                <p><a href="https://github.com/debello?tab=repositories" rel="noopener noreferrer">Mi Github</a></p>
            </section>
        </Lista>
    )
}
const Lista = styled.div`
    padding-top: 10%;
    section p {
        display: block;
    }
    span {
        color: yellow;
    }
`

export { Proyectos }