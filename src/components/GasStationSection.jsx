//GasStationSection.jsx 

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

export default function GasStationSection() {
  return (
    <section
      id="postos"
      className="relative py-32 bg-[#0B1724] overflow-hidden"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-[-180px] left-[-120px] w-[420px] h-[420px] bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="absolute bottom-[-200px] right-[-120px] w-[420px] h-[420px] bg-sky-400/10 rounded-full blur-3xl" />

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

            <Fuel size={16} className="text-cyan-300" />

            <span className="text-sm tracking-wide text-cyan-200">
              Conveniência urbana
            </span>

          </div>

          {/* TITLE */}
          <h2 className="text-4xl md:text-6xl font-black leading-[1.1] text-white">

            Uma nova experiência
            <br />

            para postos modernos.

          </h2>

          {/* DESCRIPTION */}
          <p className="mt-8 text-xl leading-relaxed text-slate-300 max-w-3xl">

            A Lavau transforma postos de combustível em hubs urbanos
            de conveniência pet — aumentando fluxo, permanência
            e diferenciação da operação.

          </p>

        </motion.div>

        {/* MAIN GRID */}
        <div className="mt-24 grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            {/* FEATURES */}
            <div className="space-y-6">

              <FeatureCard
                icon={<TrendingUp size={22} />}
                title="Mais fluxo"
                description="Atraia novos clientes e aumente o tempo de permanência no local."
              />

              <FeatureCard
                icon={<MapPin size={22} />}
                title="Diferenciação"
                description="Transforme o posto em um ponto moderno de conveniência pet urbana."
              />

              <FeatureCard
                icon={<Timer size={22} />}
                title="Operação inteligente"
                description="Estrutura compacta, automatizada e de baixa complexidade operacional."
              />

            </div>

            {/* INFO BLOCK */}
            <div className="mt-14 rounded-[32px] border border-cyan-400/10 bg-white/5 backdrop-blur-xl p-8">

              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                Novo comportamento urbano
              </p>

              <h3 className="mt-5 text-3xl font-black leading-tight text-white">

                Os postos deixaram de ser
                apenas pontos de abastecimento.

              </h3>

              <p className="mt-6 text-lg leading-relaxed text-slate-400">

                Hoje os consumidores buscam experiências rápidas,
                práticas e conectadas ao estilo de vida urbano.
                A Lavau nasce como uma nova categoria de conveniência
                dentro desse cenário.

              </p>

            </div>

            {/* CTA */}
            <div className="mt-10">

              <button className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-cyan-400 text-black font-bold hover:scale-105 transition duration-300 shadow-[0_0_40px_rgba(34,211,238,0.25)]">

                Quero levar a Lavau para meu posto

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />

              </button>

            </div>

          </motion.div>

          {/* RIGHT VISUAL */}
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

                {/* TROCAR PELA FOTO DO POSTO */}
                <Image
                  src="/images/gas-station.jpg"
                  alt="Lavau em Postos"
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
                    Urban Pet Hub
                  </p>

                  <h3 className="mt-3 text-3xl font-black leading-tight text-white">

                    Conveniência,
                    <br />

                    tecnologia e
                    <br />

                    experiência urbana.

                  </h3>

                </div>

              </div>

            </div>

            {/* FLOATING MINI CARD */}
            <div className="absolute -top-6 -left-6 hidden lg:block">

              <div className="rounded-3xl border border-cyan-400/20 bg-[#07111B]/80 backdrop-blur-xl px-6 py-5 shadow-[0_0_40px_rgba(34,211,238,0.08)]">

                <p className="text-sm text-slate-400">
                  Modelo escalável
                </p>

                <h4 className="text-3xl font-black text-cyan-300 mt-1">
                  Compacto
                </h4>

              </div>

            </div>

          </motion.div>

        </div>

        {/* BOTTOM GRID */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-6"
        >

          <StatCard
            icon={<Car size={22} />}
            value="Fluxo"
            label="Aumento potencial de circulação e permanência."
          />

          <StatCard
            icon={<Fuel size={22} />}
            value="Receita"
            label="Nova fonte recorrente para o espaço comercial."
          />

          <StatCard
            icon={<TrendingUp size={22} />}
            value="Marca"
            label="Posicionamento inovador e pet-friendly."
          />

        </motion.div>

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

/* STAT CARD */
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