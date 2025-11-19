import React from 'react'
import { motion } from 'framer-motion'
import { Gem, Zap, Lock, BadgeCheck } from 'lucide-react'

const badges = [
  { icon: Gem, title: 'Premium Craft', text: 'Cinematic level detail and polish.' },
  { icon: Zap, title: 'Speed & Clarity', text: 'Decision velocity with intelligent systems.' },
  { icon: Lock, title: 'Enterprise-Grade', text: 'Security-first architectures.' },
  { icon: BadgeCheck, title: 'Proof via Work', text: 'Trust earned through outcomes.' },
]

const WhyChoose = () => {
  return (
    <section id="why" className="relative py-24 bg-gradient-to-b from-slate-950 to-black text-white">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Why Choose CHAVIDE</h2>
        <p className="mt-3 text-white/70 max-w-2xl">Designed to unlock impossibilities with precision and elegance.</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map(({ icon: Icon, title, text }) => (
            <motion.div key={title} whileHover={{ y: -6 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/20 border border-white/10 flex items-center justify-center mb-4">
                <Icon className="h-6 w-6 text-cyan-200" />
              </div>
              <div className="text-lg font-medium">{title}</div>
              <div className="mt-2 text-white/70 text-sm">{text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
