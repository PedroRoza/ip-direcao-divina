"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHome, setIsHome] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    const checkIfHome = () => {
      setIsHome(window.location.pathname === "/")
    }

    window.addEventListener("scroll", handleScroll)
    checkIfHome()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", {
        "bg-transparent": !isScrolled && isHome,
        "bg-white shadow-md": isScrolled || !isHome,
        "text-white": !isScrolled && isHome,
        "text-[#4E9BA4]": isScrolled || !isHome,
      })}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="Igreja Pentecostal Direção Divina" width={50} height={50} />
            <span className="font-bold text-lg hidden md:inline">IPDD</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={cn("font-medium hover:text-[#F2A351] transition-colors", {
                "text-white": !isScrolled && isHome,
              })}
            >
              Início
            </Link>
            <Link
              href="/sobre"
              className={cn("font-medium hover:text-[#F2A351] transition-colors", {
                "text-white": !isScrolled && isHome,
              })}
            >
              Sobre
            </Link>
            <Link
              href="/cultos"
              className={cn("font-medium hover:text-[#F2A351] transition-colors", {
                "text-white": !isScrolled && isHome,
              })}
            >
              Cultos
            </Link>
            <Link
              href="/ministerios"
              className={cn("font-medium hover:text-[#F2A351] transition-colors", {
                "text-white": !isScrolled && isHome,
              })}
            >
              Ministérios
            </Link>
            <Link
              href="/eventos"
              className={cn("font-medium hover:text-[#F2A351] transition-colors", {
                "text-white": !isScrolled && isHome,
              })}
            >
              Eventos
            </Link>
            <Link
              href="/contato"
              className={cn("font-medium hover:text-[#F2A351] transition-colors", {
                "text-white": !isScrolled && isHome,
              })}
            >
              Contato
            </Link>
          </nav>

          <Button
            variant={!isScrolled && isHome ? "outline" : "default"}
            className={cn("hidden md:flex", {
              "border-white text-white hover:bg-white/10": !isScrolled && isHome,
              "bg-[#4E9BA4] text-white hover:bg-[#4E9BA4]/90": isScrolled || !isHome,
            })}
          >
            <Link href="/doacao">Contribuir</Link>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white text-[#4E9BA4] p-4 shadow-lg">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="font-medium py-2 hover:text-[#F2A351] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Início
            </Link>
            <Link
              href="/sobre"
              className="font-medium py-2 hover:text-[#F2A351] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Sobre
            </Link>
            <Link
              href="/cultos"
              className="font-medium py-2 hover:text-[#F2A351] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Cultos
            </Link>
            <Link
              href="/ministerios"
              className="font-medium py-2 hover:text-[#F2A351] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Ministérios
            </Link>
            <Link
              href="/eventos"
              className="font-medium py-2 hover:text-[#F2A351] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Eventos
            </Link>
            <Link
              href="/contato"
              className="font-medium py-2 hover:text-[#F2A351] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contato
            </Link>
            <Button className="bg-[#4E9BA4] text-white hover:bg-[#4E9BA4]/90 w-full mt-2">
              <Link href="/doacao" onClick={() => setIsOpen(false)}>
                Contribuir
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
