import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import EventsSection from "@/components/events-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center bg-[#4E9BA4] text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-[#4E9BA4]/90 to-[#4E9BA4]/70 z-0"></div>
        <div className="container relative z-10 px-4 py-32 md:py-40 flex flex-col items-center text-center">
          <div className="mb-8 animate-fade-in">
            <Image
              src="/images/logo.png"
              alt="Igreja Pentecostal Direção Divina"
              width={200}
              height={200}
              className="mx-auto"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">Igreja Pentecostal Direção Divina</h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-8 animate-fade-in-up delay-100">
            "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê
            não pereça, mas tenha a vida eterna."
          </p>
          <p className="text-lg mb-10 animate-fade-in-up delay-200">João 3:16</p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
            <Button asChild size="lg" className="bg-white text-[#4E9BA4] hover:bg-white/90">
              <Link href="/sobre">Conheça Nossa Igreja</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white text-[#4E9BA4] hover:bg-[#4E9BA4] hover:text-white border border-white transition-colors"
            >
              <Link href="/cultos">Horários de Culto</Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button variant="ghost" size="icon" className="text-white rounded-full" aria-label="Rolar para baixo">
            <ChevronDown size={24} />
          </Button>
        </div>
      </section>

      <AboutSection />
      <ServicesSection />
      <EventsSection />
      <ContactSection />
    </>
  )
}
