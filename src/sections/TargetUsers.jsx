import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import GlassCard from '../components/GlassCard'

const TargetUsers = () => {
  const users = [
    {
      icon: "🎬",
      title: "Video Editor Pemula",
      description: "Baru mulai belajar editing? Paket ini akan membantu kamu membuat video yang terlihat profesional dari hari pertama tanpa skill tinggi.",
      highlights: ["Mudah digunakan", "Tidak perlu skill desain", "Hasil langsung profesional"]
    },
    {
      icon: "📱",
      title: "Content Creator",
      description: "YouTuber, TikToker, atau Instagram creator yang ingin konten lebih menarik dan engaging tanpa menghabiskan waktu berjam-jam editing.",
      highlights: ["Template social media", "Hemat waktu produksi", "Konsisten branding"]
    },
    {
      icon: "💼",
      title: "Freelancer & Profesional",
      description: "Editor profesional yang menangani banyak project klien dan butuh library asset lengkap untuk berbagai kebutuhan.",
      highlights: ["Lisensi komersial", "Asset beragam", "ROI tinggi"]
    }
  ]

  return (
    <SectionWrapper id="target-users" className="relative">
      <div className="text-center mb-12 sm:mb-14 md:mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block text-secondary text-sm sm:text-base font-medium mb-4 sm:mb-5"
        >
          👥 COCOK UNTUK SIAPA?
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5"
        >
          Paket Ini Cocok Untuk
          <br className="hidden sm:block" />
          <span className="gradient-text"> Kamu Yang...</span>
        </motion.h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7">
        {users.map((user, index) => (
          <GlassCard key={index} delay={index * 0.15} className="h-full flex flex-col">
            <div className="text-center mb-4 sm:mb-5">
              <div className="w-18 h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-4 sm:mb-5 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-3xl sm:text-4xl md:text-5xl">
                {user.icon}
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">{user.title}</h3>
              <p className="text-text-secondary text-sm sm:text-base">{user.description}</p>
            </div>
            
            <div className="mt-auto pt-4 sm:pt-5 border-t border-white/10">
              <ul className="space-y-2 sm:space-y-3">
                {user.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-success flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-secondary">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default TargetUsers
