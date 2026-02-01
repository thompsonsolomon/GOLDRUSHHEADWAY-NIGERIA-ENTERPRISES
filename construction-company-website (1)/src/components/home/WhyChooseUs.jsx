'use client';

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const benefits = [
  {
    title: 'Quality Assurance',
    description: 'Premium materials and expert craftsmanship ensuring durability and excellence in every project.',
  },
  {
    title: 'Professional Team',
    description: 'Highly skilled and experienced professionals committed to project success and client satisfaction.',
  },
  {
    title: 'Timely Delivery',
    description: 'Reliable project schedules and on-time delivery without compromising on quality standards.',
  },
  {
    title: 'Government Trusted',
    description: 'Proven track record with government and public sector clients across Nigeria.',
  },
  {
    title: 'Transparent Pricing',
    description: 'Clear, competitive pricing with no hidden costs - what you see is what you pay.',
  },
  {
    title: 'Full Support',
    description: 'Comprehensive project support from planning through completion and beyond.',
  },
]

function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Why Choose Us</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Trusted partner for construction and materials supply with a commitment to excellence
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants} className="flex gap-4">
              <div className="flex-shrink-0">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200, delay: index * 0.1 }}
                >
                  <CheckCircle2 className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                </motion.div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">{benefit.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-lg text-foreground/70 mb-6">
            Ready to start your project?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-primary-foreground px-8 py-3 rounded font-semibold hover:bg-primary/90 transition-colors"
          >
            Request a Quote
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
