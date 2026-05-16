'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Fuel,
  Car,
  Timer,
  TrendingUp,
  MapPin,
  ArrowRight
} from 'lucide-react'

const gasCopy = {
  pt: {
    badge: 'Conveniência urbana',
    title: ['Uma nova experiência', 'para postos modernos.'],
    description: 'A Lavau transforma postos de combustível em hubs urbanos de conveniência pet, aumentando fluxo, permanência e diferenciação da operação.',
    features: [
      ['Mais fluxo', 'Atraia novos clientes e aumente o tempo de permanência no local.'],
      ['Diferenciação', 'Transforme o posto em um ponto moderno de conveniência pet urbana.'],
      ['Operação inteligente', 'Estrutura compacta, automatizada e de baixa complexidade operacional.'],
    ],
    blockLabel: 'Novo comportamento urbano',
    blockTitle: 'Os postos deixaram de ser apenas pontos de abastecimento.',
    blockDescription: 'Hoje os consumidores buscam experiências rápidas, práticas e conectadas ao estilo de vida urbano. A Lavau nasce como uma nova categoria de conveniência dentro desse cenário.',
    cta: 'Conheça a Lavau',
    imageAlt: 'Lavau em Postos',
    imageCard: ['Conveniência,', 'tecnologia e', 'experiência urbana.'],
    floatLabel: 'Modelo escalável',
    stats: [
      ['Fluxo', 'Aumento potencial de circulação e permanência.'],
      ['Receita', 'Nova fonte recorrente para o espaço comercial.'],
      ['Marca', 'Posicionamento inovador e pet-friendly.'],
    ],
  },
  en: {
    badge: 'Urban convenience',
    title: ['A new experience', 'for modern stations.'],
    description: 'Lavau turns gas stations into urban pet convenience hubs, increasing traffic, dwell time and operational differentiation.',
    features: [
      ['More traffic', 'Attract new customers and increase dwell time on site.'],
      ['Differentiation', 'Turn the station into a modern urban pet convenience point.'],
      ['Smart operation', 'Compact, automated structure with low operational complexity.'],
    ],
    blockLabel: 'New urban behavior',
    blockTitle: 'Stations are no longer just fueling points.',
    blockDescription: 'Consumers now look for fast, practical experiences connected to urban lifestyles. Lavau creates a new convenience category inside this context.',
    cta: 'Discover Lavau',
    imageAlt: 'Lavau in stations',
    imageCard: ['Convenience,', 'technology and', 'urban experience.'],
    floatLabel: 'Scalable model',
    stats: [
      ['Traffic', 'Potential increase in circulation and dwell time.'],
      ['Revenue', 'A new recurring source for the commercial space.'],
      ['Brand', 'Innovative and pet-friendly positioning.'],
    ],
  }
}

const featureIcons = [
  <TrendingUp size={22} key="trend" />,
  <MapPin size={22} key="map" />,
  <Timer size={22} key="timer" />,
]

const statIcons = [
  <Car size={22} key="car" />,
  <Fuel size={22} key="fuel" />,
  <TrendingUp size={22} key="trend" />,
]

export default function GasStationSection({ locale = 'pt' }) {
  const copy = gasCopy[locale] || gasCopy.pt

  return (
    <section id="postos" className="relative py-32 bg-[#0B1724] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-180px] left-[-120px] w-[420px] h-[420px] bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-200px] right-[-120px] w-[420px] h-[420px] bg-sky-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 mb-8">
            <Fuel size={16} className="text-cyan-300" />
            <span className="text-sm tracking-wide text-cyan-200">
              {copy.badge}
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black leading-[1.1] text-white">
            {copy.title[0]}
            <br />
            {copy.title[1]}
          </h2>

          <p className="mt-8 text-xl leading-relaxed text-slate-300 max-w-3xl">
            {copy.description}
          </p>
        </motion.div>

        <div className="mt-24 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              {copy.features.map(([title, description], index) => (
                <FeatureCard
                  key={title}
                  icon={featureIcons[index]}
                  title={title}
                  description={description}
                />
              ))}
            </div>

            <div className="mt-14 rounded-[32px] border border-cyan-400/10 bg-white/5 backdrop-blur-xl p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                {copy.blockLabel}
              </p>

              <h3 className="mt-5 text-3xl font-black leading-tight text-white">
                {copy.blockTitle}
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-slate-400">
                {copy.blockDescription}
              </p>
            </div>

            <div className="mt-10">
              <a
                href="mailto:comercial@lavau.com.br"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-cyan-400 text-black font-bold hover:scale-105 transition duration-300 shadow-[0_0_40px_rgba(34,211,238,0.25)]"
              >
                {copy.cta}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative rounded-[40px] overflow-hidden border border-cyan-400/10 bg-white/5 backdrop-blur-xl shadow-[0_0_80px_rgba(34,211,238,0.08)]">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/gas-station.jpg"
                  alt={copy.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#07111B]/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-3xl border border-white/10 bg-[#07111B]/70 backdrop-blur-xl p-6">
                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                    Urban Pet Hub
                  </p>

                  <h3 className="mt-3 text-3xl font-black leading-tight text-white">
                    {copy.imageCard[0]}
                    <br />
                    {copy.imageCard[1]}
                    <br />
                    {copy.imageCard[2]}
                  </h3>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -left-6 hidden lg:block">
              <div className="rounded-3xl border border-cyan-400/20 bg-[#07111B]/80 backdrop-blur-xl px-6 py-5 shadow-[0_0_40px_rgba(34,211,238,0.08)]">
                <p className="text-sm text-slate-400">
                  {copy.floatLabel}
                </p>
                <h4 className="text-3xl font-black text-cyan-300 mt-1">
                  Compact
                </h4>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {copy.stats.map(([value, label], index) => (
            <StatCard
              key={value}
              icon={statIcons[index]}
              value={value}
              label={label}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-cyan-400/10 bg-white/5 backdrop-blur-xl p-7 hover:bg-cyan-400/5 transition duration-500">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-400/5 to-transparent" />

      <div className="relative z-10 flex gap-5">
        <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 shrink-0">
          {icon}
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white">
            {title}
          </h3>

          <p className="mt-3 text-slate-400 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

function StatCard({ icon, value, label }) {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-cyan-400/10 bg-white/5 backdrop-blur-xl p-8">
      <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 mb-6">
        {icon}
      </div>

      <h3 className="text-3xl font-black text-white">
        {value}
      </h3>

      <p className="mt-4 text-slate-400 leading-relaxed">
        {label}
      </p>
    </div>
  )
}
