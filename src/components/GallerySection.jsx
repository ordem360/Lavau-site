//GallerySection.jsx 

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Camera, Heart, Sparkles } from 'lucide-react'

const galleryImages = [
  {
    src: '/images/gallery/pet-1.jpg',
    alt: 'Mais conforto para quem faz parte da família'
  },
  {
    src: '/images/gallery/pet-2.jpg',
    alt: 'Cuidar também é criar momentos juntos'
  },
  {
    src: '/images/gallery/pet-3.jpg',
    alt: 'Tecnologia, conforto e conexão'
  },
  {
    src: '/images/gallery/pet-4.jpg',
    alt: 'Conveniência pet para a vida moderna'
  },
  {
    src: '/images/gallery/pet-5.jpg',
    alt: 'Pet lifestyle urbano'
  },
  {
    src: '/images/gallery/pet-6.jpg',
    alt: 'Momento de conexão'
  },
  {
    src: '/images/gallery/pet-7.jpg',
    alt: 'Pet feliz após banho'
  },
  {
    src: '/images/gallery/pet-8.jpg',
    alt: 'O cuidado pet evoluiu'
  }
]

export default function GallerySection() {
  return (
    <section className="relative py-32 bg-[#07111B] overflow-hidden">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-[-180px] left-[-120px] w-[420px] h-[420px] bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="absolute bottom-[-200px] right-[-120px] w-[420px] h-[420px] bg-sky-400/10 rounded-full blur-3xl" />

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

            <Camera size={16} className="text-cyan-300" />

            <span className="text-sm tracking-wide text-cyan-200">
              Lifestyle Lavau
            </span>

          </div>

          {/* TITLE */}
          <h2 className="text-4xl md:text-6xl font-black leading-[1.1] text-white">

            Cuidado, conexão
            <br />

            <span className="text-cyan-400">
              e bem-estar urbano.
            </span>

          </h2>

          {/* DESCRIPTION */}
          <p className="mt-8 text-xl leading-relaxed text-slate-300 max-w-3xl mx-auto">

            A Lavau transforma a rotina do banho em uma experiência
            mais leve, confortável e agradável para pets e tutores.

          </p>

        </motion.div>

        {/* GALLERY GRID */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.05
              }}
              className={`
                group relative overflow-hidden rounded-[32px]
                border border-cyan-400/10 bg-white/5 backdrop-blur-xl
                ${index % 3 === 0 ? 'lg:col-span-2' : ''}
              `}
            >

              {/* IMAGE */}
              <div
                className={`
                  relative overflow-hidden
                  ${index % 3 === 0
                    ? 'h-[520px]'
                    : 'h-[420px]'
                  }
                `}
              >

                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111B]/80 via-transparent to-transparent" />

                {/* FLOATING CONTENT */}
                <div className="absolute bottom-6 left-6 right-6">

                  <div className="rounded-2xl border border-white/10 bg-[#07111B]/60 backdrop-blur-xl p-5">

                    <div className="flex items-center gap-3">

                      <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300">

                        <Heart size={18} />

                      </div>

                      <div>

                        <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                          Lavau Experience
                        </p>

                        <h3 className="mt-1 text-lg font-bold text-white">
                          {image.alt}
                        </h3>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* BOTTOM BLOCK */}
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

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

              {/* TEXT */}
              <div className="max-w-3xl">

                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                  Primeira geração Lavau
                </p>

                <h3 className="mt-6 text-3xl md:text-5xl font-black leading-tight text-white">

                  Mais do que um banho.
                  <br />

                  Um novo jeito de cuidar
                  do seu pet.

                </h3>

                <p className="mt-6 text-xl leading-relaxed text-slate-300">

                  Uma experiência urbana moderna criada para
                  tornar o cuidado pet mais simples, agradável
                  e conectado ao estilo de vida atual.

                </p>

              </div>

              {/* ICON BLOCK */}
              <div className="shrink-0">

                <div className="w-28 h-28 rounded-[32px] border border-cyan-400/20 bg-cyan-400/10 flex items-center justify-center text-cyan-300 shadow-[0_0_40px_rgba(34,211,238,0.15)]">

                  <Sparkles size={42} />

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}