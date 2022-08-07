import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar";
import Header from './components/Header';
import Particle from './components/Particle';
import { Routes, Route } from 'react-router';
import Aboutme from './components/Aboutme';
import Myproject from './components/Myproject';

function App() {
  return (
    <>
    <Particle />
    <Navbar />
    <Routes>
      <Route path='/testbeem/' element={<Header/>}/>
      <Route path='/testbeem/Aboutme/' element={<Aboutme/>}/>
      <Route path='/testbeem/Myproject/' element={<Myproject/>}/>
    </Routes>
    {/* <Header/> */}
    </>
  );
}
export default App;
