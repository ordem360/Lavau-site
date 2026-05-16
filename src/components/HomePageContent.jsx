import Navbar from './Navbar'
import HeroSection from './HeroSection'
import EmotionalSection from './EmotionalSection'
import ProblemSection from './ProblemSection'
import SolutionSection from './SolutionSection'
import CondoSection from './CondoSection'
import GasStationSection from './GasStationSection'
import GallerySection from './GallerySection'
import VideoSection from './VideoSection'
import CTASection from './CTASection'
import Footer from './Footer'

export default function HomePageContent({ locale = 'pt' }) {
  return (
    <main className="bg-[#07111B] text-white overflow-hidden">
      <Navbar locale={locale} />
      <HeroSection locale={locale} />
      <EmotionalSection locale={locale} />
      <ProblemSection locale={locale} />
      <SolutionSection locale={locale} />
      <GallerySection locale={locale} />
      <CondoSection locale={locale} />
      <GasStationSection locale={locale} />
      <VideoSection locale={locale} />
      <CTASection locale={locale} />
      <Footer locale={locale} />
    </main>
  )
}
