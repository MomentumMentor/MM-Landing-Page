import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function ProductSuite() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const products = [
    {
      emoji: '🤖',
      name: 'CPR Assistant',
      description: 'AI-powered guidance',
    },
    {
      emoji: '✓',
      name: 'S.T.O.P.S.',
      description: 'Task organization & prioritization',
    },
    {
      emoji: '📈',
      name: 'PACT',
      description: 'Progress analytics & tracking',
    },
    {
      emoji: '🛣️',
      name: 'Intake Router',
      description: 'Smart routing',
    },
  ]

  return (
    <section id="products" ref={ref} className="py-16 sm:py-20 bg-gradient-to-br from-[#1e40af] via-[#1e3a8a] to-[#172554]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Integrated Tools for Sustained Momentum
          </h2>
          <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto">
            A complete suite of productivity tools designed to work together seamlessly
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group"
            >
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl sm:rounded-3xl border-4 border-[#F2B81C] shadow-[0_0_30px_rgba(242,184,28,0.4)] hover:shadow-[0_0_40px_rgba(242,184,28,0.6)] transition-all duration-300 h-full flex flex-col items-center text-center">
                <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
                  {product.emoji}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0D1B3F] mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
