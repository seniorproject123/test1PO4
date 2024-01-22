import React from 'react'
import styled from 'styled-components'
import PaysageImage from '../../images/home/paysage-background.jpg'

const Body = styled.div`
    background-color: #ECEBE5;
    margin: 0;
    padding-bottom: 10vh;
    font-family: 'Spartan', sans-serif;
    margin: auto;
    min-height: 100vh;

    @media (max-width: 1430px) {
        gap: 4rem;
    }

    .info_container{
        padding-top: 5vh;
        flex-basis: 45%;
        display: flex;
        justify-content: center;
        align-item: center;
        @media (max-width: 1430px) {
            align-items: center;
            
        }
    }

`
const BackgroundImg = styled.div`
    min-height: 240px;
    display: grid;
    background-image: url(${PaysageImage}) ;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
     `

const Inner = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: auto;
    align-items: center;
    text-align: center;
    flex-direction: column;
    line-height: 1vh;
`
const Ready = styled.h1`
    font-size: 40px;
    font-weight: 700;
    color: white;
    `

const TextInfo = styled.p`
  color: white;
  margin: 0;
  padding: 0;
  filter: brightness(1);
`

const CoachInfo = styled.div`
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    margin: 1rem 20%;
    color: rgb(36, 43, 55);
    text-align: center;
    @media (max-width: 1430px) {
        font-size: 1rem;
    }
`

function Coach() {

    return (
        <Body>
            <BackgroundImg>
                <Inner>
                    <TextInfo>Corps - Esprit - Ame</TextInfo>
                    <Ready>Un coach longévité</Ready>
                </Inner>
            </BackgroundImg>
            <div className="info_container">
                <CoachInfo>
                    <p>Transformez votre vie avec notre Coaching de Longévité !</p>
                    <p>Notre programme expert vous guide à travers une aventure holistique de bien-être.
                    Nous sommes à vos côtés pour rajouter de la vie à vos années.
                    </p><br/>
                    <p>Avant de commencer votre beau programme, notre coach réalise un bilan longévité approfondi pour comprendre vos besoins spécifiques, vos objectifs personnels et les aspects à optimiser.</p>
                    <p>Puis une analyse basée sur les résultats du bilan est effectuée pour concevoir un programme sur mesure répondant à vos besoins.</p>
                    <p>Notre coach fait un suivi régulier, ajustant le programme au fil du temps pour s'assurer que vous atteignez et maintenez vos objectifs de longévité.</p>
                </CoachInfo>
            </div>
        </Body>
    )
}
export default Coach;