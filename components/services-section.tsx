import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookIcon as Bible, Music, Users } from "lucide-react"

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4E9BA4] mb-4">Nossos Cultos</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Venha participar de nossos cultos e experimentar a presença de Deus através da adoração, da Palavra e da
            comunhão.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-t-4 border-t-[#4E9BA4]">
            <CardHeader className="pb-2">
              <Bible className="h-8 w-8 text-[#4E9BA4] mb-2" />
              <CardTitle>Culto de Terça-feira</CardTitle>
              <CardDescription>Terças-feiras às 19:00</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Estudo bíblico aprofundado para crescimento espiritual e conhecimento da Palavra de Deus.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-[#F2A351]">
            <CardHeader className="pb-2">
              <Music className="h-8 w-8 text-[#F2A351] mb-2" />
              <CardTitle>Culto de Quinta-feira</CardTitle>
              <CardDescription>Quintas-feiras às 19:00</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">Momento de adoração e louvor a Deus com músicas e cânticos espirituais.</p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-[#4E9BA4]">
            <CardHeader className="pb-2">
              <Users className="h-8 w-8 text-[#4E9BA4] mb-2" />
              <CardTitle>Culto de Domingo</CardTitle>
              <CardDescription>Domingos às 19:00</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">Nosso principal culto semanal com pregação da Palavra, louvor e comunhão.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
