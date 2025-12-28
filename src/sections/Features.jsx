import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import GlassCard from '../components/GlassCard'

const Features = () => {
  const mainFeatures = [
    { icon: "🎬", title: "Overlay Transition", count: "1250+" },
    { icon: "🌈", title: "Premium Motion Background", count: "100+" },
    { icon: "🎥", title: "Motion Background (Standar)", count: "280+" },
    { icon: "🔊", title: "SFX Sound Effect", count: "300+" },
    { icon: "🎵", title: "Sound Effects", count: "700+" },
    { icon: "🟢", title: "Green Screen Animation", count: "300+" },
    { icon: "📱", title: "Icon Instagram Highlights", count: "100+" },
    { icon: "📸", title: "Presets Photo", count: "100+" },
    { icon: "🎨", title: "LUTs Video", count: "100+" },
  ]

  const bonusFeatures = [
    { icon: "✨", title: "Premium Grades" },
    { icon: "🎞️", title: "Film LUTs" },
    { icon: "📐", title: "Grid Background" },
    { icon: "😀", title: "Emojis" },
    { icon: "🎭", title: "GIFs" },
    { icon: "👋", title: "Hand Animation" },
    { icon: "🧑", title: "Character Animation" },
    { icon: "⭐", title: "Animation Icon" },
    { icon: "�", title: "Paper Transition" },
    { icon: "🎲", title: "3D Icon" },
    { icon: "�", title: "Social Media Animation" },
    { icon: "➡️", title: "Arrow Animation" },
    { icon: "�", title: "Intro & Outro" },
    { icon: "🖼️", title: "PNG Animation" },
    { icon: "🎁", title: "And Much More!" },
  ]

  return (
    <SectionWrapper id="features" className="relative">
      <div className="text-center mb-12 sm:mb-14 md:mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block text-primary text-sm sm:text-base font-medium mb-4 sm:mb-5"
        >
          📦 ISI PAKET LENGKAP
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5"
        >
          Apa Aja Yang
          <br className="hidden sm:block" />
          <span className="gradient-text"> Kamu Dapetin?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto"
        >
          Koleksi lengkap asset video editing premium yang sudah dikurasi 
          dan diorganisir rapi untuk memudahkan workflow kamu.
        </motion.p>
      </div>

      {/* Main Features with Count */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8 sm:mb-10"
      >
        {mainFeatures.map((feature, index) => (
          <GlassCard key={index} delay={index * 0.05} className="group">
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                {feature.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm sm:text-base md:text-lg">{feature.title}</h3>
                <span className="text-primary font-bold text-lg sm:text-xl">{feature.count}</span>
              </div>
            </div>
          </GlassCard>
        ))}
      </motion.div>

      {/* Bonus Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-6 sm:p-8 mb-8 sm:mb-10"
      >
        <h3 className="text-lg sm:text-xl font-bold text-center mb-5 sm:mb-6">
          <span className="gradient-text">+ Bonus Lainnya</span>
        </h3>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {bonusFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full transition-colors"
            >
              <span className="text-lg sm:text-xl">{feature.icon}</span>
              <span className="text-xs sm:text-sm font-medium">{feature.title}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Exclusive Bonus */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center"
      >
        <div className="glass-card inline-block px-6 sm:px-10 py-5 sm:py-6 border-2 border-accent/50">
          <div className="flex items-center gap-2 justify-center mb-2">
            <span className="text-2xl">🎁</span>
            <span className="bg-accent/20 text-accent text-xs sm:text-sm font-bold px-3 py-1 rounded-full">
              BONUS EKSKLUSIF
            </span>
          </div>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold">
            <span className="gradient-text">17.000+</span> Bahan Video Konten Aesthetic
          </p>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}

export default Features
