import React from 'react';
import Cards from '../Cards/Cards';
import {MainComponent, SeparateDiv} from './HomeComponent.styles';
import {AnimalsSrc, BirdsSrc, WildSrc} from '../Source/source';
// import history from '../history';
// import {useHistory} from 'react-router-dom';

const HomeComponent = () => {
    return (
        <>
        <MainComponent >
            <div 
            style={{backgroundImage:`url(${WildSrc})`, position: 'absolute', height:"100vh", width: '100vw', backgroundSize: 'cover', filter: 'blur(3px)'}}
            />
            <Cards name={"ANIMALS"} src={AnimalsSrc} />
            <Cards name={"BIRDS"} src={BirdsSrc} />
        <SeparateDiv>Welcome to the Wildlile</SeparateDiv>
        </MainComponent>
        </>
    );
}

export default HomeComponent;
