//EmotionalSection.jsx 

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Heart, ShieldCheck, Sparkles } from 'lucide-react'

export default function EmotionalSection() {
  return (
    <section className="relative py-32 bg-[#0B1724] overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-0 right-[-120px] w-[420px] h-[420px] bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="absolute bottom-[-150px] left-[-120px] w-[380px] h-[380px] bg-sky-400/10 rounded-full blur-3xl" />

      </div>

      <div className="relative container mx-auto px-6">

        {/* TOP CONTENT */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            {/* TAG */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 mb-8">

              <Heart size={16} className="text-cyan-300" />

              <span className="text-sm tracking-wide text-cyan-200">
                Muito além do banho
              </span>

            </div>

            {/* TITLE */}
            <h2 className="text-4xl md:text-6xl font-black leading-[1.1] text-white">

              Um momento de
              <br />

              <span className="text-cyan-400">
                cuidado e conexão
              </span>

              <br />

              com o seu pet.

            </h2>

            {/* DESCRIPTION */}
            <p className="mt-8 text-xl leading-relaxed text-slate-300 max-w-2xl">

              A Lavau foi criada para transformar uma tarefa comum em uma
              experiência mais leve, confortável e agradável para pets
              e tutores.

            </p>

            <p className="mt-6 text-lg leading-relaxed text-slate-400 max-w-2xl">

              Sem bagunça em casa. Sem estresse. Sem correria.
              Apenas um espaço pensado para o bem-estar animal
              e para a praticidade da vida urbana moderna.

            </p>

            {/* FEATURES */}
            <div className="mt-12 space-y-5">

              <Feature
                icon={<Heart size={18} />}
                title="Mais conexão"
                description="Um momento de cuidado entre você e seu pet."
              />

              <Feature
                icon={<ShieldCheck size={18} />}
                title="Conforto de verdade"
                description="Um espaço pensado para bem-estar, limpeza e tranquilidade."
              />

              <Feature
                icon={<Sparkles size={18} />}
                title="Experiência moderna"
                description="Tecnologia, praticidade e conforto em um só lugar."
              />

            </div>

          </motion.div>

          {/* RIGHT IMAGES */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >

            <div className="grid grid-cols-2 gap-6">

              {/* IMAGE 1 */}
              <div className="relative rounded-[32px] overflow-hidden h-[500px] border border-cyan-400/10 bg-white/5">

                <Image
                  src="/images/emotional-1.jpg"
                  alt="Tutor com pet"
                  fill
                  className="object-cover"
                />

              </div>

              {/* RIGHT COLUMN */}
              <div className="flex flex-col gap-6">

                {/* IMAGE 2 */}
                <div className="relative rounded-[32px] overflow-hidden h-[240px] border border-cyan-400/10 bg-white/5">

                  <Image
                    src="/images/emotional-2.jpg"
                    alt="Pet feliz"
                    fill
                    className="object-cover"
                  />

                </div>

                {/* CARD */}
                <div className="rounded-[32px] border border-cyan-400/10 bg-gradient-to-br from-cyan-400/10 to-transparent backdrop-blur-xl p-8 flex-1 flex flex-col justify-between">

                  <div>

                    <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                      Lavau Experience
                    </p>

                    <h3 className="mt-5 text-3xl font-black leading-tight text-white">

                      Cuidado urbano
                      <br />

                      com mais carinho
                      <br />

                      e menos esforço.

                    </h3>

                  </div>

                  <p className="mt-8 text-slate-300 leading-relaxed">

                    Um novo jeito de cuidar do seu pet em condomínios,
                    postos e espaços urbanos inteligentes.

                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

/* FEATURE */
function Feature({ icon, title, description }) {
  return (
    <div className="flex gap-4">

      <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 shrink-0">

        {icon}

      </div>

      <div>

        <h4 className="text-lg font-bold text-white">
          {title}
        </h4>

        <p className="mt-1 text-slate-400 leading-relaxed">
          {description}
        </p>

      </div>

    </div>
  )
}