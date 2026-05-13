'use client'

import Image from 'next/image'
import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#07111B]/70 backdrop-blur-2xl border-b border-cyan-400/10" />

      <div className="relative container mx-auto px-6">

        <div className="h-28 flex items-center justify-between pt-2">

          {/* LOGO */}
          <div className="flex items-center">

            <Image
              src="/images/lavau-logo.png"
              alt="Lavau"
              width={260}
              height={80}
              priority
              className="
                w-[180px]
                md:w-[240px]
                h-auto
                object-contain
                drop-shadow-[0_0_25px_rgba(34,211,238,0.15)]
              "
            />

          </div>

          {/* NAV DESKTOP */}
          <nav className="hidden lg:flex items-center gap-10">

            <a
              href="#sobre"
              className="text-slate-300 hover:text-cyan-300 transition text-sm tracking-wide"
            >
              Sobre
            </a>

            <a
              href="#condominios"
              className="text-slate-300 hover:text-cyan-300 transition text-sm tracking-wide"
            >
              Condomínios
            </a>

            <a
              href="#postos"
              className="text-slate-300 hover:text-cyan-300 transition text-sm tracking-wide"
            >
              Postos
            </a>

            <a
              href="#videos"
              className="text-slate-300 hover:text-cyan-300 transition text-sm tracking-wide"
            >
              Vídeos
            </a>

          </nav>

          {/* CTA */}
          <div className="hidden lg:flex">

            <button className="
              px-6 py-3 rounded-full
              bg-cyan-400 text-black
              font-semibold text-sm
              hover:scale-105
              transition duration-300
              shadow-[0_0_30px_rgba(34,211,238,0.18)]
            ">

              Conheça a Lavau

            </button>

          </div>

          {/* MOBILE */}
          <button className="
            lg:hidden
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

    </header>
  )
}