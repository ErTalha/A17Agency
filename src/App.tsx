import Header from './components/Header';
import Hero from './sections/Hero';
import Pricing from './sections/Pricing';
import Services from './sections/Services';
import Consultation from './sections/Consultation';
import About from './sections/About';
import Footer from './sections/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0f1829]">
      <Header />
      <main>
        <Hero />
        <Pricing />
        <Services />
        <Consultation />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
