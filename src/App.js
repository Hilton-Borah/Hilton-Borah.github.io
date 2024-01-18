import { useState } from 'react';
import './App.css';
import About from './Componants/About';
import ContactUs from './Componants/ContactUs';
import Footer from './Componants/Footer';
import Github from './Componants/Github';
import Home from './Componants/Home';
import Navbar from './Componants/Navbar';
import Project from './Componants/Project';
import Skill from './Componants/Skill';

function App() {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggleNavbar = () => {
  //   setIsOpen(!isOpen);
  // };

  // const handleToogle=()=>{
  //   setIsOpen(false)
  // }
  return (
    <div className="App">
        {/* <h1>Hello hilton</h1> */}
        <Navbar/>
        <div>

        <Home/>
        <About/>
        <Skill/>
        <Project/>
        <Github/>
        <ContactUs/>
        <Footer/>
        </div>
    </div>
  );
}

export default App;
