import React from 'react'
import styled from 'styled-components'
import PaysageImage from '../../images/home/BS.png'
const Body = styled.div`
    display: grid;
    min-height: 240px;
    background-image: url(${PaysageImage});
    background-repeat: no-repeat;
    background-position: 20% center;
    background-size: auto 50%;
`
const Inner = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: auto;
    align-items: center;
    text-align: center;
    flex-direction: column;
`
const Ready = styled.h1`
    font-size: 30px;
    font-weight: 400;
    color: black;
    text-transform: uppercase;
    `

function Solution() {

    return (
        <Body>
            <Inner>
                <Ready>FACE A CHAQUE BESOIN,  BOOSTSENIORS vous trouve la <b>SOLUTION</b> !</Ready>
            </Inner>

        </Body>
    )
}
export default Solution;