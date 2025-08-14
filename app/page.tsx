import { Hero } from "@/components/hero"
import { Header } from "@/components/header"
import { CollaborativeSection } from "@/components/collaborative-section"
import { DifferentiatorSection } from "@/components/differentiator-section"
import { TechnologyStack } from "@/components/technology-stack"
import { ImpactNumbers } from "@/components/impact-numbers"
import { ServicesSection } from "@/components/services-section"
import { ClientsSection } from "@/components/clients-section"
import { EmpoweringSection } from "@/components/empowering-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <CollaborativeSection />
      <DifferentiatorSection />
      <TechnologyStack />
      <ImpactNumbers />
      <ServicesSection />
      <ClientsSection />
      <EmpoweringSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactForm />
      <Footer />
    </main>
  )
}
