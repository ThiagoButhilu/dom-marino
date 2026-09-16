import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Menu from "./components/Menu";
import Address from "./components/Address";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-creme">
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Menu />
        <Address />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
