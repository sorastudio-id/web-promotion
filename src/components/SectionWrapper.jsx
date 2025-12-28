import { motion } from 'framer-motion'

const SectionWrapper = ({ 
  children, 
  id,
  className = '',
  noPadding = false,
  ...props 
}) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`
        ${noPadding ? '' : 'py-16 sm:py-20 md:py-24 lg:py-28'}
        px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20
        ${className}
      `}
      {...props}
    >
      <div className="max-w-7xl mx-auto w-full">
        {children}
      </div>
    </motion.section>
  )
}

export default SectionWrapper
