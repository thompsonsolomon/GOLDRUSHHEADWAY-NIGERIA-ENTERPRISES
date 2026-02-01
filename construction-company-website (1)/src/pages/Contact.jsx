'use client';

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react'
import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 3000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
            <h1 className="text-5xl sm:text-6xl font-bold text-primary mb-6">Get in Touch</h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              We'd love to hear from you. Reach out with any questions or to discuss your project needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Phone */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-card border border-border rounded-lg p-8 text-center hover:border-accent transition-all"
            >
              <div className="inline-block p-4 bg-accent/10 rounded-lg mb-4">
                <Phone className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Phone</h3>
              <p className="text-foreground/70 mb-4">Call us during business hours</p>
              <a
                href="tel:+234-XXX-XXXX"
                className="text-accent font-semibold hover:text-accent/80 transition-colors"
              >
                +234 XXX XXXX
              </a>
            </motion.div>

            {/* Email */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-card border border-border rounded-lg p-8 text-center hover:border-accent transition-all"
            >
              <div className="inline-block p-4 bg-accent/10 rounded-lg mb-4">
                <Mail className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Email</h3>
              <p className="text-foreground/70 mb-4">Send us an email anytime</p>
              <a
                href="mailto:info@grh.ng"
                className="text-accent font-semibold hover:text-accent/80 transition-colors"
              >
                info@grh.ng
              </a>
            </motion.div>

            {/* Location */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-card border border-border rounded-lg p-8 text-center hover:border-accent transition-all"
            >
              <div className="inline-block p-4 bg-accent/10 rounded-lg mb-4">
                <MapPin className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Location</h3>
              <p className="text-foreground/70">
                Lagos, Nigeria
              </p>
            </motion.div>
          </motion.div>

          {/* WhatsApp CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="https://wa.me/234XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded font-semibold hover:bg-green-700 transition-colors"
            >
              <MessageSquare size={20} />
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-primary text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Send us a Message
          </motion.h2>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              {/* Name */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-primary mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors text-foreground"
                  placeholder="Your name"
                />
              </motion.div>

              {/* Email and Phone */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors text-foreground"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors text-foreground"
                    placeholder="+234 XXX XXXX"
                  />
                </div>
              </motion.div>

              {/* Subject */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-primary mb-2">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors text-foreground"
                >
                  <option value="">Select a subject</option>
                  <option value="construction">Construction Services</option>
                  <option value="materials">Materials Supply</option>
                  <option value="quote">Request a Quote</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </motion.div>

              {/* Message */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-primary mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors text-foreground resize-none"
                  placeholder="Tell us about your project..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                variants={itemVariants}
                className="flex gap-4"
              >
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-primary-foreground px-8 py-3 rounded font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2 group"
                >
                  Send Message
                  <Send className="group-hover:translate-x-1 transition-transform" size={20} />
                </motion.button>
              </motion.div>

              {/* Success Message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded"
                >
                  Thank you for your message! We'll get back to you shortly.
                </motion.div>
              )}
            </div>
          </motion.form>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-card border border-border rounded-lg p-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Office Hours</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-sm text-foreground/60 mb-2">Monday - Friday</p>
                <p className="text-lg font-semibold text-primary">8:00 AM - 5:00 PM</p>
              </div>
              <div>
                <p className="text-sm text-foreground/60 mb-2">Saturday</p>
                <p className="text-lg font-semibold text-primary">9:00 AM - 1:00 PM</p>
              </div>
              <div>
                <p className="text-sm text-foreground/60 mb-2">Sunday</p>
                <p className="text-lg font-semibold text-primary">Closed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
