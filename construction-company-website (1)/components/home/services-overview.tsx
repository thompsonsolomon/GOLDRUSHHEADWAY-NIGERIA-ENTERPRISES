'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Building2, Hammer, Leaf, Wrench } from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: 'Building Construction',
    description: 'Government and public sector construction projects with premium quality and timely delivery.',
  },
  {
    icon: Wrench,
    title: 'Private Construction',
    description: 'Comprehensive private building construction services tailored to your specifications.',
  },
  {
    icon: Leaf,
    title: 'Landscaping',
    description: 'Professional landscaping and site development for enhanced aesthetics and functionality.',
  },
  {
    icon: Hammer,
    title: 'General Contracting',
    description: 'Full-service general contracting with expert project management and execution.',
  },
]

export function ServicesOverview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive solutions for all your construction and materials supply needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group bg-card border border-border rounded-lg p-6 hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4 inline-block p-3 bg-accent/10 group-hover:bg-accent/20 rounded-lg transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link
            href="/services"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded font-semibold hover:bg-accent/90 transition-colors"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
