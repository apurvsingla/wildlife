import React from 'react';
import { CardValue, CardImage } from './Cards.styles';
import {useHistory} from 'react-router-dom';
const Cards = ({name, src, alt, desc, height,imgHeight, pos, color, textColor}) => {
    const history = useHistory();
    const nextPage = () => {
        if(history.location.pathname === "/"){
            history.push(`/${name.toLowerCase()}`);
        }
    }
    return (
        // <MultiCard>
            <CardValue onClick={() => nextPage()} height={height} pos={pos} color={color} textColor={textColor}>
                <CardImage src={src} alt={alt} imgHeight={imgHeight}/>
                <h2 style={{textAlign: 'center'}}>{name}</h2>
                <p style={{textAlign: 'center'}}>{desc}</p>
            </CardValue>
        // </MultiCard>
    );
}

export default Cards;