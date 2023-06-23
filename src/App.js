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
import FinenessPrint from './Components/Print2';
import Brineels from './Components/Brineels';
import Impact from './Impact';
import SimplySupported from './Components/SimplySupported';
import CantileverBeam from './Components/CantileverBeam';
import TestOnSprings from './Components/TestOnSprings';
import SpGravityOfCement from './SpGravityOfCement';
import UnitWeight from './Components/UnitWeight';
function App() {
  return (
    <div className='Appbg'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/*  TODO:Use readable names */}
        <Route path='/sm' element={<Sm/>}/> 
        <Route path='/som' element={<Som/>}/>
        <Route path='/ct' element={<Ct/>}/>
        <Route path='/ee' element={<Ee/>}/>
        <Route path='/fmhm' element={<Fmhm/>}/>
        <Route path='/hmt' element={<Hmt/>}/>
        <Route path='/fineness' element={<Fineness/>}/>
        <Route path='/tension' element={<Tension/>}/>
        <Route path='/fineness modulus' element={<Fmodulus/>}/>
        <Route path='/spgravityofaggregate' element={<Spgravity/>}/>
        <Route path='/wood' element={<Wood/>}/>
        <Route path='/textfield' element={<Textfield/>}/>
        <Route path='/finenessprint' element={<FinenessPrint/>}/>
        <Route path='/brineels' element={<Brineels/>}/>
        <Route path='/impact' element={<Impact/>}/>
        <Route path='/simplysupportedbeam' element={<SimplySupported/>}/>
        <Route path='/cantileverbeam' element={<CantileverBeam/>}/>
        <Route path='/springtest' element={<TestOnSprings/>}/>
        <Route path='/spgravityofcement' element={<SpGravityOfCement/>}/>
        <Route path='/unitweight' element={<UnitWeight/>}/>
        

      </Routes> 
     <Footer />
    </div>
  );
}
export default App;
