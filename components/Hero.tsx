import { motion } from 'framer-motion'
import { AuthButton } from './AuthButton'
import { ChevronDown } from 'lucide-react'

export function Hero() {
  const scrollToNext = () => {
    document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e40af] via-[#1e3a8a] to-[#172554] text-white overflow-hidden pt-16">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/kfwt_nhbnrc2kmqpymn_y.png')] bg-cover bg-center" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/95 backdrop-blur-sm rounded-3xl border-4 border-[#F2B81C] p-8 sm:p-12 lg:p-16 shadow-[0_0_30px_rgba(242,184,28,0.4)] hover:shadow-[0_0_40px_rgba(242,184,28,0.6)] transition-all duration-300"
        >
          <div className="text-center">
            <motion.img
              src="/MMLOGO.png"
              alt="Momentum Mentor"
              className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 sm:mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            />

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-balance text-[#0D1B3F]">
              Stop Planning. Start Proving.
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 sm:mb-12 max-w-3xl mx-auto text-balance leading-relaxed">
              Transform goals into momentum through integrated analytics and systematic progress
              tracking
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <AuthButton variant="primary" />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToNext}
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg border-2 border-[#0D1B3F]/30 text-[#0D1B3F] hover:border-[#0D1B3F] hover:bg-[#0D1B3F]/5 transition-all duration-300"
                aria-label="Learn more about Momentum Mentor"
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={scrollToNext}
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-white/70" />
      </motion.button>
    </section>
  )
}
