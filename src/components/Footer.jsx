//Footer.jsx 

'use client'

import Image from 'next/image'
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  ArrowUpRight
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#07111B] border-t border-cyan-400/10">

      {/* BACKGROUND EFFECT */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-[-180px] right-[-120px] w-[420px] h-[420px] bg-cyan-500/10 rounded-full blur-3xl" />

      </div>

      <div className="relative container mx-auto px-6 py-20">

        {/* TOP */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT */}
          <div>

            {/* LOGO */}
            <div className="flex items-center gap-4">

              <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-cyan-500/10 border border-cyan-400/20">

                {/* TROCAR PELO LOGO FINAL */}
                <Image
                  src="/images/lavau-logo.png"
                  alt="Lavau"
                  fill
                  className="object-contain p-2"
                />

              </div>

              <div>

                <h2 className="text-3xl font-black text-white tracking-wide">

                  <span className="text-cyan-400">
                    LAV
                  </span>

                  <span className="text-cyan-300">
                    AU
                  </span>

                </h2>

                <p className="text-sm uppercase tracking-[0.35em] text-cyan-100/60 mt-1">
                  Self Pet Wash
                </p>

              </div>

            </div>

            {/* DESCRIPTION */}
            <p className="mt-8 text-lg leading-relaxed text-slate-400 max-w-2xl">

              A Lavau nasce para transformar o cuidado pet urbano
              em uma experiência mais prática, moderna e conectada
              ao estilo de vida das grandes cidades.

            </p>

            {/* LOCATION */}
            <div className="mt-10 flex items-center gap-4 text-slate-400">

              <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300">

                <MapPin size={20} />

              </div>

              <div>

                <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                  Base inicial
                </p>

                <p className="mt-1 text-lg">
                  São Paulo • Brasil
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">

            {/* LINKS */}
            <div>

              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                Navegação
              </p>

              <ul className="mt-8 space-y-5">

                <FooterLink label="Sobre a Lavau" href="#sobre" />
                <FooterLink label="Condomínios" href="#condominios" />
                <FooterLink label="Postos Urbanos" href="#postos" />
                <FooterLink label="Vídeos" href="#videos" />
                <FooterLink label="Contato" href="#contato" />

              </ul>

            </div>

            {/* CONTACT */}
            <div>

              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                Conecte-se
              </p>

              <div className="mt-8 space-y-5">

                <SocialLink
                  icon={<Instagram size={18} />}
                  label="@lavau"
                  href="#"
                />

                <SocialLink
                  icon={<Linkedin size={18} />}
                  label="Lavau Brasil"
                  href="#"
                />

                <SocialLink
                  icon={<Mail size={18} />}
                  label="contato@lavau.com.br"
                  href="mailto:contato@lavau.com.br"
                />

              </div>

            </div>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

        {/* BOTTOM */}
        <div className="mt-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">

          {/* LEFT */}
          <div>

            <p className="text-slate-500">
              © 2026 Lavau. Todos os direitos reservados.
            </p>

            <p className="mt-2 text-sm text-slate-600">
              Primeira geração Lavau • Urban Pet Experience
            </p>

          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            <div className="px-5 py-3 rounded-full border border-cyan-400/10 bg-white/5 backdrop-blur-xl">

              <p className="text-sm text-slate-400">
                lavau.com.br
              </p>

            </div>

            <button className="group w-14 h-14 rounded-2xl bg-cyan-400 text-black flex items-center justify-center hover:scale-105 transition duration-300 shadow-[0_0_40px_rgba(34,211,238,0.25)]">

              <ArrowUpRight
                size={22}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
              />

            </button>

          </div>

        </div>

      </div>

    </footer>
  )
}

/* FOOTER LINK */
function FooterLink({ label, href }) {
  return (
    <li>

      <a
        href={href}
        className="group inline-flex items-center gap-3 text-lg text-slate-400 hover:text-cyan-300 transition"
      >

        <span>
          {label}
        </span>

        <ArrowUpRight
          size={16}
          className="opacity-0 group-hover:opacity-100 transition"
        />

      </a>

    </li>
  )
}

/* SOCIAL LINK */
function SocialLink({ icon, label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      className="group flex items-center gap-4 text-slate-400 hover:text-cyan-300 transition"
    >

      <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300">

        {icon}

      </div>

      <span className="text-lg">
        {label}
      </span>

    </a>
  )
}