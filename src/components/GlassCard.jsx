import { motion } from 'framer-motion'

const GlassCard = ({ 
  children, 
  className = '', 
  hover = true,
  delay = 0,
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { 
        y: -5, 
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15)" 
      } : {}}
      className={`glass-card p-6 sm:p-7 md:p-8 transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default GlassCard
