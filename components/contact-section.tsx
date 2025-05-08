import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4E9BA4] mb-4">Entre em Contato</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Estamos à disposição para atender você. Entre em contato conosco ou visite-nos em nosso endereço.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-[#4E9BA4] mb-6">Informações de Contato</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-[#F2A351] mr-4 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Endereço</h4>
                  <p className="text-gray-700">R. Cascavel, 1241 - Guaraituba</p>
                  <p className="text-gray-700">Colombo - PR, 83410-270</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-[#F2A351] mr-4 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Telefone</h4>
                  <p className="text-gray-700">(41) 9883-0887 (WhatsApp)</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-[#F2A351] mr-4 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">E-mail</h4>
                  <p className="text-gray-700">ipdirecaodivina@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-6 w-6 text-[#F2A351] mr-4 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Horários de Culto</h4>
                  <p className="text-gray-700">Terça, quinta e domingo às 19h</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-bold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <Link
                  href="https://facebook.com"
                  className="bg-[#4E9BA4] text-white p-2 rounded-full hover:bg-[#4E9BA4]/80 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="https://instagram.com"
                  className="bg-[#4E9BA4] text-white p-2 rounded-full hover:bg-[#4E9BA4]/80 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="https://youtube.com"
                  className="bg-[#4E9BA4] text-white p-2 rounded-full hover:bg-[#4E9BA4]/80 transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#4E9BA4] mb-6">Envie uma Mensagem</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-medium">
                    Nome
                  </label>
                  <Input id="name" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="font-medium">
                    E-mail
                  </label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="font-medium">
                  Assunto
                </label>
                <Input id="subject" placeholder="Assunto da mensagem" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="font-medium">
                  Mensagem
                </label>
                <Textarea id="message" placeholder="Sua mensagem" rows={5} />
              </div>

              <Button type="submit" className="w-full bg-[#4E9BA4] hover:bg-[#4E9BA4]/90">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
