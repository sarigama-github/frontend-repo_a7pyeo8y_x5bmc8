import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id="contact" className="relative py-28 bg-black text-white">
      <div className="relative max-w-3xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center">Contact / Hire Us</h2>
        <p className="mt-3 text-white/70 text-center">Tell us what you want to unlock. We’ll design the key.</p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-md shadow-2xl"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="text-sm text-white/70">Name</label>
              <input type="text" className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-400/40 transition" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm text-white/70">Email</label>
              <input type="email" className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400/40 transition" placeholder="you@company.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-white/70">Project</label>
              <textarea rows="5" className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400/40 transition" placeholder="Describe your challenge"></textarea>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <button type="submit" className="group relative inline-flex items-center gap-3 rounded-full px-6 py-3 bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white shadow-[0_8px_40px_rgba(139,92,246,0.35)]">
              <span className="relative z-10">Send Request</span>
              <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
