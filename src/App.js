import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';

import { Route,Routes} from 'react-router-dom';
import Home from './Components/Home.js'
import Sm from './Components/Sm.js'
import Som from './Components/Som.js'
import Ct from './Components/Ct.js'
import Ee from './Components/Ee.js'
import Fmhm from './Components/Fmhm.js'
import Hmt from './Components/Hmt'
import Fineness from './Components/Fineness';
import Tension from './Components/Tension';
import Fmodulus from './Components/Fmodulus';
import Spgravity from './Components/Spgravity';
import Wood from './Components/Wood';
import Textfield from './Components/Textfield';







// import { Routes } from 'react-router-dom';
// import background from './2.jpg';

function App() {
  return (
    <div style={{backgroundColor:'lightpink'}}>
      
      
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sm' element={<Sm/>}/>
        <Route path='/som' element={<Som/>}/>
        <Route path='/ct' element={<Ct/>}/>
        <Route path='/ee' element={<Ee/>}/>
        <Route path='/fmhm' element={<Fmhm/>}/>
        <Route path='/hmt' element={<Hmt/>}/>
        <Route path='/fineness' element={<Fineness/>}/>
        <Route path='/tension' element={<Tension/>}/>
        <Route path='/fineness modulus' element={<Fmodulus/>}/>
        <Route path='/spgravity' element={<Spgravity/>}/>
        <Route path='/wood' element={<Wood/>}/>
        <Route path='/textfield' element={<Textfield/>}/>





      </Routes> 
      
      <Footer />
    </div>
    
  );
}

export default App;
