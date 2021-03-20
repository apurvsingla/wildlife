import React from 'react';
import Header from '../../Header/Header';
import { birdsBackground } from '../../Source/source';
import { MultiCards } from '../Animals/Animals.styles';
import {useHistory} from 'react-router-dom';
const Birds = () => {
    const history = useHistory();
    return (
        <>
        <Header />
        <div 
        style={{backgroundImage:`url(${birdsBackground})`, position: 'fixed', 
        height:"100vh", width: '100vw', backgroundSize: 'cover', filter: 'blur(1px)', top: '0'}}
        />
        
        <MultiCards>
        <button style={{position: 'fixed', right: '0', bottom: '0', cursor: 'pointer'}} onClick={() => history.push('/birds/upload')}>UPLOAD FILES</button>
        </MultiCards>
        </>
    );
}

export default Birds;
