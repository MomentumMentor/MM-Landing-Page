import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const steps = [
    {
      emoji: '💡',
      number: '01',
      title: 'DEFINE',
      description: 'Set strategic goals with CPR',
    },
    {
      emoji: '⚡',
      number: '02',
      title: 'EXECUTE',
      description: 'Use S.T.O.P.S. for daily priorities',
    },
    {
      emoji: '📈',
      number: '03',
      title: 'PROVE',
      description: 'Track analytics & sustain momentum',
    },
  ]

  return (
    <section id="how-it-works" ref={ref} className="py-16 sm:py-20 bg-gradient-to-br from-[#1e40af] via-[#1e3a8a] to-[#172554]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Three Steps to Momentum
          </h2>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
            A proven methodology for transforming aspirations into achievements
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#F2B81C] via-[#14B8A6] to-[#F2B81C] transform -translate-y-1/2 opacity-50" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="relative group"
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-[0_0_30px_rgba(242,184,28,0.4)] hover:shadow-[0_0_40px_rgba(242,184,28,0.6)] transition-all duration-300 border-4 border-[#F2B81C]">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-[#F2B81C] to-[#D9A419] w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-bold text-[#0D1B3F] text-lg sm:text-xl shadow-lg ring-4 ring-white">
                    {step.number}
                  </div>

                  <div className="mt-6 sm:mt-8 text-center">
                    <div className="text-4xl sm:text-5xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      {step.emoji}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0D1B3F] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
