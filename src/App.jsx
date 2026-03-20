import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SearchDemo from './components/SearchDemo'
import PainSection from './components/PainSection'
import SolutionSection from './components/SolutionSection'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-brand-dark">
      <Navbar />
      <Hero />
      <SearchDemo />
      <PainSection />
      <SolutionSection />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
