import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import GlassCard from '../components/GlassCard'

const Benefits = () => {
  const benefits = [
    {
      icon: "💸",
      title: "100% Multi-Platform",
      description: "CapCut, Premiere Pro, AE, DaVinci, VN, Lr, dan software editing lainnya!"
    },
    {
      icon: "⏱️",
      title: "Hemat 5 Jam/Hari",
      description: "Tidak perlu cari asset di 10 platform berbeda! Semua sudah ada dalam satu paket."
    },
    {
      icon: "📂",
      title: "File Ringan 15GB",
      description: "Terorganisir rapi dengan kategori spesifik. Mudah dicari dan langsung pakai."
    },
    {
      icon: "📱",
      title: "Bisa di HP & Laptop",
      description: "Cocok buat yang suka edit sambil rebahan. Compatible dengan mobile & desktop."
    },
    {
      icon: "🤑",
      title: "Bisa Untuk Jualan",
      description: "Aman 100% untuk jasa editing atau jual template! Lisensi komersial included."
    },
    {
      icon: "♾️",
      title: "Akses Seumur Hidup",
      description: "Bayar sekali, akses selamanya. Tidak ada biaya langganan bulanan."
    }
  ]

  return (
    <SectionWrapper id="benefits" className="relative">
      <div className="text-center mb-12 sm:mb-14 md:mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block text-success text-sm sm:text-base font-medium mb-4 sm:mb-5"
        >
          ✅ KEUNTUNGAN UNTUK KAMU
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5"
        >
          Kenapa Harus Pilih
          <br className="hidden sm:block" />
          <span className="gradient-text"> Sora Studio?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto"
        >
          Investasi sekali, manfaat selamanya. Berikut keuntungan yang akan kamu dapatkan.
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7">
        {benefits.map((benefit, index) => (
          <GlassCard key={index} delay={index * 0.1} className="text-center">
            <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mx-auto mb-4 sm:mb-5 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-3xl sm:text-4xl">
              {benefit.icon}
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">{benefit.title}</h3>
            <p className="text-text-secondary text-sm sm:text-base">{benefit.description}</p>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Benefits
