import React from 'react'
import styled from 'styled-components'
import { default as FamilyImage, default as FamilyImageTablet } from '../../images/home/glass.jpg'
import { default as LocallyImage, default as LocallyImageTablet } from '../../images/home/grey.jpg'

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
const Locally = styled(Family)`
    transform: translateY(70px);
    box-shadow: 0 7.5rem 10rem -5rem rgba(56, 66, 85, 0.5);

    @media (max-width: 1430px) {
        content: url(${LocallyImageTablet});
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
const LocallyContainer = styled(FamilyContainer)`
    flex-direction: row-reverse;
    @media (max-width: 1430px) {
        flex-direction: column;
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


function Features() {
    return (
        <Body>
            <LocallyContainer>
                <ImageContainer>
                    <Locally src={LocallyImage} />
                </ImageContainer>
                <div className="info_container">
                    <LineCircle>
                        <Line></Line>
                        <Circle></Circle>
                    </LineCircle>
                    <FamilyHeading>Le soutien d'un malade Alzheimer</FamilyHeading>
                    <FamilyInfo>
                        <hr/>
                        <p>Face aux premiers signes de la maladie, qui affectent la mémoire et compliquent les tâches quotidiennes, l'hypnose offre un nouvel espoir.</p>
                        <p>Notre approche cible :</p>
                        <ul>
                            <li>la concentration</li>
                            <li>la gestion du stress</li>
                            <li>le renforcement des souvenirs, tant immédiats que sur le long terme</li>
                        </ul>
                        <p>En favorisant la détente, la motivation et le lien social, l'hypnose peut jouer un rôle positif pour soutenir le bien-être mental.</p>
                        <p>Commencez à explorer les bénéfices de l'hypnose dès aujourd'hui et redonnez à votre esprit la sérénité qu'il mérite !</p>
                        <hr/>
                    </FamilyInfo>

                </div>
            </LocallyContainer>
            <FamilyContainer>
                <ImageContainer>
                    <Family src={FamilyImage} />
                </ImageContainer>
                <div className="info_container">
                    <LineCircle>
                        <Line></Line>
                        <Circle></Circle>
                    </LineCircle>
                    <FamilyHeading>Le soutien d'un proche aidant</FamilyHeading>
                    <FamilyInfo>
                        <p>Transformez votre quotidien avec notre service :</p>
                        <ul>
                            <li>brisez le silence</li>
                            <li>gérez votre temps différemment</li>
                            <li>profitez d'un break indispensable</li>
                            <li>prenez soin de vous</li>
                        </ul>
                        <p>Des professionnels sont là pour vous aider !</p>
                    </FamilyInfo>
                </div>
            </FamilyContainer>
          
        </Body>
    )
}
export default Features