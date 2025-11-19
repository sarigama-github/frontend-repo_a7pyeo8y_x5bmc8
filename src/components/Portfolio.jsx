import React from 'react'
import { motion } from 'framer-motion'

const cases = Array.from({ length: 6 }).map((_, i) => ({ id: i + 1 }))

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative py-28 bg-black text-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Portfolio</h2>
        <p className="mt-3 text-white/70 max-w-2xl">Cinematic case studies with depth, motion, and atmosphere.</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <motion.div key={c.id} whileHover={{ scale: 1.02 }} className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 grid place-items-center text-white/70">Case #{c.id}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
