import React from 'react'
import styled from 'styled-components'

const Body = styled.div`
    background-color: #111111;
`
const Inner = styled.div`
    box-sizing: border-box;
    padding-bottom: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    font-family: 'Spartan', sans-serif;
    max-width: 1300px;
    min-height: 70vh;
    background-color: #111111;
    margin: auto;
    gap: 8rem;

    @media (max-width: 1430px) {
        flex-direction: column;
        gap: 4rem;
  }
`
const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: stretch;
    flex-basis: 55%;
    @media (max-width: 1430px) {
        align-items: center;
        width: 600px;
        margin: auto;
        margin-top: 10vh;
  }
`
const LineCircle = styled.div`
    display: flex;
    gap: 0.7rem;
    justify-content: flex-end;
    margin-bottom: 1.6rem;
    align-items: center;
    flex-direction: row-reverse;
    margin-top: -70px;
`
const Line = styled.div`
    width: 61px;
    height: 1px;
    background-color: khaki;
`
const Circle = styled.div`
    height: 5px;
    width: 5px;
    border-radius: 50%;
    border: 1px solid khaki;
`
const Heading = styled.h1`
    color: white;
    font-size: 40px;
    line-height: 56px;
    font-weight: 700;
    width: 80%;
    @media (max-width: 1430px) {
        width: 100%;
        text-align: center;
    }
    `
const Info = styled.p`
    color: white;
    font-size: 18px;
    font-weight: 300;
    line-height: 30px;
    text-transform: uppercase;
    @media (max-width: 1430px) {
        text-align: center;
  }
`
const RightContainer = styled.div`
    flex-basis: 65%;
    color: white;
    @media (max-width: 1430px) {
        width: 600px;
  }
`

const StyledList  = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;

`
const StyledListItem = styled.li`
    text-decoration:none;
    color: #AFAEAA;
`

function Prestation() {

    return (
        <Body>
            <Inner>
                <LeftContainer>
                    <LineCircle>
                        <Line></Line>
                        <Circle></Circle>
                    </LineCircle>
                    <Info>savoir-faire</Info>
                    <Heading>Des prestations sur-mesure</Heading>
                </LeftContainer>
                <RightContainer>
                    <Info>Points forts</Info>
                    <StyledList>
                        <StyledListItem>Equipe expérimentée</StyledListItem>
                        <StyledListItem>Accompagnement personnalisé</StyledListItem>
                        <StyledListItem>Empathie</StyledListItem>
                        <StyledListItem>Discrétion</StyledListItem>
                        <StyledListItem>Fiabilité</StyledListItem>
                        <StyledListItem>Valeurs</StyledListItem>
                    </StyledList>
                </RightContainer>
            </Inner>

        </Body>
    )
}
export default Prestation