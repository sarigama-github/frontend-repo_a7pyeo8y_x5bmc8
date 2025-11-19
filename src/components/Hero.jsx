import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradients and particles overlay (won't block Spline) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_50%,rgba(124,58,237,0.25),transparent)] mix-blend-screen" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="backdrop-blur-sm/0"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-lg">
            <span className="h-2 w-2 rounded-full bg-fuchsia-400 shadow-[0_0_20px_6px_rgba(232,121,249,0.35)]" />
            <span className="text-xs tracking-widest uppercase text-fuchsia-200/80">Premium Innovation Studio</span>
          </div>

          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl leading-[1.05] font-poppins font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-300 via-indigo-300 to-cyan-300">
              CHAVIDE
            </span>
          </h1>

          <p className="mt-3 text-lg sm:text-xl font-montserrat italic text-indigo-200/80">
            Every Door Has a Key. We Are CHAVIDE.
          </p>

          <p className="mt-8 max-w-3xl text-base sm:text-lg text-slate-200/90">
            Unlocking possibilities, creating access, and bringing solutions.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#contact" className="group relative inline-flex items-center gap-3 rounded-full px-6 py-3 bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white shadow-[0_8px_40px_rgba(139,92,246,0.35)]">
              <span className="relative z-10">Hire CHAVIDE</span>
              <span className="relative z-10 h-2 w-2 rounded-full bg-white/90" />
              <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="#portfolio" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 bg-white/5 text-white/90 hover:bg-white/10 transition">
              Explore Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
