//VideoSection.jsx 

'use client'

import { motion } from 'framer-motion'
import {
  Play,
  Sparkles,
  Film,
  MonitorPlay
} from 'lucide-react'

export default function VideoSection() {
  return (
    <section
      id="videos"
      className="relative py-32 bg-[#07111B] overflow-hidden"
    >

      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-[-180px] right-[-100px] w-[420px] h-[420px] bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="absolute bottom-[-200px] left-[-120px] w-[420px] h-[420px] bg-sky-400/10 rounded-full blur-3xl" />

      </div>

      <div className="relative container mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >

          {/* TAG */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 mb-8">

            <Film size={16} className="text-cyan-300" />

            <span className="text-sm tracking-wide text-cyan-200">
              Visualize a experiência
            </span>

          </div>

          {/* TITLE */}
          <h2 className="text-4xl md:text-6xl font-black leading-[1.1] text-white">

            Veja como a Lavau
            <br />

            <span className="text-cyan-400">
              transforma o cuidado pet.
            </span>

          </h2>

          {/* DESCRIPTION */}
          <p className="mt-8 text-xl leading-relaxed text-slate-300 max-w-3xl mx-auto">

            Um novo conceito de conveniência urbana pensado
            para pets, tutores e cidades modernas.

          </p>

        </motion.div>

        {/* MAIN VIDEO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20"
        >

          <div className="relative overflow-hidden rounded-[40px] border border-cyan-400/10 bg-white/5 backdrop-blur-xl shadow-[0_0_80px_rgba(34,211,238,0.08)]">

            {/* VIDEO */}
            <div className="relative aspect-video bg-[#0B1724]">

              {/* VIDEO REAL */}
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                controls
              >
                <source
                  src="/videos/lavau-demo.mp4"
                  type="video/mp4"
                />
              </video>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111B]/80 via-transparent to-transparent pointer-events-none" />

              {/* FLOATING PLAY BADGE */}
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
                      Lavau Demo Concept
                    </p>

                  </div>

                </div>

              </div>

              {/* FLOATING INFO */}
              <div className="absolute bottom-6 left-6 right-6">

                <div className="rounded-3xl border border-white/10 bg-[#07111B]/70 backdrop-blur-xl p-6">

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <VideoInfo
                      title="Self-Service"
                      description="Experiência prática e intuitiva."
                    />

                    <VideoInfo
                      title="Urban Lifestyle"
                      description="Conectado à vida urbana moderna."
                    />

                    <VideoInfo
                      title="Smart Operation"
                      description="Tecnologia integrada e automatizada."
                    />

                  </div>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

        {/* VIDEO GRID */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >

          <VideoCard
            title="Conceito Lavau"
            description="Conheça a proposta da nova experiência pet urbana."
            video="/videos/concept.mp4"
          />

          <VideoCard
            title="Condomínios"
            description="Como a Lavau transforma espaços residenciais modernos."
            video="/videos/condo.mp4"
          />

          <VideoCard
            title="Postos Urbanos"
            description="Conveniência pet integrada ao fluxo urbano."
            video="/videos/gas-station.mp4"
          />

        </motion.div>

        {/* BOTTOM BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-24"
        >

          <div className="relative overflow-hidden rounded-[40px] border border-cyan-400/10 bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent backdrop-blur-xl p-10 md:p-14">

            {/* GLOW */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-400/10 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

              {/* TEXT */}
              <div className="max-w-3xl">

                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                  Primeira geração Lavau
                </p>

                <h3 className="mt-6 text-3xl md:text-5xl font-black leading-tight text-white">

                  Mais do que uma estação.
                  <br />

                  Uma nova experiência urbana
                  para o cuidado pet.

                </h3>

              </div>

              {/* BUTTON */}
              <button className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-cyan-400 text-black font-bold hover:scale-105 transition duration-300 shadow-[0_0_40px_rgba(34,211,238,0.25)]">

                Ver Mais Vídeos

                <MonitorPlay
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />

              </button>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

/* VIDEO INFO */
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

/* VIDEO CARD */
function VideoCard({ title, description, video }) {
  return (
    <div className="group relative overflow-hidden rounded-[32px] border border-cyan-400/10 bg-white/5 backdrop-blur-xl">

      {/* VIDEO */}
      <div className="relative aspect-video overflow-hidden">

        <video
          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={video} type="video/mp4" />
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111B]/80 via-transparent to-transparent" />

        {/* PLAY ICON */}
        <div className="absolute top-5 right-5 w-12 h-12 rounded-full bg-[#07111B]/70 backdrop-blur-xl border border-white/10 flex items-center justify-center text-cyan-300">

          <Play size={18} fill="currentColor" />

        </div>

      </div>

      {/* CONTENT */}
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