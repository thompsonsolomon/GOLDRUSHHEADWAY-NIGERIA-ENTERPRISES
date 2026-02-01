'use client';

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">
            Ready to Build Something<br />
            <span className="text-accent">Extraordinary?</span>
          </h2>

          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and get a professional quote from our expert team.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent text-accent-foreground px-8 py-3 rounded font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 group"
              >
                Get Started
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <a href="tel:+234-XXX-XXXX">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                Call Us
              </motion.button>
            </a>
          </div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-primary-foreground/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div>
              <motion.div
                className="text-3xl sm:text-4xl font-bold text-accent"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                500+
              </motion.div>
              <p className="text-sm text-primary-foreground/70 mt-2">Projects Completed</p>
            </div>
            <div>
              <motion.div
                className="text-3xl sm:text-4xl font-bold text-accent"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                15+
              </motion.div>
              <p className="text-sm text-primary-foreground/70 mt-2">Years Experience</p>
            </div>
            <div>
              <motion.div
                className="text-3xl sm:text-4xl font-bold text-accent"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                100%
              </motion.div>
              <p className="text-sm text-primary-foreground/70 mt-2">Client Satisfaction</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
