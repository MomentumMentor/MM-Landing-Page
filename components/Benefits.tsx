import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2 } from 'lucide-react'

export function Benefits() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const benefits = [
    'Systematic progress tracking',
    'Integrated analytics dashboard',
    'Strategic goal alignment',
    'Proven momentum building',
    'Data-driven insights',
    'Accountability framework',
  ]

  return (
    <section id="benefits" ref={ref} className="py-16 sm:py-20 bg-gradient-to-br from-[#1e40af] via-[#1e3a8a] to-[#172554]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Why Momentum Mentor Works
          </h2>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
            Built on proven methodologies for sustainable productivity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-3 sm:space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="flex items-center space-x-4 bg-white/95 backdrop-blur-sm p-4 sm:p-5 rounded-xl border-2 border-[#F2B81C]/50 hover:border-[#F2B81C] shadow-lg hover:shadow-[0_0_20px_rgba(242,184,28,0.4)] transition-all duration-300"
                >
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#14B8A6] flex-shrink-0" />
                  <span className="text-base sm:text-lg text-gray-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white/95 backdrop-blur-sm p-8 sm:p-12 rounded-2xl sm:rounded-3xl border-4 border-[#F2B81C] shadow-[0_0_30px_rgba(242,184,28,0.4)] hover:shadow-[0_0_40px_rgba(242,184,28,0.6)] transition-all duration-300"
          >
            <blockquote className="space-y-4 sm:space-y-6">
              <p className="text-xl sm:text-2xl font-bold italic text-[#0D1B3F]">
                "The evolution beyond traditional productivity tools"
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Momentum Mentor transforms how you approach goals by integrating strategic
                planning with systematic execution and comprehensive analytics.
              </p>
              <div className="pt-4 border-t-2 border-[#F2B81C]">
                <p className="text-[#F2B81C] font-bold text-lg">Premium Productivity Platform</p>
              </div>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
