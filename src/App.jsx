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

