import React from 'react';
import { backSrc } from '../Source/source';
import {useHistory} from 'react-router-dom'
const Header = () => {
    const history = useHistory();
    return (
        <img src={backSrc} alt="back" style={{position: 'absolute', top: '0', left:'0', 
        zIndex: '100', cursor: 'pointer'}}
        onClick={() => history.goBack()}/>
    );
}

export default Header;
