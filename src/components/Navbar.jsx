'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'

export default function Navbar({
  locale = 'pt',
  ctaLabel,
  ctaHref = 'mailto:comercial@lavau.com.br'
}) {
  const isEnglish = locale === 'en'
  const homeHref = isEnglish ? '/en' : '/'
  const nav = {
    about: isEnglish ? 'About' : 'Sobre',
    condos: isEnglish ? 'Condos' : 'Condomínios',
    stations: isEnglish ? 'Stations' : 'Postos',
    videos: isEnglish ? 'Videos' : 'Vídeos',
    cta: ctaLabel || (isEnglish ? 'Discover Lavau' : 'Conheça a Lavau'),
    logoLabel: isEnglish ? 'Go to Lavau home' : 'Ir para a home da Lavau',
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#07111B]/70 backdrop-blur-2xl border-b border-cyan-400/10" />

      <div className="relative container mx-auto px-6">

        <div className="h-28 flex items-center justify-between pt-2">

          {/* LOGO */}
          <Link
            href={homeHref}
            className="flex items-center"
            aria-label={nav.logoLabel}
          >

            <Image
              src="/images/lavau-logo.png"
              alt="Lavau"
              width={260}
              height={80}
              priority
              className="
                w-[150px]
                sm:w-[180px]
                md:w-[240px]
                h-auto
                object-contain
                drop-shadow-[0_0_25px_rgba(34,211,238,0.15)]
              "
            />

          </Link>

          {/* NAV DESKTOP */}
          <nav className="hidden lg:flex items-center gap-10">

            <Link
              href={isEnglish ? '/en#sobre' : '/about'}
              className="text-slate-300 hover:text-cyan-300 transition text-sm tracking-wide"
            >
              {nav.about}
            </Link>

            <Link
              href={`${homeHref}#condominios`}
              className="text-slate-300 hover:text-cyan-300 transition text-sm tracking-wide"
            >
              {nav.condos}
            </Link>

            <Link
              href={`${homeHref}#postos`}
              className="text-slate-300 hover:text-cyan-300 transition text-sm tracking-wide"
            >
              {nav.stations}
            </Link>

            <Link
              href={`${homeHref}#videos`}
              className="text-slate-300 hover:text-cyan-300 transition text-sm tracking-wide"
            >
              {nav.videos}
            </Link>

          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">

            <LanguageSwitch locale={locale} />

            <a
              href={ctaHref}
              className="
                px-6 py-3 rounded-full
                bg-cyan-400 text-black
                font-semibold text-sm
                hover:scale-105
                transition duration-300
                shadow-[0_0_30px_rgba(34,211,238,0.18)]
              "
            >

              {nav.cta}

            </a>

          </div>

          {/* MOBILE */}
          <div className="lg:hidden flex items-center gap-3">

            <LanguageSwitch locale={locale} />

            <button className="
              w-12 h-12
              rounded-2xl
              border border-cyan-400/10
              bg-white/5
              backdrop-blur-xl
              flex items-center justify-center
              text-cyan-300
            ">

              <Menu size={22} />

            </button>

          </div>

        </div>

      </div>

    </header>
  )
}

function LanguageSwitch({ locale }) {
  const itemClass = 'px-2 sm:px-3 py-2 rounded-full text-[11px] sm:text-xs font-bold tracking-wide transition'
  const activeClass = 'bg-cyan-400 text-black'
  const inactiveClass = 'text-cyan-100/70 hover:text-cyan-200'

  return (
    <div className="flex items-center rounded-full border border-cyan-400/10 bg-white/5 p-1 backdrop-blur-xl">
      <Link
        href="/"
        className={`${itemClass} ${locale === 'pt' ? activeClass : inactiveClass}`}
      >
        🇧🇷 PT
      </Link>

      <Link
        href="/en"
        className={`${itemClass} ${locale === 'en' ? activeClass : inactiveClass}`}
      >
        🇺🇸 EN
      </Link>
    </div>
  )
}
