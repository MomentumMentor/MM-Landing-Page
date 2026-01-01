import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, TrendingUp, BarChart3 } from 'lucide-react'

export function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      icon: Target,
      title: 'Strategic Goal Planning',
      items: [
        'Set ambitious, measurable goals across all life areas',
        'Visual progress tracking and milestone celebration',
        'Smart recommendations based on your patterns',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Daily Momentum Building',
      items: [
        'Turn goals into daily habits and actions',
        'Track consistency and build streaks',
        'Real-time feedback on your progress',
      ],
    },
    {
      icon: BarChart3,
      title: 'Integrated Analytics',
      items: [
        'See what drives your success with data insights',
        'Connect habits to goal outcomes',
        'Optimize your approach with AI-powered suggestions',
      ],
    },
  ]

  return (
    <section id="features" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2744] mb-4">
            One Platform. Complete Control.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Momentum Mentor combines proven productivity frameworks with intelligent tracking to keep
            you on target.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-gray-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-[#D4A017]" />
                </div>

                <h3 className="text-xl font-bold text-[#1a2744] mb-4">{feature.title}</h3>

                <ul className="space-y-3">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-600 text-sm">
                      <span className="text-[#D4A017] mr-2 mt-1">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
