import React from 'react';
import Header from '../../Header/Header';
import {  WildSrc } from '../../Source/source';
import { MultiCards } from './Animals.styles';
import {useHistory} from 'react-router-dom';
// import {decode as base64_decode, encode as base64_encode} from 'base-64';
// import axios from 'axios';
// import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

const Animals = (props) => {
    const history = useHistory();
    React.useEffect(() => {
        const handleImageUpload = async (e,err) => {
            // const { files } = document.querySelector('input[type="file"]')
            const data = new FormData();
            // data.append('file', files[0]);
            data.append('upload_preset', 'acnp0hlw');
            const res = await fetch('https://api.cloudinary.com/v1_1/apurvsingla/image/upload', {
              method: 'POST',
            //   body: data
            });
            const file = await res.json();
            console.log(file); 
            // setImageUrl(file.url);
            // setImageAlt(file.alt)           
        }
        handleImageUpload()
    })
    return (
        <>
        <Header />
        <div style={{backgroundImage:`url(${WildSrc})`, position: 'fixed', top: '0',
        height:"100vh", width: '100vw', backgroundSize: 'cover', filter: 'blur(2px)'}}/>
        <MultiCards>
        <button style={{position: 'fixed', right: '0', bottom: '0', cursor: 'pointer'}} onClick={() => history.push('/animals/upload')}>UPLOAD FILES</button>
        </MultiCards>
        </>
    );
}

export default Animals;
