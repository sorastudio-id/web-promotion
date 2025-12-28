import { motion } from 'framer-motion'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  pulse = false,
  className = '',
  href,
  onClick,
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-semibold rounded-xl sm:rounded-2xl transition-all duration-300 overflow-hidden cursor-pointer"
  
  const variants = {
    primary: "bg-gradient-to-r from-primary to-primary-light text-white hover:shadow-lg hover:shadow-primary/30",
    secondary: "bg-gradient-to-r from-secondary to-cyan-400 text-white hover:shadow-lg hover:shadow-secondary/30",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "text-text-secondary hover:text-white hover:bg-white/5"
  }
  
  const sizes = {
    sm: "px-3 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm",
    md: "px-4 py-2.5 text-sm sm:px-6 sm:py-3 sm:text-base",
    lg: "px-5 py-3 text-sm sm:px-8 sm:py-4 sm:text-lg",
    xl: "px-6 py-3.5 text-base sm:px-10 sm:py-5 sm:text-xl"
  }

  const Component = href ? motion.a : motion.button

  return (
    <Component
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${sizes[size]} 
        ${pulse ? 'animate-pulse-glow' : ''} 
        ${className}
      `}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
        {children}
      </span>
      <motion.span
        className="absolute inset-0 bg-white/20"
        initial={{ x: '-100%', opacity: 0 }}
        whileHover={{ x: '100%', opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    </Component>
  )
}

export default Button
