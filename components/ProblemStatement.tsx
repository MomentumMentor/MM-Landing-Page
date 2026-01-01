import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function ProblemStatement() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const problems = [
    {
      emoji: '⚠️',
      title: 'Planning Paralysis',
      description: 'Endless planning without progress, stuck in preparation mode',
    },
    {
      emoji: '📚',
      title: 'Disconnected Tools',
      description: 'Scattered data across platforms, no unified view',
    },
    {
      emoji: '📉',
      title: 'Lost Momentum',
      description: 'No systematic approach to execution',
    },
  ]

  return (
    <section id="problem" ref={ref} className="py-16 sm:py-20 bg-gradient-to-br from-[#1e40af] via-[#1e3a8a] to-[#172554]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Traditional productivity tools enable endless planning without execution
          </h2>
          <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto mt-4">
            Break free from the cycle of preparation without progress
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {problems.map((problem, index) => (
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
                  {problem.emoji}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0D1B3F] mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-xl sm:text-2xl text-white font-bold">There's a better way...</p>
        </motion.div>
      </div>
    </section>
  )
}
