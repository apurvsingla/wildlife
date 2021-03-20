import styled from 'styled-components';


export const MainComponent = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

export const SeparateDiv = styled.h2`
    position: absolute;
    top: 0;
    color: white;
    letter-Spacing: 0.1rem; 
    font-Size: 2.8rem; 
    text-Align: center;
    @media only screen and (max-width: 600px) {
        display: none;
    }
`;