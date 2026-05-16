'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Building2,
  Check,
  Clock,
  Droplets,
  Heart,
  Home,
  MapPin,
  ShieldCheck,
  Sparkles,
  Smartphone,
  X
} from 'lucide-react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const homePoints = [
  'Bagun&ccedil;a no banheiro, no box ou na lavanderia',
  'Secagem improvisada e desconfort&aacute;vel',
  'Produtos espalhados e tempo perdido',
  'Limpeza da casa depois do banho'
]

const lavauPoints = [
  'Esta&ccedil;&atilde;o urbana pronta para usar',
  'Lavagem e secagem no mesmo lugar',
  'Pagamento digital e acesso simples',
  'Ambiente pensado para conforto e higiene'
]

const experienceItems = [
  {
    icon: <Heart size={20} />,
    title: 'Cuidado com presen&ccedil;a',
    description: 'O tutor participa do banho, mantendo o pet mais seguro, tranquilo e conectado.'
  },
  {
    icon: <ShieldCheck size={20} />,
    title: 'Conforto premium',
    description: 'Uma experi&ecirc;ncia limpa, intuitiva e acolhedora para transformar a rotina.'
  },
  {
    icon: <Sparkles size={20} />,
    title: 'Ritual urbano',
    description: 'Um momento pr&aacute;tico, bonito e leve dentro do ritmo das grandes cidades.'
  }
]

const futureItems = [
  'Condom&iacute;nios residenciais',
  'Postos e hubs urbanos',
  'Rotinas digitais de conveni&ecirc;ncia',
  'Novos pontos de cuidado pet'
]

