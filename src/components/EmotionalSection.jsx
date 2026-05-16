'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Heart, ShieldCheck, Sparkles } from 'lucide-react'

const emotionalCopy = {
  pt: {
    badge: 'Muito além do banho',
    titleTop: 'Um momento de',
    titleAccent: 'cuidado e conexão',
    titleBottom: 'com o seu pet.',
    description1: 'A Lavau foi criada para transformar uma tarefa comum em uma experiência mais leve, confortável e agradável para pets e tutores.',
    description2: 'Sem bagunça em casa. Sem estresse. Sem correria. Apenas um espaço pensado para o bem-estar animal e para a praticidade da vida urbana moderna.',
    features: [
      ['Mais conexão', 'Um momento de cuidado entre você e seu pet.'],
      ['Conforto de verdade', 'Um espaço pensado para bem-estar, limpeza e tranquilidade.'],
      ['Experiência moderna', 'Tecnologia, praticidade e conforto em um só lugar.'],
    ],
    cardTitle: ['Cuidado urbano', 'com mais carinho', 'e menos esforço.'],
    cardDescription: 'Um novo jeito de cuidar do seu pet em condomínios, postos e espaços urbanos inteligentes.',
  },
  en: {
    badge: 'Beyond the bath',
    titleTop: 'A moment of',
    titleAccent: 'care and connection',
    titleBottom: 'with your pet.',
    description1: 'Lavau was created to turn a common task into a lighter, more comfortable and enjoyable experience for pets and their owners.',
    description2: 'No mess at home. No stress. No rush. Just a space designed for animal well-being and modern urban convenience.',
    features: [
      ['More connection', 'A care moment shared between you and your pet.'],
      ['True comfort', 'A space designed for well-being, cleanliness and calm.'],
      ['Modern experience', 'Technology, practicality and comfort in one place.'],
    ],
    cardTitle: ['Urban care', 'with more affection', 'and less effort.'],
    cardDescription: 'A new way to care for your pet in condos, stations and smart urban spaces.',
  }
}

export default function EmotionalSection({ locale = 'pt' }) {
  const copy = emotionalCopy[locale] || emotionalCopy.pt

  return (
    <section className="relative py-32 bg-[#0B1724] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-[-120px] w-[420px] h-[420px] bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-150px] left-[-120px] w-[380px] h-[380px] bg-sky-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 mb-8">
              <Heart size={16} className="text-cyan-300" />
              <span className="text-sm tracking-wide text-cyan-200">
                {copy.badge}
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black leading-[1.1] text-white">
              {copy.titleTop}
              <br />
              <span className="text-cyan-400">
                {copy.titleAccent}
              </span>
              <br />
              {copy.titleBottom}
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-slate-300 max-w-2xl">
              {copy.description1}
            </p>

            <p className="mt-6 text-lg leading-relaxed text-slate-400 max-w-2xl">
              {copy.description2}
            </p>

            <div className="mt-12 space-y-5">
              <Feature
                icon={<Heart size={18} />}
                title={copy.features[0][0]}
                description={copy.features[0][1]}
              />

              <Feature
                icon={<ShieldCheck size={18} />}
                title={copy.features[1][0]}
                description={copy.features[1][1]}
              />

              <Feature
                icon={<Sparkles size={18} />}
                title={copy.features[2][0]}
                description={copy.features[2][1]}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <div className="relative rounded-[32px] overflow-hidden h-[420px] sm:h-[500px] border border-cyan-400/10 bg-white/5">
                <Image
                  src="/images/emotional-1.jpg"
                  alt={copy.features[0][0]}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-6">
                <div className="relative rounded-[32px] overflow-hidden h-[240px] sm:h-[280px] md:h-[240px] border border-cyan-400/10 bg-white/5">
                  <Image
                    src="/images/emotional-2.jpg"
                    alt={copy.features[1][0]}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="rounded-[32px] border border-cyan-400/10 bg-gradient-to-br from-cyan-400/10 to-transparent backdrop-blur-xl p-7 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                      Lavau Experience
                    </p>

                    <h3 className="mt-5 text-3xl sm:text-4xl md:text-3xl font-black leading-tight text-white">
                      {copy.cardTitle[0]}
                      <br />
                      {copy.cardTitle[1]}
                      <br />
                      {copy.cardTitle[2]}
                    </h3>
                  </div>

                  <p className="mt-8 text-slate-300 leading-relaxed">
                    {copy.cardDescription}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Feature({ icon, title, description }) {
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 shrink-0">
        {icon}
      </div>

      <div>
        <h4 className="text-lg font-bold text-white">
          {title}
        </h4>

        <p className="mt-1 text-slate-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
