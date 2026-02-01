'use client'

import { motion } from 'framer-motion'
import { Copy, Check } from 'lucide-react'
import { useState } from 'react'

export default function PaymentPage() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const bankDetails = [
    {
      bank: 'First Bank Nigeria',
      accountName: 'GOLDRUSHHEADWAY HEADWAY NIGERIA ENTERPRISES',
      accountNumber: '1234567890',
      sortCode: '011',
    },
    {
      bank: 'Guaranty Trust Bank',
      accountName: 'GOLDRUSHHEADWAY HEADWAY NIGERIA ENTERPRISES',
      accountNumber: '0987654321',
      sortCode: '058',
    },
    {
      bank: 'Access Bank Nigeria',
      accountName: 'GOLDRUSHHEADWAY HEADWAY NIGERIA ENTERPRISES',
      accountNumber: '1122334455',
      sortCode: '044',
    },
  ]

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
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
            <h1 className="text-5xl sm:text-6xl font-bold text-primary mb-6">Payment Details</h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Clear and transparent payment information for your peace of mind
            </p>
          </motion.div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-primary text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Bank Accounts
          </motion.h2>

          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {bankDetails.map((detail, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-all"
              >
                <h3 className="text-2xl font-bold text-accent mb-6">{detail.bank}</h3>

                <div className="space-y-4">
                  {/* Account Name */}
                  <div>
                    <p className="text-sm text-foreground/60 mb-2 font-semibold">ACCOUNT NAME</p>
                    <div className="flex items-center justify-between bg-secondary rounded p-4">
                      <code className="font-mono text-foreground">{detail.accountName}</code>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => copyToClipboard(detail.accountName, index * 3)}
                        className="ml-2 p-2 hover:bg-border rounded transition-colors"
                      >
                        {copiedIndex === index * 3 ? (
                          <Check size={20} className="text-accent" />
                        ) : (
                          <Copy size={20} className="text-foreground/60" />
                        )}
                      </motion.button>
                    </div>
                  </div>

                  {/* Account Number */}
                  <div>
                    <p className="text-sm text-foreground/60 mb-2 font-semibold">ACCOUNT NUMBER</p>
                    <div className="flex items-center justify-between bg-secondary rounded p-4">
                      <code className="font-mono text-lg font-bold text-foreground">
                        {detail.accountNumber}
                      </code>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => copyToClipboard(detail.accountNumber, index * 3 + 1)}
                        className="ml-2 p-2 hover:bg-border rounded transition-colors"
                      >
                        {copiedIndex === index * 3 + 1 ? (
                          <Check size={20} className="text-accent" />
                        ) : (
                          <Copy size={20} className="text-foreground/60" />
                        )}
                      </motion.button>
                    </div>
                  </div>

                  {/* Sort Code */}
                  <div>
                    <p className="text-sm text-foreground/60 mb-2 font-semibold">SORT CODE</p>
                    <div className="flex items-center justify-between bg-secondary rounded p-4">
                      <code className="font-mono text-foreground">{detail.sortCode}</code>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => copyToClipboard(detail.sortCode, index * 3 + 2)}
                        className="ml-2 p-2 hover:bg-border rounded transition-colors"
                      >
                        {copiedIndex === index * 3 + 2 ? (
                          <Check size={20} className="text-accent" />
                        ) : (
                          <Copy size={20} className="text-foreground/60" />
                        )}
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Payment Terms */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-primary text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Payment Terms
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* 50% Before */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-card border-2 border-accent rounded-lg p-8 text-center"
            >
              <motion.div
                className="text-5xl font-bold text-accent mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                50%
              </motion.div>
              <h3 className="text-2xl font-bold text-primary mb-4">Payment Before Work Starts</h3>
              <p className="text-foreground/70 leading-relaxed">
                Advance payment of 50% to secure materials, mobilize equipment, and begin project preparations.
              </p>
            </motion.div>

            {/* 50% After */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-card border-2 border-accent rounded-lg p-8 text-center"
            >
              <motion.div
                className="text-5xl font-bold text-accent mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
              >
                50%
              </motion.div>
              <h3 className="text-2xl font-bold text-primary mb-4">Payment After Work Completion</h3>
              <p className="text-foreground/70 leading-relaxed">
                Final payment upon project completion and satisfactory delivery of all work to specifications.
              </p>
            </motion.div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="mt-12 bg-accent/10 border border-accent rounded-lg p-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-bold text-primary mb-4 text-lg">Important Information</h4>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">•</span>
                <span>Invoices will be provided for all payments</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">•</span>
                <span>Payment schedule can be negotiated for large projects</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">•</span>
                <span>Bank transfers are the preferred payment method</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">•</span>
                <span>Payment confirmation required before project commencement</span>
              </li>
            </ul>
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
            <h2 className="text-4xl font-bold">Questions About Payment?</h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Contact our finance team for clarification on payment terms, schedules, or arrangements.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-accent-foreground px-8 py-3 rounded font-semibold hover:bg-accent/90 transition-colors"
            >
              Contact Finance Team
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
