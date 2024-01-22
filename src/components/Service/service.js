import React from 'react';
import styled from 'styled-components';
import GridTel from '../../images/home/gridTel.jpg';
import Box from './Box.js';


function Service() {
    return (
      <Body>
        <Content>
        <LineCircle>
        <Line></Line>
        </LineCircle>

          <Title><strong>BOOST</strong>Seniors</Title>
          <Subtitle>un service sur-mesure</Subtitle>
        </Content>
        <CardTable>
            <LeftSide>
                <Box 
                    title={"SOUTIEN À L'AUTONOMIE"}
                    list={["ADAPTATION DU DOMICILE : conseil pour réaménager son domicile pour éviter les chutes (téléassistance, GPS, capteurs, ...) et bénéficier d'aides financières",
                            "ENTRETIEN :  jardinage, petit travaux, débarras/tri"]}/>
                <Box
                    title={"ASSISTANCE ADMINISTRATIVE"}
                    list={["Planification des rendez-vous médicaux",
                           "Gestion du courrier",
                           "Démarches administratives"]}
                    backcolor={"#ECEBE5"}/>
                <Box
                    title={"ASSISTANCE ADMINISTRATIVE"}
                    list={["Découvrez le pouvoir apaisant de l'hypnose dans la prise en charge de la maladie d'Alzheimer. "]}/>
            </LeftSide>
            <RightSide>
                <div>
                    <AbsPos>
                    <Box
                    title={"ACTIVITÉS STIMULANTES"}
                    list={["Accompagnement à diverses sorties (expo, opéra, théâtre, shopping...)",
                    "Programme personnalisé, stimulant et ludique pour raviver sa mémoire"]}
                    backcolor={"#ECEBE5"}/>
                    <GridImg src={GridTel}></GridImg>
                    </AbsPos>
                </div>
            </RightSide>
        </CardTable>
      </Body>
    );
  }

    const Line = styled.div`
        width: 61px;
        height: 1px;
        background-color: brown;

    `
    const LineCircle = styled.div`
        display: flex;
        gap: 0.7rem;
        justify-content: flex-end;
        margin-bottom: 1.6rem;
        align-items: center;
        flex-direction: row-reverse;

        @media (max-width: 1430px) {
            margin-bottom: 0.4rem;
        }
    `
    const CardTable = styled.div`
        display: grid;

        grid-gap: 3rem;
        max-width: 40%;
        padding: 2em;
        display: grid;
        font-size: 22px;
        font-weight: 450;
        line-height: 30px;
        @media (max-width: 1430px) {
            font-size: 1rem;
        }
        `
    
    const LeftSide = styled.div`
    `
    const RightSide = styled.div`
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 3;
        position: relative;
        
    `
    const AbsPos = styled.div`
        position: absolute;
        left: 2rem;
        background-color: rgba(255, 255, 255, 0.5);
    `

    const GridImg = styled.img`
        margin-top: 1rem;
        width: auto;
    `

    const Body = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        max-width: 100%;
        padding: 2rem 4rem;
        margin-top: 5vh;
        
        @media (max-width: 991px) {
            padding: 0 2rem;
        }
    `
  
    const Content = styled.span`
        position: relative;
        display: flex;
        margin-bottom: 9px;
        flex-direction: column;
        align-items: center;
    `

    const Title = styled.div`
        justify-content: center;
        color: #333;
        text-align: center;
        letter-spacing: 4px;
        text-transform: uppercase;
        font-family: 'Spartan', sans-serif;
    `

    const Subtitle = styled.div`
        justify-content: center;
        text-align: center;
        font: 400 40px/168% Inter, 'Spartan',sans-serif;
    `
      
export default Service