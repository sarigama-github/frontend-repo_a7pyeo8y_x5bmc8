import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyChoose from './components/WhyChoose'
import Portfolio from './components/Portfolio'
import Ecosystem from './components/Ecosystem'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md/0">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-wider">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-300 via-indigo-300 to-cyan-300">CHAVIDE</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-white/80">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#services" className="hover:text-white">Works</a>
            <a href="#why" className="hover:text-white">Why Us</a>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#ecosystem" className="hover:text-white">Ecosystem</a>
            <a href="#contact" className="px-4 py-2 rounded-full bg-white/10 border border-white/10 hover:bg-white/20">Hire Us</a>
          </nav>
        </div>
      </header>

      <main className="relative">
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <Portfolio />
        <Ecosystem />
        <Contact />
      </main>

      <footer className="relative py-10 text-center text-white/60 border-t border-white/10 bg-black/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-sm">© {new Date().getFullYear()} CHAVIDE — Every Door Has a Key.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