export default function AboutPage() {
  return (
    <main className="bg-[#07111B] text-white overflow-hidden">
      <Navbar
        ctaLabel="Falar com a Lavau"
        ctaHref="mailto:contato@lavau.com.br"
      />
      <AboutHero />
      <ManifestoSection />
      <ComparisonSection />
      <EmotionalExperienceSection />
      <FutureSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}

function AboutHero() {
  return (
    <section id="sobre" className="relative min-h-screen overflow-hidden bg-[#07111B]">
      <div className="absolute inset-0">
        <Image
          src="/images/about-hero.jpg"
          alt="Lavau Self Pet Wash"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07111B]/80 via-[#07111B]/45 to-[#07111B]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111B]/95 via-[#07111B]/55 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(34,211,238,0.18),transparent_36%)]" />
      </div>

      <div className="relative container mx-auto px-6 pt-36 pb-16 min-h-screen flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-5xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 backdrop-blur-xl mb-8">
            <Sparkles size={16} className="text-cyan-300" />
            <span className="text-sm tracking-wide text-cyan-100">
              Urban Pet Experience
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-[1.02]">
            A nova forma de
            <br />
            cuidar do seu pet
            <br />
            <span className="text-cyan-400">
              na cidade.
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-xl md:text-2xl leading-relaxed text-slate-200">
            A Lavau nasceu para transformar o banho em uma experi&ecirc;ncia
            pr&aacute;tica, emocional e premium, feita para tutores que vivem
            a rotina urbana sem abrir m&atilde;o de cuidado.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:contato@lavau.com.br"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-cyan-400 text-black font-bold hover:scale-105 transition duration-300 shadow-[0_0_45px_rgba(34,211,238,0.25)]"
            >
              Falar com a Lavau
              <ArrowRight size={20} />
            </a>

            <a
              href="mailto:parcerias@lavau.com.br"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-cyan-400/20 bg-white/5 backdrop-blur-xl text-white hover:bg-cyan-400/10 transition duration-300"
            >
              Parcerias estrat&eacute;gicas
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ManifestoSection() {
  return (
    <section id="manifesto" className="relative py-28 md:py-36 bg-[#07111B] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-180px] right-[-120px] w-[460px] h-[460px] bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_34%)]" />
      </div>

      <div className="relative container mx-auto px-6">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
              Manifesto
            </p>
            <h2 className="mt-6 text-4xl md:text-6xl font-black leading-[1.08]">
              Menos tarefa.
              <br />
              Mais ritual.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-2xl md:text-4xl leading-tight text-white">
              Cuidar de um pet nunca foi apenas sobre higiene. &Eacute; sobre
              presen&ccedil;a, v&iacute;nculo, conforto e o pequeno luxo de
              fazer algo bem feito.
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-slate-300 max-w-4xl">
              A Lavau leva esse momento para perto de onde a vida acontece:
              condom&iacute;nios, postos e pontos urbanos. Uma esta&ccedil;&atilde;o
              inteligente, bonita e intuitiva para que o banho deixe de ser
              improviso e se torne experi&ecirc;ncia.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 relative overflow-hidden rounded-[40px] border border-cyan-400/10 bg-white/5"
        >
          <div className="relative h-[420px] md:h-[620px]">
            <Image
              src="/images/about-practicality.jpg"
              alt="Convivencia urbana com Lavau"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07111B]/90 via-[#07111B]/20 to-transparent" />
            <div className="absolute bottom-8 left-6 right-6 md:bottom-12 md:left-12 md:right-12">
              <p className="max-w-2xl text-2xl md:text-4xl font-black leading-tight">
                Uma marca para quem quer resolver a rotina com beleza,
                tecnologia e cuidado real.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ComparisonSection() {
  return (
    <section className="relative py-28 md:py-36 bg-[#0B1724] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-[-220px] left-[-120px] w-[460px] h-[460px] bg-sky-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
            Em casa vs Lavau
          </p>
          <h2 className="mt-6 text-4xl md:text-6xl font-black leading-[1.08]">
            A diferen&ccedil;a entre improvisar
            <br />
            e viver uma experi&ecirc;ncia.
          </h2>
        </motion.div>

        <div className="mt-20 grid lg:grid-cols-2 gap-6 md:gap-8">
          <ComparisonPanel
            icon={<Home size={22} />}
            label="Em casa"
            title="O banho vira opera&ccedil;&atilde;o."
            image="/images/about-urban.jpg"
            items={homePoints}
            negative
          />

          <ComparisonPanel
            icon={<Droplets size={22} />}
            label="Com Lavau"
            title="O cuidado acontece com fluidez."
            image="/images/about-connection.jpg"
            items={lavauPoints}
          />
        </div>
      </div>
    </section>
  )
}

function ComparisonPanel({ icon, label, title, image, items, negative = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-[36px] border border-cyan-400/10 bg-white/5"
    >
      <div className="relative h-[360px] md:h-[520px]">
        <Image
          src={image}
          alt={label}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111B] via-[#07111B]/45 to-transparent" />
      </div>

      <div className="p-7 md:p-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 flex items-center justify-center text-cyan-300">
            {icon}
          </div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            {label}
          </p>
        </div>

        <h3 className="mt-8 text-3xl md:text-4xl font-black leading-tight">
          {title}
        </h3>

        <div className="mt-8 space-y-5">
          {items.map((item) => (
            <div key={item} className="flex gap-4">
              <div className={`mt-1 w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${negative ? 'bg-white/5 text-slate-400 border border-white/10' : 'bg-cyan-400 text-black'}`}>
                {negative ? <X size={15} /> : <Check size={16} />}
              </div>
              <p
                className="text-lg leading-relaxed text-slate-300"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function EmotionalExperienceSection() {
  return (
    <section id="experiencia" className="relative py-28 md:py-36 bg-[#07111B] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-[-120px] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6">
        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-14 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative overflow-hidden rounded-[40px] border border-cyan-400/10 bg-white/5">
              <div className="relative h-[520px] md:h-[720px]">
                <Image
                  src="/images/about-emotional.jpg"
                  alt="Conexao emocional entre tutor e pet"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111B]/75 via-transparent to-transparent" />
              </div>
            </div>

            <div className="absolute -bottom-8 left-5 right-5 md:left-auto md:right-8 md:w-[360px] rounded-[30px] border border-cyan-400/20 bg-[#07111B]/80 backdrop-blur-2xl p-7 shadow-[0_0_60px_rgba(34,211,238,0.14)]">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                Mais conex&atilde;o
              </p>
              <p className="mt-4 text-2xl font-black leading-tight">
                O banho deixa de ser obriga&ccedil;&atilde;o e vira um momento
                de cuidado compartilhado.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
              Experi&ecirc;ncia emocional
            </p>
            <h2 className="mt-6 text-4xl md:text-6xl font-black leading-[1.08]">
              Tecnologia que aproxima,
              <br />
              n&atilde;o que distancia.
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-slate-300">
              A Lavau usa tecnologia para tirar atrito da rotina. O que fica
              &eacute; o que importa: o tutor presente, o pet mais confort&aacute;vel
              e uma experi&ecirc;ncia simples de repetir.
            </p>

            <div className="mt-12 space-y-7">
              {experienceItems.map((item) => (
                <ExperienceLine key={item.title} {...item} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ExperienceLine({ icon, title, description }) {
  return (
    <div className="flex gap-5">
      <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 shrink-0">
        {icon}
      </div>
      <div>
        <h3
          className="text-2xl font-bold"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p
          className="mt-2 text-slate-400 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  )
}

function FutureSection() {
  return (
    <section className="relative py-28 md:py-36 bg-[#0B1724] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/about-future.jpg"
          alt="Futuro da Lavau"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#07111B]/82" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111B] via-[#07111B]/75 to-[#07111B]/25" />
      </div>

      <div className="relative container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
              Vis&atilde;o de futuro
            </p>
            <h2 className="mt-6 text-4xl md:text-6xl font-black leading-[1.08]">
              Uma infraestrutura de cuidado pet para a cidade moderna.
            </h2>
            <p className="mt-8 text-xl leading-relaxed text-slate-300">
              A Lavau quer estar onde a rotina pede praticidade: perto de casa,
              no caminho, em espa&ccedil;os de conveni&ecirc;ncia e em
              comunidades que valorizam bem-estar.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="space-y-5"
          >
            {futureItems.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-5 border-b border-cyan-400/10 pb-5"
              >
                <span className="text-4xl font-black text-cyan-400/30">
                  0{index + 1}
                </span>
                <p
                  className="text-2xl md:text-3xl font-bold"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="relative py-28 md:py-36 bg-[#07111B] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-200px] right-[-120px] w-[520px] h-[520px] bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-220px] left-[-160px] w-[520px] h-[520px] bg-sky-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[44px] border border-cyan-400/10 bg-gradient-to-br from-cyan-400/10 via-white/[0.03] to-transparent p-8 md:p-14 lg:p-16"
        >
          <div className="grid lg:grid-cols-[1fr_0.85fr] gap-12 items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
                Lavau Self Pet Wash
              </p>
              <h2 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-black leading-[1.04]">
                O futuro do banho pet
                <br />
                est&aacute; mais perto
                <br />
                do que parece.
              </h2>
              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-slate-300">
                Uma experi&ecirc;ncia premium, urbana e inteligente para
                tutores, condom&iacute;nios e parceiros que querem oferecer
                mais valor &agrave; rotina pet.
              </p>
            </div>

            <div className="space-y-5">
              <CTAFeature icon={<MapPin size={20} />} text="Perto da rotina urbana" />
              <CTAFeature icon={<Smartphone size={20} />} text="Acesso simples e digital" />
              <CTAFeature icon={<Clock size={20} />} text="Cuidado r&aacute;pido e conveniente" />
              <CTAFeature icon={<Building2 size={20} />} text="Pensado para novos espa&ccedil;os" />

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:contato@lavau.com.br"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-3 px-9 py-5 rounded-full bg-cyan-400 text-black font-black text-lg hover:scale-105 transition duration-300 shadow-[0_0_50px_rgba(34,211,238,0.25)]"
                >
                  Falar com a Lavau
                  <ArrowRight size={22} />
                </a>

                <a
                  href="mailto:parcerias@lavau.com.br"
                  className="inline-flex w-full sm:w-auto items-center justify-center px-9 py-5 rounded-full border border-cyan-400/20 bg-white/5 backdrop-blur-xl text-white font-bold hover:bg-cyan-400/10 transition duration-300"
                >
                  Parcerias estrat&eacute;gicas
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function CTAFeature({ icon, text }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 shrink-0">
        {icon}
      </div>
      <p
        className="text-lg text-slate-300"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  )
}
