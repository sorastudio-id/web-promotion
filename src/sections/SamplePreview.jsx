import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'

const SamplePreview = () => {
  const [activeTab, setActiveTab] = useState(0)

  const baseUrl = import.meta.env.BASE_URL

  const samples = [
    {
      id: 0,
      title: "Motion Background",
      image: `${baseUrl}sample-assets.png`,
      description: "380+ Motion Background Premium 4K"
    },
    {
      id: 1,
      title: "Green Screen",
      image: `${baseUrl}sample-greenscreen.png`,
      description: "300+ Green Screen Animation Siap Pakai"
    },
    {
      id: 2,
      title: "Emoji Animation",
      image: `${baseUrl}sample-emoji.png`,
      description: "200+ Emoji & Sticker Green Screen"
    },
    {
      id: 3,
      title: "Sound Effects",
      image: `${baseUrl}sample-sounds.png`,
      description: "1000+ Sound Effects & SFX"
    },
    {
      id: 4,
      title: "Icons Pack",
      image: `${baseUrl}sample-icons.png`,
      description: "500+ Icons & Illustrations"
    }
  ]

  return (
    <SectionWrapper id="preview" className="relative">
      <div className="text-center mb-10 sm:mb-12">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block text-accent text-sm sm:text-base font-medium mb-4"
        >
          👀 SNEAK PEEK
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
        >
          Lihat Sample
          <span className="gradient-text"> Asset Kami</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto"
        >
          Ini hanya sebagian kecil dari 9000+ asset premium yang akan kamu dapatkan!
        </motion.p>
      </div>

      {/* Tab Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25 }}
        className="overflow-x-auto pb-2 mb-6 sm:mb-8 scrollbar-hide"
      >
        <div className="flex justify-start sm:justify-center gap-2 sm:gap-3 min-w-max px-4 sm:px-0">
          {samples.map((sample) => (
            <button
              key={sample.id}
              onClick={() => setActiveTab(sample.id)}
              className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === sample.id
                  ? 'bg-primary text-white'
                  : 'bg-white/5 text-text-secondary hover:bg-white/10'
              }`}
            >
              {sample.title}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Image Preview */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="max-w-5xl mx-auto"
      >
        <div className="glass-card p-3 sm:p-4 md:p-6 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-xl overflow-hidden"
            >
              <img 
                src={samples[activeTab].image} 
                alt={samples[activeTab].title}
                className="w-full h-auto rounded-xl"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-base/80 via-transparent to-transparent" />
              
              {/* Bottom text */}
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white font-semibold text-sm sm:text-base md:text-lg">
                  🎬 {samples[activeTab].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Asset categories preview */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 sm:mt-8"
        >
          <p className="text-center text-text-muted text-sm sm:text-base mb-4">
            Dan masih banyak lagi...
          </p>
          <div className="flex flex-wrap justify-center gap-2 gap-y-3 sm:gap-3">
            {[
              "🎬 Overlay Transition",
              "🌈 Motion Background",
              "🔊 Sound Effects",
              "🟢 Green Screen",
              "🎨 LUTs & Presets",
              "📱 Social Media Pack",
              "✨ Emoji Animation",
              "🎯 Icons Pack",
              "+12 Kategori Lainnya"
            ].map((category, index) => (
              <span 
                key={index}
                className="bg-white/5 hover:bg-white/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm text-text-secondary transition-colors"
              >
                {category}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}

export default SamplePreview
