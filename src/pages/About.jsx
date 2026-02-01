'use client';

import { motion } from 'framer-motion'
import { Award, Users, Zap } from 'lucide-react'

function About() {
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
            <h1 className="text-5xl sm:text-6xl font-bold text-primary mb-6">About Us</h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Dedicated to delivering exceptional construction services and quality materials for over a decade.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-primary mb-6">
              Our Story
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-foreground/70 mb-4 leading-relaxed"
            >
              GOLDRUSHHEADWAY HEADWAY NIGERIA ENTERPRISES was founded with a clear mission: to provide professional construction services and reliable building materials supply to government, public sector, and private clients across Nigeria.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-lg text-foreground/70 mb-4 leading-relaxed"
            >
              Over the past 15 years, we have built a reputation for excellence, reliability, and professionalism. Our team has successfully completed over 500 projects, ranging from government infrastructure to private residential and commercial developments.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-lg text-foreground/70 leading-relaxed"
            >
              We believe in the power of quality workmanship, transparent communication, and timely delivery. Every project we undertake is a reflection of our commitment to building trust with our clients and contributing to the development of Nigeria's built environment.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-primary text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Core Values
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Quality */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-all"
            >
              <Award className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-3">Quality</h3>
              <p className="text-foreground/70">
                We maintain the highest standards in materials, workmanship, and project execution to ensure lasting value.
              </p>
            </motion.div>

            {/* Professionalism */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-all"
            >
              <Users className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-3">Professionalism</h3>
              <p className="text-foreground/70">
                Our expert team brings years of experience, dedication, and integrity to every project we undertake.
              </p>
            </motion.div>

            {/* Reliability */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-all"
            >
              <Zap className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-3">Reliability</h3>
              <p className="text-foreground/70">
                We deliver on our commitments, meet deadlines, and provide consistent support throughout all project phases.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-primary mb-6">Our Team</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-12">
              We are a diverse team of engineers, project managers, supervisors, and skilled tradespeople united by a passion for building excellence.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {['Leadership', 'Engineering', 'Project Management', 'Construction', 'Quality Assurance', 'Client Support'].map(
              (role, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-card border border-border rounded-lg p-6 text-center hover:border-accent transition-all"
                >
                  <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent">◉</span>
                  </div>
                  <h3 className="text-lg font-bold text-primary">{role}</h3>
                  <p className="text-sm text-foreground/70 mt-2">Expert professionals ensuring project success</p>
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Partner With Us</h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Ready to work with a trusted partner for your construction and materials supply needs?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-accent-foreground px-8 py-3 rounded font-semibold hover:bg-accent/90 transition-colors"
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
