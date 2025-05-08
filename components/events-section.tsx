import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays } from "lucide-react"

export default function EventsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4E9BA4] mb-4">Próximos Eventos</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Participe de nossos eventos especiais e cresça na fé junto com nossa comunidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Conferência de Jovens"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center text-[#F2A351] mb-3">
                <CalendarDays className="h-5 w-5 mr-2" />
                <span>15 de Junho, 2025</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#4E9BA4]">Conferência de Jovens</h3>
              <p className="text-gray-700 mb-4">
                Um evento especial para jovens com louvor, pregação e atividades dinâmicas.
              </p>
              <Button
                asChild
                variant="outline"
                className="w-full border-[#4E9BA4] text-[#4E9BA4] hover:bg-[#4E9BA4] hover:text-white"
              >
                <Link href="/eventos/conferencia-jovens">Saiba Mais</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Retiro Espiritual"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center text-[#F2A351] mb-3">
                <CalendarDays className="h-5 w-5 mr-2" />
                <span>22-24 de Julho, 2025</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#4E9BA4]">Retiro Espiritual</h3>
              <p className="text-gray-700 mb-4">
                Três dias de comunhão, oração e renovação espiritual em contato com a natureza.
              </p>
              <Button
                asChild
                variant="outline"
                className="w-full border-[#4E9BA4] text-[#4E9BA4] hover:bg-[#4E9BA4] hover:text-white"
              >
                <Link href="/eventos/retiro-espiritual">Saiba Mais</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Seminário Bíblico"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center text-[#F2A351] mb-3">
                <CalendarDays className="h-5 w-5 mr-2" />
                <span>10 de Agosto, 2025</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#4E9BA4]">Seminário Bíblico</h3>
              <p className="text-gray-700 mb-4">
                Um dia inteiro dedicado ao estudo aprofundado das Escrituras com professores convidados.
              </p>
              <Button
                asChild
                variant="outline"
                className="w-full border-[#4E9BA4] text-[#4E9BA4] hover:bg-[#4E9BA4] hover:text-white"
              >
                <Link href="/eventos/seminario-biblico">Saiba Mais</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-[#4E9BA4] hover:bg-[#4E9BA4]/90">
            <Link href="/eventos">Ver Todos os Eventos</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
