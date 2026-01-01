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
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Built for Execution, Not Endless Planning
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <CheckCircle2 className="w-6 h-6 text-teal flex-shrink-0" />
                  <span className="text-lg text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-navy to-navy-800 p-12 rounded-2xl shadow-2xl text-white"
          >
            <blockquote className="space-y-6">
              <p className="text-2xl font-semibold italic">
                "The evolution beyond traditional productivity tools"
              </p>
              <p className="text-lg text-gray-300">
                Momentum Mentor transforms how you approach goals by integrating strategic
                planning with systematic execution and comprehensive analytics.
              </p>
              <div className="pt-4 border-t border-white/20">
                <p className="text-gold font-semibold">Premium Productivity Platform</p>
              </div>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
