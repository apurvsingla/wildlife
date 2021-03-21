import styled from 'styled-components';

export const CardValue = styled.div`
    height: ${props => props.height || '35vh'};
    width: 45vh;
    background-color: white;
    padding: 20px 20px 80px 20px;
    border-radius: 25px;
    border: 2px solid black;
    cursor: pointer;
    z-index: 100;
    position: ${props => props.pos};
    @media only screen and (max-width: 600px) {
        height: 20vh;
        width: 35vh;
    }
`;


export const MultiCard = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CardImage = styled.img`
    height: ${props => props.imgHeight}%;
    width: 100%; 
`;