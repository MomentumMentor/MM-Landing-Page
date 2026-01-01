import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Lightbulb, Zap, TrendingUp } from 'lucide-react'

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const steps = [
    {
      icon: Lightbulb,
      number: '01',
      title: 'Define',
      description: 'Set strategic goals with CPR methodology',
      details: 'Establish clear context, purpose, and measurable results',
    },
    {
      icon: Zap,
      number: '02',
      title: 'Execute',
      description: 'Use S.T.O.P.S. for daily prioritization',
      details: 'Organize and prioritize tasks systematically',
    },
    {
      icon: TrendingUp,
      number: '03',
      title: 'Prove',
      description: 'Track analytics and build sustained momentum',
      details: 'Monitor progress and maintain accountability',
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Three Steps to Momentum
          </h2>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-gold via-teal to-gold transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white border-2 border-gold rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-gold to-gold-600 w-12 h-12 rounded-full flex items-center justify-center font-bold text-navy text-lg shadow-md">
                    {step.number}
                  </div>

                  <div className="mt-4 text-center">
                    <step.icon className="w-12 h-12 text-navy mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-navy mb-3">{step.title}</h3>
                    <p className="text-lg text-gray-700 mb-2">{step.description}</p>
                    <p className="text-sm text-gray-500">{step.details}</p>
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
