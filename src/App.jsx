import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Services from "./components/Services.jsx";
import Projects from "./components/Projects";
import Parallax from "./components/Parallax";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // const [lightMode, setLightMode] = useState(false);

  // const toggleLightMode = () => {
  //   setLightMode(!lightMode);
  // };

  return (
    <div className=''>      
      <Sidenav />
      <Main />
      <Parallax />
      <Services />
      <Parallax />
      <Projects />
      <Parallax />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
