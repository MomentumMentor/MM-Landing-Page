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

  const baseClasses = 'px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300'
  const variantClasses =
    variant === 'primary'
      ? 'bg-navy text-white hover:bg-navy-600 shadow-lg hover:shadow-xl'
      : 'bg-gold text-navy hover:bg-gold-600 shadow-lg hover:shadow-xl'

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleSignIn}
      disabled={loading}
      className={`${baseClasses} ${variantClasses} ${className} disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {loading ? 'Signing in...' : 'Join Beta'}
    </motion.button>
  )
}
