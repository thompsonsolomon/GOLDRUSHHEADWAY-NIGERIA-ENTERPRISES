'use client';

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-background to-[#D4AF37] pt-20 flex items-center justify-center relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Accent Label */}
          <motion.div variants={itemVariants}>
            <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
              Building Excellence Since 2010
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary text-balance leading-tight"
          >
            Quality Construction &<br />
            <span className="text-accent">Reliable Materials</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto text-balance"
          >
            Professional construction services and premium building materials supply for government and public sector projects across Nigeria.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Link to="/contact">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-3 text-lg group rounded font-semibold transition-colors flex items-center justify-center gap-2">
                Get in Touch
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </Link>
            <Link to="/services">
              <button className="border-2 border-primary text-primary hover:bg-primary/5 px-4 py-3 text-lg rounded font-semibold bg-transparent transition-colors">
                Explore Services
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
