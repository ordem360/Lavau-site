'use client'

import { motion } from 'framer-motion'
import {
  Play,
  Film,
  MonitorPlay
} from 'lucide-react'

const videoCopy = {
  pt: {
    badge: 'Visualize a experiência',
    title: 'Veja como a Lavau',
    accent: 'transforma o cuidado pet.',
    description: 'Um novo conceito de conveniência urbana pensado para pets, tutores e cidades modernas.',
    demo: 'Lavau Demo Concept',
    infos: [
      ['Self-Service', 'Experiência prática e intuitiva.'],
      ['Urban Lifestyle', 'Conectado à vida urbana moderna.'],
      ['Smart Operation', 'Tecnologia integrada e automatizada.'],
    ],
    cards: [
      ['Conceito Lavau', 'Conheça a proposta da nova experiência pet urbana.', '/videos/concept.mp4'],
      ['Condomínios', 'Como a Lavau transforma espaços residenciais modernos.', '/videos/condo.mp4'],
      ['Postos Urbanos', 'Conveniência pet integrada ao fluxo urbano.', '/videos/gas-station.mp4'],
    ],
    bottomLabel: 'Primeira geração Lavau',
    bottomTitle: ['Mais do que uma estação.', 'Uma nova experiência urbana', 'para o cuidado pet.'],
    button: 'Conheça nossa visão',
    href: '/about',
  },
  en: {
    badge: 'Visualize the experience',
    title: 'See how Lavau',
    accent: 'transforms pet care.',
    description: 'A new urban convenience concept designed for pets, owners and modern cities.',
    demo: 'Lavau Demo Concept',
    infos: [
      ['Self-Service', 'A practical and intuitive experience.'],
      ['Urban Lifestyle', 'Connected to modern urban living.'],
      ['Smart Operation', 'Integrated and automated technology.'],
    ],
    cards: [
      ['Lavau Concept', 'Discover the new urban pet experience.', '/videos/concept.mp4'],
      ['Condos', 'How Lavau transforms modern residential spaces.', '/videos/condo.mp4'],
      ['Urban Stations', 'Pet convenience integrated into urban flow.', '/videos/gas-station.mp4'],
    ],
    bottomLabel: 'First generation Lavau',
    bottomTitle: ['More than a station.', 'A new urban experience', 'for pet care.'],
    button: 'Our vision',
    href: '/en',
  }
}

export default function VideoSection({ locale = 'pt' }) {
  const copy = videoCopy[locale] || videoCopy.pt

  return (
    <section id="videos" className="relative py-32 bg-[#07111B] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-180px] right-[-100px] w-[420px] h-[420px] bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-200px] left-[-120px] w-[420px] h-[420px] bg-sky-400/10 rounded-full blur-3xl" />
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
            <Film size={16} className="text-cyan-300" />
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

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20"
        >
          <div className="relative overflow-hidden rounded-[40px] border border-cyan-400/10 bg-white/5 backdrop-blur-xl shadow-[0_0_80px_rgba(34,211,238,0.08)]">
            <div className="relative aspect-video bg-[#0B1724]">
              <video className="w-full h-full object-cover" autoPlay muted loop playsInline controls>
                <source src="/videos/lavau-demo.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-[#07111B]/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-6 left-6">
                <div className="flex items-center gap-3 rounded-full border border-white/10 bg-[#07111B]/70 backdrop-blur-xl px-5 py-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center text-black">
                    <Play size={18} fill="black" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
                      Experience
                    </p>
                    <p className="text-sm text-white">
                      {copy.demo}
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-3xl border border-white/10 bg-[#07111B]/70 backdrop-blur-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {copy.infos.map(([title, description]) => (
                      <VideoInfo key={title} title={title} description={description} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {copy.cards.map(([title, description, video]) => (
            <VideoCard key={title} title={title} description={description} video={video} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-24"
        >
          <div className="relative overflow-hidden rounded-[40px] border border-cyan-400/10 bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent backdrop-blur-xl p-10 md:p-14">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-400/10 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
              <div className="max-w-3xl">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                  {copy.bottomLabel}
                </p>

                <h3 className="mt-6 text-3xl md:text-5xl font-black leading-tight text-white">
                  {copy.bottomTitle[0]}
                  <br />
                  {copy.bottomTitle[1]}
                  <br />
                  {copy.bottomTitle[2]}
                </h3>
              </div>

              <a
                href={copy.href}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-cyan-400 text-black font-bold hover:scale-105 transition duration-300 shadow-[0_0_40px_rgba(34,211,238,0.25)]"
              >
                {copy.button}
                <MonitorPlay size={18} className="group-hover:translate-x-1 transition" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function VideoInfo({ title, description }) {
  return (
    <div>
      <h4 className="text-xl font-bold text-white">
        {title}
      </h4>

      <p className="mt-3 text-slate-400 leading-relaxed">
        {description}
      </p>
    </div>
  )
}

function VideoCard({ title, description, video }) {
  return (
    <div className="group relative overflow-hidden rounded-[32px] border border-cyan-400/10 bg-white/5 backdrop-blur-xl">
      <div className="relative aspect-video overflow-hidden">
        <video className="w-full h-full object-cover group-hover:scale-105 transition duration-700" autoPlay muted loop playsInline>
          <source src={video} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-[#07111B]/80 via-transparent to-transparent" />

        <div className="absolute top-5 right-5 w-12 h-12 rounded-full bg-[#07111B]/70 backdrop-blur-xl border border-white/10 flex items-center justify-center text-cyan-300">
          <Play size={18} fill="currentColor" />
        </div>
      </div>

      <div className="p-7">
        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-4 text-slate-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
