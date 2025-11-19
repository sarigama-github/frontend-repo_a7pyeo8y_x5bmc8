import React from 'react'
import { motion } from 'framer-motion'

const TimelineItem = ({ year, title, text }) => (
  <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.6 }}
    className="relative pl-8 border-l border-white/10"
  >
    <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-gradient-to-br from-fuchsia-400 to-cyan-400 shadow-[0_0_30px_rgba(99,102,241,0.7)]" />
    <div className="text-sm text-white/60">{year}</div>
    <div className="mt-1 text-lg text-white font-medium">{title}</div>
    <div className="mt-1 text-white/70">{text}</div>
  </motion.div>
)

const About = () => {
  return (
    <section id="about" className="relative py-28 bg-gradient-to-b from-black to-slate-950 text-white overflow-hidden">
      {/* Hologram silhouettes */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">About CHAVIDE</h2>
        <p className="mt-3 text-white/70 max-w-2xl">Human-centered innovation studio blending design, AI and engineering into cinematic, high-trust brand experiences.</p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <TimelineItem year="2019" title="Origins" text="Crafted the first brand experiences powered by intelligent motion and precision storytelling." />
            <TimelineItem year="2021" title="Intelligence" text="Expanded into AI-driven systems, delivering automation and decision tools for premium brands." />
            <TimelineItem year="2024" title="Ecosystem" text="Launched CHAVIDE ecosystem: PRIMYTE, ERSPECT, KYNDỆT — technology, analysis, and impact." />
          </div>

          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-fuchsia-500/10 to-cyan-400/10" />
            <div className="relative">
              <div className="grid grid-cols-3 gap-6">
                {['Design', 'AI', 'Engineering', 'Security', 'Automation', 'Identity'].map((k) => (
                  <motion.div key={k} whileHover={{ y: -6 }} className="aspect-square rounded-2xl bg-black/30 border border-white/10 backdrop-blur-md flex items-center justify-center text-white/80">
                    <span className="text-sm">{k}</span>
                  </motion.div>
                ))}
              </div>
              <p className="mt-6 text-white/70">Interactive hologram-like modules represent our blended disciplines — depth, clarity, and control.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
