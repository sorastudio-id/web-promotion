import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'

const Problem = () => {
  const problems = [
    {
      icon: "⏰",
      title: "Buang Waktu Cari Asset",
      description: "Menghabiskan berjam-jam mencari transisi, sound effect, dan overlay yang cocok di berbagai website."
    },
    {
      icon: "💸",
      title: "Biaya Berlangganan Mahal",
      description: "Harus bayar subscription bulanan untuk akses asset premium, padahal jarang dipakai semuanya."
    },
    {
      icon: "😤",
      title: "Hasil Video Biasa Saja",
      description: "Video terlihat amatir karena kurang elemen profesional seperti transisi halus dan color grading."
    },
    {
      icon: "📁",
      title: "File Berantakan",
      description: "Asset tersebar di banyak folder tanpa organisasi yang jelas, sulit dicari saat dibutuhkan."
    }
  ]

  return (
    <SectionWrapper id="problem" className="relative">
      <div className="text-center mb-12 sm:mb-14 md:mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block text-warning text-sm sm:text-base font-medium mb-4 sm:mb-5"
        >
          😩 MASALAH YANG SERING DIALAMI
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5"
        >
          Apakah Kamu Juga Mengalami
          <br className="hidden sm:block" />
          <span className="gradient-text-warm"> Masalah Ini?</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto"
        >
          Sebagai video editor, kamu pasti pernah merasakan frustrasi ini. 
          Waktu berharga habis untuk hal-hal yang seharusnya bisa diotomatisasi.
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 sm:gap-7 md:gap-8">
        {problems.map((problem, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-6 sm:p-7 md:p-8 border-l-4 border-warning/50 hover:border-warning transition-colors"
          >
            <div className="flex items-start gap-5 sm:gap-6">
              <div className="text-4xl sm:text-5xl flex-shrink-0">{problem.icon}</div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">{problem.title}</h3>
                <p className="text-text-secondary text-sm sm:text-base md:text-lg leading-relaxed">{problem.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-12 sm:mt-14 md:mt-16 text-center"
      >
        <p className="text-lg sm:text-xl md:text-2xl text-text-secondary">
          Tenang, <span className="text-white font-semibold">ada solusinya...</span> 👇
        </p>
      </motion.div>
    </SectionWrapper>
  )
}

export default Problem
