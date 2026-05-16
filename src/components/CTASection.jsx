'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Sparkles,
  Building2,
  Fuel,
  Heart
} from 'lucide-react'

const ctaCopy = {
  pt: {
    badge: 'Solução comercial Lavau',
    title: 'Instale uma Lavau.',
    accent: 'Crie uma nova experiência pet no seu espaço.',
    description: 'Uma solução premium para condomínios, postos e operações urbanas que querem oferecer conveniência, diferenciação e valor real para tutores de pets.',
    cards: [
      ['Para tutores', 'Uma experiência prática e confortável para resolver o banho sem bagunça em casa.', 'Conheça nossa visão', '/about'],
      ['Condomínios', 'Leve uma nova amenity pet para empreendimentos residenciais modernos.', 'Falar com comercial', 'mailto:comercial@lavau.com.br'],
      ['Postos urbanos', 'Transforme seu espaço em um hub moderno de conveniência pet.', 'Avaliar parceria', 'mailto:parcerias@lavau.com.br'],
    ],
    finalLabel: 'Conversão comercial',
    finalTitle: ['Mais conveniência.', 'Mais diferenciação.', 'Mais valor para o seu espaço.'],
    primary: 'Conheça a Lavau',
    secondary: 'Conheça nossa visão',
    secondaryHref: '/about',
  },
  en: {
    badge: 'Lavau commercial solution',
    title: 'Install a Lavau.',
    accent: 'Create a new pet experience in your space.',
    description: 'A premium solution for condos, stations and urban operations that want to offer convenience, differentiation and real value for pet owners.',
    cards: [
      ['For owners', 'A practical and comfortable experience to wash pets without the mess at home.', 'Our vision', '/en'],
      ['Condos', 'Bring a new pet amenity to modern residential developments.', 'Talk to sales', 'mailto:comercial@lavau.com.br'],
      ['Urban stations', 'Turn your space into a modern pet convenience hub.', 'Explore partnership', 'mailto:parcerias@lavau.com.br'],
    ],
    finalLabel: 'Commercial conversion',
    finalTitle: ['More convenience.', 'More differentiation.', 'More value for your space.'],
    primary: 'Discover Lavau',
    secondary: 'Our vision',
    secondaryHref: '/en',
  }
}

const icons = [
  <Heart size={24} key="heart" />,
  <Building2 size={24} key="building" />,
  <Fuel size={24} key="fuel" />,
]

export default function CTASection({ locale = 'pt' }) {
  const copy = ctaCopy[locale] || ctaCopy.pt

  return (
    <section id="contato" className="relative py-36 bg-[#0B1724] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-[-140px] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-220px] right-[-140px] w-[500px] h-[500px] bg-sky-400/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.06),transparent_40%)]" />
      </div>

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[48px] border border-cyan-400/10 bg-gradient-to-br from-cyan-400/10 via-[#07111B]/70 to-transparent backdrop-blur-2xl p-10 md:p-16 shadow-[0_0_100px_rgba(34,211,238,0.08)]"
        >
          <div className="absolute top-0 right-0 w-[320px] h-[320px] bg-cyan-400/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 mb-8">
                <Sparkles size={16} className="text-cyan-300" />
                <span className="text-sm tracking-wide text-cyan-200">
                  {copy.badge}
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black leading-[1.05] text-white">
                {copy.title}
                <br />
                <span className="text-cyan-400">
                  {copy.accent}
                </span>
              </h2>

              <p className="mt-8 text-xl leading-relaxed text-slate-300 max-w-3xl">
                {copy.description}
              </p>
            </div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
              {copy.cards.map(([title, description, button, href], index) => (
                <OptionCard
                  key={title}
                  icon={icons[index]}
                  title={title}
                  description={description}
                  button={button}
                  href={href}
                />
              ))}
            </div>

            <div className="mt-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                  {copy.finalLabel}
                </p>

                <h3 className="mt-4 text-3xl md:text-5xl font-black leading-tight text-white">
                  {copy.finalTitle[0]}
                  <br />
                  {copy.finalTitle[1]}
                  <br />
                  {copy.finalTitle[2]}
                </h3>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:comercial@lavau.com.br"
                  className="group inline-flex items-center justify-center gap-4 px-10 py-5 rounded-full bg-cyan-400 text-black font-black text-lg hover:scale-105 transition duration-300 shadow-[0_0_50px_rgba(34,211,238,0.25)]"
                >
                  {copy.primary}
                  <ArrowRight size={22} className="group-hover:translate-x-1 transition" />
                </a>

                <a
                  href={copy.secondaryHref}
                  className="inline-flex items-center justify-center px-10 py-5 rounded-full border border-cyan-400/20 bg-white/5 backdrop-blur-xl text-white font-bold hover:bg-cyan-400/10 transition duration-300"
                >
                  {copy.secondary}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function OptionCard({ icon, title, description, button, href }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group relative overflow-hidden rounded-[32px] border border-cyan-400/10 bg-white/5 backdrop-blur-xl p-8"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-400/5 to-transparent" />

      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 mb-6">
          {icon}
        </div>

        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-4 text-slate-400 leading-relaxed min-h-[90px]">
          {description}
        </p>

        <a
          href={href}
          className="group/button mt-8 inline-flex items-center gap-2 text-cyan-300 font-semibold hover:text-cyan-200 transition"
        >
          {button}
          <ArrowRight size={16} className="group-hover/button:translate-x-1 transition" />
        </a>
      </div>
    </motion.div>
  )
}
