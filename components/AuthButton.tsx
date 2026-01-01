import { useState } from 'react'
import { motion } from 'framer-motion'
import { signInWithGoogle } from '../hooks/useAuth'

interface AuthButtonProps {
  variant?: 'primary' | 'secondary'
  className?: string
}

export function AuthButton({ variant = 'primary', className = '' }: AuthButtonProps) {
  const [loading, setLoading] = useState(false)

  const handleSignIn = async () => {
    try {
      setLoading(true)
      await signInWithGoogle()
    } catch (error) {
      console.error('Error signing in:', error)
      setLoading(false)
    }
  }

  const baseClasses = 'px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-300'
  const variantClasses =
    variant === 'primary'
      ? 'bg-[#0D1B3F] text-white hover:bg-[#162949] shadow-lg hover:shadow-[0_0_30px_rgba(242,184,28,0.5)] border-2 border-transparent hover:border-[#F2B81C]'
      : 'bg-[#F2B81C] text-[#0D1B3F] hover:bg-[#D9A419] shadow-lg hover:shadow-[0_0_30px_rgba(242,184,28,0.6)] border-2 border-[#F2B81C]'

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleSignIn}
      disabled={loading}
      className={`${baseClasses} ${variantClasses} ${className} disabled:opacity-50 disabled:cursor-not-allowed`}
      aria-label="Join the Momentum Mentor beta program"
    >
      {loading ? 'Signing in...' : 'Join Beta'}
    </motion.button>
  )
}
