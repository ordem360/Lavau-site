//SolutionSection.jsx 

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

export default function SolutionSection() {
  return (
    <section className="relative py-32 bg-[#0B1724] overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-[-180px] right-[-100px] w-[420px] h-[420px] bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="absolute bottom-[-160px] left-[-120px] w-[380px] h-[380px] bg-sky-400/10 rounded-full blur-3xl" />

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

            <Sparkles size={16} className="text-cyan-300" />

            <span className="text-sm tracking-wide text-cyan-200">
              A experiência Lavau
            </span>

          </div>

          {/* TITLE */}
          <h2 className="text-4xl md:text-6xl font-black leading-[1.1] text-white">

            Conveniência urbana
            <br />

            <span className="text-cyan-400">
              para o cuidado do seu pet.
            </span>

          </h2>

          {/* DESCRIPTION */}
          <p className="mt-8 text-xl leading-relaxed text-slate-300 max-w-3xl mx-auto">

            A Lavau une tecnologia, praticidade e bem-estar
            em estações modernas de banho self-service para pets.

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
                icon={<Droplets size={22} />}
                title="Lavagem inteligente"
                description="Controle intuitivo de água e shampoo para uma experiência prática e confortável."
              />

              <FeatureCard
                icon={<Wind size={22} />}
                title="Secagem integrada"
                description="Sistema profissional de secagem para mais conforto e agilidade após o banho."
              />

              <FeatureCard
                icon={<Smartphone size={22} />}
                title="Pagamento digital"
                description="PIX, QR Code e operação automatizada para acesso rápido e simples."
              />

              <FeatureCard
                icon={<TimerReset size={22} />}
                title="Experiência rápida"
                description="Tudo pensado para uma rotina urbana mais eficiente e sem complicações."
              />

              <FeatureCard
                icon={<ShieldCheck size={22} />}
                title="Auto sanitização"
                description="Sistema de higienização automática após cada uso."
              />

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

                {/* TROCAR PELA FOTO/RENDER DA ESTAÇÃO */}
                <Image
                  src="/images/lavau-station.jpg"
                  alt="Lavau Station"
                  fill
                  className="object-cover"
                />

              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111B]/80 via-transparent to-transparent" />

              {/* FLOATING PANEL */}
              <div className="absolute bottom-6 left-6 right-6">

                <div className="rounded-3xl border border-white/10 bg-[#07111B]/70 backdrop-blur-xl p-6">

                  <div className="grid grid-cols-2 gap-4">

                    <MiniInfo
                      label="Pagamento"
                      value="PIX / QR Code"
                    />

                    <MiniInfo
                      label="Tempo médio"
                      value="15–20 min"
                    />

                    <MiniInfo
                      label="Operação"
                      value="Self-Service"
                    />

                    <MiniInfo
                      label="Sanitização"
                      value="Automática"
                    />

                  </div>

                </div>

              </div>

            </div>

            {/* FLOATING CARD */}
            <div className="absolute -top-6 -left-6 hidden lg:block">

              <div className="rounded-3xl border border-cyan-400/20 bg-[#07111B]/80 backdrop-blur-xl px-6 py-5 shadow-[0_0_40px_rgba(34,211,238,0.08)]">

                <p className="text-sm text-slate-400">
                  Operação inteligente
                </p>

                <h4 className="text-3xl font-black text-cyan-300 mt-1">
                  24/7
                </h4>

              </div>

            </div>

          </motion.div>

        </div>

        {/* PROCESS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-32"
        >

          {/* TITLE */}
          <div className="max-w-3xl">

            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              Como funciona
            </p>

            <h3 className="mt-5 text-4xl md:text-5xl font-black leading-tight text-white">

              Simples.
              Rápido.
              Inteligente.

            </h3>

          </div>

          {/* STEPS */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">

            <StepCard
              number="01"
              title="Chegue"
              description="Acesse uma estação Lavau próxima de você."
            />

            <StepCard
              number="02"
              title="Inicie"
              description="Pagamento rápido via PIX ou QR Code."
            />

            <StepCard
              number="03"
              title="Cuide"
              description="Lavagem e secagem com praticidade e conforto."
            />

            <StepCard
              number="04"
              title="Finalize"
              description="Ambiente higienizado automaticamente após o uso."
            />

          </div>

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

/* MINI INFO */
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

/* STEP CARD */
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