import React from 'react';
import './App.css';
//import Parentsign from './Sign/Parentsign';
//import Parentlog from './Log/Parentlog';
import {BrowserRouter} from 'react-router-dom';
import Router from './Components/Router'
import Navb from './Components/Navb';


function App() {
  return (
    // <div>
    //   {/* <Parentsign /> */}
     
    // </div>
          <BrowserRouter>
          <div>
            {/* <Parentlog /> */}
            <Navb />
            <Router />
          </div>
          </BrowserRouter>
  );
}

export default App;
