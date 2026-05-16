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

const problemCopy = {
  pt: {
    badge: 'A rotina urbana mudou',
    title: 'Dar banho no pet',
    accent: 'não deveria ser complicado.',
    description: 'A vida urbana trouxe praticidade para quase tudo, menos para o momento do banho dos pets.',
    cards: [
      ['Bagunça em casa', 'Banheiros pequenos, pelos espalhados, água no chão e dificuldade para limpar depois.'],
      ['Estrutura inadequada', 'Apartamentos e espaços urbanos raramente possuem área adequada para banho e secagem.'],
      ['Falta de tempo', 'Pet shops tradicionais exigem deslocamento, agendamento e horas de espera.'],
      ['Experiência estressante', 'O banho acaba sendo cansativo tanto para o tutor quanto para o pet.'],
      ['Secagem difícil', 'Secar corretamente o pet em casa é desconfortável e muitas vezes ineficiente.'],
      ['Falta de conveniência', 'Ainda não existe uma solução moderna, rápida e acessível para essa rotina.'],
    ],
    bottomEyebrow: 'Oportunidade',
    bottomTitle: ['O cuidado pet precisa evoluir', 'junto com a vida urbana moderna.'],
    bottomDescription: 'A Lavau nasce para transformar uma tarefa cansativa em uma experiência mais prática, inteligente e agradável para pets e tutores.',
  },
  en: {
    badge: 'Urban routines have changed',
    title: 'Washing your pet',
    accent: 'should not be complicated.',
    description: 'Urban life made almost everything more convenient, except pet washing.',
    cards: [
      ['Mess at home', 'Small bathrooms, scattered fur, water on the floor and cleanup afterwards.'],
      ['Inadequate setup', 'Apartments and urban spaces rarely have a proper area for washing and drying.'],
      ['No time to spare', 'Traditional pet shops require travel, scheduling and long waiting times.'],
      ['Stressful experience', 'Bath time often becomes tiring for both owners and pets.'],
      ['Difficult drying', 'Drying a pet properly at home is uncomfortable and often inefficient.'],
      ['Lack of convenience', 'There is still no modern, fast and accessible solution for this routine.'],
    ],
    bottomEyebrow: 'Opportunity',
    bottomTitle: ['Pet care needs to evolve', 'with modern urban life.'],
    bottomDescription: 'Lavau was born to turn a tiring task into a more practical, smart and pleasant experience for pets and owners.',
  }
}

const icons = [
  <Home size={24} key="home" />,
  <ShowerHead size={24} key="shower" />,
  <Clock3 size={24} key="clock" />,
  <Droplets size={24} key="droplets" />,
  <Wind size={24} key="wind" />,
  <AlertCircle size={24} key="alert" />,
]

export default function ProblemSection({ locale = 'pt' }) {
  const copy = problemCopy[locale] || problemCopy.pt

  return (
    <section className="relative py-32 bg-[#07111B] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-180px] right-[-100px] w-[420px] h-[420px] bg-sky-400/5 rounded-full blur-3xl" />
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
            <AlertCircle size={16} className="text-cyan-300" />
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

          <p className="mt-8 text-xl text-slate-300 leading-relaxed">
            {copy.description}
          </p>
        </motion.div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {copy.cards.map(([title, description], index) => (
            <ProblemCard
              key={title}
              icon={icons[index]}
              title={title}
              description={description}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-24"
        >
          <div className="relative overflow-hidden rounded-[40px] border border-cyan-400/10 bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent backdrop-blur-xl p-10 md:p-14">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-400/10 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                {copy.bottomEyebrow}
              </p>

              <h3 className="mt-6 text-3xl md:text-5xl font-black leading-tight text-white">
                {copy.bottomTitle[0]}
                <br />
                {copy.bottomTitle[1]}
              </h3>

              <p className="mt-8 text-xl leading-relaxed text-slate-300 max-w-3xl">
                {copy.bottomDescription}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ProblemCard({ icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden rounded-[28px] border border-cyan-400/10 bg-white/5 backdrop-blur-xl p-8 hover:bg-cyan-400/5 transition duration-500"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-400/5 to-transparent" />

      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 mb-6">
          {icon}
        </div>

        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-4 text-slate-400 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
