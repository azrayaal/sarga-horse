import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import About from './components/About'
import Stats from './components/Stats'
import Disciplines from './components/Disciplines'
import Events from './components/Events'
import Gallery from './components/Gallery'
import News from './components/News'
import Academy from './components/Academy'
import JoinCTA from './components/JoinCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-sand text-ink overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        {/* <Ticker /> */}
        <About />
        <Stats />
        <Disciplines />
        <Events />
        <Gallery />
        <News />
        {/* <Academy /> */}
        {/* <JoinCTA /> */}
      </main>
      <Footer />
    </div>
  )
}
