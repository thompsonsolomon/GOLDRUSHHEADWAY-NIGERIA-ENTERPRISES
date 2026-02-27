'use client';

import { motion } from 'framer-motion'
import { Award, Users, Zap } from 'lucide-react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../components/Helpers/firebase';
import { collection, getDocs } from 'firebase/firestore';

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

  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    try {
      const snapshot = await getDocs(collection(db, "goldrushTeam"))
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setServices(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  console.log(services);



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



          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          >
            {services?.map((member, index) => (
              <motion.div
                key={member.id || index}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl 
                 transition-all duration-300 p-6 text-center border"
              >
                {/* Avatar */}
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <img
                    src={member.images?.[0] || "/placeholder-avatar.png"}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full border-4 border-gray-100 shadow-sm"
                  />
                </div>
                {/* Name */}

                <div className="flex flex-col gap-4">
                  <div className="flex gap-4">
                    <label className='text-lg font-bold'>Name:</label>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {member.name}
                    </h3>
                  </div>

                  {/* Role */}

                  <div className="flex gap-4">
                    <label className='text-lg font-bold'>Role:</label>
                    <p className="text-m text-gray-500 mt-1">
                      {member.role}
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <label className='text-lg font-bold'>Contact:</label>
                    {member.contact && (
                      <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                        {member.contact}
                      </p>
                    )}
                  </div>


                  <div className="flex gap-4">
                    <label className='text-lg font-bold'>Description:</label>
                    {/* Description */}
                    {member.description && (
                      <p className="text-sm text-gray-600 mt-1 leading-relaxed line-clamp-3">
                        {member.description}
                      </p>
                    )}
                  </div>






                  {/* Description */}



                </div>
                {/* Contact Section */}
                {member.contact && (
                  <div className="mt-4">
                    {member.contact.includes("@") ? (
                      <a
                        href={`mailto:${member.contact}`}
                        className="inline-block text-sm bg-black text-white 
                         px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                      >
                        Contact
                      </a>
                    ) :

                      (
                        <a
                          href={`tel:${member.contact}`}
                          className="inline-block w-full text-sm bg-[#D4AF37] text-white 
                         px-4 py-2 rounded-lg  transition"
                        >
                          Call
                        </a>
                      )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
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
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent text-accent-foreground px-8 py-3 rounded font-semibold hover:bg-accent/90 transition-colors"
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
