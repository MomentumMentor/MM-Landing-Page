import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { AuthButton } from './AuthButton'

export function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="cta" ref={ref} className="py-16 sm:py-20 bg-gradient-to-br from-[#1e40af] via-[#1e3a8a] to-[#172554]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl border-4 border-[#F2B81C] p-8 sm:p-12 lg:p-16 shadow-[0_0_40px_rgba(242,184,28,0.5)] hover:shadow-[0_0_60px_rgba(242,184,28,0.7)] transition-all duration-300 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-[#0D1B3F]">
            Ready to Transform Planning into Progress?
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            Join professionals who have stopped planning and started proving their impact
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6 sm:mb-8"
          >
            <AuthButton variant="primary" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm text-gray-600"
          >
            <span className="font-semibold">Invite-only beta</span>
            <span className="hidden sm:inline text-[#F2B81C]">•</span>
            <span className="font-semibold">Premium productivity platform</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
