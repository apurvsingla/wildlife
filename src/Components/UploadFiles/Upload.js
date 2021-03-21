import React from 'react';
import Header from '../Header/Header';
import { WidgetLoader, Widget } from 'react-cloudinary-upload-widget'
import {useHistory} from 'react-router-dom';
import firebase from 'firebase/app';
import './upload.css';
const Upload = (props) => {
    const history = useHistory();
    const [imageUrl, setImageUrl] = React.useState(null);
    const [imageAlt, setImageAlt] = React.useState(null);
    const [anName, setAnName] = React.useState('');
    const [descriptionValue, setDescriptionValue] = React.useState('');

    const uploadImageFolder = () => {
        if(history.location.pathname === '/birds/upload') return "Birds"
        else return "Animals"
    }
    const uploadData = (url, name, desc) => {
      firebase.firestore().collection(uploadImageFolder())
      .add({
        img: (imageUrl),
        name: (anName),
        Desc: (descriptionValue),
      }).then((docRef) => {
        // console.log('Animals Uploaded', docRef);
        setImageUrl('');
        setAnName("");
        setDescriptionValue("");
      }).catch((error) => {
        // console.log("Error:", error)
      })
    }
    const handleChange = (e,value) => {
      // console.log(value)
      setAnName(e.target.value);
    }
    const handleDescChange = (e,value) => {
      // console.log(value)
      setDescriptionValue(e.target.value);
    }
    return (
        <>
        <Header />
        <main className="App" style={{position: 'absolute'}}>
        <section className="left-side">
          <form onSubmit={(e) => {
            e.preventDefault();
          }}>
            <label for={'name'}>Name:</label>
            <input type="text" id={'name'} value={anName} onChange={(e) => handleChange(e)}/>
            <label for={'desc'}>Description:</label>
            <input type="text" id={'desc'} value={descriptionValue} onChange={(e) => handleDescChange(e)}/>
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
                    // console.log(e)
                    setImageUrl(e.info.url);
                    setImageAlt(e.info.original_filename);
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
            <button type="submit" onClick={() => uploadData()}>Submit Data</button>
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
