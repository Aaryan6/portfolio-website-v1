import "./App.css";
import Navbar from "./components/Navbar/navbar";
import SideEmail from "./components/SideEmail/sideemail";
import SideIcons from "./components/SideIcons/sideicons";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Footer from "./pages/footer/footer";
import Home from "./pages/home/home";
import Projects from "./pages/projects/projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SideIcons />
      <SideEmail />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
