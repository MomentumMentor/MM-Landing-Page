'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth, signOut, checkBetaApproval } from '../../hooks/useAuth'
import { motion } from 'framer-motion'
import { LogOut, Loader2 } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default function Dashboard() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [betaApproved, setBetaApproved] = useState<boolean | null>(null)
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    async function checkApproval() {
      if (!loading && !user) {
        router.push('/')
        return
      }

      if (user?.email) {
        const approved = await checkBetaApproval(user.email)
        setBetaApproved(approved)
        setChecking(false)
      }
    }

    checkApproval()
  }, [user, loading, router])

  const handleSignOut = async () => {
    await signOut()
    router.push('/')
  }

  if (loading || checking) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-navy to-navy-800 flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-gold animate-spin" />
      </div>
    )
  }

  if (betaApproved === false) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-navy to-navy-800 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-2xl shadow-2xl max-w-md w-full text-center"
        >
          <h1 className="text-3xl font-bold text-navy mb-4">Beta Access Required</h1>
          <p className="text-gray-600 mb-8">
            Thank you for your interest in Momentum Mentor. Our beta is currently invite-only.
            We'll notify you when access becomes available.
          </p>
          <button
            onClick={handleSignOut}
            className="bg-navy text-white px-6 py-3 rounded-lg hover:bg-navy-700 transition-colors duration-200"
          >
            Return to Home
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy to-navy-800">
      <nav className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/MMLOGO.png" alt="Momentum Mentor" className="w-10 h-10" />
            <span className="text-white font-bold text-xl">Momentum Mentor</span>
          </div>
          <button
            onClick={handleSignOut}
            className="flex items-center space-x-2 text-white hover:text-gold transition-colors duration-200"
          >
            <LogOut className="w-5 h-5" />
            <span>Sign Out</span>
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 text-white">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to Momentum Mentor, {user?.email?.split('@')[0]}!
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              You're now part of our exclusive beta. Get ready to transform planning into proven
              progress.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {['CPR Assistant', 'S.T.O.P.S.', 'PACT', 'Intake Router'].map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="bg-white/20 backdrop-blur-sm p-6 rounded-xl hover:bg-white/30 transition-all duration-300 cursor-pointer"
                >
                  <h3 className="text-xl font-bold mb-2">{tool}</h3>
                  <p className="text-sm text-gray-300">Coming soon</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
