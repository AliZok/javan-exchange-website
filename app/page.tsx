import { Header } from "@/components/header"
import { DateTimeDisplay } from "@/components/date-time-display"
import { HeroSection } from "@/components/hero-section"
import { CurrencyRates } from "@/components/currency-rates"
import { CurrencyConverter } from "@/components/currency-converter"
import { ServicesSection } from "@/components/services-section"
import { TelegramSection } from "@/components/telegram-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <DateTimeDisplay />
      <Header />
      <main>
        <HeroSection />
        <CurrencyRates />
        <CurrencyConverter />
        <ServicesSection />
        <TelegramSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
