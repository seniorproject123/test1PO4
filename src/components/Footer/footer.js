import React from 'react'
import styled from 'styled-components'
import LogoImage from '../../images/logo.png'

const Body = styled.div`
    min-height: 250px;
    background-color: #111111;
    display: grid;
    place-items: center;
`
const Inner = styled.div`
    width: 1300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Left = styled.img`
    width: 110px;
    height: 100%;
`

const Middle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`
const LeftClose = styled(Middle)``
const Right = styled(Middle)``

const Text = styled.p`
    letter-spacing: 1.5px;
    font-size: 1.1rem;
    color: white;
    font-weight: 300;
    text-transform: uppercase;
    margin: 0.7rem 0rem 0rem 0rem;
`

function Footer() {

    return (
        <Body>
            <Inner>
                <Left src={LogoImage}></Left>
                <LeftClose>
                    <Text>FACE A CHAQUE BESOIN,</Text>
                    <Text>BOOSTSeniorS vous trouve</Text>
                    <Text>la solution !</Text>
                    </LeftClose>
                <Middle>
                    <Text>Contact</Text>
                    <Text>soon</Text>
                    <Text>contact@boostseniors.fr</Text>
                </Middle>
                <Right>
                    <Text>Suivez-nous</Text>
                    <Text>Facebook</Text>
                    <Text>Linkedin</Text>
                    <Text>Instagram</Text>
                </Right>
            </Inner>
        </Body>
    )
}
export default Footer;