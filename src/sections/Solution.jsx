import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import Button from '../components/Button'

const Solution = () => {
  return (
    <SectionWrapper id="solution" className="relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative text-center max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block text-success text-sm sm:text-base font-medium mb-4 sm:mb-5"
        >
          ✨ SOLUSI YANG KAMU BUTUHKAN
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 sm:mb-7"
        >
          Perkenalkan{' '}
          <span className="gradient-text">Sora Studio</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-text-secondary mb-8 sm:mb-10 leading-relaxed"
        >
          Koleksi <span className="text-white font-semibold">9000+ asset video editing premium</span> dalam satu paket lengkap. 
          Tidak perlu lagi berlangganan bulanan atau mencari asset satu per satu. 
          Bayar sekali, akses selamanya!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="glass-card p-6 sm:p-8 md:p-10 mb-8 sm:mb-10"
        >
          <div className="grid grid-cols-3 gap-6 sm:gap-8 md:gap-10 text-center">
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-2 sm:mb-3">9000+</div>
              <div className="text-text-secondary text-sm sm:text-base md:text-lg">Asset Premium</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-2 sm:mb-3">20+</div>
              <div className="text-text-secondary text-sm sm:text-base md:text-lg">Kategori Lengkap</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-2 sm:mb-3">∞</div>
              <div className="text-text-secondary text-sm sm:text-base md:text-lg">Akses Seumur Hidup</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button href="#features" size="md" className="w-full sm:w-auto">
            Lihat Semua Asset →
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

export default Solution
