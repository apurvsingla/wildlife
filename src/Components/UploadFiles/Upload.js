import React from 'react';
import Header from '../Header/Header';
import { WidgetLoader, Widget } from 'react-cloudinary-upload-widget'
import {useHistory} from 'react-router-dom';
// import {  WildSrc } from '../../Source/source';
// import { MultiCards } from './Animals.styles';
// import {decode as base64_decode, encode as base64_encode} from 'base-64';
// import axios from 'axios';
// import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import './upload.css';
// import env from "react-dotenv";
const Upload = (props) => {
    const history = useHistory();
    const [imageUrl, setImageUrl] = React.useState(null);
    const [imageAlt, setImageAlt] = React.useState(null);
    const uploadImageFolder = () => {
        if(history.location.pathname === '/birds/upload') return "Birds"
        else return "Animals"
    }
    console.log(process.env.REACT_APP_NAME)
    return (
        <>
        <Header />
        <main className="App" style={{position: 'absolute'}}>
        <section className="left-side">
          <form>
            <WidgetLoader /> 
            <Widget
                sources={['local', 'camera', 'dropbox']} 
                resourceType={'image'}
                cloudName={process.env.REACT_APP_NAME}
                uploadPreset={process.env.REACT_APP_PRESET_ID}
                buttonText={'Upload Image'}
                style={{
                    color: 'white',
                    border: 'none',
                    width: '120px',
                    backgroundColor: 'green',
                    borderRadius: '4px',
                    height: '25px',
                    cursor: 'pointer'
                    }}
                folder={uploadImageFolder()}
                cropping={true}
                onSuccess={(e) => {
                    console.log(e)
                    setImageUrl(e.info.url);
                    setImageAlt(e.info.original_filename)
                }} 
                onFailure={() => console.log('Error')}
                logging={false}
                use_filename={true}
                eager={'w_400,h_300,c_pad|w_260,h_200,c_crop'}
                accepts={'application/json'} 
                contentType={'application/json'} 
                withCredentials={true}
                unique_filename={true} 
            />
          </form>
        </section>
        <section className="right-side">
          <p>The resulting image will be displayed here</p>
          {imageUrl && (
            <img src={imageUrl} alt={imageAlt} className="displayed-image"/>
          )}
        </section>
      </main>
        </>
    );
}

export default Upload;
