import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work.jsx";
import Projects from "./components/Projects";
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
      <Work />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
