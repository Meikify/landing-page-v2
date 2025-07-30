"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Sparkles, ArrowRight } from 'lucide-react'
import { useScrollToSection } from '@/hooks/use-scroll-to-section'
import { HERO_WORDS } from '@/lib/constants'
import { CONFIG } from '@/lib/config'
import type { AnalyticsTracker } from '@/types'

interface HeroSectionProps {
  analytics: AnalyticsTracker
  setIsMenuOpen: (open: boolean) => void
}

export const HeroSection: React.FC<HeroSectionProps> = ({ analytics, setIsMenuOpen }) => {
  const { scrollToSection } = useScrollToSection()
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  // Efecto para rotar palabras automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % HERO_WORDS.length)
    }, 3000) // Cambia cada 3 segundos

    return () => clearInterval(interval)
  }, [])

  const handleDiagnosticClick = () => {
    setIsMenuOpen(false)
    scrollToSection("#diagnostico", analytics, { 
      buttonText: "Diagnóstico Gratis", 
      section: "hero" 
    })
  }

  return (
    <section
      id="hero"
      className="relative py-4 flex items-center bg-gradient-to-br from-slate-50 via-white to-cyan-50"
    >
      <div className="container mx-auto px-6">
        {/* Contenido centrado */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles size={16} />
            <span>Revolución en automatización</span>
          </div>
          <div className="space-y-4">
            {/* Título con rotación automática */}
            <div className="relative min-h-[240px] lg:min-h-[300px] flex items-center justify-center">
              <h1 className="text-5xl lg:text-7xl font-black leading-tight text-center">
                <span className="block text-slate-900 mb-4">
                  Haz que tu negocio{" "}
                  <div className="relative inline-block min-w-[280px] lg:min-w-[350px] align-top">
                    {HERO_WORDS.map((word, index) => (
                      <span
                        key={index}
                        className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-transparent bg-clip-text transition-all duration-1000 ${
                          index === currentWordIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                        style={{ backgroundImage: "linear-gradient(to right, #00bce7, #0ea5e9)" }}
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                </span>
                <span className="block text-slate-900 mt-4">solo.</span>
              </h1>
            </div>
            <div className="max-w-2xl mx-auto space-y-6 mt-16">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 leading-tight">
                Con IA y automatización real, no promesas.
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Liberamos a tu equipo de lo repetitivo para que se concentre en lo que realmente importa:
                <strong> crecer, innovar y superar a la competencia</strong>.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center py-6">
              <Button
                size="lg"
                className="px-8 py-4 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                onClick={handleDiagnosticClick}
              >
                <Sparkles className="w-5 h-5" />
                <span>Diagnóstico gratuito</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}