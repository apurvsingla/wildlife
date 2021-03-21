import React from 'react';
import Cards from '../Cards/Cards';
import {MainComponent, SeparateDiv} from './HomeComponent.styles';
import {AnimalsSrc, BirdsSrc, WildSrc} from '../Source/source';


const HomeComponent = () => {
    const [switchView, setSwitchView] = React.useState(true);
    return (
        <>
        <MainComponent >
            <div 
            style={{backgroundImage:`url(${WildSrc})`, position: 'absolute', 
            height:"100vh", width: '100vw', backgroundSize: 'cover', filter: 'blur(3px)'}}
            />
            {switchView ?
            <button style={{position: 'absolute', top: '0', right: '0', 
            padding: '5px', color: 'black', backgroundColor: 'white', fontSize: '1.2rem'}} 
            onClick={() => setSwitchView(!switchView)}>Switch To Night View</button>
            :
            <button style={{position: 'absolute', top: '0', right: '0' ,
            padding: '5px', fontSize: '1.2rem',color: 'white', backgroundColor: 'black'}} 
            onClick={() => setSwitchView(!switchView)}>Switch To Normal View</button>
        }
            <Cards name={"ANIMALS"} src={AnimalsSrc} imgHeight={100} 
            color={switchView? 'white': 'black'}
            textColor={switchView? 'black': 'white'}
            switchView={switchView}
            />
            <Cards name={"BIRDS"} src={BirdsSrc} imgHeight={100} color={switchView? 'white': 'black'}
            textColor={switchView? 'black': 'white'}
            switchView={switchView}
            />
        <SeparateDiv style={{color: switchView? 'white': 'grey'}}>Welcome to the Wildlile</SeparateDiv>
        </MainComponent>
        </>
    );
}

export default HomeComponent;
