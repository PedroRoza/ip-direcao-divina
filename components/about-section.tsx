import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#4E9BA4] mb-6">Quem Somos</h2>
            <p className="text-gray-700 mb-6">
              A Igreja Pentecostal Direção Divina é uma comunidade de fé comprometida com o ensino da Palavra de Deus e
              com os princípios da fé reformada cristã de linha pentecostal.
            </p>
            <p className="text-gray-700 mb-6">
              Nossa missão é levar a mensagem do evangelho a todas as pessoas, promovendo a transformação de vidas
              através do poder do Espírito Santo e do ensino bíblico sólido.
            </p>
            <p className="text-gray-700 mb-8">
              Acreditamos que a Bíblia é a Palavra inspirada de Deus e a base para toda a nossa fé e prática. Buscamos
              viver de acordo com seus ensinamentos e compartilhar seu poder transformador com todos.
            </p>
            <Button asChild className="bg-[#4E9BA4] hover:bg-[#4E9BA4]/90">
              <Link href="/sobre">Saiba Mais</Link>
            </Button>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-[#F2A351]/20 z-10 rounded-lg"></div>
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Congregação da Igreja"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
