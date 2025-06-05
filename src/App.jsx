import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="contact">
        <Info />
      </section>
      <Footer />
    </div>
  );
}

export default App;