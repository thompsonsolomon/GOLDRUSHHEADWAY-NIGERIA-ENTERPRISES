'use client';

import { motion } from 'framer-motion'
import { ArrowRight, Building2, Wrench, Leaf, Hammer, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: Building2,
    title: 'Building Construction (Government & Public)',
    description:
      'Specialized in government and public sector construction projects with strict adherence to specifications and timelines.',
    features: [
      'Institutional buildings and offices',
      'Healthcare facilities',
      'Educational infrastructure',
      'Public infrastructure projects',
      'Government compliance expertise',
    ],
  },
  {
    icon: Building2,
    title: 'Private Building Construction',
    description:
      'Comprehensive private construction services tailored to individual and corporate specifications.',
    features: [
      'Residential developments',
      'Commercial buildings',
      'Industrial facilities',
      'Mixed-use properties',
      'Custom architectural solutions',
    ],
  },
  {
    icon: Leaf,
    title: 'Complete Landscaping',
    description:
      'Professional landscaping and site development services to enhance aesthetics and functionality.',
    features: [
      'Site preparation and clearing',
      'Landscape design and implementation',
      'Green space development',
      'Drainage and water management',
      'Environmental compliance',
    ],
  },
  {
    icon: Hammer,
    title: 'General Contracting',
    description:
      'Full-service general contracting with expert project management and comprehensive oversight.',
    features: [
      'Project management',
      'Procurement services',
      'Budget optimization',
      'Quality control',
      'Completion guarantees',
    ],
  },
]

function Services() {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-primary mb-6">Our Services</h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Comprehensive construction and materials solutions for government, public, and private sector clients
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="space-y-16"
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
                  variants={itemVariants}
                  className="bg-card border border-border rounded-lg p-8 hover:border-accent hover:shadow-lg transition-all"
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Icon and Title */}
                    <div className="lg:w-1/3">
                      <div className="inline-block p-4 bg-accent/10 rounded-lg mb-4">
                        <Icon className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                      <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                    </div>

                    {/* Features */}
                    <div className="lg:w-2/3">
                      <h4 className="font-bold text-primary mb-4">Key Features</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, fIndex) => (
                          <motion.li
                            key={fIndex}
                            className="flex items-center gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: fIndex * 0.1 }}
                          >
                            <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                            <span className="text-foreground/80">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-primary text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Process
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { step: 1, title: 'Consultation', description: 'Understand your project requirements' },
              { step: 2, title: 'Planning', description: 'Develop comprehensive project plans' },
              { step: 3, title: 'Execution', description: 'Professional implementation with oversight' },
              { step: 4, title: 'Delivery', description: 'Quality assurance and project completion' },
            ].map((item) => (
              <motion.div
                key={item.step}
                variants={itemVariants}
                className="relative bg-card border border-border rounded-lg p-6 text-center"
              >
                <motion.div
                  className="text-5xl font-bold text-accent/20 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  {item.step}
                </motion.div>
                <h4 className="font-bold text-primary mb-2">{item.title}</h4>
                <p className="text-sm text-foreground/70">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold">
              Interested in Our Services?
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Contact us today to discuss your project and get a personalized quote from our expert team.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent text-accent-foreground px-8 py-3 rounded font-semibold hover:bg-accent/90 transition-colors inline-flex items-center gap-2 group"
              >
                Request a Quote
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services
