import React from 'react';
import { CardValue, CardImage } from './Cards.styles';
import {useHistory} from 'react-router-dom';
const Cards = ({name, src, alt, desc}) => {
    const history = useHistory();
    const nextPage = () => {
        if(history.location.pathname === "/"){
            history.push(`/${name.toLowerCase()}`);
        }
    }

    return (
        // <MultiCard>
            <CardValue onClick={() => nextPage()}>
                <CardImage src={src} alt={alt} />
                <h2 style={{textAlign: 'center'}}>{name}</h2>
                <p style={{textAlign: 'center'}}>{desc}</p>
            </CardValue>
        // </MultiCard>
    );
}

export default Cards;