import './App.css';
import About from "./components/About";
import Header from './components/Header';
import Hero from "./components/Hero";

function App() {
  return (
    <div className="bg-[#2a2a32] text-white h-screen snap-y snap-mandatory 
    overflow-scroll z-0">
      <head>
        <title>Enrico Salis Portfolio</title>
      </head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>
    </div>
  );
}

export default App;
