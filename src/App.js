import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './componets/About';
import Contact from './componets/Contact';
import Home from './componets/Home';
import Navbar from './componets/Navbar';
import Services from './componets/Services';
import Skills from './componets/Skills';
import Protfolio from './componets/Protfolio';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact  path='/' Component={()=> <Home/>}/>
      <Route exact  path='/About' Component={()=> <About/>}/>
      <Route exact  path='/Skills' Component={()=> <Skills/>}/>
      <Route exact  path='/Services' Component={()=> <Services/>}/>
      <Route exact path='Protfolio' Component={()=><Protfolio/>}/>
      <Route path='/Contact' Component={()=> <Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
   
  );
}

export default App;
