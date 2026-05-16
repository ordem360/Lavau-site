'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Sparkles,
  Building2,
  Fuel,
  Heart
} from 'lucide-react'

export default function CTASection() {
  return (
    <section
      id="contato"
      className="relative py-36 bg-[#0B1724] overflow-hidden"
    >

      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-[-200px] left-[-140px] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="absolute bottom-[-220px] right-[-140px] w-[500px] h-[500px] bg-sky-400/10 rounded-full blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.06),transparent_40%)]" />

      </div>

      <div className="relative container mx-auto px-6">

        {/* MAIN CTA CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[48px] border border-cyan-400/10 bg-gradient-to-br from-cyan-400/10 via-[#07111B]/70 to-transparent backdrop-blur-2xl p-10 md:p-16 shadow-[0_0_100px_rgba(34,211,238,0.08)]"
        >

          {/* GLOW */}
          <div className="absolute top-0 right-0 w-[320px] h-[320px] bg-cyan-400/10 rounded-full blur-3xl" />

          <div className="relative z-10">

            {/* TOP */}
            <div className="max-w-4xl">

              {/* TAG */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 mb-8">

                <Sparkles size={16} className="text-cyan-300" />

                <span className="text-sm tracking-wide text-cyan-200">
                  Solu&ccedil;&atilde;o comercial Lavau
                </span>

              </div>

              {/* TITLE */}
              <h2 className="text-4xl md:text-6xl font-black leading-[1.05] text-white">

                Instale uma Lavau.
                <br />

                <span className="text-cyan-400">
                  Crie uma nova experi&ecirc;ncia pet no seu espa&ccedil;o.
                </span>

              </h2>

              {/* DESCRIPTION */}
              <p className="mt-8 text-xl leading-relaxed text-slate-300 max-w-3xl">

                Uma solu&ccedil;&atilde;o premium para condom&iacute;nios,
                postos e opera&ccedil;&otilde;es urbanas que querem oferecer
                conveni&ecirc;ncia, diferencia&ccedil;&atilde;o e valor real
                para tutores de pets.

              </p>

            </div>

            {/* OPTIONS */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">

              <OptionCard
                icon={<Heart size={24} />}
                title="Para tutores"
                description="Uma experi&ecirc;ncia pr&aacute;tica e confort&aacute;vel para resolver o banho sem bagun&ccedil;a em casa."
                button="Conhe&ccedil;a nossa vis&atilde;o"
                href="/about"
              />

              <OptionCard
                icon={<Building2 size={24} />}
                title="Condom&iacute;nios"
                description="Leve uma nova amenity pet para empreendimentos residenciais modernos."
                button="Falar com comercial"
                href="mailto:comercial@lavau.com.br"
              />

              <OptionCard
                icon={<Fuel size={24} />}
                title="Postos urbanos"
                description="Transforme seu espa&ccedil;o em um hub moderno de conveni&ecirc;ncia pet."
                button="Avaliar parceria"
                href="mailto:parcerias@lavau.com.br"
              />

            </div>

            {/* FINAL CTA */}
            <div className="mt-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

              {/* LEFT */}
              <div>

                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                  Convers&atilde;o comercial
                </p>

                <h3 className="mt-4 text-3xl md:text-5xl font-black leading-tight text-white">

                  Mais conveni&ecirc;ncia.
                  <br />

                  Mais diferencia&ccedil;&atilde;o.
                  <br />

                  Mais valor para o seu espa&ccedil;o.

                </h3>

              </div>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4">

                <a
                  href="mailto:comercial@lavau.com.br"
                  className="group inline-flex items-center justify-center gap-4 px-10 py-5 rounded-full bg-cyan-400 text-black font-black text-lg hover:scale-105 transition duration-300 shadow-[0_0_50px_rgba(34,211,238,0.25)]"
                >

                  Leve a Lavau para seu espa&ccedil;o

                  <ArrowRight
                    size={22}
                    className="group-hover:translate-x-1 transition"
                  />

                </a>

                <a
                  href="/about"
                  className="inline-flex items-center justify-center px-10 py-5 rounded-full border border-cyan-400/20 bg-white/5 backdrop-blur-xl text-white font-bold hover:bg-cyan-400/10 transition duration-300"
                >

                  Conhe&ccedil;a nossa vis&atilde;o

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

      {/* HOVER GLOW */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-400/5 to-transparent" />

      <div className="relative z-10">

        {/* ICON */}
        <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 mb-6">

          {icon}

        </div>

        {/* TITLE */}
        <h3
          className="text-2xl font-bold text-white"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        {/* DESCRIPTION */}
        <p
          className="mt-4 text-slate-400 leading-relaxed min-h-[90px]"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        {/* BUTTON */}
        <a
          href={href}
          className="group/button mt-8 inline-flex items-center gap-2 text-cyan-300 font-semibold hover:text-cyan-200 transition"
        >

          <span dangerouslySetInnerHTML={{ __html: button }} />

          <ArrowRight
            size={16}
            className="group-hover/button:translate-x-1 transition"
          />

        </a>

      </div>

    </motion.div>
  )
}
