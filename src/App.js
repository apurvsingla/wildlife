import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import {
  Switch,
  Route,
  // Router
} from 'react-router-dom';
import HomeComponent from './Components/HomeComponent/HomeComponent';
import Animals from './Components/Description/Animals/Animals';
import Birds from './Components/Description/Birds/Birds';
import Upload from './Components/UploadFiles/Upload';
// import { backSrc } from './Components/Source/source';

function App() {
  return (
    <>
    <Switch>
        <Route exact path="/" component={HomeComponent} />
        {/* {/* <Route exact path="/:mode" component={ModePage} /> */}
        <Route exact path="/animals" component={Animals} /> 
        <Route exact path="/birds" component={Birds} /> 
        <Route exact path="/:animals/upload" component={Upload} /> 
    </Switch>
    </>
  );
}

export default App;
