'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Sparkles, Droplets, Wind, Smartphone } from 'lucide-react'

const heroCopy = {
  pt: {
    badge: 'Nova experiência de conveniência pet',
    lines: ['Mais praticidade.', 'Mais cuidado.', 'Mais conexão.'],
    description: 'A Lavau transforma o banho do seu pet em uma experiência moderna, prática e confortável com estações self-service inteligentes para condomínios, postos e espaços urbanos.',
    primary: 'Conheça a Lavau',
    secondary: 'Conheça nossa visão',
    secondaryHref: '/about',
    features: ['Lavagem Inteligente', 'Secagem Integrada', 'Pagamento via PIX', 'Auto Sanitização'],
    cardEyebrow: 'Lavau Experience',
    cardTitle: 'Banho self-service inteligente para pets.',
    timeLabel: 'Tempo médio',
  },
  en: {
    badge: 'A new pet convenience experience',
    lines: ['More convenience.', 'More care.', 'More connection.'],
    description: 'Lavau turns pet washing into a modern, practical and comfortable experience with smart self-service stations for condos, stations and urban spaces.',
    primary: 'Discover Lavau',
    secondary: 'Our vision',
    secondaryHref: '/en',
    features: ['Smart Wash', 'Integrated Drying', 'PIX / QR Payment', 'Auto Sanitizing'],
    cardEyebrow: 'Lavau Experience',
    cardTitle: 'Smart self-service pet wash.',
    timeLabel: 'Average time',
  }
}

export default function HeroSection({ locale = 'pt' }) {
  const copy = heroCopy[locale] || heroCopy.pt

  return (
    <section
      id="sobre"
      className="relative min-h-screen overflow-hidden bg-[#07111B] text-white"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-[-200px] left-[-120px] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="absolute bottom-[-250px] right-[-100px] w-[500px] h-[500px] bg-sky-400/10 rounded-full blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_40%)]" />

      </div>

      <div className="relative container mx-auto px-6 pt-36 pb-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">

          {/* LEFT CONTENT */}
          <div>

            {/* BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 mb-8"
            >

              <Sparkles size={16} className="text-cyan-300" />

              <span className="text-sm text-cyan-200 tracking-wide">
                {copy.badge}
              </span>

            </motion.div>

            {/* HEADLINE */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05]"
            >

              {copy.lines[0]}
              <br />

              {copy.lines[1]}
              <br />

              <span className="text-cyan-400">
                {copy.lines[2]}
              </span>

            </motion.h1>

            {/* SUBHEADLINE */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-8 text-xl text-slate-300 leading-relaxed max-w-2xl"
            >

              {copy.description}

            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >

              <a
                href="mailto:comercial@lavau.com.br"
                className="px-8 py-4 rounded-full bg-cyan-400 text-black font-bold hover:scale-105 transition duration-300 shadow-[0_0_40px_rgba(34,211,238,0.25)]"
              >

                {copy.primary}

              </a>

              <a
                href={copy.secondaryHref}
                className="px-8 py-4 rounded-full border border-cyan-400/20 bg-white/5 backdrop-blur-sm hover:bg-cyan-400/10 transition duration-300"
              >

                {copy.secondary}

              </a>

            </motion.div>

            {/* FEATURES */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
            >

              <FeatureCard
                icon={<Droplets size={20} />}
                label={copy.features[0]}
              />

              <FeatureCard
                icon={<Wind size={20} />}
                label={copy.features[1]}
              />

              <FeatureCard
                icon={<Smartphone size={20} />}
                label={copy.features[2]}
              />

              <FeatureCard
                icon={<Sparkles size={20} />}
                label={copy.features[3]}
              />

            </motion.div>

          </div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >

            {/* MAIN IMAGE CONTAINER */}
            <div className="relative rounded-[40px] overflow-hidden border border-cyan-400/10 bg-white/5 backdrop-blur-xl shadow-[0_0_80px_rgba(34,211,238,0.08)]">

              {/* IMAGE */}
              <div className="relative aspect-[4/5]">

                <Image
                  src="/images/hero-pet.jpg"
                  alt="Lavau Experience"
                  fill
                  priority
                  className="object-cover"
                />

              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111B]/80 via-transparent to-transparent" />

              {/* FLOATING CARD */}
              <div className="absolute bottom-6 left-6 right-6">

                <div className="rounded-3xl border border-white/10 bg-[#07111B]/70 backdrop-blur-xl p-5">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-sm text-cyan-300 uppercase tracking-[0.25em]">
                        {copy.cardEyebrow}
                      </p>

                      <h3 className="mt-2 text-2xl font-bold">
                        {copy.cardTitle}
                      </h3>

                    </div>

                    <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">

                      <Sparkles className="text-cyan-300" size={28} />

                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* FLOATING MINI CARD */}
            <div className="absolute -top-6 -right-6 hidden lg:block">

              <div className="rounded-3xl border border-cyan-400/20 bg-[#07111B]/80 backdrop-blur-xl px-6 py-5 shadow-[0_0_40px_rgba(34,211,238,0.08)]">

                <p className="text-sm text-slate-400">
                  {copy.timeLabel}
                </p>

                <h4 className="text-3xl font-black text-cyan-300 mt-1">
                  15 min
                </h4>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

function FeatureCard({ icon, label }) {
  return (
    <div className="rounded-2xl border border-cyan-400/10 bg-white/5 backdrop-blur-sm p-4 hover:bg-cyan-400/5 transition duration-300">

      <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-300 mb-3">

        {icon}

      </div>

      <p className="text-sm text-slate-300 leading-snug">
        {label}
      </p>

    </div>
  )
}
