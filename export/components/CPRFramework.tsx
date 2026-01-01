import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FileText, Target, BarChart3, ArrowRight } from 'lucide-react'

export function CPRFramework() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const steps = [
    {
      icon: FileText,
      title: 'Context',
      description: 'Define your situation clearly',
      details: 'Understand where you are and what factors influence your goals',
    },
    {
      icon: Target,
      title: 'Purpose',
      description: 'Align actions with outcomes',
      details: 'Connect your daily activities to meaningful, measurable objectives',
    },
    {
      icon: BarChart3,
      title: 'Results',
      description: 'Track and prove progress systematically',
      details: 'Build momentum through data-driven insights and accountability',
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
            The CPR Framework
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Context → Purpose → Results
          </p>
          <p className="text-lg text-gray-500 mt-4 max-w-3xl mx-auto">
            Evolution from GrowDis/G.A.S. frameworks into sophisticated, integrated methodology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-navy to-navy-800 text-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <step.icon className="w-16 h-16 text-gold mb-4" />
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-200 text-lg mb-4">{step.description}</p>
                <p className="text-gray-300 text-sm">{step.details}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-gold" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
