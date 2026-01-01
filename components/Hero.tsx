import { motion } from 'framer-motion'
import { StarBackground } from './StarBackground'

export function Hero() {
  const scrollToSignup = () => {
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f1729] via-[#1a2744] to-[#0f1729] text-white overflow-hidden">
      <StarBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#D4A017] opacity-40 blur-[120px] rounded-full" />
              <div className="relative bg-white rounded-full p-8 sm:p-12 lg:p-16 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex items-center justify-center shadow-2xl">
                <img
                  src="/MMLOGO.png"
                  alt="Momentum Mentor"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-white">ACCELERATE</span>
              <span className="block text-[#D4A017] mt-2">YOUR FUTURE</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Expert mentorship for professional growth.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToSignup}
              className="bg-[#D4A017] text-[#0f1729] px-8 sm:px-12 py-4 sm:py-5 rounded-full font-bold text-lg sm:text-xl hover:bg-[#F4B83C] transition-all duration-300 shadow-[0_0_30px_rgba(212,160,23,0.5)] hover:shadow-[0_0_50px_rgba(212,160,23,0.8)] uppercase tracking-wider"
              aria-label="Get started with Momentum Mentor"
            >
              GET STARTED
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center"
        >
          <p className="text-white text-2xl sm:text-3xl md:text-4xl font-light tracking-[0.3em] uppercase">
            MOMENTUM MENTOR
          </p>
        </motion.div>
      </div>
    </section>
  )
}
