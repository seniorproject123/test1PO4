import React from 'react';
import styled from 'styled-components';

const remy = px => `${px / 16}rem`


// Flipping card
const Card = styled.article`
    position: relative;
    width: 100%;
    min-height: ${remy(200)};
    text-align: center;
    align-items: center;
    padding: 1rem;

    margin-bottom: 3rem;
    ${(props) => !props.backColor && 'box-shadow: 0 0 40px rgba(0,0,0,.15)'};
    ${(props) => props.backColor && `background-color: ${props.backColor}`};
`

// Card content
const CardText = styled.div`
    display: block;
    font-size: ${remy(14)};
`

const CardTitle = styled.h2`
    font-size: ${remy(21)};
`

const StyledList  = styled.ul`
    list-style: none;
    padding: 0 2rem;
    margin: 0;
`
const StyledListItem = styled.li`
    text-decoration:none;
`

function Box({title, list, backColor}){
    const defaultStyle = {
        border: '1px solid #ccc',
        padding: '10px',
        borderRadius: '5px',
      };
    if (!backColor) {
        defaultStyle.boxShadow = `0 0 ${remy(40)} rgba(0,0,0,.15)`;
    } else {
        defaultStyle.backgroundColor = backColor;
    }
      return (
        <Card backColor={backColor}>
        <CardTitle>{title}</CardTitle>
            <CardText>
                <StyledList>
                    {list.map((item, index) => (
                        <StyledListItem key={index}>{item}</StyledListItem>
                    ))}
                </StyledList>
            </CardText>
        </Card>
    )
}

export default Box;