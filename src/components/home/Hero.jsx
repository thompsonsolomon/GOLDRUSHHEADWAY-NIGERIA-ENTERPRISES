// 'use client';

// import { Link } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import { ArrowRight } from 'lucide-react'

// function Hero() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.1,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
//   }

//   return (
   
//   )
// }

// export default Hero




import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, PhoneCall } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Img1, Landing1, Landing2 } from '../../Asset'

function Hero() {
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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // trigger animation after mount
    setIsVisible(true);
  }, []);


  return (
    // <motion.section
    //   className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden"
    //   initial={{ backgroundPosition: '0% 50%' }}
    //   animate={{ backgroundPosition: '200% 50%' }}
    //   transition={{
    //     duration: 25,
    //     repeat: Infinity,
    //     ease: 'linear',
    //   }}
    //   style={{
    //     backgroundImage:
    //       'linear-gradient(120deg, #0f172a, #D4AF37, #0f172a)',
    //     backgroundSize: '400% 400%',
    //   }}
    // >
    //   {/* Dark overlay for readability */}
    //   <div className="absolute inset-0 bg-black/30" />

    //   <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
    //     <motion.div
    //       variants={containerVariants}
    //       initial="hidden"
    //       animate="visible"
    //       className="space-y-6"
    //     >
    //       <motion.div variants={itemVariants}>
    //         <span className="inline-block bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold">
    //           Building Excellence Since 2010
    //         </span>
    //       </motion.div>

    //       <motion.h1
    //         variants={itemVariants}
    //         className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight"
    //       >
    //         Quality Construction &<br />
    //         <span className="text-yellow-400">Reliable Materials</span>
    //       </motion.h1>

    //       <motion.p
    //         variants={itemVariants}
    //         className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto"
    //       >
    //         Professional construction services and premium building materials supply
    //         for government and public sector projects across Nigeria.
    //       </motion.p>

    //       <motion.div
    //         variants={itemVariants}
    //         className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
    //       >
    //         <Link to="/contact">
    //           <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 text-lg rounded font-semibold flex items-center gap-2">
    //             Get in Touch
    //             <ArrowRight size={20} />
    //           </button>
    //         </Link>

    //         <Link to="/services">
    //           <button className="border-2 border-white text-white hover:bg-white/10 px-6 py-3 text-lg rounded font-semibold">
    //             Explore Services
    //           </button>
    //         </Link>
    //       </motion.div>
    //     </motion.div>
    //   </div>
    // </motion.section>

     <section
      id="home"
      className="relative h-[100dvh]    flex items-center justify-center overflow-hidden"
    >
      {/* Background image with zoom-in */}
      <div
        className={`absolute inset-0 bg-cover bg-center   transition-transform duration-[4000ms] ${isVisible ? "scale-100" : "scale-50"
          }`}
        style={{ backgroundImage: `url(${Landing1})` }}
      ></div>

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-[#D4AF37]/60 "></div>

      {/* Content */}
       <section className="min-h-screen pt-20 flex items-center justify-center relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Accent Label */}
          <motion.div variants={itemVariants}>
            <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
              Building Excellence Since 2010
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary text-balance leading-tight"
          >
            Quality Construction &<br />
            <span className="text-accent">Reliable Materials</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto text-balance"
          >
            Professional construction services and premium building materials supply for government and public sector projects across Nigeria.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Link to="/contact">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-3 text-lg group rounded font-semibold transition-colors flex items-center justify-center gap-2">
                Get in Touch
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </Link>
            <Link to="/services">
              <button className="border-2 border-primary text-primary hover:bg-primary/5 px-4 py-3 text-lg rounded font-semibold bg-transparent transition-colors">
                Explore Services
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>


    </section>
  )
}

export default Hero
