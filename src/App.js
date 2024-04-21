import Navbar from "./components/Navbar";
import Sidenavbar from "./components/Sidenavbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidenavbar/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;