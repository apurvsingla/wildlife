import React from 'react';
import Header from '../../Header/Header';
import {  WildSrc } from '../../Source/source';
import { MultiCards } from './Animals.styles';
import {useHistory} from 'react-router-dom';
import firebase from 'firebase/app';
import Cards from '../../Cards/Cards';
import Carousel from 'react-material-ui-carousel'
import {v4} from 'uuid';

const Animals = (props) => {
    // let carousel;
    const history = useHistory();
    const [animals, setAnimals] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        firebase.firestore().collection('Animals').onSnapshot((snapshot) => {
            console.log(snapshot.docs.map(doc => console.log(doc.data())))
            const animalCollection = snapshot.docs.map((doc) => {
                const data = doc.data();
                data['id'] = v4();
                return data;
            });
            setAnimals(animalCollection);
            setLoading(false);
        });
    }, []);
    return (
        <>
        <Header />
        <div style={{backgroundImage:`url(${WildSrc})`, position: 'fixed', top: '0',
        height:"100vh", width: '100vw', backgroundSize: 'cover', filter: 'blur(2px)'}}/>
        <MultiCards>
            <button style={{position: 'fixed', right: '0', top: '0', cursor: 'pointer', padding: '5px',fontSize: '1.2rem'}} onClick={() => history.push('/animals/upload')}>UPLOAD FILES</button>
            {!loading ? <h1 style={{color: 'white', position: 'fixed', bottom: '0', textAlign: 'center'}}>
                Swipe to the next Image</h1>: null}
            <Carousel autoPlaySpeed="2000" enableAutoPlay>
            {animals.map((i) => {
                return(
                    <Cards src={i.img} name={i.name} desc={i.Desc} imgHeight={40} height='auto'/>
                )
            })}
            </Carousel>
            {loading && <h1 style={{color: 'white', position: 'absolute',}}>Loading Images...</h1>}
        </MultiCards>
        </>
    );
}

export default Animals;
