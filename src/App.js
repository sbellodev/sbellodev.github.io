import React, { useState } from 'react'
import styled, { createGlobalStyle }from 'styled-components'
import { Portada } from "./parts/Portada"
import { Descripcion } from "./parts/Descripcion"
import { Destrezas } from "./parts/Destrezas"
import { Proyectos } from "./parts/Proyectos"
import { Pie } from "./parts/Pie"
import leftArrow from "./img/left-arrow.png"
import rightArrow from "./img/right-arrow.png"
import fontDetermination from "./fonts_src/DeterminationSansWeb.ttf"
import fontBoss from "./fonts_src/EndlessBossBattle.ttf"

// const Responsive = {
//   XS: "320px",
//   S: "380px",
//   M: "480px",
//   L: "600px", 
//   XL: "768px", 
//   XXL: "1024px" 
// }

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'DTMMono';
    src: url(${fontDetermination}) format('truetype');
  }
  @font-face {
    font-family: 'EndlessBoss';
    src: url(${fontBoss}) format('truetype');
  }

  body {
    background-color: black;
    font-family: 'DTMMono', monospace;  
    color: white;  
    margin: 0 auto;  
    font-size: 1.6rem;
  }
  p, h1, h2, h3 {
    margin: 0px; 
  }
  h2 {
    font-size: 36px;
  }
  img {
    width: 30px;
  }
`

const App = () => {
  const [count, setCount] = useState(1)

  const NavBlock = () => {  
      switch(count) {
        case 0:
          return setCount(5)
        case 1:
          return <Portada />
        case 2:
          return <Descripcion />
        case 3:
          return <Destrezas />
        case 4:
          return <Proyectos />
        case 5:
          return <Pie />
        case 6: 
          return setCount(1)
        default: 
          console.log("Error: default returned")
      }
  }

const showArrow = (side) => {
  if(count!== 1 && side === "left") {
    return <Arrow src={leftArrow} alt="flecha izquierda"/>
  }
  else if(side === "right") {
    return <Arrow src={rightArrow} alt="flecha derecha"/>
  }
}

  return (
    <>
    <GlobalStyles />
      <Container>
        {console.log(count)}
        <LeftColumn onClick={() => setCount(count-1)} >
          {showArrow("left")}     
        </LeftColumn>
        {NavBlock()}
        <RightColumn onClick={() => setCount(count+1)} >
          {showArrow("right")}
        </RightColumn>
      </ Container>
    </>
  );
}

const Container = styled.div` 
  display: grid;
  grid-template-columns: 80px 1fr 80px;
  grid-column-gap: 10%;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 42px 1fr 42px;
  }
  @media only screen and (max-width: 380px) {
    font-size: 1.4rem;
    grid-template-columns: 40px 1fr 40px;
    grid-column-gap: 1%;
  }
  @media only screen and (max-width: 320px) {
    font-size: 1.3rem;
    grid-template-columns: 40px 1fr 40px;
    grid-column-gap: 1%;
  }
`   
const LeftColumn = styled.div``
const RightColumn = styled.div``
const Arrow = styled.img`
    width: 36px;
    display: block;
    margin: 0 auto;
    padding-top: 50vh;
    @media only screen and (max-width: 480px) {
      width: 32px;
    }
    @media only screen and (max-width: 320px) {
      width: 30px;
    }
`

export default App;
