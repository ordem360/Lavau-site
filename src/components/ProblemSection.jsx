//ProblemSection.jsx 

'use client'

import { motion } from 'framer-motion'
import {
  Home,
  ShowerHead,
  Clock3,
  Droplets,
  Wind,
  AlertCircle
} from 'lucide-react'

export default function ProblemSection() {
  return (
    <section className="relative py-32 bg-[#07111B] overflow-hidden">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl" />

        <div className="absolute bottom-[-180px] right-[-100px] w-[420px] h-[420px] bg-sky-400/5 rounded-full blur-3xl" />

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

            <AlertCircle size={16} className="text-cyan-300" />

            <span className="text-sm tracking-wide text-cyan-200">
              A rotina urbana mudou
            </span>

          </div>

          {/* TITLE */}
          <h2 className="text-4xl md:text-6xl font-black leading-[1.1] text-white">

            Dar banho no pet
            <br />

            <span className="text-cyan-400">
              não deveria ser complicado.
            </span>

          </h2>

          {/* DESCRIPTION */}
          <p className="mt-8 text-xl text-slate-300 leading-relaxed">

            A vida urbana trouxe praticidade para quase tudo —
            menos para o momento do banho dos pets.

          </p>

        </motion.div>

        {/* PROBLEMS GRID */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <ProblemCard
            icon={<Home size={24} />}
            title="Bagunça em casa"
            description="Banheiros pequenos, pelos espalhados, água no chão e dificuldade para limpar depois."
          />

          <ProblemCard
            icon={<ShowerHead size={24} />}
            title="Estrutura inadequada"
            description="Apartamentos e espaços urbanos raramente possuem área adequada para banho e secagem."
          />

          <ProblemCard
            icon={<Clock3 size={24} />}
            title="Falta de tempo"
            description="Pet shops tradicionais exigem deslocamento, agendamento e horas de espera."
          />

          <ProblemCard
            icon={<Droplets size={24} />}
            title="Experiência estressante"
            description="O banho acaba sendo cansativo tanto para o tutor quanto para o pet."
          />

          <ProblemCard
            icon={<Wind size={24} />}
            title="Secagem difícil"
            description="Secar corretamente o pet em casa é desconfortável e muitas vezes ineficiente."
          />

          <ProblemCard
            icon={<AlertCircle size={24} />}
            title="Falta de conveniência"
            description="Ainda não existe uma solução moderna, rápida e acessível para essa rotina."
          />

        </div>

        {/* BOTTOM HIGHLIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-24"
        >

          <div className="relative overflow-hidden rounded-[40px] border border-cyan-400/10 bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent backdrop-blur-xl p-10 md:p-14">

            {/* GLOW */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-400/10 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-4xl">

              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                Oportunidade
              </p>

              <h3 className="mt-6 text-3xl md:text-5xl font-black leading-tight text-white">

                O cuidado pet precisa evoluir
                <br />

                junto com a vida urbana moderna.

              </h3>

              <p className="mt-8 text-xl leading-relaxed text-slate-300 max-w-3xl">

                A Lavau nasce para transformar uma tarefa cansativa
                em uma experiência mais prática, inteligente e agradável
                para pets e tutores.

              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

/* PROBLEM CARD */
function ProblemCard({ icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden rounded-[28px] border border-cyan-400/10 bg-white/5 backdrop-blur-xl p-8 hover:bg-cyan-400/5 transition duration-500"
    >

      {/* HOVER GLOW */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-400/5 to-transparent" />

      <div className="relative z-10">

        {/* ICON */}
        <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 mb-6">

          {icon}

        </div>

        {/* TITLE */}
        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="mt-4 text-slate-400 leading-relaxed">

          {description}

        </p>

      </div>

    </motion.div>
  )
}