'use client';

import { motion } from 'framer-motion'
import { Package, Truck, Shield, DollarSign } from 'lucide-react'

const materials = [
  { name: 'Blocks', icon: '🧱' },
  { name: 'Cement', icon: '⚙️' },
  { name: 'Rings', icon: '⭕' },
  { name: 'Interlock Bricks', icon: '🔳' },
  { name: 'Aluminium Roofing Sheets', icon: '🏠' },
  { name: 'Steel Reinforcement', icon: '📐' },
  { name: 'Sand & Gravel', icon: '🏜️' },
  { name: 'Aggregate', icon: '💎' },
]

const benefits = [
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: 'All materials meet industry standards and quality specifications.',
  },
  {
    icon: Truck,
    title: 'Reliable Delivery',
    description: 'Prompt delivery of materials to your project site.',
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    description: 'Best prices without compromising on quality.',
  },
  {
    icon: Package,
    title: 'Bulk Supply',
    description: 'Large quantities available for major projects.',
  },
]

function Materials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
            <h1 className="text-5xl sm:text-6xl font-bold text-primary mb-6">Building Materials Supply</h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Premium quality building materials for all your construction needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            className="text-lg text-foreground/70 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            We provide a comprehensive range of high-quality building materials to support construction projects of all sizes. Our materials are sourced from trusted suppliers and adhere to international quality standards.
          </motion.p>
        </div>
      </section>

      {/* Materials Grid */}
      <section className="py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-primary text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Materials
          </motion.h2>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {materials.map((material, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.05 }}
                className="bg-card border border-border rounded-lg p-8 text-center hover:border-accent hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {material.icon}
                </div>
                <h3 className="font-bold text-primary text-lg">{material.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-primary text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Our Materials
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="bg-card border border-border rounded-lg p-8 text-center hover:border-accent transition-all"
                >
                  <div className="inline-block p-3 bg-accent/10 rounded-lg mb-4">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-bold text-primary mb-3">{benefit.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{benefit.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-primary text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Quality Standards
          </motion.h2>

          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { title: 'International Compliance', desc: 'All materials comply with international quality standards and certifications.' },
              { title: 'Rigorous Testing', desc: 'Each batch undergoes comprehensive quality testing before delivery.' },
              { title: 'Certified Suppliers', desc: 'Materials sourced from certified and trusted suppliers.' },
              { title: 'Full Documentation', desc: 'Complete documentation and certificates provided with all orders.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-card border border-border rounded-lg p-6 flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-accent/20">
                    <span className="text-accent font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.desc}</p>
                </div>
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
            <h2 className="text-4xl font-bold">Need Quality Building Materials?</h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Contact us for bulk orders, quotes, and delivery information.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-accent-foreground px-8 py-3 rounded font-semibold hover:bg-accent/90 transition-colors"
            >
              Request Materials Quote
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Materials
