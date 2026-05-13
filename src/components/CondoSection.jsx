//CondoSection.jsx

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Building2,
  ShieldCheck,
  Sparkles,
  Waves,
  ArrowRight
} from 'lucide-react'

export default function CondoSection() {
  return (
    <section
      id="condominios"
      className="relative py-32 bg-[#07111B] overflow-hidden"
    >

      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-[-160px] right-[-100px] w-[420px] h-[420px] bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="absolute bottom-[-180px] left-[-120px] w-[380px] h-[380px] bg-sky-400/10 rounded-full blur-3xl" />

      </div>

      <div className="relative container mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >

          {/* TAG */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 mb-8">

            <Building2 size={16} className="text-cyan-300" />

            <span className="text-sm tracking-wide text-cyan-200">
              Condomínios inteligentes
            </span>

          </div>

          {/* TITLE */}
          <h2 className="text-4xl md:text-6xl font-black leading-[1.1] text-white">

            Um novo diferencial
            <br />

            para condomínios modernos.

          </h2>

          {/* DESCRIPTION */}
          <p className="mt-8 text-xl leading-relaxed text-slate-300 max-w-3xl">

            A Lavau transforma espaços urbanos em experiências mais
            inteligentes, práticas e conectadas ao estilo de vida pet-friendly.

          </p>

        </motion.div>

        {/* MAIN GRID */}
        <div className="mt-24 grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >

            {/* MAIN IMAGE */}
            <div className="relative rounded-[40px] overflow-hidden border border-cyan-400/10 bg-white/5 backdrop-blur-xl shadow-[0_0_80px_rgba(34,211,238,0.08)]">

              <div className="relative aspect-[4/5]">

                {/* TROCAR PELA IMAGEM DE CONDOMÍNIO */}
                <Image
                  src="/images/condo-lifestyle.jpg"
                  alt="Lavau em Condomínios"
                  fill
                  className="object-cover"
                />

              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111B]/80 via-transparent to-transparent" />

              {/* FLOATING CARD */}
              <div className="absolute bottom-6 left-6 right-6">

                <div className="rounded-3xl border border-white/10 bg-[#07111B]/70 backdrop-blur-xl p-6">

                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                    Amenity Pet
                  </p>

                  <h3 className="mt-3 text-3xl font-black leading-tight text-white">

                    Mais conveniência.
                    <br />

                    Mais valorização.
                    <br />

                    Mais experiência.

                  </h3>

                </div>

              </div>

            </div>

            {/* FLOATING INFO */}
            <div className="absolute -top-6 -right-6 hidden lg:block">

              <div className="rounded-3xl border border-cyan-400/20 bg-[#07111B]/80 backdrop-blur-xl px-6 py-5 shadow-[0_0_40px_rgba(34,211,238,0.08)]">

                <p className="text-sm text-slate-400">
                  Conceito moderno
                </p>

                <h4 className="text-3xl font-black text-cyan-300 mt-1">
                  Pet-Friendly
                </h4>

              </div>

            </div>

          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            {/* FEATURES */}
            <div className="space-y-6">

              <FeatureCard
                icon={<Sparkles size={22} />}
                title="Experiência moderna"
                description="Uma nova amenity urbana pensada para condomínios contemporâneos."
              />

              <FeatureCard
                icon={<ShieldCheck size={22} />}
                title="Operação segura"
                description="Sistema inteligente com auto sanitização e operação monitorada."
              />

              <FeatureCard
                icon={<Waves size={22} />}
                title="Infraestrutura compacta"
                description="Solução de fácil adaptação para áreas pet e espaços compartilhados."
              />

            </div>

            {/* TEXT BLOCK */}
            <div className="mt-14 rounded-[32px] border border-cyan-400/10 bg-white/5 backdrop-blur-xl p-8">

              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                Lifestyle urbano
              </p>

              <h3 className="mt-5 text-3xl font-black leading-tight text-white">

                A Lavau acompanha a evolução
                do jeito de viver nas grandes cidades.

              </h3>

              <p className="mt-6 text-lg leading-relaxed text-slate-400">

                Cada vez mais pessoas vivem em apartamentos,
                possuem pets e buscam soluções práticas para o dia a dia.
                A Lavau nasce exatamente nesse encontro entre
                conveniência urbana e bem-estar animal.

              </p>

            </div>

            {/* CTA */}
            <div className="mt-10">

              <button className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-cyan-400 text-black font-bold hover:scale-105 transition duration-300 shadow-[0_0_40px_rgba(34,211,238,0.25)]">

                Quero levar a Lavau para meu condomínio

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />

              </button>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

/* FEATURE CARD */
function FeatureCard({ icon, title, description }) {
  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-cyan-400/10 bg-white/5 backdrop-blur-xl p-7 hover:bg-cyan-400/5 transition duration-500">

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-400/5 to-transparent" />

      <div className="relative z-10 flex gap-5">

        {/* ICON */}
        <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 shrink-0">

          {icon}

        </div>

        {/* CONTENT */}
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