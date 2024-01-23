import './App.css';
import React from 'react';
import Footer from './components/Footer.js';
import Header from './components/Header.js'
import { Route,Routes} from 'react-router-dom';
import Home from './Home.js'
import Sm from './pages/Sm.js'
import Som from './pages/Som.js'
import Ct from './pages/Ct.js'
import Ee from './pages/Ee.js'
import Fmhm from './pages/Fmhm.js'
import Hmt from './pages/Hmt'
import Fineness from './components/concrete-technology/Fineness';
import Tension from './components/strength-of-materials/Tension';
import Fmodulus from './components/strength-of-materials/Fmodulus';
import Spgravity from './components/concrete-technology/Spgravity';
import Wood from './components/strength-of-materials/Wood';
import Textfield from './components/Textfield';
import Brineels from './components/strength-of-materials/Brineels';
import Impact from './components/strength-of-materials/Impact';
import SimplySupported from './components/strength-of-materials/SimplySupported';
import CantileverBeam from './components/strength-of-materials/CantileverBeam';
import TestOnSprings from './components/strength-of-materials/TestOnSprings';
import SpGravityOfCement from './components/concrete-technology/SpGravityOfCement';
import UnitWeight from './components/concrete-technology/UnitWeight';
import Bulking from './components/concrete-technology/Bulking';
// import ExampleGraph from './components/concrete-technology/ExampleGraph';
import SieveAnalysis from './components/soil-mechanics/SieveAnalysis'
import LiquidLimit from './components/soil-mechanics/LiquidLimit'
import PlasticLimit from './components/soil-mechanics/PlasticLimit'
import CoreCutter from './components/soil-mechanics/CoreCutter'
import SandReplacement from './components/soil-mechanics/SandReplacement'
import IsLightCompaction from './components/soil-mechanics/IsLightCompaction'
import RelativeDensity from './components/soil-mechanics/RelativeDensity'
import Graph1 from './components/soil-mechanics/Graph1';
import Graph from './components/concrete-technology/Graph';
import Graph2 from './components/soil-mechanics/Graph2';
import LiquidPrint from './components/soil-mechanics/LiquidPrint';
import TotalSolids from './components/environmental-engineering/TotalSolids';
import TotalDissolvedSolids from './components/environmental-engineering/TotalDissolvedSolids';
import TotalSuspendedSolids from './components/environmental-engineering/TotalSuspendedSolids';
import JarTest from './components/environmental-engineering/Jartest';
import AvailableChlorine from './components/environmental-engineering/AvailableChlorine';
import DissolvedOxygen from './components/environmental-engineering/DissolvedOxygen';
import Environmental from './components/environmental-engineering/Environmental';
import SpGravityOfSoil from './components/soil-mechanics/SpGravityOfSoil';
import Venturimeter from './components/fluid-mechanics/Venturimeter'
import CentrifugalPump from './components/fluid-mechanics/CentrifugalPump';
import ImpactOfJet from './components/fluid-mechanics/ImpactOfJet';
import MouthPieceByConstant from './components/fluid-mechanics/MouthPieceByConstant';
import MouthPieceByFalling from './components/fluid-mechanics/MouthPieceByFalling';
import Orificemeter from './components/fluid-mechanics/Orificemeter';
import OrificemeterByConstant from './components/fluid-mechanics/OrificemeterByConstant';
import OrificemeterByFalling from './components/fluid-mechanics/OrificemeterByFalling';
import PeltonTurbine from './components/fluid-mechanics/PeltonTurbine';
import PipeFriction from './components/fluid-mechanics/PipeFriction';
import ReciprocatingPump from './components/fluid-mechanics/ReciprocatingPump';
import Vnotch from './components/fluid-mechanics/Vnotch';
import AggregateCrushing from './components/highway-materials-testing/AggregateCrushing';
import AggregateImpact from './components/highway-materials-testing/AggregateImpact';
import DevalsAttritionTest from './components/highway-materials-testing/DevalsAttritionTest';
import SpgravityAndWaterAbsorption from './components/highway-materials-testing/WaterAbsorption.js';
import AggregateGradation from './components/highway-materials-testing/AggregateGradation';
import ShapeTest from './components/highway-materials-testing/ShapeTest.js';
function App() {
  return (
    <div>
      <Header />
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sm' element={<Sm/>}/> 
        <Route path='/som' element={<Som/>}/>
        <Route path='/ct' element={<Ct/>}/>
        <Route path='/ee' element={<Ee/>}/>
        <Route path='/fmhm' element={<Fmhm/>}/>
        <Route path='/hmt' element={<Hmt/>}/>
        <Route path='/ct/fineness' element={<Fineness/>}/>
        <Route path='/som/tension' element={<Tension/>}/>
        <Route path='/ct/fineness modulus' element={<Fmodulus/>}/>
        <Route path='/ct/spgravityofaggregate' element={<Spgravity/>}/>
        <Route path='/som/wood' element={<Wood/>}/>
        <Route path='/textfield' element={<Textfield/>}/>
        <Route path='/som/brineels' element={<Brineels/>}/>
        <Route path='/som/impact' element={<Impact/>}/>
        <Route path='/som/simplysupportedbeam' element={<SimplySupported/>}/>
        <Route path='/som/cantileverbeam' element={<CantileverBeam/>}/>
        <Route path='/som/springtest' element={<TestOnSprings/>}/>
        <Route path='/ct/spgravityofcement' element={<SpGravityOfCement/>}/>
        <Route path='/ct/unitweight' element={<UnitWeight/>}/>
        <Route path='/ct/bulking' element={<Bulking/>}/>
        <Route path='/ct/bulking/bulking_graph' element={<Graph/>} /> 
        <Route path='/sm/sieve_analysis' element={<SieveAnalysis/>}/>
        <Route path='/sm/liquid_limit' element={<LiquidLimit/>} /> 
        <Route path='/sm/liquid_limit/liquid_print' element={<LiquidPrint/>} /> 
        <Route path='/sm/plastic_limit' element={<PlasticLimit/>} /> 
        <Route path='/sm/core_cutter' element={<CoreCutter/>} /> 
        <Route path='/sm/sand_replacement' element={<SandReplacement/>} /> 
        <Route path='/sm/light_compaction' element={<IsLightCompaction/>} /> 
        <Route path='/sm/relative_density' element={<RelativeDensity/>} /> 
        <Route path='/sm/sieve_analysis/graph1' element={<Graph1/>} />
        <Route path='/sm/sieve_analysis/graph2' element={<Graph2/>} />
        <Route path='/sm/spgravity' element={<SpGravityOfSoil/>}/> 
        <Route path='/ee/tsolids' element={<TotalSolids/>}/>
        <Route path='/ee/td_solids' element={<TotalDissolvedSolids/>}/>
        <Route path='/ee/ts_solids' element={<TotalSuspendedSolids/>}/>
        <Route path='/ee/jar_test' element={<JarTest/>}/>
        <Route path='/ee/Available_chlorine' element={<AvailableChlorine/>}/>
        <Route path='/ee/do' element={<DissolvedOxygen/>}/>
        <Route path='/ee/environmental' element={<Environmental/>} />
        <Route path='/fmhm/venturimeter' element={<Venturimeter/>}/>
        <Route path='/fmhm/centrifugal' element={<CentrifugalPump/>}/>
        <Route path='/fmhm/impact' element={<ImpactOfJet/>}/>
        <Route path='/fmhm/mouthpiece_constant' element={<MouthPieceByConstant/>}/>
        <Route path='/fmhm/mouthpiece_falling' element={<MouthPieceByFalling/>}/>
        <Route path='/fmhm/orifice' element={<Orificemeter/>}/>
        <Route path='/fmhm/orifice_constant' element={<OrificemeterByConstant/>}/>
        <Route path='/fmhm/orifice_falling' element={<OrificemeterByFalling/>}/>
        <Route path='/fmhm/pelton' element={<PeltonTurbine/>}/>
        <Route path='/fmhm/pipefriction' element={<PipeFriction/>}/>
        <Route path='/fmhm/reciprocating' element={<ReciprocatingPump/>}/>
        <Route path='/fmhm/vnotch' element={<Vnotch/>}/>
        <Route path='/hmt/crushing' element={<AggregateCrushing/>}/>
        <Route path='/hmt/impact' element={<AggregateImpact/>}/>
        <Route path='/hmt/shapetest' element={<ShapeTest/>}/>
        <Route path='/hmt/devals' element={<DevalsAttritionTest/>}/>
        <Route path='/hmt/spgravity' element={<SpgravityAndWaterAbsorption/>}/>
        <Route path='/hmt/gradation' element={<AggregateGradation/>}/> 
      </Routes> 
     <Footer />
    </div>
  );
}
export default App;
