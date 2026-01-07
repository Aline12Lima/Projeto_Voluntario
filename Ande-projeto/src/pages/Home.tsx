import { Header } from '../components/layout/Header';
import { Hero } from '../components/Sections/Hero';
import { About } from '../components/Sections/About';
import { Services } from '../components/Sections/Services';
import { Projects } from '../components/Sections/Projects';
import { Testimonials } from '../components/Sections/Testimonials';
import { Volunteer } from '../components/Sections/Volunteer'; 
import { Footer } from '../components/layout/Footer';

export const Home = () => {
  return (
    <div className="min-h-screen font-sans text-text bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Testimonials />
        <Volunteer />
            </main>
      <Footer />
    </div>
  );
};