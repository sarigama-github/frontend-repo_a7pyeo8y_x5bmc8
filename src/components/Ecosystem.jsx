import React from 'react'
import { motion } from 'framer-motion'

const orbs = [
  { name: 'PRIMYTE', text: 'AI Tools & Smart Systems', tint: 'from-cyan-400/30 to-fuchsia-500/30' },
  { name: 'ERSPECT', text: 'EA, Robot & Market Analysis', tint: 'from-fuchsia-500/30 to-indigo-400/30' },
  { name: 'KYNDỆT', text: 'Eco / Social Impact', tint: 'from-emerald-400/30 to-cyan-400/30' },
]

const Ecosystem = () => {
  return (
    <section id="ecosystem" className="relative py-28 bg-slate-950 text-white">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">CHAVIDE Ecosystem</h2>
        <p className="mt-3 text-white/70 max-w-2xl">A constellation of specialized brands orbiting one mission: unlocking access.</p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {orbs.map((o) => (
            <motion.div key={o.name} whileHover={{ y: -8 }} className="relative rounded-3xl p-8 border border-white/10 bg-white/5 overflow-hidden">
              <div className={`absolute -inset-10 rounded-full bg-gradient-to-br ${o.tint} blur-3xl`} />
              <div className="relative grid place-items-center">
                <div className="h-40 w-40 rounded-full border border-white/20 bg-black/40 shadow-[inset_0_0_60px_rgba(255,255,255,0.06),0_0_40px_rgba(255,255,255,0.06)]" />
                <div className="absolute text-xl font-medium tracking-wide">{o.name}</div>
              </div>
              <p className="relative mt-6 text-white/70 text-center">{o.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Ecosystem
