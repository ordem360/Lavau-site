'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Droplets,
  Wind,
  Sparkles,
  Smartphone,
  TimerReset,
  ShieldCheck
} from 'lucide-react'

const solutionCopy = {
  pt: {
    badge: 'A experiência Lavau',
    title: 'Conveniência urbana',
    accent: 'para o cuidado do seu pet.',
    description: 'A Lavau une tecnologia, praticidade e bem-estar em estações modernas de banho self-service para pets.',
    features: [
      ['Lavagem inteligente', 'Controle intuitivo de água e shampoo para uma experiência prática e confortável.'],
      ['Secagem integrada', 'Sistema profissional de secagem para mais conforto e agilidade após o banho.'],
      ['Pagamento digital', 'PIX, QR Code e operação automatizada para acesso rápido e simples.'],
      ['Experiência rápida', 'Tudo pensado para uma rotina urbana mais eficiente e sem complicações.'],
      ['Auto sanitização', 'Sistema de higienização automática após cada uso.'],
    ],
    mini: [
      ['Pagamento', 'PIX / QR Code'],
      ['Tempo médio', '15-20 min'],
      ['Operação', 'Self-Service'],
      ['Sanitização', 'Automática'],
    ],
    floatLabel: 'Operação inteligente',
    processLabel: 'Como funciona',
    processTitle: ['Simples.', 'Rápido.', 'Inteligente.'],
    steps: [
      ['Chegue', 'Acesse uma estação Lavau próxima de você.'],
      ['Inicie', 'Pagamento rápido via PIX ou QR Code.'],
      ['Cuide', 'Lavagem e secagem com praticidade e conforto.'],
      ['Finalize', 'Ambiente higienizado automaticamente após o uso.'],
    ],
  },
  en: {
    badge: 'The Lavau experience',
    title: 'Urban convenience',
    accent: 'for modern pet care.',
    description: 'Lavau combines technology, practicality and well-being in modern self-service pet wash stations.',
    features: [
      ['Smart wash', 'Intuitive water and shampoo controls for a practical, comfortable experience.'],
      ['Integrated drying', 'Professional drying system for more comfort and speed after the bath.'],
      ['Digital payment', 'QR payment and automated operation for quick, simple access.'],
      ['Fast experience', 'Designed for a more efficient urban routine with less friction.'],
      ['Auto sanitizing', 'Automatic hygiene cycle after each use.'],
    ],
    mini: [
      ['Payment', 'QR Code'],
      ['Avg. time', '15-20 min'],
      ['Operation', 'Self-Service'],
      ['Sanitizing', 'Automatic'],
    ],
    floatLabel: 'Smart operation',
    processLabel: 'How it works',
    processTitle: ['Simple.', 'Fast.', 'Smart.'],
    steps: [
      ['Arrive', 'Access a nearby Lavau station.'],
      ['Start', 'Quick payment through QR Code.'],
      ['Care', 'Wash and dry with comfort and practicality.'],
      ['Finish', 'The space is automatically sanitized after use.'],
    ],
  }
}

const featureIcons = [
  <Droplets size={22} key="droplets" />,
  <Wind size={22} key="wind" />,
  <Smartphone size={22} key="phone" />,
  <TimerReset size={22} key="timer" />,
  <ShieldCheck size={22} key="shield" />,
]

export default function SolutionSection({ locale = 'pt' }) {
  const copy = solutionCopy[locale] || solutionCopy.pt

  return (
    <section className="relative py-32 bg-[#0B1724] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-180px] right-[-100px] w-[420px] h-[420px] bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-160px] left-[-120px] w-[380px] h-[380px] bg-sky-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 mb-8">
            <Sparkles size={16} className="text-cyan-300" />
            <span className="text-sm tracking-wide text-cyan-200">
              {copy.badge}
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black leading-[1.1] text-white">
            {copy.title}
            <br />
            <span className="text-cyan-400">
              {copy.accent}
            </span>
          </h2>

          <p className="mt-8 text-xl leading-relaxed text-slate-300 max-w-3xl mx-auto">
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
                  src="/images/lavau-station.jpg"
                  alt="Lavau Station"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#07111B]/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-3xl border border-white/10 bg-[#07111B]/70 backdrop-blur-xl p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {copy.mini.map(([label, value]) => (
                      <MiniInfo key={label} label={label} value={value} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -left-6 hidden lg:block">
              <div className="rounded-3xl border border-cyan-400/20 bg-[#07111B]/80 backdrop-blur-xl px-6 py-5 shadow-[0_0_40px_rgba(34,211,238,0.08)]">
                <p className="text-sm text-slate-400">
                  {copy.floatLabel}
                </p>

                <h4 className="text-3xl font-black text-cyan-300 mt-1">
                  24/7
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
          className="mt-32"
        >
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              {copy.processLabel}
            </p>

            <h3 className="mt-5 text-4xl md:text-5xl font-black leading-tight text-white">
              {copy.processTitle.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </h3>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
            {copy.steps.map(([title, description], index) => (
              <StepCard
                key={title}
                number={`0${index + 1}`}
                title={title}
                description={description}
              />
            ))}
          </div>
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

function MiniInfo({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
        {label}
      </p>

      <h4 className="mt-2 text-lg font-bold text-white">
        {value}
      </h4>
    </div>
  )
}

function StepCard({ number, title, description }) {
  return (
    <div className="relative overflow-hidden rounded-[30px] border border-cyan-400/10 bg-white/5 backdrop-blur-xl p-8">
      <p className="text-5xl font-black text-cyan-400/20">
        {number}
      </p>

      <h4 className="mt-8 text-2xl font-bold text-white">
        {title}
      </h4>

      <p className="mt-4 text-slate-400 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
