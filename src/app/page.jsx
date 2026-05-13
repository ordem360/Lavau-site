import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import EmotionalSection from '../components/EmotionalSection'
import ProblemSection from '../components/ProblemSection'
import SolutionSection from '../components/SolutionSection'
import CondoSection from '../components/CondoSection'
import GasStationSection from '../components/GasStationSection'
import GallerySection from '../components/GallerySection'
import VideoSection from '../components/VideoSection'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <main className="bg-[#07111B] text-white overflow-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <HeroSection />

      {/* EXPERIÊNCIA / EMOÇÃO */}
      <EmotionalSection />

      {/* PROBLEMAS */}
      <ProblemSection />

      {/* SOLUÇÃO LAVAU */}
      <SolutionSection />

      {/* GALERIA PETS */}
      <GallerySection />

      {/* CONDOMÍNIOS */}
      <CondoSection />

      {/* POSTOS DE GASOLINA */}
      <GasStationSection />

      {/* VÍDEOS */}
      <VideoSection />

      {/* CTA FINAL */}
      <CTASection />

      {/* FOOTER */}
      <Footer />

    </main>
  )
}