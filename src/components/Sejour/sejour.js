import React from 'react'
import styled from 'styled-components'
import { default as FamilyImage, default as FamilyImageTablet } from '../../images/home/drink.jpg'

const Body = styled.div`
    margin: 0;
    box-sizing: border-box;
    padding-bottom: 10vh;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    font-family: 'Spartan', sans-serif;
    max-width: 1300px;
    margin: auto;
    min-height: 100vh;

    @media (max-width: 1430px) {
        gap: 4rem;
  }

    .info_container{
        flex-basis: 45%;
        display: flex;
        flex-direction: column;
        align-self: stretch;
        justify-content: center;
        gap: 1.3rem;
        @media (max-width: 1430px) {
            align-items: center;
            
        }
    }
`

const ImageContainer = styled.div`
    overflow: hidden;
    background-color: transparent;
    
    @media (max-width: 1430px) {
        content: url(${FamilyImageTablet});
    }
`
const Family = styled.img`
    transform: translateY(-70px);
    flex-basis: 40%;
    width: 540px;
    height: 100%;
    box-shadow: 0 7.5rem 10rem -5rem rgba(56, 66, 85, 0.5);


    @media (max-width: 1430px) {
        width: 500px;
        height: 700px;
        content: url(${FamilyImageTablet});
  }
`

const FamilyContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5vh;

    @media (max-width: 1430px) {
        flex-direction: column;
        gap: 4rem;
  }
`

const FamilyHeading = styled.div`
    font-size: 40px;
    font-weight: 700;
    color: rgb(36, 43, 55);
    line-height: 55px;
    width: 69%;
    @media (max-width: 1430px) {
        text-align: center;
        width: 60%;
        font-size: 1.7rem;
        line-height: 45px;
  }
`
const FamilyInfo = styled.div`
    font-size: 18px;
    font-weight: 400;
    width: 90%;
    line-height: 30px;
    color: rgb(36, 43, 55);
    @media (max-width: 1430px) {
        text-align: center;
        width: 100%;
        font-size: 1rem;
  }

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
const Line = styled.div`
    width: 61px;
    height: 1px;
    background-color: brown;

`
const Circle = styled.div`
    height: 5px;
    width: 5px;
    border-radius: 50%;
    border: 1px solid brown;

`


function Sejour() {
    return (
        <Body>
            <FamilyContainer>
                <ImageContainer>
                    <Family src={FamilyImage} />
                </ImageContainer>
                <div className="info_container">
                    <LineCircle>
                        <Line></Line>
                        <Circle></Circle>
                    </LineCircle>
                    <FamilyHeading>Séjours inoubliables</FamilyHeading>
                    <FamilyInfo>
                        <p>Chez <b>BOOSTSeniors</b>, nous croyons que l'âge n'est qu'un chiffre et que l'aventure continue à tout âge. </p>
                        <p>Nos voyages sont l'occasion parfaite de profiter d'expériences enrichissantes dans un <b>environnement empreint de bienveillance.</b></p>
                        <p>Nous adaptons nos <b>offres de séjours</b> à vos désirs <b>en solo/accompagné(e)</b> ou en <b>groupe restreint</b>. Partez là où votre coeur vous mène, en toute <b>sérénité et sécurité</b>.</p>
                    </FamilyInfo>
                </div>
            </FamilyContainer>
          
        </Body>
    )
}
export default Sejour