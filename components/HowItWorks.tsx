import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const steps = [
    {
      number: '01',
      title: 'Define Your Vision',
      description: 'Set clear goals across all areas of life. Choose what matters most to you.',
    },
    {
      number: '02',
      title: 'Track Your Progress',
      description: 'Monitor daily actions and weekly achievements. Build consistency through habit tracking.',
    },
    {
      number: '03',
      title: 'Optimize & Scale',
      description: 'Review analytics and identify patterns. Refine your approach, watch momentum compound.',
    },
  ]

  return (
    <section id="how-it-works" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2744] mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three simple steps to build sustainable momentum
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-[#D4A017] to-[#B88714] w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-3xl mx-auto mb-6 shadow-lg">
                {step.number}
              </div>

              <h3 className="text-2xl font-bold text-[#1a2744] mb-4">{step.title}</h3>

              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
