import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <main id="top" className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
