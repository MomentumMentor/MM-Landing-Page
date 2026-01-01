import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Bot, ListChecks, LineChart, Route } from 'lucide-react'

export function ProductSuite() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const products = [
    {
      icon: Bot,
      name: 'CPR Assistant',
      description: 'AI-powered framework guidance for strategic goal setting',
    },
    {
      icon: ListChecks,
      name: 'S.T.O.P.S.',
      description: 'Strategic Task Organization & Prioritization System',
    },
    {
      icon: LineChart,
      name: 'PACT',
      description: 'Progress Analytics & Commitment Tracking dashboard',
    },
    {
      icon: Route,
      name: 'Intake Router',
      description: 'Smart task categorization and intelligent routing',
    },
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
            Integrated Tools for Sustained Momentum
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-navy to-navy-700 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <product.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
