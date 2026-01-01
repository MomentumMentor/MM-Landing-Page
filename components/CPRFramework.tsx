import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function CPRFramework() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const steps = [
    {
      emoji: '📄',
      title: 'CONTEXT',
      description: 'Define your situation',
      details: [
        'Understand the bigger picture',
        'Identify stakeholders and scope',
        'Set clear boundaries',
      ],
    },
    {
      emoji: '🎯',
      title: 'PURPOSE',
      description: 'Align actions with outcomes',
      details: [
        'Clarify why this work matters',
        'Define clear objectives',
        'Ensure strategic alignment',
      ],
    },
    {
      emoji: '📊',
      title: 'RESULTS',
      description: 'Track and prove progress',
      details: [
        'Document achievements',
        'Measure tangible impact',
        'Build evidence of success',
      ],
    },
  ]

  return (
    <section id="cpr" ref={ref} className="py-16 sm:py-20 bg-gradient-to-br from-[#1e40af] via-[#1e3a8a] to-[#172554]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            The CPR Framework
          </h2>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
            A systematic approach to transforming goals into measurable outcomes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-4 border-[#F2B81C] shadow-[0_0_30px_rgba(242,184,28,0.4)] hover:shadow-[0_0_40px_rgba(242,184,28,0.6)] transition-all duration-300 h-full">
                <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.emoji}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[#0D1B3F]">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-base sm:text-lg mb-4 font-medium">
                  {step.description}
                </p>
                <ul className="space-y-2">
                  {step.details.map((detail, i) => (
                    <li key={i} className="text-gray-600 text-sm flex items-start">
                      <span className="mr-2 text-[#F2B81C] font-bold">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
