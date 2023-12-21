import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
    <div className="navbar"><NavBar/></div>
    <div className="home"><Home/></div>
    <div className="about"><About/></div>
    <div className="portfolio"><Portfolio/></div>
    <div className="experience"><Experience/></div>
    <div className="contact"><Contact/></div>
    
    <div className="sociallinks"><SocialLinks/></div>
    </div>
  );
}

export default App;
