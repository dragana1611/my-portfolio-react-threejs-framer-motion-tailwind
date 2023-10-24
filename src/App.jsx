import Sidenav from "./components/Sidenav";
import Main from "./sections/Main";
import About from "./sections/About";
import Services from "./sections/Services.jsx";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  // const [lightMode, setLightMode] = useState(false);

  // const toggleLightMode = () => {
  //   setLightMode(!lightMode);
  // };

  return (
    <>
      <Sidenav />
      <Main />
      <About />      
      <Services />      
      <Projects />      
      <Contact />
      <Footer />
    </>
  );
}

export default App;
