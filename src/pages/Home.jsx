import Hero from '../components/Hero';
import Services from './Services';
import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <AboutUs />
      <Contact />
    </div>
  );
}

export default Home;