import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { AlertCircle, Layers, TrendingDown } from 'lucide-react'

export function ProblemStatement() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const problems = [
    {
      icon: AlertCircle,
      title: 'Planning Paralysis',
      description: 'Endless planning without progress, stuck in preparation mode',
    },
    {
      icon: Layers,
      title: 'Disconnected Tools',
      description: 'Scattered data across multiple platforms, no unified view',
    },
    {
      icon: TrendingDown,
      title: 'Lost Momentum',
      description: 'No systematic approach to building and maintaining progress',
    },
  ]

  return (
    <section id="features" ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Traditional productivity tools enable endless planning without execution
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <problem.icon className="w-12 h-12 text-gold mb-4" />
              <h3 className="text-xl font-bold text-navy mb-3">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-2xl text-navy font-semibold">There's a better way...</p>
        </motion.div>
      </div>
    </section>
  )
}
