import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Cpu, Layers, Bot, PenTool, Globe, Shield } from 'lucide-react'

const services = [
  { icon: Sparkles, title: 'Brand Ad creation and story telling' },
  { icon: Cpu, title: 'Digital Innovation & Automation' },
  { icon: Layers, title: 'Brand Ecosystem Development' },
  { icon: Bot, title: 'AI Systems & Smart Tools' },
  { icon: PenTool, title: 'Creative Design & Identity Engineering' },
  { icon: Globe, title: 'Web & App Development' },
  { icon: Shield, title: 'Cyber Security & System Deployment' },
]

const Services = () => {
  return (
    <section id="services" className="relative py-28 bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_0%,rgba(56,189,248,0.12),transparent),radial-gradient(60%_50%_at_80%_100%,rgba(217,70,239,0.12),transparent)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Works</h2>
        <p className="mt-3 text-white/70 max-w-2xl">A modular system of services engineered for clarity, speed, and impact.</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title }) => (
            <motion.div
              key={title}
              whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-fuchsia-500/10 to-cyan-400/10" />
              <div className="relative flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.35)]">
                  <Icon className="h-6 w-6 text-fuchsia-300" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">{title}</h3>
                  <p className="mt-2 text-sm text-white/70">Soft neon edges, depth shadows, and micro-interactions invite exploration.</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
