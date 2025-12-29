import { useEffect } from 'react'
import Navbar from './components/Navbar'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Hero from './sections/Hero'
import Problem from './sections/Problem'
import Solution from './sections/Solution'
import Features from './sections/Features'
import SamplePreview from './sections/SamplePreview'
import Benefits from './sections/Benefits'
import TargetUsers from './sections/TargetUsers'
import Testimonials from './sections/Testimonials'
import Pricing from './sections/Pricing'
import HowToBuy from './sections/HowToBuy'
import FAQ from './sections/FAQ'
import Footer from './sections/Footer'

function App() {
  useEffect(() => {
    if (window.location.hash) {
      // Delay untuk menunggu semua konten dimuat
      setTimeout(() => {
        const target = document.getElementById(window.location.hash.substring(1));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <SamplePreview />
        <Benefits />
        <TargetUsers />
        <Testimonials />
        <Pricing />
        <HowToBuy />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App

