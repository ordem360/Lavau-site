'use client'

import Image from 'next/image'
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  ArrowUpRight
} from 'lucide-react'

const footerCopy = {
  pt: {
    description: 'A Lavau nasce para transformar o cuidado pet urbano em uma experiência mais prática, moderna e conectada ao estilo de vida das grandes cidades.',
    locationLabel: 'Base inicial',
    location: 'São Paulo • Brasil',
    navLabel: 'Navegação',
    links: [
      ['Sobre a Lavau', '/about'],
      ['Condomínios', '/#condominios'],
      ['Postos Urbanos', '/#postos'],
      ['Vídeos', '/#videos'],
      ['Contato', '/#contato'],
    ],
    connect: 'Conecte-se',
    linkedin: 'Lavau Brasil',
    rights: '© 2026 Lavau. Todos os direitos reservados.',
    note: 'Primeira geração Lavau • Urban Pet Experience',
  },
  en: {
    description: 'Lavau was created to transform urban pet care into a more practical, modern experience connected to the lifestyle of big cities.',
    locationLabel: 'Initial base',
    location: 'São Paulo • Brazil',
    navLabel: 'Navigation',
    links: [
      ['About Lavau', '/en#sobre'],
      ['Condos', '/en#condominios'],
      ['Urban Stations', '/en#postos'],
      ['Videos', '/en#videos'],
      ['Contact', '/en#contato'],
    ],
    connect: 'Connect',
    linkedin: 'Lavau Brazil',
    rights: '© 2026 Lavau. All rights reserved.',
    note: 'First generation Lavau • Urban Pet Experience',
  }
}

export default function Footer({ locale = 'pt' }) {
  const copy = footerCopy[locale] || footerCopy.pt

  return (
    <footer className="relative overflow-hidden bg-[#07111B] border-t border-cyan-400/10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-180px] right-[-120px] w-[420px] h-[420px] bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-cyan-500/10 border border-cyan-400/20">
                <Image
                  src="/images/lavau-logo.png"
                  alt="Lavau"
                  fill
                  className="object-contain p-2"
                />
              </div>

              <div>
                <h2 className="text-3xl font-black text-white tracking-wide">
                  <span className="text-cyan-400">LAV</span>
                  <span className="text-cyan-300">AU</span>
                </h2>

                <p className="text-sm uppercase tracking-[0.35em] text-cyan-100/60 mt-1">
                  Self Pet Wash
                </p>
              </div>
            </div>

            <p className="mt-8 text-lg leading-relaxed text-slate-400 max-w-2xl">
              {copy.description}
            </p>

            <div className="mt-10 flex items-center gap-4 text-slate-400">
              <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300">
                <MapPin size={20} />
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                  {copy.locationLabel}
                </p>
                <p className="mt-1 text-lg">
                  {copy.location}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                {copy.navLabel}
              </p>

              <ul className="mt-8 space-y-5">
                {copy.links.map(([label, href]) => (
                  <FooterLink key={label} label={label} href={href} />
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                {copy.connect}
              </p>

              <div className="mt-8 space-y-5">
                <SocialLink icon={<Instagram size={18} />} label="@lavau" href="#" />
                <SocialLink icon={<Linkedin size={18} />} label={copy.linkedin} href="#" />
                <SocialLink icon={<Mail size={18} />} label="contato@lavau.com.br" href="mailto:contato@lavau.com.br" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

        <div className="mt-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <p className="text-slate-500">
              {copy.rights}
            </p>

            <p className="mt-2 text-sm text-slate-600">
              {copy.note}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="px-5 py-3 rounded-full border border-cyan-400/10 bg-white/5 backdrop-blur-xl">
              <p className="text-sm text-slate-400">
                lavau.com.br
              </p>
            </div>

            <a
              href={locale === 'en' ? '/en' : '/'}
              className="group w-14 h-14 rounded-2xl bg-cyan-400 text-black flex items-center justify-center hover:scale-105 transition duration-300 shadow-[0_0_40px_rgba(34,211,238,0.25)]"
            >
              <ArrowUpRight size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ label, href }) {
  return (
    <li>
      <a href={href} className="group inline-flex items-center gap-3 text-lg text-slate-400 hover:text-cyan-300 transition">
        <span>{label}</span>
        <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition" />
      </a>
    </li>
  )
}

function SocialLink({ icon, label, href }) {
  return (
    <a href={href} target="_blank" className="group flex items-center gap-4 text-slate-400 hover:text-cyan-300 transition">
      <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300">
        {icon}
      </div>

      <span className="text-lg">
        {label}
      </span>
    </a>
  )
}
