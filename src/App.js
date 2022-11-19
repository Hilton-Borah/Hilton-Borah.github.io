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
  return (
    <div className="App">
        {/* <h1>Hello hilton</h1> */}
        <Navbar/>
        <Home/>
        <About/>
        <Skill/>
        <Project/>
        <Github/>
        <ContactUs/>
        <Footer/>
    </div>
  );
}

export default App;
