import Header from "@/components/header"
import Hero from "@/components/hero"
import WhyInvest from "@/components/why-invest"
import OpportunitiesShowcase from "@/components/opportunities-showcase"
import EconomicActivitiesGallery from "@/components/economic-activities-gallery"
import About from "@/components/about"
import NewsSection from "@/components/news-section"
import ContactCTA from "@/components/contact-cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <WhyInvest />
      <OpportunitiesShowcase />
      <EconomicActivitiesGallery />
      <About />
      <NewsSection />
      <ContactCTA />
      <Footer />
    </main>
  )
}
