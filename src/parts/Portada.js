import React from 'react';
import styled from 'styled-components';

//eslint-disable-next-line
// function myScript() {
//     const script = document.createElement("script")
//     script.async = true
//     script.src = "/scripts/myscript.js"
//     document.body.appendChild(script)
// }
// myScript()
// //eslint-disable-next-line
// function createGoogleScript() {
//     const googleScript = document.createElement("script")
//     googleScript.async = true
//     googleScript.src = "/scripts/googleScript.js"
//     document.head.appendChild(googleScript)
// }
// createGoogleScript()

const Portada = () => {
    return (
        <Titular>
            <Titulo>SANTI BELLO</Titulo>
            <Subtitulo>
                <div>
                    <h2>Desarrollador Frontend</h2>
                    <h2>{"{React.js}"}</h2>
                </div>
            </Subtitulo>
        </Titular>
    )
}
const Titular = styled.div`
    padding-top: 10%;
    display: grid;
    p { 
        place-self: start end;
        margin: 10px;
        float: right;
    }
    h1 {
        font-family: 'EndlessBoss', monospace;  
        font-size: 100px;
        justify-self: center;
    }
    .subtitulo {
    }

    @media only screen and (max-width: 480px) {
        padding-top: 15%;
        h1 {
            font-size: 70px;
        }
    }
    @media only screen and (max-width: 320px) {
        padding-top: 20%;
        h1 {
            font-size: 60px;
        }
    }
`
const Titulo = styled.h1``
const Subtitulo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
`
    

export { Portada }