'use client';

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react'

function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">
              GOLDRUSHHEADWAY<span className="text-accent">.</span>
            </h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Quality Construction & Reliable Building Materials Supply
            </p>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/services"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Building Construction
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Landscaping
                </Link>
              </li>
              <li>
                <Link
                  to="/materials"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Materials Supply
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                <a
                  href="tel:+234-XXX-XXXX"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  +234 XXX XXXX
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <a
                  href="mailto:info@grh.ng"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  info@grh.ng
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-accent" />
                <span className="text-primary-foreground/80">Lagos, Nigeria</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/70">
              &copy; {new Date().getFullYear()} GOLDRUSHHEADWAY NIGERIA ENTERPRISES.
              All rights reserved.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
