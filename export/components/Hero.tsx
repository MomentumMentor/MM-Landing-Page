import { motion } from 'framer-motion'
import { AuthButton } from './AuthButton'
import { ChevronDown } from 'lucide-react'

export function Hero() {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy via-navy-700 to-navy-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/kfwt_nhbnrc2kmqpymn_y.png')] bg-cover bg-center" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src="/MMLOGO.png"
            alt="Momentum Mentor"
            className="w-32 h-32 mx-auto mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          />

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Stop Planning. Start Proving.
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto text-balance">
            Transform goals into momentum through integrated analytics and systematic progress
            tracking
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <AuthButton variant="secondary" />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToFeatures}
              className="px-8 py-4 rounded-lg font-semibold text-lg border-2 border-white/30 hover:border-white/60 transition-all duration-300"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={scrollToFeatures}
      >
        <ChevronDown className="w-8 h-8 text-white/50" />
      </motion.div>
    </section>
  )
}
